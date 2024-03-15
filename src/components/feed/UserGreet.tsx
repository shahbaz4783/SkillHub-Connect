import { currentUser } from '@/lib/auth';

const UserGreet = async () => {
	const user = await currentUser();
	return (
		<section className='bg-slate-300 rounded-md p-6 mb-12 space-y-4'>
			<div>
				<h1 className='text-3xl font-bold'>Discover Opportunities</h1>
				<p className='text-slate-600 text-lg'>
					Explore exciting opportunities tailored just for you based on your
					skills and preferences.
				</p>
			</div>
			<h1 className='text-xl'>Welcome back, {user?.name}</h1>
		</section>
	);
};

export default UserGreet;
