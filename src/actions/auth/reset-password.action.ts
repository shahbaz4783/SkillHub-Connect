'use server';

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
  formState: FormState,
  formData: FormData,
): Promise<FormState> => {
  const validateFields = newPasswordSchema.safeParse(
    Object.fromEntries(formData),
  );
  if (!validateFields.success)
    return { message: { error: authMessages.validation.invalidFields } };

  const { password, token } = validateFields.data;

  if (!token) return { message: { error: authMessages.error.tokenNotFound } };

  const existingToken = await getVerificationTokenByToken(token);
  if (!existingToken)
    return { message: { error: authMessages.error.tokenNotFound } };

  const hasExpired = new Date(existingToken.expires) < new Date();
  if (hasExpired)
    return { message: { error: authMessages.error.tokenExpired } };

  const existingUser = await getUserByEmail(existingToken.email);
  if (!existingUser)
    return { message: { error: authMessages.error.userNotFound } };

  const hashedPassword = await hash(password, 10);

  await prisma.user.update({
    where: { id: existingUser.id },
    data: { password: hashedPassword },
  });

  await prisma.verificationToken.delete({
    where: { id: existingToken.id },
  });

  return { message: { success: authMessages.success.passwordUpdated } };
};
