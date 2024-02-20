import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import bcrypt from 'bcrypt';

export async function POST(req: Request) {
	try {
		const body = await req.json();
		const { name, email, username, password } = body;

		// Check if email already exists
		const emailExists = await prisma.user.findUnique({
			where: { email: email },
		});
		if (emailExists) {
			return NextResponse.json(
				{ user: null, message: 'Email Alreay Exists' },
				{ status: 409 }
			);
		}

		// Check if username already exists
		const usernameExists = await prisma.user.findUnique({
			where: { username: username },
		});
		if (usernameExists) {
			return NextResponse.json(
				{ user: null, message: 'Username Alreay Exists' },
				{ status: 409 }
			);
		}

		// Create a new user
		const hashPassword = await bcrypt.hash(password, 12);
		const newUser = await prisma.user.create({
			data: {
				name,
				email,
				username,
				password: hashPassword,
			},
		});
		return NextResponse.json(
			{ user: newUser, message: 'User created successfully' },
			{ status: 201 }
		);
	} catch (error) {
		return NextResponse.json(
			{ message: 'Something went wrong, Please try again later', error: error },
			{ status: 500 }
		);
	}
}