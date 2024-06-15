'use server';

import { currentUser } from '@/lib/auth';
import {
  jobSchema,
  proposalSchema,
  serviceSchema,
} from '@/validators/listing.schema';
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

export const addProposalAction = async (
  jobPostId: string,
  formState: FormState,
  formData: FormData,
): Promise<FormState> => {
  const formDataObj = Object.fromEntries(formData);
  const validateFields = proposalSchema.safeParse(formDataObj);

  if (!validateFields.success) {
    return { message: { error: authMessages.validation.invalidFields } };
  }

  const { bid, timeframe, description, fees, paymentReceive } =
    validateFields.data;

  const existingUser = await currentUser();

  if (!existingUser) {
    return { message: { error: authMessages.error.userNotFound } };
  }

  const userId = existingUser.id;

  if (!userId) {
    return { message: { error: authMessages.error.userNotFound } };
  }

  const jobPost = await prisma.jobPost.findUnique({
    where: { id: jobPostId },
  });

  if (!jobPost) {
    return { message: { error: 'Job post not found' } };
  }

  if (jobPost.userId === userId)
    return { message: { error: 'You cant add proposal to your own job' } };

  const connectCost = jobPost.connectCost;

  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    return { message: { error: 'User not found' } };
  }

  const existingProposal = await prisma.proposal.findFirst({
    where: {
      userId,
      jobPostId,
    },
  });

  if (existingProposal) {
    return { message: { error: 'You have already applied to this job post' } };
  }

  const availableConnects = user.connects || 0;

  if (availableConnects < connectCost) {
    return { message: { error: 'Insufficient connect to ' } };
  }

  await prisma.$transaction(async (prisma) => {
    await prisma.proposal.create({
      data: {
        bid,
        timeframe,
        description,
        userId,
        jobPostId,
        fees,
        paymentReceive,
      },
    });

    await prisma.user.update({
      where: { id: userId },
      data: {
        connects: {
          decrement: connectCost,
        },
      },
    });
  });

  return { message: { success: 'Proposal Created Successfully' } };
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
