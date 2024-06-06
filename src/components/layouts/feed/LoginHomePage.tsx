import React, { Suspense } from 'react';
import CarouselPlugin from './UserGreet';
import FeedJobs from './FeedJobs';
import FeedUser from './FeedUser';
import QuickActions from './QuickActions';
import Heading from '@/components/loaders/Heading';
import JobCardSkeleton from '@/components/loaders/JobCardSkeleton';

const LoginHomePage = async () => {
  return (
    <div className="mt-8 flex min-h-svh flex-col-reverse gap-6 md:flex-row">
      <main className="space-y-16 md:w-3/4">
        <CarouselPlugin />
        <Suspense fallback={<JobCardSkeleton />}>
          <FeedJobs />
        </Suspense>
      </main>
      <aside className="space-y-8 md:w-1/4">
        <Suspense fallback={<Heading />}>
          <FeedUser />
        </Suspense>
        <Suspense fallback={<Heading />}>
          <QuickActions />
        </Suspense>
      </aside>
    </div>
  );
};

export default LoginHomePage;
