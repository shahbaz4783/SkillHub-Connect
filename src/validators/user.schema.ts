import * as z from 'zod';

export const userSchema = z.object({
  name: z.string().min(3, {
    message: 'Must be a valid name',
  }),
  username: z.string().min(3, { message: 'Must be a vaid username' }),
});


export const profileSchema = z.object({
  userTitle: z
    .string()
    .min(20, {
      message: 'Bio must be at least 10 characters.',
    })
    .max(100, {
      message: 'Title must not be longer than 100 characters.',
    }),
  skills: z
    .string()
    .min(20, {
      message: 'Skills must contain at least 20 characters.',
    })
    .max(150, {
      message: 'Title must not be longer than 150 characters.',
    }),
  bio: z
    .string()
    .min(60, {
      message: 'Bio must be at least 60 characters.',
    })
    .max(1200, {
      message: 'Bio must not be longer than 1200 characters.',
    }),
});

export const addressSchema = z.object({
  country: z.string(),
  city: z.string(),
  code: z.coerce.number(),
  address: z.string(),
});