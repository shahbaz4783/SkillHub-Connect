import ServiceCard from '../cards/ServiceCard';
import SectionTop from '../ui/SectionTop';
import { getAllListingsDataExceptOwn } from '@/data/user-listings';

const FeedServices = async () => {
	const listings = await getAllListingsDataExceptOwn('service');
	return (
		<section>
			<SectionTop
				heading='Services you might like'
				subhead='Purchase other peoples service according to your needs'
			/>
			<div className='grid gap-4 md:grid-cols-4'>
				{listings?.slice(0, 12).map((data) => (
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
			</div>
		</section>
	);
};

export default FeedServices;
