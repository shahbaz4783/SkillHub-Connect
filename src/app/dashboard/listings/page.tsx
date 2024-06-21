import AllListings from '@/components/layouts/posts/AllListings';
import DashboardHeader from '@/components/shared/DashboardHeader';
import React from 'react';
import UserActionRoutes from '@/components/navigation/user-action-routes';
import { LISTING_ROUTES } from '@/constants/navigation';

const AdminServicePage = () => {
  return (
    <>
      <DashboardHeader
        title="Your Listings"
        subTitle="Manage your listings here"
      />
      <UserActionRoutes routeObj={LISTING_ROUTES} />
      <AllListings />
    </>
  );
};

export default AdminServicePage;
