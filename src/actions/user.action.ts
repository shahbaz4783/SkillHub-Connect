'use server';
import * as z from 'zod';
import { prisma } from '@/lib/prisma';
import { getUserByEmail } from '@/data/user';
import { addressSchema, bioSchema, userSchema } from '@/validators/user.schema';
import { currentUser } from '@/lib/auth';
import { updateSession } from '@/auth';
import { revalidatePath } from 'next/cache';

export const updatePersonalInfoAction = async (
  values: z.infer<typeof userSchema>,
) => {
  const validateFields = userSchema.safeParse(values);
  if (!validateFields.success) {
    return { error: 'Invalid Fields!' };
  }

  const { name, email, username } = validateFields.data;

  const user = await getUserByEmail(email);

  if (!user) return { error: 'Someting went wrong' };

  await prisma.user.update({
    where: {
      email: user?.email as string | undefined,
    },
    data: {
      name,
      email,
      username,
    },
  });

  await updateSession(user.id);

  revalidatePath('/', 'layout');
  return { success: 'Profile Updated Successfully' };
};

export const updateBioAction = async (values: z.infer<typeof bioSchema>) => {
  const validateFields = bioSchema.safeParse(values);
  if (!validateFields.success) {
    return { error: 'Invalid Fields!' };
  }

  return { success: 'Profile Updated Successfully' };
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

  console.log(user);

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
