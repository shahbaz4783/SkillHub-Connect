import Proposals from '@/components/cards/proposals';
import SectionHeading from '@/components/shared/SectionHeading';
import { getJobDetailsData } from '@/data/posts';
import { getProposalsByJobId } from '@/data/proposals';
import { currentUser } from '@/lib/auth';

interface ParamsProps {
  params: {
    jobId: string;
  };
}

const ProposalsOnJob = async ({ params }: ParamsProps) => {
  const jobPost = await getJobDetailsData(params.jobId);
  const jobPostTitle = jobPost?.title;

  return (
    <main className="space-y-20">
      <SectionHeading title={`Proposals on "${jobPostTitle}"`} />
      <Proposals fetchData={() => getProposalsByJobId(params.jobId)} />
    </main>
  );
};

export default ProposalsOnJob;
