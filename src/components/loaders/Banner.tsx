import { Skeleton } from '../ui/skeleton';

const Banner = () => {
	return (
		<article className='animate-pulse flex flex-col gap-4 bg-slate-100 p-4 rounded-lg mb-16'>
			<div className='space-y-2'>
				<Skeleton className='h-4 w-1/2 md:w-1/12' />
				<div className='space-y-2 py-8'>
					<Skeleton className='h-4 md:w-1/3' />
					<Skeleton className='h-4 w-1/2 md:w-1/6' />
				</div>
				<div className='space-y-2 pb-8'>
					<Skeleton className='h-4 md:w-1/3' />
					<Skeleton className='h-4 md:w-1/3' />
				</div>
			</div>
			<div className='space-y-2 md:w-1/3'>
				<Skeleton className='h-5 rounded-sm' />
				<div className='flex gap-3'>
					<Skeleton className='h-4 w-1/4' />
					<Skeleton className='h-4 w-1/4' />
					<Skeleton className='h-4 w-1/4' />
					<Skeleton className='h-4 w-1/4' />
				</div>
			</div>
		</article>
	);
};

export default Banner;
