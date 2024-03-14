import React from 'react';
import UserGreet from './UserGreet';
import FeedServices from './FeedServices';
import FeedJobs from './FeesJobs';

const LoginHomePage = async () => {
	return (
		<>
			<UserGreet />
			<FeedServices />
			<FeedJobs />
		</>
	);
};

export default LoginHomePage;
