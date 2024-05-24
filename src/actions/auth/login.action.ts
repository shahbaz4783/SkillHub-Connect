'use server';
import { signIn } from '@/auth';
import { getUserByEmail } from '@/data/user';
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
}

export const loginAction = async (
  formState: LoginFormState,
  formData: FormData,
): Promise<LoginFormState> => {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const validateFields = loginSchema.safeParse({
    email,
    password,
  });

  if (!validateFields) return { message: { error: 'Invalid Fields' } };

  const existingUser = await getUserByEmail(email);

  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { message: { error: 'Email doesnt exist!' } };
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
    return { message: { success: 'Confirmation email sent' } };
  }

  if (existingUser.emailVerified) {
    const verificationOTP = await generateVerificationOTP(email);
    await sendOTPforLogin(
      verificationOTP.otp,
      verificationOTP.email,
      existingUser?.name as string,
    );
    return {message: {success: 'OTP Sent!'}}
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
          return { message: { error: 'Invalid credentials' } };

        default:
          return { message: { error: 'Something went wrong' } };
      }
    }
    throw error;
  }
  return { message: { success: 'Email sent successfully!' } };
};
