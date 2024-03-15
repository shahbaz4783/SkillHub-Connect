import React from 'react';
import CarouselPlugin from './UserGreet';
import FeedServices from './FeedServices';
import FeedJobs from './FeedJobs';
import FeedUser from './FeedUser';
import QuickActions from './QuickActions';

const LoginHomePage = async () => {
	return (
		<div className='mt-8 flex flex-col-reverse min-h-svh gap-6 md:flex-row'>
			<main className='md:w-3/4 space-y-16'>
				<CarouselPlugin />
				<FeedJobs />
				<FeedServices />
			</main>
			<aside className='md:w-1/4 space-y-8'>
				<FeedUser />
				<QuickActions />
			</aside>
		</div>
	);
};

export default LoginHomePage;
