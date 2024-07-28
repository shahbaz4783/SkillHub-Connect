import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import NoDataFound from '../ui/NoDataFound';
import { ProposalData } from '@/types/types';
import { timeSince } from '@/lib/utils';
import DetailsPara from './details-para';
import { getUsersByJobId } from '@/data/user';
import Image from 'next/image';
import SkillsList from './skills-list';
import { UserCircle } from 'lucide-react';
import UserAvatar from '../shared/UserAvatar';
import { getProposalsByJobId } from '@/data/proposals';
import paths from '@/lib/paths';

interface ProposalProps {
  fetchData: () => Promise<ProposalData[]>;
}

const Proposals = async ({ fetchData }: ProposalProps) => {
  const proposals = await fetchData();
  if (!proposals) return <NoDataFound message="No proposals found..." />;

  return (
    <section className="grid gap-4 md:grid-cols-2">
      {proposals.map(async (data) => (
        <Card className="space-y-2" key={data.id}>
          <CardContent className="space-y-3">
            <div>
              <p className="text-sm">Initiated {timeSince(data.createdAt)}</p>
              <Link
                className="font-semibold hover:text-slate-600"
                href={`/freelance-jobs/${data.jobPost.id}`}
              >
                {data.jobPost.title}
              </Link>
              <p className="text-sm">Client name: {data.user.name}</p>
            </div>
            <hr />
            <article className="space-y-4">
              <div className="justify-between md:flex">
                <h2 className="font-semibold">Your proposed terms</h2>
                <h2 className="text-sm">
                  Client's budget: ${data.jobPost.price}
                </h2>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-800">
                  Total price of project
                </h3>
                <p className="text-sm text-slate-600">
                  The amount your client will see.
                </p>
                <p className="mt-1 text-lg font-semibold text-slate-600">
                  ${data.bid.toFixed(2)}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-800">
                  You'll receive
                </h3>
                <p className="text-sm text-slate-600">
                  The estimated payment, after service fees.
                </p>
                <p className="mt-1 text-lg font-semibold text-slate-600">
                  ${data.paymentReceive.toFixed(2)}
                </p>
              </div>
            </article>
          </CardContent>
          <hr />
          <CardContent className="mb-2 space-y-2">
            <h2 className="font-semibold">Cover Letter</h2>
            <DetailsPara description={data.description} />
          </CardContent>
          <CardFooter className="space-x-6">
            <Button>Change terms</Button>
            <Button variant={'secondary'}>Withdraw proposal</Button>
          </CardFooter>
        </Card>
      ))}
    </section>
  );
};

export async function ReceivedProposals({ jobId }: { jobId: string }) {
  const proposals = await getProposalsByJobId(jobId);

  if (!proposals.length) {
    return (
      <NoDataFound message="No applications have been received for this job yet." />
    );
  }

  return (
    <div className="space-y-6">
      {proposals.map((data) => (
        <>
          <Card key={data.id} className="cursor-pointer hover:bg-slate-50">
            <CardContent className="flex items-center">
              <UserAvatar imageUrl={data.user.image || ''} size={60} />
              <CardContent className="w-4/5 space-y-1">
                <Link href={paths.profile(data.userId)}>
                  <CardDescription className="line-clamp-1 hover:text-slate-800">
                    {data.user.name}
                  </CardDescription>
                </Link>
                <CardTitle className="line-clamp-1">
                  {data.user.profile?.userTitle}
                </CardTitle>
                <CardDescription>{data.user.address?.country}</CardDescription>
              </CardContent>
              <CardContent>
                <Button>Hire</Button>
              </CardContent>
            </CardContent>

            <CardContent className="space-y-4">
              <CardTitle className="line-clamp-1">
                Bid: $ {data.bid.toFixed(2)}
              </CardTitle>
              <CardDescription className="line-clamp-2">
                {data.description}
              </CardDescription>
              <SkillsList skills={data.user.profile?.skills || ''} />
            </CardContent>
          </Card>
        </>
      ))}
    </div>
  );
}



export default Proposals;
