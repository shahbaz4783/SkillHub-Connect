import Banner from '@/components/shared/Banner';
import CarouselLayout from '@/components/shared/CarouselLayout';
import ListItem from '@/components/ui/ListItem';
import SectionTop from '@/components/ui/SectionTop';
import { shopByCategory } from '@/constants/carousel-data';
import { howServicesWorks } from '@/constants/static-lists_data';
import Image from 'next/image';
import ServiceCard from '@/components/cards/ServiceCard';

const Services = async () => {
	const serviceData = await prisma?.servicePost.findMany();
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
				<article className='grid md:grid-cols-3 lg:grid-cols-4 gap-8'>
					{serviceData &&
						serviceData.map((data) => (
							<ServiceCard
								key={data.id}
								title={data.title}
								price={data.price}
								profile={data.userId}
								days={10}
								rating={3}
								totalRating={4}
							/>
						))}
				</article>
			</section>
		</main>
	);
};

export default Services;
