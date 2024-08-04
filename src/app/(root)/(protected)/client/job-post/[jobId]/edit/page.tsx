import JobPostForm from '@/components/forms/post/JobPostForm';
import SectionHeading from '@/components/shared/SectionHeading';
import { getJobDetailsData } from '@/data/posts';
import { currentUser } from '@/lib/auth';
import paths from '@/lib/paths';
import { isOwnedJobPost } from '@/lib/validation';
import { redirect } from 'next/navigation';

interface ParamsProps {
  params: {
    jobId: string;
  };
}

const EditJobPostPage = async ({ params }: ParamsProps) => {
  const jobInfo = await getJobDetailsData(params.jobId);
  const ownedJobPost = await isOwnedJobPost(params.jobId);
  if (!ownedJobPost) redirect(paths.jobPost(params.jobId, ''));

  return (
    <div>
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
