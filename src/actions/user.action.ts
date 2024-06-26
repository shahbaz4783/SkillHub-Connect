'use server';

import * as z from 'zod';
import { prisma } from '@/lib/prisma';
import { getUserByEmail, updateUserSession } from '@/data/user';
import {
  addressSchema,
  profileSchema,
  userSchema,
} from '@/validators/user.schema';
import { currentUser } from '@/lib/auth';
import { revalidatePath } from 'next/cache';
import { authMessages } from '@/constants/messages';
import { FormState } from '@/types/types';
import { connect } from 'http2';

export const updatePersonalInfoAction = async (
  email: string | null,
  formState: FormState,
  formData: FormData,
): Promise<FormState> => {
  const formDataObj = Object.fromEntries(formData);

  const validateFields = userSchema.safeParse(formDataObj);
  if (!validateFields.success) {
    return {
      message: {
        error: authMessages.validation.invalidFields,
      },
    };
  }

  if (!email) return { message: { error: authMessages.error.userNotFound } };

  const { name, username } = validateFields.data;

  const user = await getUserByEmail(email);
  if (!user) return { message: { error: authMessages.error.userNotFound } };

  if (username !== user.username) {
    const existingUser = await prisma.user.findUnique({
      where: { username },
    });

    if (existingUser) {
      return { message: { error: authMessages.error.usernameAlreadyUsed } };
    }
  }

  await prisma.user.update({
    where: {
      email: user?.email as string | undefined,
    },
    data: {
      name,
      username,
    },
  });

  await updateUserSession(user.id);

  revalidatePath('/', 'layout');
  return { message: { success: authMessages.success.profileUpdate } };
};

export const updateProfileAction = async (
  formState: FormState,
  formData: FormData,
): Promise<FormState> => {
  try {
    const formDataObj = Object.fromEntries(formData);

    const validateFields = profileSchema.safeParse(formDataObj);
    if (!validateFields.success) {
      return {
        message: {
          error: authMessages.validation.invalidFields,
        },
      };
    }

    const { userTitle, skills, bio } = validateFields.data;
    const user = await currentUser();
    const userId = user?.id;

    if (!userId) return { message: { error: 'User ID not found' } };

    // Check if the profile exists
    const profileExists = await prisma.profile.findUnique({
      where: { userId },
    });

    if (!profileExists) {
      await prisma.profile.create({
        data: {
          userTitle,
          userId,
          bio,
          skills,
        },
      });
    } else {
      await prisma.profile.update({
        where: { userId },
        data: {
          userTitle,
          skills,
          bio,
        },
      });
    }

    return { message: { success: 'Bio Updated' } };
  } catch (error) {
    return { message: { error: 'An error occurred while updating profile.' } };
  }
};

export const updateAddressAction = async (
  values: z.infer<typeof addressSchema>,
) => {
  const validateFields = addressSchema.safeParse(values);
  if (!validateFields.success) {
    return { error: 'Invalid Fields!' };
  }
  const user = await currentUser();
  const id = user?.id;

  const { country, code, address, city } = validateFields.data;
  // await prisma.address.create({
  //   data: { country, postal_code: code, address, city },
  //   user: {
  //     connect: {
  //       id,
  //     },
  //   },
  // });

  return { success: 'Address Updated Successfully' };
};
