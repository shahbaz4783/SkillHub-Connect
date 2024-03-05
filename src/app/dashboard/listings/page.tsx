import ListingRoutes from '@/components/cards/ListingRoutes';
import DashboardHeader from '@/components/shared/DashboardHeader';
import React from 'react';

const AdminServicePage = () => {
	return (
		<>
			<DashboardHeader title='Your Listings' />
			<ListingRoutes />
		</>
	);
};

export default AdminServicePage;
