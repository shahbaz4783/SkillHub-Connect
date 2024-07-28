import { prisma } from '@/lib/prisma';
import { UserData, UserProfile } from '@/types/types';
import { redirect } from 'next/navigation';

export const getUserByEmail = async (email: string) => {
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    return user;
  } catch (error) {
    console.log(error);
  }
};

export const getUserByUsername = async (username: string) => {
  try {
    const user = await prisma.user.findUnique({ where: { username } });
    return user;
  } catch (error) {
    console.log(error);
  }
};

export const getUserByID = async (id: string) => {
  try {
    const user = await prisma.user.findUnique({ where: { id } });
    return user;
  } catch (error) {
    console.log(error);
  }
};

export const updateUserSession = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { id: true, name: true, email: true, username: true, image: true },
  });

  if (!user) return;

  return {
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      username: user.username,
      image: user.image,
    },
  };
};

export const getUserProfileByID = async (userId: string) => {
  return await prisma.profile.findFirst({
    where: { userId },
    select: { userTitle: true, skills: true, bio: true },
  });
};

export const getUserAddressByID = async (userId: string) => {
  return await prisma.address.findFirst({
    where: { userId },
    select: {
      address: true,
      address2: true,
      city: true,
      country: true,
      postal_code: true,
    },
  });
};

export const getAllUserData = async (): Promise<UserData[]> => {
  const users = await prisma.user.findMany({
    where: {
      AND: [
        {
          profile: {
            isNot: null,
          },
        },
        {
          address: {
            isNot: null,
          },
        },
      ],
    },
    include: {
      profile: {
        select: {
          bio: true,
          userTitle: true,
          skills: true,
        },
      },
      address: {
        select: {
          country: true,
        },
      },
    },
    take: 9,
    orderBy: {
      createdAt: 'desc',
    },
  });

  return users as UserData[];
};

export const getUserDataByUsername = async (
  username: string,
): Promise<UserData> => {
  const users = await prisma.user.findFirst({
    where: {
      username,
      AND: [
        {
          profile: {
            isNot: null,
          },
        },
        {
          address: {
            isNot: null,
          },
        },
      ],
    },
    include: {
      profile: {
        select: {
          bio: true,
          userTitle: true,
          skills: true,
        },
      },
      address: {
        select: {
          country: true,
        },
      },
    },
  });
  return users as UserData;
};

export const getUsersByJobId = async (jobId: string) => {
  return await prisma.user.findMany({
    where: {
      proposals: {
        some: {
          jobPostId: jobId,
        },
      },
    },
    include: {
      profile: {
        select: {
          bio: true,
          userTitle: true,
          skills: true,
        },
      },
      address: {
        select: {
          country: true,
        },
      },
      proposals: {
        where: {
          jobPostId: jobId,
        },
      },
    },
  });
};


export const getUserIdByUsername = async (username: string) => {
  return prisma.user.findUnique({
    where: {
      username,
    },
    select: {
      id: true,
    },
  });
};