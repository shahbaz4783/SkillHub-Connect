'use server';

import * as z from 'zod';
import { currentUser } from '@/lib/auth';
import { jobSchema, serviceSchema } from '@/validators/listing.schema';
import { prisma } from '@/lib/prisma';

export const jobPostAction = async (values: z.infer<typeof jobSchema>) => {
  const validateFields = jobSchema.safeParse(values);
  if (!validateFields.success) {
    return { error: 'Invalid Fields!' };
  }

  const user = await currentUser();
  if (!user?.id) {
    return { error: 'User not found or missing user ID!' };
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

  return { success: 'Job created successfully' };
};

export const deleteJobAction = async (id: string) => {
  await prisma.jobPost.delete({
    where: { id },
  });
};

// Service

export const servicePostAction = async (
  values: z.infer<typeof serviceSchema>,
) => {
  const validateFields = serviceSchema.safeParse(values);
  if (!validateFields.success) {
    return { error: 'Invalid Fields!' };
  }

  const user = await currentUser();
  if (!user?.id) {
    return { error: 'User not found or missing user ID!' };
  }
  const userId = user.id;

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
          id: userId,
        },
      },
    },
  });

  return { success: 'Service created successfully' };
};

export const deleteServiceAction = async (id: string) => {
  await prisma.servicePost.delete({
    where: { id },
  });
};
