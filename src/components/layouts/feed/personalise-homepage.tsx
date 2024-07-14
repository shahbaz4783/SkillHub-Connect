import { Suspense } from 'react';
import CarouselPlugin from './carousel-plugin';
import FeedUser from './FeedUser';
import QuickActions from './QuickActions';
import JobCardSkeleton from '@/components/loaders/JobCardSkeleton';
import JobPostCard from '@/components/cards/job-post-card';
import { getJobPosts } from '@/data/all-listings';
import SectionTop from '@/components/ui/SectionTop';
import { Skeleton } from '@/components/ui/skeleton';

const PersonaliseHomepage = () => {
  return (
    <>
      <div className="mb-16 mt-12 flex min-h-svh flex-col-reverse gap-6 lg:flex-row">
        <main className="space-y-10 lg:w-3/4">
          <CarouselPlugin />

          <div>
            <SectionTop
              heading="Jobs you might like"
              subhead="Discover the most recent job postings tailored to your profile."
            />
            <hr />
            <Suspense fallback={<JobCardSkeleton />}>
              <JobPostCard
                isOwned={false}
                fetchData={() => getJobPosts('exceptOwn')}
              />
            </Suspense>
          </div>
        </main>
        <aside className="space-y-8 lg:w-1/4">
          <Suspense fallback={<Skeleton className="h-32" />}>
            <FeedUser />
          </Suspense>
          <Suspense fallback={<Skeleton className="h-40" />}>
            <QuickActions />
          </Suspense>
        </aside>
      </div>
    </>
  );
};

export default PersonaliseHomepage;
