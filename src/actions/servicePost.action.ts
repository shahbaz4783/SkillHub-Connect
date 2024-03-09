import { PrismaClient } from '@prisma/client';
import * as z from 'zod';
import { currentUser } from '@/lib/auth';
import { serviceSchema } from '@/schema/listing.schema';

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

	const { title, description, tags, price, time, category } =
		validateFields.data;

	try {
		await prisma.servicePost.create({
			data: {
				userId: user.id,
				title,
				description,
				tags,
				price,
				time,
				category,
			},
		});

		return { success: true };
	} catch (error) {}
};
