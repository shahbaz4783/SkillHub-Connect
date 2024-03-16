import { Input } from '../ui/input';
import { FC } from 'react';
import { Card } from '../ui/card';

interface BannerProps {
	title: string;
	slogan: string;
	description: string;
	placeholder: string;
}

const Banner: FC<BannerProps> = ({
	title,
	slogan,
	description,
	placeholder,
}) => {
	return (
		<Card className='p-6 mt-8 mb-16 bg-gradient-to-r from-slate-600 to-slate-700 text-stone-50'>
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
						placeholder={placeholder}
					/>
				</div>
			</aside>
		</Card>
	);
};

export default Banner;
