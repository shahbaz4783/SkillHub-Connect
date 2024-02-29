import { auth } from '@/auth';

const Dashboard = async () => {
	const session = await auth();
	return (
		<main>
			<h1>Hello {session?.user?.name}</h1>
			<p>This is your Dashboard</p>
			<h1>Session Info</h1>
			<p>{JSON.stringify(session)}</p>
		</main>
	);
};

export default Dashboard;
