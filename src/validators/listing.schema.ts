import * as z from 'zod';

export const serviceSchema = z.object({
  title: z
    .string()
    .min(10, { message: 'Title must be atleast 10 characters long' })
    .max(75, { message: 'Title must not exceed by 75 characters' }),
  description: z
    .string()
    .min(120, { message: 'Description must be atleast 120 characters long' })
    .max(1200, { message: 'Title must not exceed by 1200 characters' }),

  tags: z.string(),
  price: z.coerce.number(),
  time: z.coerce.number(),
  category: z.string(),
});

export const jobSchema = z.object({
  title: z
    .string()
    .min(10, { message: 'Title must be atleast 10 characters long' })
    .max(75, { message: 'Title must not exceed by 75 characters' }),

  description: z
    .string()
    .min(120, { message: 'Description must be atleast 120 characters long' })
    .max(1200, { message: 'Title must not exceed by 1200 characters' }),

  skills: z.string(),
  price: z.coerce.number(),
  location: z.string(),
  category: z.string(),
  experience: z.string(),
});
