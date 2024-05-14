import { User } from '@prisma/client';

declare module 'next-auth' {
  interface User extends Omit<Prisma.User, 'id'> {}
}
