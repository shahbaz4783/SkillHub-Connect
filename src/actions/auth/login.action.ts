'use server';
import { signIn } from '@/auth';
import { authMessages } from '@/constants/messages';
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

export const loginAction = async (
  formState: FormState,
  formData: FormData,
): Promise<FormState> => {
  const formDataObj = Object.fromEntries(formData);

  const validateFields = loginSchema.safeParse(formDataObj);
  if (!validateFields.success)
    return {
      message: {
        error: authMessages.validation.invalidFields,
      },
    };

  const { email, password, otp } = validateFields.data;

  const existingUser = await getUserByEmail(email);

  console.log({ existingUser });
  console.log({ email, password, otp });

  if (!existingUser || !existingUser.email || !existingUser.password) {
    return {
      message: {
        error: authMessages.error.emailNotRegistered,
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
        success: authMessages.success.confirmationEmailSent,
      },
    };
  }

  if (existingUser.emailVerified) {
    if (otp) {
      const loginOTP = parseInt(otp.toString());

      const verificationOTP = await getVerificationOTPbyEmail(
        existingUser.email,
      );

      if (!verificationOTP || verificationOTP.otp !== loginOTP)
        return { message: { error: authMessages.error.invalidOTP } };

      const hasExpired = new Date(verificationOTP.expires) < new Date();
      if (hasExpired)
        return {
          message: {
            error: authMessages.error.otpExpired,
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
          success: authMessages.success.otpSent,
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
              error: authMessages.error.invalidCredentials,
            },
          };

        default:
          return {
            message: {
              error: authMessages.error.somethingWentWrong,
            },
          };
      }
    }
    throw error;
  }
  return { message: { success: authMessages.success.loginSuccess } };
};
