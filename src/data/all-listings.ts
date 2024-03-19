import { prisma } from '@/lib/prisma';

// Detailed data of service post
export const getServiceDetailsData = async (id: string) => {
	return await prisma.servicePost.findFirst({
		where: { id },
	});
};

// Detailed data of job post
export const getJobDetailsData = async (id: string) => {
	return await prisma.jobPost.findFirst({
		where: { id },
	});
};
