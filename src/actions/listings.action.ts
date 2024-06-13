'use server';

import * as z from 'zod';
import { currentUser } from '@/lib/auth';
import { jobSchema, serviceSchema } from '@/validators/listing.schema';
import { prisma } from '@/lib/prisma';
import { authMessages } from '@/constants/messages';
import { redirect } from 'next/navigation';

// Job
export const jobPostAction = async (
  formState: FormState,
  formData: FormData,
): Promise<FormState> => {
  const formDataObj = Object.fromEntries(formData);

  console.log(formDataObj);
  const validateFields = jobSchema.safeParse(formDataObj);

  if (!validateFields.success) {
    return { message: { error: authMessages.validation.invalidFields } };
  }

  const user = await currentUser();
  if (!user?.id) {
    return { message: { error: authMessages.error.userNotFound } };
  }
  const userId = user.id;

  const { title, description, skills, price, category, experience, location } =
    validateFields.data;

  await prisma.jobPost.create({
    data: {
      title,
      description,
      skills,
      experience,
      location,
      price,
      category,
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });

  return { message: { success: 'Posted' } };
};

export const deleteJobAction = async (id: string) => {
  await prisma.jobPost.delete({
    where: { id },
  });
};

// Service

export const servicePostAction = async (
  formState: FormState,
  formData: FormData,
): Promise<FormState> => {
  const formDataObj = Object.fromEntries(formData);

  const validateFields = serviceSchema.safeParse(formDataObj);
  if (!validateFields.success) {
    return { message: { error: authMessages.validation.invalidFields } };
  }

  const user = await currentUser();
  if (!user?.id) {
    return { message: { error: authMessages.error.userNotFound } };
  }

  const { title, description, tags, price, time, category } =
    validateFields.data;

  await prisma.servicePost.create({
    data: {
      title,
      description,
      tags,
      price,
      time,
      category,
      user: {
        connect: {
          id: user.id,
        },
      },
    },
  });

  return { message: { success: 'Posted' } };
};

export const deleteServiceAction = async (id: string) => {
  await prisma.servicePost.delete({
    where: { id },
  });
};
