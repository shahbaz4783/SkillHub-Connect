import DashboardHeader from '@/components/shared/DashboardHeader';
import { currentUser } from '@/lib/auth';

const Dashboard = async () => {
	const user = await currentUser();
	return (
		<>
			<DashboardHeader title='Dashboard' />
			<section className='text-xl py-4 text-slate-500'>
				<h2>Hey there, {user?.name}</h2>
			</section>
		</>
	);
};

export default Dashboard;
