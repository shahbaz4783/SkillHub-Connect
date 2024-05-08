import NoDataFound from '../../ui/NoDataFound';
import PostActions from './PostActions';
import PostCard from './PostCard';
import { getUserListingsData } from '@/data/user-listings';

const YourPostedJobs = async () => {
	const listingData = await getUserListingsData('job');

	return (
    <>
      {listingData?.listings && listingData?.count >= 1 ? (
        <section className="grid gap-4 md:grid-cols-3">
          {listingData.listings?.map((data) => (
            <PostCard
              key={data.id}
              id={data.id}
              title={data.title}
              description={data.description}
              date={data.createdAt.toDateString()}
              price={data.price}
              postType="jobPost"
            />
          ))}
        </section>
      ) : (
        <NoDataFound message="You have not posted any job yet..." />
      )}
    </>
  );
};

export default YourPostedJobs;
