import * as z from 'zod';

export const userSchema = z.object({
	name: z.string().min(3, {
		message: 'Must be a valid name',
	}),
	email: z.string().email({ message: 'Must be a valid email' }),
	username: z.string().min(3, { message: 'Must be a vaid username' }),
});
