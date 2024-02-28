import Banner from '@/components/shared/Banner';
import ListItem from '@/components/ui/ListItem';
import SectionTop from '@/components/ui/SectionTop';
import { supportOptions } from '@/constants/static-lists_data';
import { FaServicestack } from 'react-icons/fa';

const Support = () => {
	return (
		<main className='w-10/12 m-auto'>
			<Banner
				title='Help Center'
				slogan='Find solutions fast.'
				description='Search hundreds of articles on SkillHub Help'
			/>

			<section className='mb-16'>
				<SectionTop heading='Search by category' subhead='' />
				<article className='grid md:grid-cols-4 gap-8'>
					{supportOptions.map((data, index) => (
						<ListItem
							key={index}
							title={data.heading}
							subheading={data.subheading}
							iconSize='2em'
							className='bg-slate-100 rounded-lg p-4 flex-col py-8'
						>
							{data.icon && <data.icon />}
						</ListItem>
					))}
				</article>
			</section>
		</main>
	);
};

export default Support;
