'use server';

import { PrismaClient } from '@prisma/client';
import * as z from 'zod';
import { currentUser } from '@/lib/auth';
import { serviceSchema } from '@/validators/listing.schema';

const prisma = new PrismaClient();

export const servicePostAction = async (
	values: z.infer<typeof serviceSchema>
) => {
	const validateFields = serviceSchema.safeParse(values);
	if (!validateFields.success) {
		return { error: 'Invalid Fields!' };
	}

	const user = await currentUser();
	if (!user?.id) {
		return { error: 'User not found or missing user ID!' };
	}
	const userId = user.id;

	const { title, description, tags, price, time, category } =
		validateFields.data;

	await prisma.servicePost.create({
		data: {
			title,
			description,
			tags,
			price,
			time,
			category,
			user: {
				connect: {
					id: userId,
				},
			},
		},
	});

	return { success: 'Service created successfully' };
};
