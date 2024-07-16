import { currentUser } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { JobPostData, ServicePostData } from '@/types/types';
import { getUserByUsername } from './user';

export const getJobPosts = async (
  filter: 'all' | 'exceptOwn' | 'own',
): Promise<JobPostData[]> => {
  const user = await currentUser();
  const userId = user?.id;

  if (filter === 'exceptOwn') {
    return await prisma.jobPost.findMany({
      where: { status: 'OPEN', NOT: { userId } },
      include: {
        user: {
          select: { name: true, image: true },
        },
        _count: {
          select: {
            proposals: true,
          },
        },
      },
      orderBy: {
        updatedAt: 'desc',
      },
      take: 16,
    });
  }

  if (filter === 'own') {
    return await prisma.jobPost.findMany({
      where: { userId: userId, NOT: { status: 'CLOSED' } },
      include: {
        user: {
          select: { name: true, image: true },
        },
        _count: {
          select: {
            proposals: true,
          },
        },
      },
      orderBy: {
        updatedAt: 'desc',
      },
      take: 16,
    });
  }

  return await prisma.jobPost.findMany({
    where: { status: 'OPEN' },
    include: {
      user: {
        select: { name: true, image: true },
      },
      _count: {
        select: {
          proposals: true,
        },
      },
    },
    orderBy: {
      updatedAt: 'desc',
    },
    take: 16,
  });
};

export const getJobPostsByUsername = async (
  username: string,
): Promise<JobPostData[]> => {
  const user = await getUserByUsername(username);

  return await prisma.jobPost.findMany({
    where: { status: 'OPEN', userId: user?.id },
    include: {
      user: {
        select: { name: true, image: true },
      },
      _count: {
        select: {
          proposals: true,
        },
      },
    },
    orderBy: {
      updatedAt: 'desc',
    },
  });
};

// Service Posts
export const getServiceCatalog = async (): Promise<ServicePostData[]> => {
  return await prisma.servicePost.findMany({
    where: { status: 'OPEN' },
    include: {
      user: {
        select: { name: true, image: true },
      },
    },
    orderBy: {
      updatedAt: 'desc',
    },
    take: 8,
  });
};

export const getServiceCatalogByUsername = async (
  username: string,
): Promise<ServicePostData[]> => {
  const user = await getUserByUsername(username);

  return await prisma.servicePost.findMany({
    where: { status: 'OPEN', userId: user?.id },
    include: {
      user: {
        select: { name: true, image: true },
      },
    },
    orderBy: {
      updatedAt: 'desc',
    },
  });
};




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
