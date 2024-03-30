import ListingRoutes from '@/components/navigation/ListingRoutes';
import AllListings from '@/components/layouts/posts/AllListings';
import DashboardHeader from '@/components/shared/DashboardHeader';
import React from 'react';

const AdminServicePage = () => {
  return (
    <>
      <DashboardHeader title="Your Listings" />
      <ListingRoutes />
      <AllListings />
    </>
  );
};

export default AdminServicePage;
