import { currentUser } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export const getUserProfile = async () => {
	const user = await currentUser();
	const userId = user?.id;
  
	 const profile = await prisma.profile.findFirst({
     where: { userId },
   });
	 const userDetails = await prisma.user.findFirst({
     where: { email: user?.email },
   });
   return { profile, userDetails };
};
