import Banner from '@/components/layouts/Banner';
import CarouselLayout from '@/components/layouts/CarouselLayout';
import ListItem from '@/components/layouts/ListItem';
import SectionTop from '@/components/layouts/SectionTop';
import { shopByCategory } from '@/data/carousel-data';
import { howServicesWorks } from '@/data/static-lists_data';
import Image from 'next/image';
import { serviceData } from '@/data/temp-data';
import ServiceCard from '@/components/layouts/ServiceCard';

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
			<section className='mb-16 flex flex-col justify-between md:flex-row'>
				<aside>
					<article className='flex flex-col gap-2 md:mt-16'>
						<SectionTop
							heading='How it works'
							subhead='Streamlined Process, Seamless Results'
						/>
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
				</aside>
				<aside>
					<Image
						draggable={false}
						src={'/project-works.svg'}
						alt=''
						width={600}
						height={600}
					/>
				</aside>
			</section>

			<section className='mb-16'>
				<SectionTop
					heading='Get inspired with projects like these'
					subhead=''
				/>
				<article className='grid md:grid-cols-3 lg:grid-cols-4 gap-4'>
					{serviceData.map((data) => (
						<ServiceCard
            key={data.id}
							img={'/images/cube.jpg'}
							title={data.title}
							price={data.price}
							profile='Adam'
              days={10}
              rating={data.rating.rate}
              />
					))}
				</article>
			</section>
		</main>
	);
}
