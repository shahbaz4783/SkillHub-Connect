import Banner from '@/components/layouts/Banner';
import ListItem from '@/components/ui/ListItem';
import SectionTop from '@/components/ui/SectionTop';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { howToPostService, howToGetWork } from '@/data/static-lists_data';

export default function Services() {
	return (
		<main className='w-10/12 m-auto'>
			<Banner
				title='Ways to earn'
				slogan='Do the work you love, your way'
				description='Build rewarding relationships in the world’s Work Marketplace. Your home for the work you want.'
			/>
			<section>
				<SectionTop heading='Explore the different ways to earn' subhead='' />
				<Tabs defaultValue='account'>
					<TabsList>
						<TabsTrigger value='account'>Talent Marketplace</TabsTrigger>
						<TabsTrigger value='password'>Project Catalog</TabsTrigger>
					</TabsList>
					<TabsContent value='account'>
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
					<TabsContent value='password'>
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
}
