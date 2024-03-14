import { currentUser } from '@/lib/auth';

const UserGreet = async () => {
	const user = await currentUser();
	return (
		<section className='bg-slate-300 rounded-md p-6 mt-8 mb-12'>
			<h1 className='text-xl font-bold'>Welcome back, {user?.name}</h1>
		</section>
	);
};

export default UserGreet;
