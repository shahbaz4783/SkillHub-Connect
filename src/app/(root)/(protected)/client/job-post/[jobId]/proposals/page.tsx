import { ReceivedProposals } from '@/components/cards/proposals';
import SectionHeading from '@/components/shared/SectionHeading';
import NoDataFound from '@/components/ui/NoDataFound';
import { getJobDetailsData } from '@/data/posts';
import paths from '@/lib/paths';
import { isOwnedJobPost } from '@/lib/validation';
import { redirect } from 'next/navigation';

interface ParamsProps {
  params: {
    jobId: string;
  };
}

const ProposalsOnJob = async ({ params }: ParamsProps) => {
  const jobPost = await getJobDetailsData(params.jobId);
  const jobPostTitle = jobPost?.title;

  const ownedJobPost = await isOwnedJobPost(params.jobId);
  if (!ownedJobPost) redirect(paths.jobPost(params.jobId, ''));

  return (
    <main className="space-y-20">
      <SectionHeading title={`Proposals on "${jobPostTitle}"`} />
      <ReceivedProposals jobId={params.jobId} />
    </main>
  );
};

export default ProposalsOnJob;
