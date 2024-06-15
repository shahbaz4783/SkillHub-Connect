import { prisma } from '@/lib/prisma';

// Detailed data of service post
export const getServiceDetailsData = async (id: string) => {
  return await prisma.servicePost.findFirst({
    where: { id },
    include: { user: true },
  });
};

// Detailed data of job post
export const getJobDetailsData = async (id: string) => {
  const jobPost = await prisma.jobPost.findFirst({
    where: { id, status: 'OPEN' },
    include: {
      user: true,
      _count: {
        select: { proposals: true },
      },
    },
  });

  if (!jobPost) {
    return null;
  }

  const { _count, user, ...rest } = jobPost;
  return {
    ...rest,
    proposalCount: _count.proposals,
    user,
  };
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

  listings = await prisma.jobPost.findMany({
    where: {
      status: 'OPEN',
    },
  });
  count = await prisma.jobPost.count();

  return { listings, count };
};