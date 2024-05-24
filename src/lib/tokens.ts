import {
  getVerificationOTPbyEmail,
  getVerificationTokenByEmail,
} from '@/data/verification-token';
import crypto from 'crypto';
import { v4 as uuidv4 } from 'uuid';
import { prisma } from '@/lib/prisma';

export const generateVerificationToken = async (email: string) => {
  const token = uuidv4();
  const expires = new Date(new Date().getTime() + 3600000);

  const existingToken = await getVerificationTokenByEmail(email);

  if (existingToken) {
    await prisma.verificationToken.delete({
      where: {
        id: existingToken.id,
      },
    });
  }

  const verificationToken = await prisma.verificationToken.create({
    data: { email, token, expires },
  });

  return verificationToken;
};

export const generateVerificationOTP = async (email: string) => {
  const otp = crypto.randomInt(100000, 1000000);
  const expires = new Date(new Date().getTime() + 3600000);

  const existingOTP = await getVerificationOTPbyEmail(email);

  if (existingOTP) {
    await prisma.verificationOTP.delete({
      where: { id: existingOTP.id },
    });
  }

  const verificationOTP = await prisma.verificationOTP.create({
    data: { email, otp, expires },
  });

  return verificationOTP;
};
