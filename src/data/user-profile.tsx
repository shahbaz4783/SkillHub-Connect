import { currentUser } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export const getUserProfile = async () => {
	const user = await currentUser();
	const userId = user?.id;
  
	await prisma.profile.findFirst({
		where: { userId },
	});
};
