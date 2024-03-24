import * as z from 'zod';

export const userSchema = z.object({
	name: z.string().min(3, {
		message: 'Must be a valid name',
	}),
	email: z.string().email({ message: 'Must be a valid email' }),
	username: z.string().min(3, { message: 'Must be a vaid username' }),
});


export const bioSchema = z.object({
	bio: z
		.string()
		.min(10, {
			message: 'Bio must be at least 10 characters.',
		})
		.max(160, {
			message: 'Bio must not be longer than 160 characters.',
		}),
});

export const addressSchema = z.object({
	country: z.string(),
	city: z.string(),
	state: z.string(),
	code: z.coerce.number(),
	address: z.string(),
});