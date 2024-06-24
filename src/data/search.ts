import { prisma } from '@/lib/prisma';
import { JobPostData } from '@/types/types';

export const getJobPostsResult = async (
  searchQuery: string,
): Promise<JobPostData[]> => {
  return prisma.jobPost.findMany({
    include: {
      user: {
        select: { name: true, image: true },
      },
      _count: {
        select: { proposals: true },
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
  // if (!searchQuery) return null;

  // let listings = null;
  // let count = 0;

  // count = await prisma.jobPost.count({
  //   where: {
  //     OR: [
  //       {
  //         skills: {
  //           contains: searchQuery,
  //           mode: 'insensitive',
  //         },
  //       },
  //       {
  //         title: {
  //           contains: searchQuery,
  //           mode: 'insensitive',
  //         },
  //       },
  //       {
  //         description: {
  //           contains: searchQuery,
  //           mode: 'insensitive',
  //         },
  //       },
  //     ],
  //   },
  // });

  // listings = await prisma.jobPost.findMany({
  //   include: {
  //     user: {
  //       select: { name: true, image: true },
  //     },
  //   },
  //   where: {
  //     OR: [
  //       {
  //         skills: {
  //           contains: searchQuery,
  //           mode: 'insensitive',
  //         },
  //       },
  //       {
  //         title: {
  //           contains: searchQuery,
  //           mode: 'insensitive',
  //         },
  //       },
  //       {
  //         description: {
  //           contains: searchQuery,
  //           mode: 'insensitive',
  //         },
  //       },
  //     ],
  //   },
  // });

  // return { listings, count };
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
