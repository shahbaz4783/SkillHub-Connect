import { Button } from '@/components/ui/button';
import { getJobDetailsData } from '@/data/all-listings';
import { getUserByID } from '@/data/user';
import { currentUser } from '@/lib/auth';
import { Heart } from 'lucide-react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';

interface PostDetailsAsideProps {
  jobId: string;
}

const JobPostDetailsAside = async ({ jobId }: PostDetailsAsideProps) => {
  const jobDetails = await getJobDetailsData(jobId);

  const user = await currentUser();
  const userInfo = await getUserByID((user && user.id) || '');

  if (!jobDetails) return redirect('/');
  return (
    <aside className="space-y-14 border-l-[1px] px-6 py-8 lg:w-1/5">
      <section className="space-y-4">
        <Link href={`/client/job-post/${jobId}/apply`}>
          <Button className="w-full">Apply Now</Button>
        </Link>
        <form action="">
          <Button variant={'outline'} className="w-full space-x-2">
            <Heart size={20} /> <span>Save Job</span>
          </Button>
        </form>
      </section>
      <div className="space-y-2">
        <p className="text-sm text-slate-700">
          Required Connects to submit a proposal: {jobDetails.connectCost}
        </p>
        {user && (
          <p className="text-sm text-slate-700">
            Available Connects: {userInfo?.connects}
          </p>
        )}
      </div>
      <div>
        <h2 className="text-lg font-semibold">About the client</h2>
        {jobDetails.user.name}
      </div>
    </aside>
  );
};

export default JobPostDetailsAside;
