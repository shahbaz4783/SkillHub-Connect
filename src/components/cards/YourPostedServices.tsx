import React from 'react';
import AdminAllServices from './AdminAllServices';
import { prisma } from '@/lib/prisma';
import { currentUser } from '@/lib/auth';

const YourPostedServices = async () => {
	const user = await currentUser();
	const serviceCount = await prisma.servicePost.count({
		where: { userId: user?.id },
	});

	return (
		<>
			{serviceCount >= 1 ? (
				<AdminAllServices />
			) : (
				<p>You havent posted any service yet...</p>
			)}
		</>
	);
};

export default YourPostedServices;
