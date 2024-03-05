const DashboardHeader = ({ title }: { title: string }) => {
	return (
		<header>
			<h1 className='text-4xl'>{title}</h1>
		</header>
	);
};

export default DashboardHeader;
