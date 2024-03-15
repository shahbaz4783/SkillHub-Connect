import React from 'react';
import UserGreet from './UserGreet';
import FeedServices from './FeedServices';
import FeedJobs from './FeedJobs';

const LoginHomePage = async () => {
	return (
		<div className='mt-8 flex flex-col gap-6 md:flex-row'>
			<main className='md:w-3/4'>
				<UserGreet />
				<FeedJobs />
				<FeedServices />
			</main>
			<aside className='md:w-1/4 bg-slate-200 rounded-md p-4'>
				<div>
					<p>Hello</p>
				</div>
			</aside>
		</div>
	);
};

export default LoginHomePage;
