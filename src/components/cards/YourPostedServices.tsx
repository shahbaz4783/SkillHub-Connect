import React from 'react';
import { Card, CardContent, CardDescription, CardTitle } from '../ui/card';

const YourPostedServices = () => {
	return (
		<Card>
			<CardContent>
				<CardTitle className='text-2xl font-normal'>
					Your Posted Services
				</CardTitle>
			</CardContent>
			<CardContent>
				<CardDescription>You havent posted any service yet...</CardDescription>
			</CardContent>
		</Card>
	);
};

export default YourPostedServices;
