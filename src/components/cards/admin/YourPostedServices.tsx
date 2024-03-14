import React from 'react';
import { prisma } from '@/lib/prisma';
import { currentUser } from '@/lib/auth';
import NoDataFound from '../../ui/NoDataFound';
import PostActions from './PostActions';
import PostCard from './PostCard';

const YourPostedServices = async () => {
	const user = await currentUser();
	const serviceCount = await prisma.servicePost.count({
		where: { userId: user?.id },
	});
	const servicePosts = await prisma.servicePost.findMany({
		where: { userId: user?.id },
	});

	return (
		<>
			{serviceCount >= 1 ? (
				<section className='grid md:grid-cols-3 gap-4'>
					{servicePosts.map((data) => (
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
				<NoDataFound message='You have not posted any service yet...' />
			)}
		</>
	);
};

export default YourPostedServices;
