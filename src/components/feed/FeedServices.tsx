import SectionTop from '../ui/SectionTop';
import { getAllListingsDataExceptOwn } from '@/data/user-listings';

const FeedServices = async () => {
	const listings = await getAllListingsDataExceptOwn('service');
	return (
		<section className='mb-16'>
			<SectionTop
				heading='Services you might like'
				subhead='Purchase other peoples service according to your needs'
			/>
			<div className='space-y-4'>
				{listings?.slice(0, 10).map((data) => (
					<div key={data.id} className='bg-slate-100 p-4'>
						<h1>{data.title}</h1>
						<p>{data.description}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default FeedServices;
