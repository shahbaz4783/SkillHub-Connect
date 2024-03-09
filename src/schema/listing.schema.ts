import * as z from 'zod';

export const serviceSchema = z.object({
	title: z
		.string()
		.min(10, { message: 'Title must be atleast 10 characters long' }),
	description: z
		.string()
		.min(30, { message: 'Description must be atleast 30 characters long' }),
	tags: z.string(),
	price: z.string(),
	time: z.string(),
	category: z.string(),
});

export const jobSchema = z.object({
	title: z
		.string()
		.min(10, { message: 'Title must be atleast 10 characters long' }),
	description: z
		.string()
		.min(30, { message: 'Description must be atleast 30 characters long' }),
	skills: z.string(),
	price: z.number(),
	location: z.string(),
	category: z.string(),
	experience: z.string(),
});
