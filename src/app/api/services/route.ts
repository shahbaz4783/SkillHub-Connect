import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import * as z from 'zod';
import { currentUser } from '@/lib/auth';

const userSchema = z.object({
	title: z.string(),
	description: z.string(),
	tags: z.string(),
	price: z.number(),
	time: z.number(),
	category: z.string(),
});

export async function POST(req: Request) {
	try {
		const user = await currentUser();
		const userId = 'cltepric200003xtdt9klwkn2';

		const body = await req.json();
		const { title, description, tags, price, time, category } =
			userSchema.parse(body);

		// Create a new Service
		const newService = await prisma.servicePost.create({
			data: {
				userId,
				title,
				description,
				tags,
				price,
				time,
				category,
			},
		});
		return NextResponse.json(
			{ service: newService, message: 'Service created successfully' },
			{ status: 201 }
		);
	} catch (error) {
		return NextResponse.json(
			{ message: 'Something went wrong, Please try again later', error: error },
			{ status: 500 }
		);
	}
}
