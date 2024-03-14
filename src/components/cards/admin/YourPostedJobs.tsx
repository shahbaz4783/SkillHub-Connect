import React from 'react';
import { prisma } from '@/lib/prisma';
import { currentUser } from '@/lib/auth';
import NoDataFound from '../../ui/NoDataFound';
import PostCard from './PostCard';

const YourPostedJobs = async () => {
	const user = await currentUser();
	const jobCount = await prisma.jobPost.count({
		where: { userId: user?.id },
	});
	const jobPosts = await prisma.jobPost.findMany({
		where: { userId: user?.id },
	});

	return (
		<>
			{jobCount >= 1 ? (
				<section className='grid md:grid-cols-3 gap-4'>
					{jobPosts.map((data) => (
						<PostCard
							key={data.id}
							title={data.title}
							description={data.description}
							date={data.createdAt.toDateString()}
							price={data.price}
						/>
					))}
				</section>
			) : (
				<NoDataFound message='You have not posted any job yet...' />
			)}
		</>
	);
};

export default YourPostedJobs;
