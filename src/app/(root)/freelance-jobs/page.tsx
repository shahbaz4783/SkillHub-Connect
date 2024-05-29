import JobCard from '@/components/cards/JobCard';
import JobCardSkeleton from '@/components/loaders/JobCardSkeleton';
import DescHeading from '@/components/ui/DescHeading';
import { Suspense } from 'react';

const JobDetails = () => {
	return (
    <main className="my-12">
      <DescHeading
        heading="Find the best jobs"
        subhead="It takes just one job to develop a successful relationship that can propel your career forward."
      />
      <Suspense fallback={<JobCardSkeleton />}>
        <section className="grid gap-8 md:grid-cols-2">
          <JobCard />
        </section>
      </Suspense>
    </main>
  );
};

export default JobDetails;
