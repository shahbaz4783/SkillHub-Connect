import ServiceCatalogCard from '@/components/cards/service-catalog-card';
import UserCard from '@/components/cards/user-card';
import ServiceCardSkeleton from '@/components/loaders/ServiceCardSkeleton';
import SectionHeading from '@/components/shared/SectionHeading';
import DescHeading from '@/components/ui/DescHeading';
import { getServiceCatalog } from '@/data/all-listings';
import { getAllUserData } from '@/data/user';
import { Suspense } from 'react';

const JobDetails = async () => {
  return (
    <main className="my-12 space-y-16">
      <DescHeading
        heading="Connect with Top Talent"
        subhead="Discover and connect with talented professionals offering a wide range of services"
      />
      <section className="space-y-12">
        <SectionHeading
          title="Latest Professional Services"
          subTitle="Explore the Newest Offerings from Skilled Professionals"
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
        <SectionHeading
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
