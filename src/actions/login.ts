'use server';
import { signIn } from '@/auth';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { loginSchema } from '@/schema/auth';
import { AuthError } from 'next-auth';
import * as z from 'zod';

export const loginAction = async (values: z.infer<typeof loginSchema>) => {
	const validateFields = loginSchema.safeParse(values);
	if (!validateFields.success) {
		return { error: 'Invalid Fields!' };
	}
	const { email, password } = validateFields.data;

	try {
		await signIn('credentials', {
			email,
			password,
			redirectTo: DEFAULT_LOGIN_REDIRECT,
		});
	} catch (error) {
		if (error instanceof AuthError) {
			switch (error.type) {
				case 'CredentialsSignin':
					return { error: 'Invalid credentials' };

				default:
					return { error: 'Something went wrong' };
			}
		}
		throw error;
	}
	return { success: 'Email sent successfully!' };
};
