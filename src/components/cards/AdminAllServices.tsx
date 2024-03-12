import { currentUser } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import React from 'react';

const AdminAllServices = async () => {
	const user = await currentUser();
	const servicePosts = await prisma.servicePost.findMany({
		where: { userId: user?.id },
	});
	console.log({ servicePosts });

	return (
		<div className=' grid grid-cols-3 gap-4'>
			{servicePosts.map((data) => (
				<div key={data.id} className='border p-2'>
					<h1>{data.title}</h1>
					<h1>{data.description}</h1>
				</div>
			))}
		</div>
	);
};

export default AdminAllServices;
