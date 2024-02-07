import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';

interface ServiceCardProps {
	title: string;
	img: string;
	price: number;
	days: number;
	profile: string;
	rating: number;
}

export default function ServiceCard({
	title,
	img,
	price,
	days,
	profile,
	rating,
}: ServiceCardProps) {
	return (
		<Card className='flex flex-col justify-between'>
			<CardHeader>
				<Image src={img} width={500} height={500} alt='' />
			</CardHeader>
			<CardContent className='flex flex-col gap-2 justify-between'>
				<CardTitle className='line-clamp-2'>{title}</CardTitle>
				<div className='flex justify-between'>
					<p>{days} day delivery</p>
					<p>From ${price}</p>
				</div>
			</CardContent>
			<CardFooter className='flex justify-between items-center border-t-[1px]'>
				<p className=''>{profile}</p>
				<p className=''>{rating}</p>
			</CardFooter>
		</Card>
	);
}
