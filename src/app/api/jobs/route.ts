import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import * as z from 'zod';

const userSchema = z.object({
	title: z.string(),
	description: z.string(),
	skills: z.string(),
	price: z.number(),
	location: z.string(),
	category: z.string(),
	experience: z.string(),
});

export async function POST(req: Request) {
	try {
		const body = await req.json();
		const {
			title,
			description,
			skills,
			price,
			location,
			category,
			experience,
		} = userSchema.parse(body);

		// Create a new Job
		const newJob = await prisma.jobPost.create({
			data: {
				title,
				description,
				skills,
				price,
				location,
				category,
				experience,
			},
		});
		return NextResponse.json(
			{ service: newJob, message: 'Job created successfully' },
			{ status: 201 }
		);
	} catch (error) {
		return NextResponse.json(
			{ message: 'Something went wrong, Please try again later', error: error },
			{ status: 500 }
		);
	}
}
