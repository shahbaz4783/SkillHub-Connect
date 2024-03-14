import NoDataFound from '../../ui/NoDataFound';
import PostCard from './PostCard';
import { getUserListingsData } from '@/data/user-listings';

const YourPostedJobs = async () => {
	const listingData = await getUserListingsData('job');

	return (
		<>
			{listingData?.listings && listingData?.count >= 1 ? (
				<section className='grid md:grid-cols-3 gap-4'>
					{listingData.listings?.map((data) => (
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
