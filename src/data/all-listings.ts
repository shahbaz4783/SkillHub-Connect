import { prisma } from '@/lib/prisma';

// Detailed data of service post
export const getServiceDetailsData = async (id: string) => {
  return await prisma.servicePost.findFirst({
    where: { id },
  });
};

// Detailed data of job post
export const getJobDetailsData = async (id: string) => {
  return await prisma.jobPost.findFirst({
    where: { id },
  });
};

export const getAllServiceListings = async () => {
  let listings = null;
  let count = 0;

  listings = await prisma.servicePost.findMany({
    include: { user: true },
  });
  count = await prisma.servicePost.count();

  return { listings, count };
};

export const getAllJobListings = async () => {
  let listings = null;
  let count = 0;

  listings = await prisma.jobPost.findMany();
  count = await prisma.jobPost.count();

  return { listings, count };
};