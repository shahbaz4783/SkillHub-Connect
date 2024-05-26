'use server';

import {
  getVerificationOTPbyEmail,
  getVerificationTokenByToken,
} from '@/data/verification-token';
import {
  sendOTPforLogin,
  sendVerificationMail,
  sendResetPasswordMail,
} from '@/lib/mail';
import {
  generateVerificationOTP,
  generateVerificationToken,
} from '@/lib/tokens';
import {
  loginSchema,
  signUpSchema,
  newPasswordSchema,
  resetSchema,
} from '@/validators/auth.schema';
import crypto from 'crypto';
import { prisma } from '@/lib/prisma';
import { hash } from 'bcryptjs';
import { authMessages } from '@/constants/messages';
import { getUserByEmail } from '@/data/user';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';

//-------------- SignUp Action
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

//-------------- Login Action
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

//-------------- Email Verification Action
export const newVerification = async (token: string) => {
  const existingToken = await getVerificationTokenByToken(token);

  if (!existingToken) return { error: authMessages.error.tokenNotFound };

  const hasExpired = new Date(existingToken.expires) < new Date();

  if (hasExpired) return { error: authMessages.error.tokenExpired };

  const existingUser = await getUserByEmail(existingToken.email);

  if (!existingUser) return { error: authMessages.error.userNotFound };

  await prisma?.user.update({
    where: { id: existingUser.id },
    data: {
      emailVerified: new Date(),
      email: existingToken.email,
    },
  });

  await prisma?.verificationToken.delete({
    where: { id: existingToken.id },
  });

  return { success: authMessages.success.emailVerified };
};

//-------------- Pasword Reset Action
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

//-------------- Update Password Action
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
