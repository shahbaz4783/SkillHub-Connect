import ServiceCatalogCard from '@/components/cards/service-catalog-card';
import UserCard from '@/components/cards/user-card';
import HowServiceWorks from '@/components/layouts/static/HowServiceWorks';
import ServiceCardSkeleton from '@/components/loaders/ServiceCardSkeleton';
import SectionHeading from '@/components/shared/SectionHeading';
import { Button } from '@/components/ui/button';
import PageHeading from '@/components/ui/page-heading';
import { getServiceCatalog } from '@/data/all-listings';
import { getAllUserData } from '@/data/user';
import Link from 'next/link';
import { Suspense } from 'react';

const JobDetails = async () => {
  return (
    <main className="my-12 space-y-32">
      <section>
        <PageHeading
          title="Connect with Top Talent"
          subTitle="Discover and connect with talented professionals offering a wide range of services"
        />
        <div className="flex gap-4">
          <Link href={'/search?q=talent'}>
            <Button className="w-full md:w-auto">Discover Talent</Button>
          </Link>
          <Link href={'/search?q=catalogs'}>
            <Button className="w-full md:w-auto" variant={'secondary'}>
              Explore Projects
            </Button>
          </Link>
        </div>
      </section>
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
      <section className="space-y-12">
        <SectionHeading
          title="How it works"
          subTitle="Straightforward Steps, Outstanding Outcomes"
        />
        <HowServiceWorks />
      </section>
    </main>
  );
};

export default JobDetails;
