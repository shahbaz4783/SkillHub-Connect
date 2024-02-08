import Banner from '@/components/layouts/Banner';
import ListItem from '@/components/ui/ListItem';
import SectionTop from '@/components/ui/SectionTop';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { howToPostService, howToGetWork } from '@/data/static-lists_data';

const Services = () => {
	return (
		<main className='w-10/12 m-auto'>
			<Banner
				title='Ways to earn'
				slogan='Do the work you love, your way'
				description='Build rewarding relationships in the world’s Work Marketplace. Your home for the work you want.'
			/>
			<section className='mb-16'>
				<SectionTop heading='Explore the different ways to earn' subhead='' />
				<Tabs defaultValue='talent'>
					<TabsList className='w-full'>
						<TabsTrigger value='talent'>Talent Marketplace</TabsTrigger>
						<TabsTrigger value='project'>Project Catalog</TabsTrigger>
					</TabsList>
					<TabsContent
						value='talent'
						className='grid md:grid-cols-3 gap-6 md:gap-16 md:text-center'
					>
						{howToGetWork.map((data, index) => (
							<ListItem
								key={index}
								title={data.heading}
								subheading={data.subheading}
							>
								{data.icon && <data.icon />}
							</ListItem>
						))}
					</TabsContent>
					<TabsContent
						value='project'
						className='grid md:grid-cols-3 gap-6 md:gap-16 md:text-center mt-0 '
					>
						{howToPostService.map((data, index) => (
							<ListItem
								key={index}
								title={data.heading}
								subheading={data.subheading}
							>
								{data.icon && <data.icon />}
							</ListItem>
						))}
					</TabsContent>
				</Tabs>
			</section>
		</main>
	);
};

export default Services;