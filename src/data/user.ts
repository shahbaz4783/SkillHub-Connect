import { prisma } from '@/lib/prisma';
import { UserData, UserProfile } from '@/types/types';

export const getUserByEmail = async (email: string) => {
  try {
    const user = await prisma.user.findUnique({ where: { email } });
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