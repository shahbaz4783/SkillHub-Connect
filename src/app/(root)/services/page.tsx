import ServiceCatalogCard from '@/components/cards/service-catalog-card';
import UserCard from '@/components/cards/user-card';
import ServiceCardSkeleton from '@/components/loaders/ServiceCardSkeleton';
import DashboardHeader from '@/components/shared/DashboardHeader';
import DescHeading from '@/components/ui/DescHeading';
import { getServiceCatalog } from '@/data/all-listings';
import { getAllUserData } from '@/data/user';
import { Suspense } from 'react';

const JobDetails = async () => {
  return (
    <main className="my-12 space-y-16">
      <DescHeading
        heading="Browse and buy projects"
        subhead="Complete your most pressing work with Project Catalog. Browse and buy predefined projects in just a few clicks"
      />
      <section className="space-y-12">
        <DashboardHeader
          title="Projects you may like"
          subTitle="Check out some of the latest projects, you may like them"
        />
        <Suspense
          fallback={
            <div className="grid gap-8 lg:grid-cols-4">
              <ServiceCardSkeleton />
              <ServiceCardSkeleton />
              <ServiceCardSkeleton />
              <ServiceCardSkeleton />
            </div>
          }
        >
          <ServiceCatalogCard fetchData={() => getServiceCatalog()} />
        </Suspense>
      </section>
      <section className="space-y-12">
        <DashboardHeader
          title="Skilled Professionals"
          subTitle="Find and Connect with Professionals in Your Industry"
        />
        <Suspense
          fallback={
            <div className="grid gap-8 lg:grid-cols-3">
              <ServiceCardSkeleton />
              <ServiceCardSkeleton />
            </div>
          }
        >
          <UserCard fetchData={() => getAllUserData()} />
        </Suspense>
      </section>
    </main>
  );
};

export default JobDetails;
