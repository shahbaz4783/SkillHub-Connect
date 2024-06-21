import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { getJobDetailsData } from '@/data/all-listings';
import { getUserProposals } from '@/data/proposals';
import Link from 'next/link';

const Proposals = async () => {
  const proposals = await getUserProposals();
  return (
    <section>
      <h1>Submitted Proposals ({proposals?.length})</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {proposals?.map(async (data) => {
          const jobPost = await getJobDetailsData(data.jobPostId);
          return (
            <Card className="space-y-2">
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm">
                    Initiated {data.createdAt.toDateString()}
                  </p>
                  <Link
                    className="font-semibold hover:text-slate-600"
                    href={`/freelance-jobs/${jobPost?.id}`}
                  >
                    {jobPost?.title}
                  </Link>
                  <p className="text-sm">Client name: {jobPost?.user.name}</p>
                </div>
                <hr />
                <article className="space-y-4">
                  <div className="justify-between md:flex">
                    <h2 className="font-semibold">Your proposed terms</h2>
                    <h2 className="text-sm">
                      Client's budget: ${jobPost?.price.toFixed(2)}
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
                <p className="text-sm text-slate-600">{data.description}</p>
              </CardContent>
              <CardFooter className="space-x-6">
                <Button>Change terms</Button>
                <Button variant={'secondary'}>Withdraw proposal</Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default Proposals;
