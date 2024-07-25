import JobPostForm from '@/components/forms/post/JobPostForm';
import SectionHeading from '@/components/shared/SectionHeading';
import { getJobDetailsData } from '@/data/posts';
import { currentUser } from '@/lib/auth';
import { redirect } from 'next/navigation';

interface ParamsProps {
  params: {
    jobId: string;
  };
}

const EditJobPostPage = async ({ params }: ParamsProps) => {
  const jobId = params.jobId;
  const user = await currentUser();
  const userId = user?.id;

  const jobInfo = await getJobDetailsData(jobId);

  if (jobInfo?.userId !== userId) redirect(`/client/job-post/${jobId}`);

  return (
    <div>
      <SectionHeading title="Edit Job Posting" />
      <JobPostForm
        jobId={params.jobId}
        title={jobInfo?.title || ''}
        skills={jobInfo?.skills || ''}
        category={jobInfo?.category || ''}
        price={jobInfo?.price || 5}
        projectType={jobInfo?.projectType || ''}
        experience={jobInfo?.experience || ''}
        description={jobInfo?.description || ''}
      />
    </div>
  );
};

export default EditJobPostPage;
