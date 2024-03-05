import ListingRoutes from '@/components/cards/ListingRoutes';
import YourPostedJobs from '@/components/cards/YourPostedJobs';
import YourPostedServices from '@/components/cards/YourPostedServices';
import DashboardHeader from '@/components/shared/DashboardHeader';
import React from 'react';

const AdminServicePage = () => {
	return (
		<>
			<DashboardHeader title='Your Listings' />
			<ListingRoutes />
			<YourPostedServices />
			<YourPostedJobs />
		</>
	);
};

export default AdminServicePage;
