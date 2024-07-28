import JobPostCard from '@/components/cards/job-post-card';
import ServiceCatalogCard from '@/components/cards/service-catalog-card';
import UserProfileDetails from '@/components/layouts/posts/user-profile-details';
import SectionHeading from '@/components/shared/SectionHeading';
import NoDataFound from '@/components/ui/NoDataFound';
import {
  getJobPostsByUsername,
  getServiceCatalogByUsername,
} from '@/data/posts';
import {
  getAllUserData,
  getUserDataByUsername,
  getUserIdByUsername,
} from '@/data/user';
import { isAddressFilled, isProfileCompleted } from '@/lib/validation';
import React from 'react';

interface ParamsProps {
  params: {
    username: string;
  };
}

const ProfilePage = async ({ params }: ParamsProps) => {
  const user = await getUserIdByUsername(params.username);

  const profileCompleted = await isProfileCompleted(user?.id || '');
  const addressFilled = await isAddressFilled(user?.id || '');

  return (
    <>
      {profileCompleted && addressFilled ? (
        <main className="my-12 space-y-28">
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
      ) : (
        <main className="flex h-[80svh] items-center justify-center text-center">
          <NoDataFound message="Profile and address information of the user must be completed to access this page." />
        </main>
      )}
    </>
  );
};

export default ProfilePage;
