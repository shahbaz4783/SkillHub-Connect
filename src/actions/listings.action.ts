'use server';

import { currentUser } from '@/lib/auth';
import { jobSchema, serviceSchema } from '@/validators/listing.schema';
import { prisma } from '@/lib/prisma';
import { authMessages } from '@/constants/messages';
import { uploadImageToCloudinary } from '@/lib/cloudnary';
import { calculateProposalCost } from '@/lib/utils';

// Job
export const jobPostAction = async (
  formState: FormState,
  formData: FormData,
): Promise<FormState> => {
  const formDataObj = Object.fromEntries(formData);
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

  const connectCost = calculateProposalCost(price);

  await prisma.jobPost.create({
    data: {
      title,
      description,
      skills,
      experience,
      location,
      price,
      category,
      connectCost,
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

  const { title, description, tags, price, time, category, image } =
    validateFields.data;

  const file = image as File;
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  let imageUrl: string;
  const path = 'services';

  try {
    const uploadResult = await uploadImageToCloudinary(buffer, path);
    if (!uploadResult?.secure_url) throw new Error('Upload failed');
    imageUrl = uploadResult.secure_url;
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    return { message: { error: 'Image upload failed' } };
  }

  await prisma.servicePost.create({
    data: {
      title,
      description,
      tags,
      price,
      time,
      category,
      imageUrl,
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
