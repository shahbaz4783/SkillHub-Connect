import { MapPin, Star, UserRound } from 'lucide-react';
import SectionTop from '../ui/SectionTop';
import { getAllListingsDataExceptOwn } from '@/data/user-listings';

const skills = 'ui/ux, writing, content writing';

const FeedJobs = async () => {
	const listings = await getAllListingsDataExceptOwn('job');
	return (
		<section className='mb-16'>
			<SectionTop
				heading='Jobs you might like'
				subhead='Check out the latest opportunities matching your profile.'
			/>
			<article className='space-y-8'>
				{listings?.slice(0, 10).map((data) => (
					<div
						key={data.id}
						className='border hover:bg-slate-100 p-4 cursor-pointer rounded-md space-y-6'
					>
						<div>
							<p className='text-sm text-slate-500'>
								Posted on {data.createdAt.toDateString()}
							</p>
							<h1 className='line-clamp-1 font-semibold text-lg'>
								{data.title}
							</h1>
							<div className='text-sm text-slate-500 space-x-3'>
								<span>Intermediate</span>
								<span>Est. Budget: ${data.price}</span>
							</div>
						</div>
						<div>
							<p className='line-clamp-2 text-slate-500'>{data.description}</p>
						</div>
						<div className='space-x-2'>
							{skills.split(',').map((item, index) => (
								<span
									key={index}
									className='bg-slate-200 py-1 px-2 md:px-4 rounded-3xl'
								>
									{item.trim()}
								</span>
							))}
						</div>
						<div className='flex gap-6 text-sm'>
							<p className='flex items-center justify-center'>
								<UserRound />
								John Smith
							</p>

							<p className='flex'>
								<MapPin />
								Ireland
							</p>
						</div>
						<div className='space-x-6 text-sm'>
							<span>Proposals: 3</span>
							<span>Connects to Apply: 8</span>
						</div>
					</div>
				))}
			</article>
		</section>
	);
};

export default FeedJobs;
