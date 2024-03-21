'use server';
import * as z from 'zod';
import { prisma } from '@/lib/prisma';
import { getUserByEmail } from '@/data/user';
import { userSchema } from '@/schema/user.schema';

export const updatePersonalInfoAction = async (
	values: z.infer<typeof userSchema>
) => {
	const validateFields = userSchema.safeParse(values);
	if (!validateFields.success) {
		return { error: 'Invalid Fields!' };
	}

	const { name, email, username } = validateFields.data;

	const existingUser = await getUserByEmail(email);

	if (existingUser) {
		return { error: 'Email is already in use' };
	}

	await prisma.user.create({
		data: {
			name,
			username,
			email,
		},
	});

	return { success: 'Profile Updated Successfully' };
};
