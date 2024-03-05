import Link from 'next/link';
import { Card, CardContent, CardHeader } from '../ui/card';
import { LISTING_ROUTES } from '@/constants/quick-action.routes';

const ListingRoutes = () => {
	return (
		<menu className='grid grid-cols-1 md:grid-cols-4 gap-6 justify-between'>
			{LISTING_ROUTES.map((data) => (
				<Link key={data.path} href={data.path}>
					<Card className='cursor-pointer py-4 px-6 w-full flex justify-center items-center'>
						<CardHeader className='flex justify-center items-center'>
							{data.icon && <data.icon size={35} />}
						</CardHeader>
						<CardContent className='text-center'>{data.title}</CardContent>
					</Card>
				</Link>
			))}
		</menu>
	);
};

export default ListingRoutes;
