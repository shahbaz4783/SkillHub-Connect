import ListingRoutes from '@/components/cards/ListingRoutes';
import AllListings from '@/components/cards/admin/AllListings';
import DashboardHeader from '@/components/shared/DashboardHeader';
import React from 'react';

const AdminServicePage = () => {
	return (
		<>
			<DashboardHeader title='Your Listings' />
			<ListingRoutes />
			<AllListings />
		</>
	);
};

export default AdminServicePage;
