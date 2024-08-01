'use server';

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
import { capitalizeFirstLetter } from '@/lib/utils';

// Personal Info Update Action
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

  const formattedName = capitalizeFirstLetter(name);
  const formattedUsername = username.toLowerCase();

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
      name: formattedName,
      username: formattedUsername,
    },
  });

  await updateUserSession(user.id);

  revalidatePath('/', 'layout');
  return { message: { success: authMessages.success.profileUpdate } };
};

// Profile Update Action
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

    return { message: { success: 'Profile Updated Successfully' } };
  } catch (error) {
    return { message: { error: 'An error occurred while updating profile.' } };
  }
};

// Address Update Action
export const updateAddressAction = async (
  formState: FormState,
  formData: FormData,
): Promise<FormState> => {
  const formDataObj = Object.fromEntries(formData);
  const validateFields = addressSchema.safeParse(formDataObj);
  if (!validateFields.success) {
    return {
      message: {
        error: authMessages.validation.invalidFields,
      },
    };
  }

  const { address, address2, city, postal_code, country } = validateFields.data;

  const user = await currentUser();

  const userId = user?.id;
  if (!userId) return { message: { error: 'User ID not found' } };

  // Check if the address exists
  const addressExists = await prisma.address.findUnique({
    where: { userId },
  });

  if (!addressExists) {
    await prisma.address.create({
      data: {
        address,
        address2,
        city,
        country,
        postal_code,
        user: { connect: { id: userId } },
      },
    });
    return { message: { success: 'Address Created Successfully' } };
  } else {
    await prisma.address.update({
      where: { userId },
      data: {
        address,
        address2,
        city,
        country,
        postal_code,
      },
    });
    return { message: { success: 'Address Updated Successfully' } };
  }
};
