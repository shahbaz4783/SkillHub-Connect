import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { howToPostService, howToGetWork } from '@/constants/staticData';
import SectionTop from '../ui/SectionTop';
import ListItem from '../ui/ListItem';

const HowToEarn = () => {
	return (
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
	);
};

export default HowToEarn;
