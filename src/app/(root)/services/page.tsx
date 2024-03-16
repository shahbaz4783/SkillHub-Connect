import Banner from '@/components/shared/Banner';
import CarouselLayout from '@/components/shared/CarouselLayout';
import SectionTop from '@/components/ui/SectionTop';
import { shopByCategory } from '@/constants/carousel-data';
import ServiceCard from '@/components/cards/ServiceCard';
import { prisma } from '@/lib/prisma';
import HowServiceWorks from '@/components/static/HowServiceWorks';

const Services = async () => {
	const serviceData = await prisma?.servicePost.findMany();
	return (
		<main>
			<Banner
				title='Project Catalog'
				slogan='Clear scope. Upfront price. No surprises.'
				description='Complete your most pressing work with Project Catalog. Browse and buy predefined projects in just a few clicks.'
				placeholder='Try "content writing" or "ui/ux developer" '
			/>
			<CarouselLayout
				heading='Shop By Category'
				subhead='Explore a Variety of Freelance Services Across Different Categories'
				carouselItem={shopByCategory}
			/>
			<HowServiceWorks />

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
