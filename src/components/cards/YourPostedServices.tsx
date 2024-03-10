import React from 'react';
import { Card, CardContent, CardDescription, CardTitle } from '../ui/card';
import AdminAllServices from './AdminAllServices';
import { prisma } from '@/lib/prisma';
import { currentUser } from '@/lib/auth';

const YourPostedServices = async () => {
	const user = await currentUser();
	const serviceCount = await prisma.servicePost.count({
		where: { id: user?.id },
	});

	return (
		<Card>
			<CardContent>
				<CardTitle className='text-2xl font-normal'>
					Your Posted Services
				</CardTitle>
			</CardContent>
			<CardContent>
				{serviceCount >= 1 ? (
					<AdminAllServices />
				) : (
					<CardDescription>
						You havent posted any service yet...
					</CardDescription>
				)}
			</CardContent>
		</Card>
	);
};

export default YourPostedServices;
