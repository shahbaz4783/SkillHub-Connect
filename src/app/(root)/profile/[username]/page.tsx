import JobPostCard from '@/components/cards/job-post-card';
import ServiceCatalogCard from '@/components/cards/service-catalog-card';
import UserProfileDetails from '@/components/layouts/posts/user-profile-details';
import DashboardHeader from '@/components/shared/DashboardHeader';
import {
  getJobPostsByUsername,
  getServiceCatalogByUsername,
} from '@/data/all-listings';
import { getAllUserData, getUserDataByUsername } from '@/data/user';
import React from 'react';

interface ParamsProps {
  params: {
    username: string;
  };
}

const ProfilePage = async ({ params }: ParamsProps) => {
  return (
    <main className="my-12 space-y-8">
      <UserProfileDetails username={params.username} />
      <section className="space-y-4">
        <DashboardHeader title="My Service Catalog" subTitle="" />
        <ServiceCatalogCard
          fetchData={() => getServiceCatalogByUsername(params.username)}
        />
      </section>
      <section className="space-y-4 lg:w-4/6">
        <DashboardHeader title="My Job Posts" subTitle="" />
        <JobPostCard fetchData={() => getJobPostsByUsername(params.username)} />
      </section>
    </main>
  );
};

export default ProfilePage;
