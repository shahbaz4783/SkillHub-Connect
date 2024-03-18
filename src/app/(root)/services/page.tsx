import JobCard from '@/components/cards/JobCard';
import ServiceCard from '@/components/cards/ServiceCard';
import DescHeading from '@/components/ui/DescHeading';
import { getAllServiceListings } from '@/data/user-listings';

const JobDetails = async () => {
	const listings = await getAllServiceListings();

	return (
		<main className='my-12'>
			<DescHeading
				heading='Browse and buy projects'
				subhead='Complete your most pressing work with Project Catalog. Browse and buy predefined projects in just a few clicks'
			/>
			<section className='grid md:grid-cols-4 gap-8'>
				{listings?.listings.map((data) => (
					<ServiceCard
						key={data.id}
						title={data.title}
						price={data.price}
						profile={data.userId}
						rating={3}
						totalRating={5}
						days={8}
					/>
				))}
			</section>
		</main>
	);
};

export default JobDetails;
