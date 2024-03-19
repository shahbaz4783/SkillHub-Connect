import Link from 'next/link';
import ServiceCard from '../cards/ServiceCard';
import SectionTop from '../ui/SectionTop';
import { getAllServiceListingsExceptOwn } from '@/data/user-listings';

const FeedServices = async () => {
	const listings = await getAllServiceListingsExceptOwn();
	return (
		<section>
			<SectionTop
				heading='Services you might like'
				subhead='Purchase other peoples service according to your needs'
			/>
			<div className='grid gap-4 md:grid-cols-4'>
				{listings?.slice(0, 12).map((data) => (
					<Link key={data.id} href={`/services/${data.id}`}>
						<ServiceCard
							title={data.title}
							price={data.price}
							profile={data.userId}
							rating={3}
							totalRating={5}
							days={8}
						/>
					</Link>
				))}
			</div>
		</section>
	);
};

export default FeedServices;
