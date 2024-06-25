import JobPostCard from '@/components/cards/job-post-card';
import JobPostFilter from '@/components/filter/JobPostFilter';
import JobPostCardSkeleton from '@/components/loaders/JobCardSkeleton';
import DescHeading from '@/components/ui/DescHeading';
import { getJobPosts } from '@/data/all-listings';
import { Suspense } from 'react';

const JobPage = () => {
  return (
    <main className="my-12">
      <DescHeading
        heading="Find the best jobs"
        subhead="It takes just one job to develop a successful relationship that can propel your career forward."
      />
      <section className="grid gap-8 md:grid-cols-4">
        <div>
          <JobPostFilter />
        </div>
        <div className="col-span-3">
          <Suspense fallback={<JobPostCardSkeleton />}>
            <JobPostCard fetchData={() => getJobPosts('all')} />
          </Suspense>
        </div>
      </section>
    </main>
  );
};

export default JobPage;
