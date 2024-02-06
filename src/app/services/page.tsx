import Banner from '@/components/layouts/Banner';
import CarouselLayout from '@/components/layouts/CarouselLayout';
import ListItem from '@/components/layouts/ListItem';
import SectionTop from '@/components/layouts/SectionTop';
import { shopByCategory } from '@/data/carousel-data';
import { howServicesWorks } from '@/data/static-lists_data';

export default function Services() {
	return (
		<main className='w-10/12 m-auto'>
			<Banner
				title='Project Catalog'
				slogan='Clear scope. Upfront price. No surprises.'
				description='Complete your most pressing work with Project Catalog. Browse and buy predefined projects in just a few clicks.'
			/>
			<CarouselLayout
				heading='Shop By Category'
				subhead='Explore a Variety of Freelance Services Across Different Categories'
				carouselItem={shopByCategory}
			/>
			<section>
				<SectionTop heading='How it works' subhead='' />
				<article className='flex flex-col gap-2'>
					{howServicesWorks.map((data) => (
						<ListItem
							key={data.heading}
							title={data.heading}
							subheading={data.subheading}
						>
							{data.icon && <data.icon />}
						</ListItem>
					))}
				</article>
			</section>
		</main>
	);
}
