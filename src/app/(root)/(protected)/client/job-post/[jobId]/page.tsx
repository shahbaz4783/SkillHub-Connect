import JobDetailedInfo from '@/components/layouts/posts/JobDetailedInfo';
import JobPostDetailsAside from '@/components/layouts/posts/JobPostDetailsAside';
import { OneAndHalf, TwoAndHalf } from '@/components/loaders/text-skeletons';
import { Suspense } from 'react';

interface ParamsProps {
  params: {
    jobId: string;
  };
}

const JobDetailPage = async ({ params }: ParamsProps) => {
  return (
    <div className="flex min-h-svh flex-col lg:flex-row">
      <main className="lg:w-3/4">
        <Suspense
          fallback={
            <div className="space-y-12 py-8 lg:pr-4">
              <OneAndHalf />
              <hr />
              <TwoAndHalf />
              <hr />
              <OneAndHalf />
              <hr />
              <TwoAndHalf />
              <hr />
              <OneAndHalf />
              <hr />
            </div>
          }
        >
          <JobDetailedInfo jobId={params.jobId} />
        </Suspense>
      </main>

      <aside className="space-y-14 px-6 py-8 lg:w-1/5 lg:border-l-[1px]">
        <Suspense
          fallback={
            <div className="space-y-12 py-8 lg:pr-4">
              <OneAndHalf />
              <hr />
              <TwoAndHalf />
              <hr />
              <OneAndHalf />
              <hr />
              <TwoAndHalf />
              <hr />
              <OneAndHalf />
              <hr />
            </div>
          }
        >
          <JobPostDetailsAside jobId={params.jobId} />
        </Suspense>
      </aside>
    </div>
  );
};

export default JobDetailPage;
