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
      <JobDetailedInfo
        title={jobDetails?.title as string}
        description={jobDetails?.description as string}
        budget={jobDetails?.price as number}
        createdAt={jobDetails?.createdAt as Date}
        experience={jobDetails?.experience as string}
        skills={jobDetails?.skills as string}
      />
      <JobPostDetailsAside
        connectCost={jobDetails?.connectCost as number}
        availableConnects={jobDetails?.user.connects as number}
      />
    </div>
  );
};

export default JobDetailPage;
