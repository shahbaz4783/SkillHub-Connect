import JobListCard from '@/components/cards/JobListCard';
import JobPostFilter from '@/components/filter/JobPostFilter';
import ResultStrip from '@/components/filter/result-strip';
import Sortby from '@/components/filter/sortby';
import Heading from '@/components/loaders/Heading';
import JobCardSkeleton from '@/components/loaders/JobCardSkeleton';
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
  const data = await getJobPostsResult(q);
  if (!data) return null;

  return (
    <div>
      <div className="mt-8">
        <span>Showing results for </span>{' '}
        <q className="text-xl font-semibold">
          <Suspense fallback={<Heading />}>{q}</Suspense>
        </q>
      </div>

      <main className="mt-8 flex gap-6">
        <section className="hidden w-1/5 flex-col lg:flex">
          <JobPostFilter />
        </section>
        <section className="md:w-4/5">
          <ResultStrip count={data?.count} />
          <Suspense
            fallback={
              <>
                <JobCardSkeleton />
                <JobCardSkeleton />
              </>
            }
          >
            <JobListCard query={q} />
          </Suspense>
        </section>
      </main>
    </div>
  );
};

export default SearchPage;
