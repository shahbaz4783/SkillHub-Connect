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
import { FormState } from '@/types/types';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import type { JobPost } from '@prisma/client';
import paths from '@/lib/paths';

// Job
export const jobPostAction = async (
  jobId: string,
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

  const {
    title,
    description,
    skills,
    price,
    category,
    experience,
    projectType,
  } = validateFields.data;

  const connectCost = calculateProposalCost(price);

  let jobPost: JobPost;
  try {
    if (!jobId) {
      jobPost = await prisma.jobPost.create({
        data: {
          title,
          description,
          skills,
          experience,
          projectType,
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
    } else {
      jobPost = await prisma.jobPost.update({
        where: { id: jobId },
        data: {
          title,
          description,
          skills,
          experience,
          projectType,
          price,
          category,
          connectCost,
        },
      });
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { message: { error: error.message } };
    } else {
      return { message: { error: 'Something went wrong' } };
    }
  }

  revalidatePath(paths.myJobPost());
  redirect(paths.jobPost(jobPost.id, ''));
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
  revalidatePath('/', 'layout');
  return { message: { success: 'Deleted Successfully' } };
};

// Service

export const servicePostAction = async (
  formState: FormState,
  formData: FormData,
): Promise<FormState> => {
  try {
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
    } catch (error: unknown) {
      if (error instanceof Error) {
        return { message: { error: error.message } };
      } else {
        return { message: { error: 'Failed to upload image' } };
      }
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
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { message: { error: error.message } };
    } else {
      return { message: { error: 'Something went wrong' } };
    }
  }
  revalidatePath('/', 'layout');
  redirect('/services');
};

export const deleteServiceAction = async (id: string) => {
  await prisma.servicePost.delete({
    where: { id },
  });
};
