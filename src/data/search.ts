import { prisma } from '@/lib/prisma';

export const getJobPostsResult = async (searchQuery: string) => {

  if (!searchQuery) return null;

  let listings = null;
  let count = 0;

  count = await prisma.jobPost.count({
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

  listings = await prisma.jobPost.findMany({
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

  return { listings, count };
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
