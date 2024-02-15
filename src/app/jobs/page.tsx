import Banner from '@/components/layouts/Banner';
import ListItem from '@/components/ui/ListItem';
import SectionTop from '@/components/ui/SectionTop';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
	howToPostService,
	howToGetWork,
	work_categories,
} from '@/data/static-lists_data';
import Link from 'next/link';

const Services = () => {
	return (
		<main className='w-10/12 m-auto'>
			<Banner
				title='Ways to earn'
				slogan='Do the work you love, your way'
				description='Build rewarding relationships in the world’s Work Marketplace. Your home for the work you want.'
			/>
			<section className='mb-28'>
				<SectionTop heading='Explore the different ways to earn' subhead='' />
				<Tabs defaultValue='talent' className='flex flex-col'>
					<TabsList className='py-6 mb-8'>
						<TabsTrigger value='talent'>Talent Marketplace</TabsTrigger>
						<TabsTrigger value='project'>Project Catalog</TabsTrigger>
					</TabsList>
					<TabsContent
						value='talent'
						className='grid md:grid-cols-3 gap-6 md:gap-16 md:text-center md:w-3/4 m-auto'
					>
						{howToGetWork.map((data, index) => (
							<ListItem
								key={index}
								title={data.heading}
								subheading={data.subheading}
								className='md:flex-col md:items-center'
								iconSize='3.5em'
							>
								{data.icon && <data.icon />}
							</ListItem>
						))}
					</TabsContent>
					<TabsContent
						value='project'
						className='grid md:grid-cols-3 gap-6 md:gap-16 md:text-center mt-0 md:w-3/4 m-auto'
					>
						{howToPostService.map((data, index) => (
							<ListItem
								key={index}
								title={data.heading}
								subheading={data.subheading}
								className='md:flex-col md:items-center'
								iconSize='3.5em'
							>
								{data.icon && <data.icon />}
							</ListItem>
						))}
					</TabsContent>
				</Tabs>
			</section>

			<section className='mb-16'>
				<SectionTop heading='Work that’s waiting for you' subhead='' />
				<article className='grid md:grid-cols-2 gap-8'>
					{work_categories.map((data, index) => (
						<Link
						key={index}
							href={`/jobs/${encodeURIComponent(data.title.toLowerCase()).replace(/%20/g, '-').replace(/%26/g, '&')}`}
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