import React from 'react';
import NoDataFound from '../../ui/NoDataFound';
import PostCard from './PostCard';
import { getUserListingsData } from '@/data/user-listings';

const YourPostedServices = async () => {
	const listingsData = await getUserListingsData('service');

	return (
		<>
			{listingsData?.listings && listingsData.count >= 1 ? (
				<section className='grid md:grid-cols-3 gap-4'>
					{listingsData.listings.map((data) => (
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
