import React from 'react';
import { prisma } from '@/lib/prisma';
import AdminAllJobs from './AdminAllJobs';
import { currentUser } from '@/lib/auth';

const YourPostedJobs = async () => {
	const user = await currentUser();
	const serviceCount = await prisma.servicePost.count({
		where: { userId: user?.id },
	});
	console.log({ serviceCount });

	return (
		<>
			{serviceCount >= 1 ? (
				<AdminAllJobs />
			) : (
				<p>You havent posted any service yet...</p>
			)}
		</>
	);
};

export default YourPostedJobs;
