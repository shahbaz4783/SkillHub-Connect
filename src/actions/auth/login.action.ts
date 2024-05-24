'use server';
import { signIn } from '@/auth';
import { getUserByEmail } from '@/data/user';
import { sendVerificationMail } from '@/lib/mail';
import { generateVerificationToken } from '@/lib/tokens';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { loginSchema } from '@/validators/auth.schema';
import { AuthError } from 'next-auth';
import * as z from 'zod';

interface LoginFormState {
  error?: {};
  success?: {};
}

export const loginAction = async (
  formState: LoginFormState,
  formData: FormData,
): Promise<LoginFormState> => {

  const validateFields = loginSchema.safeParse(formData);

  if (!validateFields.success) return { error: 'Invalid Fields!' };

  const { email, password } = validateFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: 'Email doesnt exist!' };
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
    return { success: 'Confirmation email sent' };
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
          return { error: 'Invalid credentials' };

        default:
          return { error: 'Something went wrong' };
      }
    }
    throw error;
  }
  return { success: 'Email sent successfully!' };
};
