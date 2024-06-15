import * as z from 'zod';

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
];

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
  image: z
    .any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      'Only .jpg, .jpeg, .png and .webp formats are supported.',
    ),
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


export const proposalSchema = z.object({
  bid: z.coerce.number().min(5).max(5000),
  timeframe: z.string(),
  description: z
    .string()
    .min(120, { message: 'Description must be atleast 120 characters long' })
    .max(1200, { message: 'Title must not exceed by 1200 characters' }),
});