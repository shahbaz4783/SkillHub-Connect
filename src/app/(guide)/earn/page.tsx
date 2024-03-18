import Banner from '@/components/shared/Banner';
import HowToEarn from '@/components/static/HowToEarn';
import ListItem from '@/components/ui/ListItem';
import SectionTop from '@/components/ui/SectionTop';
import { work_categories } from '@/constants/static-lists_data';
import Link from 'next/link';

const Services = () => {
	return (
		<main>
			<Banner
				title='Ways to earn'
				slogan='Do the work you love, your way'
				description='Build rewarding relationships in the world’s Work Marketplace. Your home for the work you want.'
				placeholder='Try "backend" or "app development" '
			/>
			<HowToEarn />

			<section className='mb-16'>
				<SectionTop heading='Work that’s waiting for you' subhead='' />
				<article className='grid md:grid-cols-2 gap-8'>
					{work_categories.map((data, index) => (
						<Link
							key={index}
							href={`/jobs/${encodeURIComponent(data.title.toLowerCase())
								.replace(/%20/g, '-')
								.replace(/%26/g, '&')}`}
						>
							<ListItem
								title={data.title}
								subheading={data.jobs + ' jobs available'}
								className='bg-slate-100 rounded-lg p-4'
								iconSize='2.8em'
							>
								{data.icon && <data.icon />}
							</ListItem>
						</Link>
					))}
				</article>
			</section>
		</main>
	);
};

export default Services;
