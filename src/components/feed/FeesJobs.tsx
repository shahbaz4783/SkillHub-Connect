import SectionTop from '../ui/SectionTop';
import { getAllListingsDataExceptOwn } from '@/data/user-listings';

const FeedJobs = async () => {
	const listings = await getAllListingsDataExceptOwn('job');
	return (
		<section className='mb-16'>
			<SectionTop
				heading='Jobs you might like'
				subhead='Work for other peoples to earn money'
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

export default FeedJobs;
