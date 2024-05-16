import NextAuth from 'next-auth';
import authConfig from './auth.config';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from '@/lib/prisma';
import { getUserByID } from './data/user';

export const updateSession = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { id: true, name: true, email: true, username: true },
  });

  if (!user) return;

  return {
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      username: user.username,
    },
  };
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: '/login',
    error: '/error',
  },
  events: {
    async linkAccount({ user }) {
      await prisma.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      });
      await prisma.user.update({
        where: { id: user.id },
        data: { username: user.id },
      });
    },
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider !== 'credentials') return true;

      const existingUser = await getUserByID(user.id as string);
      if (!existingUser?.emailVerified) return false;
      return true;
    },

    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      if (token.username && session.user) {
        session.user.username = token.username;
      }
      if (token && token.sub) {
        const updatedSession = await updateSession(token.sub);
        return { ...session, ...updatedSession };
      }
      return session;
    },

    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await getUserByID(token.sub);

      if (!existingUser) return token;

      token.username = existingUser.username;
      return token;
    },
  },
  adapter: PrismaAdapter(prisma),
  session: { strategy: 'jwt' },
  ...authConfig,
});
