'use server';
import { loginSchema } from '@/schema/auth';
import * as z from 'zod';

export const loginAction = async (values: z.infer<typeof loginSchema>) => {
	const validateFields = loginSchema.safeParse(values);
	if (!validateFields.success) {
	return { error: 'Invalid Fields!' };
	}
	return { success: 'Email sent successfully!' };
};
