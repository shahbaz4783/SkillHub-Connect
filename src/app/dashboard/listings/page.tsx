import AllListings from '@/components/layouts/posts/AllListings';
import React from 'react';
import UserActionRoutes from '@/components/navigation/user-action-routes';
import { LISTING_ROUTES } from '@/constants/navigation';
import SectionHeading from '@/components/shared/SectionHeading';

const AdminServicePage = () => {
  return (
    <>
      <SectionHeading
        title="Your Listings"
        subTitle="Manage your listings here"
      />
      <UserActionRoutes routeObj={LISTING_ROUTES} />
      <AllListings />
    </>
  );
};

export default AdminServicePage;
