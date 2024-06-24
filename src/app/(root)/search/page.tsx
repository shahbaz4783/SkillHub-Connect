import JobPostCard from '@/components/cards/job-post-card';
import JobPostFilter from '@/components/filter/JobPostFilter';
import ResultStrip from '@/components/filter/result-strip';
import Heading from '@/components/loaders/Heading';
import JobCardSkeleton from '@/components/loaders/JobCardSkeleton';
import { Skeleton } from '@/components/ui/skeleton';
import { getJobPostsResult } from '@/data/search';
import { redirect } from 'next/navigation';
import { Suspense } from 'react';

interface SearchPageProps {
  searchParams: {
    q: string;
  };
}

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const { q } = searchParams;
  if (!q) redirect('/');

  return (
    <div>
      <div className="mt-8">
        <span>Showing results for </span>{' '}
        <q className="text-xl font-semibold">
          <Suspense fallback={<Heading />}>{q}</Suspense>
        </q>
      </div>

      <main className="mt-8 flex gap-6">
        <section className="hidden w-1/5 flex-col gap-12 lg:flex">
          <JobPostFilter />
        </section>
        <section className="md:w-4/5">
          <Suspense fallback={<Skeleton />}>
            <ResultStrip count={2} />
          </Suspense>
          <Suspense
            fallback={
              <>
                <JobCardSkeleton />
                <JobCardSkeleton />
              </>
            }
          >
            <JobPostCard fetchData={() => getJobPostsResult(q)} />
          </Suspense>
        </section>
      </main>
    </div>
  );
};

export default SearchPage;
