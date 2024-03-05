import React from 'react';
import { Card, CardContent, CardDescription, CardTitle } from '../ui/card';

const YourPostedJobs = () => {
	return (
		<Card>
			<CardContent>
				<CardTitle className='text-2xl font-normal'>Your Posted Jobs</CardTitle>
			</CardContent>
			<CardContent>
				<CardDescription>You havent posted any jobs yet...</CardDescription>
			</CardContent>
		</Card>
	);
};

export default YourPostedJobs;
