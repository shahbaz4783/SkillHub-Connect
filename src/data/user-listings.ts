import { currentUser } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export const getUserListingsData = async (listingType: string) => {
	const user = await currentUser();
	if (!user?.id) return null;

	let listings = null;
	let count = 0;

	if (listingType === 'service') {
		listings = await prisma.servicePost.findMany({
			where: { userId: user?.id },
		});
		count = await prisma.servicePost.count({
			where: { userId: user?.id },
		});
	} else if (listingType === 'job') {
		listings = await prisma.jobPost.findMany({
			where: { userId: user?.id },
		});
		count = await prisma.jobPost.count({
			where: { userId: user?.id },
		});
	} else
		throw new Error('Invalid listing type. Must be either "service" or "job"');

	return { listings, count };
};

export const getAllListingsData = async (listingType: string) => {
	const user = await currentUser();
	if (!user?.id) return null;

	let listings = null;
	let count = 0;

	if (listingType === 'service') {
		listings = await prisma.servicePost.findMany();
		count = await prisma.servicePost.count();
	} else if (listingType === 'job') {
		listings = await prisma.jobPost.findMany();
		count = await prisma.jobPost.count();
	} else
		throw new Error('Invalid listing type. Must be either "service" or "job"');

	return { listings, count };
};

export const getAllListingsDataExceptOwn = async (listingType: string) => {
	const user = await currentUser();
	if (!user?.id) return null;

	let listings = null;

	if (listingType === 'service') {
		listings = await prisma.servicePost.findMany({
			where: {
				NOT: {
					userId: user.id,
				},
			},
		});
	} else if (listingType === 'job') {
		listings = await prisma.jobPost.findMany({
			where: {
				NOT: {
					userId: user.id,
				},
			},
		});
	} else
		throw new Error('Invalid listing type. Must be either "service" or "job"');

	return listings;
};
