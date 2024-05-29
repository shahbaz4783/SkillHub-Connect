import React from 'react';
import { Skeleton } from '../ui/skeleton';

const JobCardSkeleton = () => {
	return (
		<div className='animate-pulse flex flex-col w-1/2 gap-4 bg-slate-100 p-4 rounded-lg mb-16'>
			<div className='space-y-2'>
				<Skeleton className='h-4 w-4/5' />
				<Skeleton className='h-4 w-1/6' />
				<menu className='flex'>
					<div className='space-y-2 py-8'>
						<Skeleton className='h-4 w-1/2' />
						<Skeleton className='h-4 w-1/2' />
					</div>
					<div className='space-y-2 py-8'>
						<Skeleton className='h-4 w-1/2' />
						<Skeleton className='h-4 w-1/2' />
					</div>
				</menu>
				<div className='space-y-2 pb-8'>
					<Skeleton className='h-4 w-full' />
					<Skeleton className='h-4 w-4/5' />
				</div>
			</div>
		</div>
	);
};

export default JobCardSkeleton;
