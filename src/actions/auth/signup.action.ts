'use server';
import { signUpSchema } from '@/validators/auth.schema';
import { hash } from 'bcryptjs';
import * as z from 'zod';
import { prisma } from '@/lib/prisma';
import { getUserByEmail } from '@/data/user';
import { generateVerificationToken } from '@/lib/tokens';
import { transporter } from '@/lib/mail';

export const signUpAction = async (values: z.infer<typeof signUpSchema>) => {
  const validateFields = signUpSchema.safeParse(values);
  if (!validateFields.success) {
    return { error: 'Invalid Fields!' };
  }

  const { name, email, password } = validateFields.data;
  const hashedPassword = await hash(password, 10);

  // Generate random username
  const randomDigit = Math.floor(Math.random() * 100000);
  const mailID = email.split('@')[0];
  const username = mailID + randomDigit;

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: 'Email is already in use' };
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

  await transporter.sendMail({
    to: verificationToken.email,
    from: process.env.EMAIL,
    subject: 'Please confirm your email',
    html: '<h1>Hi there</h1>',
  });

  return {
    success: 'Confirmation email sent! Please check your email account.',
  };
};
