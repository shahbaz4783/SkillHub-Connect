'use server';
import * as z from 'zod';
import { prisma } from '@/lib/prisma';
import { getUserByEmail } from '@/data/user';
import { bioSchema, userSchema } from '@/validators/user.schema';

export const updatePersonalInfoAction = async (
	values: z.infer<typeof userSchema>
) => {
	const validateFields = userSchema.safeParse(values);
	if (!validateFields.success) {
		return { error: 'Invalid Fields!' };
	}

	const { name, email, username } = validateFields.data;

	const user = await getUserByEmail(email);

	if (!user) return { error: 'Someting went wrong' };

	await prisma.user.update({
		where: {
			email: user?.email as string | undefined,
		},
		data: {
			name,
			email,
			username,
		},
	});

	return { success: 'Profile Updated Successfully' };
};

export const updateBioAction = async (values: z.infer<typeof bioSchema>) => {
	const validateFields = bioSchema.safeParse(values);
	if (!validateFields.success) {
		return { error: 'Invalid Fields!' };
	}

	return { success: 'Profile Updated Successfully' };
};
