import React from 'react';
import { prisma } from '@/lib/prisma';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '../ui/card';
import Link from 'next/link';

async function getPosts() {
	const jobData = await prisma?.jobPost.findMany();
	return jobData;
}

const JobCard = async () => {
	const jobData = await getPosts();
	return (
		<>
			{jobData.map((data) => (
				<Link href={`/freelance-jobs/${data.id}`}>
					<Card key={data.id} className='space-y-8 cursor-pointer  p-6'>
						<CardHeader>
							<CardTitle className='capitalize font-semibold text-lg line-clamp-2 md:line-clamp-1'>
								{data.title}
							</CardTitle>
							<p className='text-sm text-slate-500'>
								{data.createdAt.toDateString()}
							</p>
						</CardHeader>
						<CardContent className='p-0 space-y-6'>
							<menu className='flex gap-16'>
								<div>
									<h2 className='font-semibold'>${data.price.toFixed(0)}</h2>
									<p className='text-sm text-slate-500'>Fixed-price</p>
								</div>
								<div>
									<h2 className='capitalize font-semibold'>
										{data.experience}
									</h2>
									<p className='text-sm text-slate-500'>Experience level</p>
								</div>
							</menu>
							<CardDescription className='line-clamp-2 text-stone-500 text-md'>
								{data.description}
							</CardDescription>
						</CardContent>
						<CardFooter className='flex gap-2 flex-wrap p-0'>
							{data.skills.split(',').map((item, index) => (
								<span
									key={index}
									className='bg-stone-100 py-1 px-2 md:px-4 rounded-3xl'
								>
									{item.trim()}
								</span>
							))}
						</CardFooter>
						<Button>See More</Button>
					</Card>
				</Link>
			))}
		</>
	);
};

export default JobCard;
