import { currentUser } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import React from 'react';

const AdminAllJobs = async () => {
	const user = await currentUser();
	const jobPosts = await prisma.jobPost.findMany({
		where: { userId: user?.id },
	});

	return (
		<div className=' grid grid-cols-3 gap-4'>
			{jobPosts.map((data) => (
				<div key={data.id} className='border p-2'>
					<h1>{data.title}</h1>
					<h1>{data.description}</h1>
				</div>
			))}
		</div>
	);
};

export default AdminAllJobs;
