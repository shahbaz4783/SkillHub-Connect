import { prisma } from '@/lib/prisma';

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