import JobDetailedInfo from '@/components/layouts/posts/JobDetailedInfo';
import JobPostDetailsAside from '@/components/layouts/posts/JobPostDetailsAside';
import { getJobDetailsData } from '@/data/all-listings';

interface ParamsProps {
  params: {
    jobId: string;
  };
}

const JobDetailPage = async ({ params }: ParamsProps) => {
  return (
    <div className="flex min-h-svh flex-col lg:flex-row">
      <JobDetailedInfo jobId={params.jobId} />

      <JobPostDetailsAside jobId={params.jobId} />
    </div>
  );
};

export default JobDetailPage;
