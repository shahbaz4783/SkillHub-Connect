'use server';

import { signUpSchema } from '@/validators/auth.schema';
import { hash } from 'bcryptjs';
import { prisma } from '@/lib/prisma';
import { getUserByEmail } from '@/data/user';
import { generateVerificationToken } from '@/lib/tokens';
import { sendVerificationMail } from '@/lib/mail';
import crypto from 'crypto';

interface SignUpFormState {
  message: {
    error?: string;
    success?: string;
  };
  fields?: string;
}

export const signUpAction = async (
  formState: SignUpFormState,
  formData: FormData,
): Promise<SignUpFormState> => {
  const formDataObj = Object.fromEntries(formData);

  const validateFields = signUpSchema.safeParse(formDataObj);
  if (!validateFields.success) {
    return {
      message: {
        error:
          'Please ensure all fields are filled out correctly and try again.',
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
        error:
          'The email address is already associated with an account. Please use a different email.',
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
      success:
        'A confirmation email has been sent! Please check your inbox to verify your account.',
    },
  };
};
