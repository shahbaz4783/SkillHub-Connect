import { prisma } from '@/lib/prisma';

export const getJobPostsResult = async (searchQuery: string) => {
  return await prisma.jobPost.findMany({
    include: {
      user: {
        select: { name: true, image: true },
      },
    },
    where: {
      OR: [
        {
          skills: {
            contains: searchQuery,
            mode: 'insensitive',
          },
        },
        {
          title: {
            contains: searchQuery,
            mode: 'insensitive',
          },
        },
        {
          description: {
            contains: searchQuery,
            mode: 'insensitive',
          },
        },
      ],
    },
  });
};

export const getServicePostsResult = async (searchQuery: string) => {
  return await prisma.servicePost.findMany({
    include: {
      user: {
        select: { name: true, image: true },
      },
    },
    where: {
      OR: [
        {
          tags: {
            contains: searchQuery,
            mode: 'insensitive',
          },
        },
        {
          title: {
            contains: searchQuery,
            mode: 'insensitive',
          },
        },
        {
          description: {
            contains: searchQuery,
            mode: 'insensitive',
          },
        },
      ],
    },
  });
};
