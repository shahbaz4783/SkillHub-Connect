import { prisma } from '@/lib/prisma';

export const getJobPostsResult = async (searchQuery: string) => {
  return await prisma.jobPost.findMany({
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
