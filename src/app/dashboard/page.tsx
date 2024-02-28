import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';

const Dashboard = async () => {
	const session = await getServerSession(authOptions);
  console.log(session);
	return (
		<main>
			<h1>Hello Adam</h1>
			<p>This is your Dashboard {session?.user?.email}</p>
		</main>
	);
};

export default Dashboard;
