'use server';
import { signIn } from '@/auth';
import { getUserByEmail } from '@/data/user';
import { getVerificationOTPbyEmail } from '@/data/verification-token';
import { sendOTPforLogin, sendVerificationMail } from '@/lib/mail';
import {
  generateVerificationOTP,
  generateVerificationToken,
} from '@/lib/tokens';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { loginSchema } from '@/validators/auth.schema';
import { AuthError } from 'next-auth';

interface LoginFormState {
  message: {
    error?: string;
    success?: string;
  };
  otpReceive?: boolean;
}

export const loginAction = async (
  formState: LoginFormState,
  formData: FormData,
): Promise<LoginFormState> => {
  // const email = formData.get('email') as string;
  // const password = formData.get('password') as string;

  const formDataObj = Object.fromEntries(formData);

  // const otp = formData.get('otp');

  const validateFields = loginSchema.safeParse(formDataObj);

  if (!validateFields.success)
    return {
      message: {
        error:
          'Please ensure all fields are filled out correctly and try again.',
      },
    };

  const { email, password, otp } = validateFields.data;

  const existingUser = await getUserByEmail(email);

  console.log({ existingUser });
  console.log({ email, password, otp });

  if (!existingUser || !existingUser.email || !existingUser.password) {
    return {
      message: {
        error: 'The email address is not registered. Please sign up first.',
      },
    };
  }

  if (!existingUser.emailVerified) {
    const verificationToken = await generateVerificationToken(
      existingUser.email,
    );
    await sendVerificationMail(
      verificationToken.token,
      verificationToken.email,
      existingUser?.name as string,
    );
    return {
      message: {
        success:
          'A confirmation email has been sent. Please verify your email to proceed.',
      },
    };
  }

  if (existingUser.emailVerified) {
    if (otp) {
      const loginOTP = parseInt(otp.toString());

      const verificationOTP = await getVerificationOTPbyEmail(
        existingUser.email,
      );

      if (!verificationOTP)
        return { message: { error: 'Invalid OTP. Please try again.' } };
      if (verificationOTP.otp !== loginOTP) {
        return { message: { error: 'Invalid OTP. Please try again.' } };
      }

      const hasExpired = new Date(verificationOTP.expires) < new Date();
      if (hasExpired)
        return {
          message: {
            error: 'The OTP has expired. Please request a new one.',
          },
        };
    } else {
      const verificationOTP = await generateVerificationOTP(email);
      await sendOTPforLogin(
        verificationOTP.otp,
        verificationOTP.email,
        existingUser?.name as string,
      );

      return {
        message: {
          success:
            'An OTP has been sent to your email. Please check your email and enter the OTP.',
        },
        otpReceive: true,
      };
    }
  }

  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return {
            message: {
              error: 'The email or password is incorrect. Please try again.',
            },
          };

        default:
          return {
            message: {
              error: 'An unexpected error occurred. Please try again later.',
            },
          };
      }
    }
    throw error;
  }
  return { message: { success: 'You have successfully logged in!' } };
};
