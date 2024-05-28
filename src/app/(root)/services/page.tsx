import ServiceCard from '@/components/loaders/ServiceCard';
import DescHeading from '@/components/ui/DescHeading';
import { Suspense } from 'react';

const JobDetails = async () => {
  return (
    <main className="my-12">
      <DescHeading
        heading="Browse and buy projects"
        subhead="Complete your most pressing work with Project Catalog. Browse and buy predefined projects in just a few clicks"
      />
      <Suspense fallback={<ServiceCard />}>
        <section className="grid gap-8 md:grid-cols-4">
          <ServiceCard />
        </section>
      </Suspense>
    </main>
  );
};

export default JobDetails;
