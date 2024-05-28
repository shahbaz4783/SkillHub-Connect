import ServiceCard from '@/components/cards/ServiceCard';
import ServiceCardSkeleton from '@/components/loaders/ServiceCardSkeleton';
import DescHeading from '@/components/ui/DescHeading';
import { Suspense } from 'react';

const JobDetails = async () => {
  return (
    <main className="my-12">
      <DescHeading
        heading="Browse and buy projects"
        subhead="Complete your most pressing work with Project Catalog. Browse and buy predefined projects in just a few clicks"
      />
      <section className="grid gap-8 md:grid-cols-4">
        <Suspense fallback={<ServiceCardSkeleton />}>
          <ServiceCard />
        </Suspense>
      </section>
    </main>
  );
};

export default JobDetails;
