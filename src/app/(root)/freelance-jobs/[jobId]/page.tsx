import JobDetailedInfo from '@/components/layouts/posts/JobDetailedInfo';
import JobPostDetailsAside from '@/components/layouts/posts/JobPostDetailsAside';
import { getJobDetailsData } from '@/data/all-listings';

interface ParamsProps {
  params: {
    jobId: string;
  };
}

const JobDetailPage = async ({ params }: ParamsProps) => {
  const jobDetails = await getJobDetailsData(params.jobId);

  return (
    <div className="flex min-h-svh flex-col md:flex-row">
      <JobDetailedInfo jobId={params.jobId} />

      <JobPostDetailsAside
        connectCost={jobDetails?.connectCost as number}
        availableConnects={jobDetails?.user.connects as number}
        jobId={jobDetails?.id as string}
      />
    </div>
  );
};

export default JobDetailPage;
