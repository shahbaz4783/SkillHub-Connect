import JobPostCard from '@/components/cards/job-post-card';
import ServiceCatalogCard from '@/components/cards/service-catalog-card';
import UserProfileDetails from '@/components/layouts/posts/user-profile-details';
import SectionHeading from '@/components/shared/SectionHeading';
import {
  getJobPostsByUsername,
  getServiceCatalogByUsername,
} from '@/data/posts';
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
        <SectionHeading title="My Service Catalog" subTitle="" />
        <ServiceCatalogCard
          isOwned={true}
          fetchData={() => getServiceCatalogByUsername(params.username)}
        />
      </section>
      <section className="space-y-4 lg:w-4/6">
        <SectionHeading title="My Job Posts" subTitle="" />
        <JobPostCard
          isOwned={true}
          fetchData={() => getJobPostsByUsername(params.username)}
        />
      </section>
    </main>
  );
};

export default ProfilePage;
