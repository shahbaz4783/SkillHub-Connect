import JobPostCard from '@/components/cards/job-post-card';
import FilterDrawer from '@/components/filter/filter-drawer';
import JobPostFilter from '@/components/filter/JobPostFilter';
import Heading from '@/components/loaders/Heading';
import JobCardSkeleton from '@/components/loaders/JobCardSkeleton';
import { PaginationUi } from '@/components/shared/pagination';
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
      <div className="mb-12 mt-8 text-3xl text-slate-600">
        <span className="">Showing results for </span>{' '}
        <q className="font-semibold">
          <Suspense fallback={<Heading />}>{q}</Suspense>
        </q>
      </div>

      <main className="grid items-start gap-8 md:grid-cols-4">
        <section className="col-span-1 hidden lg:block">
          <JobPostFilter />
        </section>
        <FilterDrawer />

        <section className="col-span-3">
          <Suspense
            fallback={
              <>
                <JobCardSkeleton />
                <JobCardSkeleton />
              </>
            }
          >
            <JobPostCard
              isOwned={false}
              fetchData={() => getJobPostsResult(q)}
            />
          </Suspense>
          <div>
            <PaginationUi />
          </div>
        </section>
      </main>
    </div>
  );
};

export default SearchPage;
