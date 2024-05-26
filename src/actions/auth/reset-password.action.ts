'use server';

import * as z from 'zod';
import { newPasswordSchema, resetSchema } from '@/validators/auth.schema';
import { getUserByEmail } from '@/data/user';
import { generateVerificationToken } from '@/lib/tokens';
import { sendResetPasswordMail } from '@/lib/mail';
import { getVerificationTokenByToken } from '@/data/verification-token';
import { hash } from 'bcryptjs';
import { prisma } from '@/lib/prisma';
import { authMessages } from '@/constants/messages';

export const resetPasswordAction = async (
  formState: FormState,
  formData: FormData,
): Promise<FormState> => {
  const validateFields = resetSchema.safeParse(Object.fromEntries(formData));
  if (!validateFields.success)
    return {
      message: {
        error: authMessages.validation.invalidEmail,
      },
    };

  const { email } = validateFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser)
    return {
      message: {
        error: authMessages.error.emailNotRegistered,
      },
    };

  const verificationToken = await generateVerificationToken(email);

  await sendResetPasswordMail(
    verificationToken.token,
    verificationToken.email,
    existingUser.name as string,
  );

  return {
    message: {
      success: authMessages.success.resetEmailSent,
    },
  };
};

export const newPasswordAction = async (
  values: z.infer<typeof newPasswordSchema>,
  token: string | null,
) => {
  if (!token) return { error: 'Password reset token not found' };

  const validateFields = newPasswordSchema.safeParse(values);
  if (!validateFields.success) return { error: 'Invalid Fields!' };

  const { password } = validateFields.data;

  const existingToken = await getVerificationTokenByToken(token);
  if (!existingToken) return { error: 'Invalid Token' };

  const hasExpired = new Date(existingToken.expires) < new Date();
  if (hasExpired) return { error: 'Token is expired' };

  const existingUser = await getUserByEmail(existingToken.email);
  if (!existingUser) return { error: 'Email does not exists' };

  const hashedPassword = await hash(password, 10);

  await prisma.user.update({
    where: { id: existingUser.id },
    data: { password: hashedPassword },
  });

  await prisma.verificationToken.delete({
    where: { id: existingToken.id },
  });

  return { success: 'New password created successfully' };
};
