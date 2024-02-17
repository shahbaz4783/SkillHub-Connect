import Link from 'next/link';
import { Input } from '../ui/input';
import { FC } from 'react';

interface BannerProps {
	title: string;
	slogan: string;
	description: string;
}

const Banner: FC<BannerProps> = ({ title, slogan, description }) => {
	return (
		<section className='p-6 mt-8 mb-16 rounded-lg bg-gradient-to-r from-teal-800 to-teal-700 text-stone-100'>
			<aside className='md:w-2/5 flex flex-col gap-12'>
				<div>
					<h3 className='text-xl'>{title}</h3>
					<h2 className='text-4xl font-serif font-semibold my-8'>{slogan}</h2>
					<p>{description}</p>
				</div>
				<div className='flex flex-col gap-4'>
					<Input
						className='bg-stone-100 text-stone-900'
						type='search'
						placeholder='Try "video editing" or "data entry" '
					/>
					<div className='hidden lg:flex gap-3 items-center'>
						<span>Popular:</span>
						<Link
							href={'/'}
							className='bg-zinc-300 text-sm rounded-full py-1 px-2 text-zinc-900'
						>
							Logo Design
						</Link>
						<Link
							href={'/'}
							className='bg-zinc-300 text-sm rounded-full py-1 px-2 text-zinc-900'
						>
							Articles and Blog Posts
						</Link>
						<Link
							href={'/'}
							className='bg-zinc-300 text-sm rounded-full py-1 px-2 text-zinc-900'
						>
							Frontend
						</Link>
					</div>
				</div>
			</aside>
		</section>
	);
};

export default Banner;