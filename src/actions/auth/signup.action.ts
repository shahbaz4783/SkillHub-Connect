'use server';

import { signUpSchema } from '@/validators/auth.schema';
import { hash } from 'bcryptjs';
import { prisma } from '@/lib/prisma';
import { getUserByEmail } from '@/data/user';
import { generateVerificationToken } from '@/lib/tokens';
import { sendVerificationMail } from '@/lib/mail';
import crypto from 'crypto';
import { authMessages } from '@/constants/messages';

export const signUpAction = async (
  formState: FormState,
  formData: FormData,
): Promise<FormState> => {
  const formDataObj = Object.fromEntries(formData);

  const validateFields = signUpSchema.safeParse(formDataObj);
  if (!validateFields.success) {
    return {
      message: {
        error: authMessages.validation.invalidFields,
      },
    };
  }

  const { name, email, password } = validateFields.data;

  const hashedPassword = await hash(password, 10);

  // Generate random username
  const randomDigit = crypto.randomInt(1000000, 10000000);
  const mailID = email.split('@')[0];
  const username = mailID + randomDigit;
  // ----

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return {
      message: {
        error: authMessages.error.emailAlreadyUsed,
      },
    };
  }

  await prisma.user.create({
    data: {
      name,
      username,
      email,
      password: hashedPassword,
    },
  });

  const verificationToken = await generateVerificationToken(email);
  await sendVerificationMail(
    verificationToken.token,
    verificationToken.email,
    name,
  );

  return {
    message: {
      success: authMessages.success.confirmationEmailSent,
    },
  };
};
