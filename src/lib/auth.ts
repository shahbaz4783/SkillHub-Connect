import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from './prisma';
import { compare } from 'bcrypt';

export const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(prisma),
	session: {
		strategy: 'jwt',
	},
	pages: {
		signIn: '/login',
	},
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: {
					label: 'Email',
					type: 'email',
					placeholder: 'jsmith@mail.com',
				},
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials, req) {
				if (!credentials?.email || credentials?.password) {
					return null;
				}

				const existingUser = await prisma.user.findUnique({
					where: { email: credentials?.email },
				});
				if (!existingUser) {
					return null;
				}

				const comparePassword = await compare(
					credentials.password,
					existingUser.password
				);

				if (!comparePassword) {
					return null;
				}

				return {
					id: existingUser.id,
					username: existingUser.username,
					email: existingUser.email,
				};
			},
		}),
	],
};
