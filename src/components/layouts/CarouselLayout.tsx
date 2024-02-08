import React from 'react';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import SectionTop from '../ui/SectionTop';

interface CarouselProps {
	heading: string;
	subhead: string
	carouselItem: { img: string; title: string; link?: string }[];
}

export default function CarouselLayout({
	heading,
	subhead,
	carouselItem,
}: CarouselProps) {
	return (
		<Carousel
			opts={{
				align: 'start',
			}}
			className='w-full mb-16'
		>
			<SectionTop heading={heading} subhead={subhead} />
			<CarouselContent>
				{carouselItem.map((data, index) => (
					<CarouselItem key={index} className='md:basis-1/2 lg:basis-1/4'>
						<div className='border rounded-xl overflow-hidden'>
							<Image src={data.img} alt='carousel image' width={500} height={500} />
							<p className='p-2 font-semibold text-stone-600'>{data.title}</p>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious className='hidden' />
			<CarouselNext className='hidden' />
		</Carousel>
	);
}
