import { prisma } from '@/lib/prisma';

export const getVerificationTokenByEmail = async (email: string) => {
	try {
		const verificationToken = await prisma.verificationToken.findFirst({
			where: { email },
		});
		return verificationToken;
	} catch (error) {
		return null;
	}
};

export const getVerificationTokenByToken = async (token: string) => {
	try {
		const verificationToken = await prisma.verificationToken.findFirst({
			where: { token },
		});
		return verificationToken;
	} catch (error) {
		return null;
	}
};

export const getVerificationOTPbyOTP = async (otp: number) => {
  try {
    const verificationOTP = await prisma.verificationOTP.findFirst({
      where: { otp },
    });
    return verificationOTP;
  } catch (error) {
    return null;
  }
};

export const getVerificationOTPbyEmail = async (email: string) => {
  try {
    const verificationOTP = await prisma.verificationOTP.findFirst({
      where: { email },
    });
    return verificationOTP;
  } catch (error) {
    return null;
  }
};
