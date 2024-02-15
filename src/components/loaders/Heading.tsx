import { Skeleton } from '../ui/skeleton';

const Heading = () => {
	return (
		<div className='space-y-2 md:w-1/3 mb-16'>
			<Skeleton className='h-4' />
			<Skeleton className='h-4 w-1/2' />
		</div>
	);
};

export default Heading;
