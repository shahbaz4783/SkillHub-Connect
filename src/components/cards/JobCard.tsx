import React from 'react';
import prisma from '@/lib/prisma';
import { Button } from '@/components/ui/button';

async function getPosts() {
	const jobData = await prisma?.jobPost.findMany();
	return jobData;
}

const JobCard = async () => {
	const jobData = await getPosts();
	return (
		<>
			{jobData.map((data) => (
				<article
					key={data.id}
					className='flex cursor-pointer flex-col items-start gap-8 border rounded-lg p-6'
				>
					<div>
						<h2 className='capitalize font-semibold text-lg line-clamp-2 md:line-clamp-1'>
							{data.title}
						</h2>
						<p className='text-sm text-slate-500'>
							{data.createdAt.toDateString()}
						</p>
					</div>
					<menu className='flex gap-16'>
						<div>
							<h2 className='font-semibold'>${data.price.toFixed(0)}</h2>
							<p className='text-sm text-slate-500'>Fixed-price</p>
						</div>
						<div>
							<h2 className='capitalize font-semibold'>{data.experience}</h2>
							<p className='text-sm text-slate-500'>Experience level</p>
						</div>
					</menu>
					<div>
						<p className='line-clamp-2 text-stone-500'>{data.description}</p>
					</div>
					<div className='flex gap-2 flex-wrap'>
						{data.skills.split(',').map((item, index) => (
							<span key={index} className='bg-stone-100 py-1 px-2 md:px-4 rounded-3xl'>
								{item.trim()}
							</span>
						))}
					</div>
					<Button>See More</Button>
				</article>
			))}
		</>
	);
};

export default JobCard;
