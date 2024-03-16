import ListItem from '@/components/ui/ListItem';
import SectionTop from '@/components/ui/SectionTop';
import { supportOptions } from '@/constants/static-lists_data';

const SupportOptions = () => {
	return (
		<section className='mb-16'>
			<SectionTop heading='Search by category' subhead='' />
			<article className='grid md:grid-cols-4 gap-8'>
				{supportOptions.map((data, index) => (
					<ListItem
						key={index}
						title={data.heading}
						subheading={data.subheading}
						iconSize='2em'
						className='bg-slate-100 hover:bg-slate-200 cursor-pointer rounded-lg p-4 flex-col py-8'
					>
						{data.icon && <data.icon />}
					</ListItem>
				))}
			</article>
		</section>
	);
};

export default SupportOptions;
