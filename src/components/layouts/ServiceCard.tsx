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
		<Card>
			<CardHeader className='p-0'>
				<Image src={img} width={500} height={500} alt='' />
			</CardHeader>
			<CardContent>
				<CardTitle>{title}</CardTitle>
				<div>
					<p>{days} delivery</p>
					<p>From {price}</p>
				</div>
			</CardContent>
			<CardFooter className='flex justify-between'>
				<p className=''>{profile}</p>
				<p className=''>{rating}</p>
			</CardFooter>
		</Card>
	);
}
