import React from 'react';
import prisma from '@/lib/prisma';

async function getPosts() {
	const jobData = await prisma?.jobPost.findMany();
	return jobData;
}

const JobCard = async () => {
	const jobData = await getPosts();
	return (
		<>
			{jobData.map((data) => (
				<article className='flex flex-col gap-4 border rounded-lg p-6'>
					<div>
						<h2 className='capitalize text-lg font-semibold'>{data.title}</h2>
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
						<p className='line-clamp-2'>{data.description}</p>
					</div>
					<div className='flex gap-2'>
						{data.skills.split(',').map((item, index) => (
							<span key={index} className='border p-2 rounded-3xl'>
								{item.trim()}
							</span>
						))}
					</div>
				</article>
			))}
		</>
	);
};

export default JobCard;
