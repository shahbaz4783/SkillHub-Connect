import { DeleteDialogConfirmation } from '@/components/shared/delete-confirmation-dailog';
import { Button } from '@/components/ui/button';
import NoDataFound from '@/components/ui/NoDataFound';
import { getJobDetailsData } from '@/data/posts';
import { getUserByID } from '@/data/user';
import { currentUser } from '@/lib/auth';
import paths from '@/lib/paths';
import {
  isAddressFilled,
  isOwnedJobPost,
  isProfileCompleted,
} from '@/lib/validation';
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

  if (!jobDetails) return redirect(paths.home());

  const ownedJobPost = await isOwnedJobPost(jobId);

  const profileCompleted = await isProfileCompleted(user?.id || '');
  const addressFilled = await isAddressFilled(user?.id || '');

  return (
    <aside className="space-y-14 border-l-[1px] px-6 py-8 lg:w-1/5">
      {!ownedJobPost && (
        <>
          {profileCompleted && addressFilled ? (
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
          ) : (
            <NoDataFound message="Please complete your address and profile information to apply." />
          )}
        </>
      )}

      {ownedJobPost && (
        <ul>
          <Link href={`/client/job-post/${jobId}/proposals`}>
            <li>View proposals</li>
          </Link>
          <li>Make Private</li>
          <Link href={`/client/job-post/${jobId}/edit`}>
            <li>Edit Posting</li>
          </Link>
          <li className="text-left">
            <DeleteDialogConfirmation postId={jobId} />
          </li>
        </ul>
      )}

      {!ownedJobPost && (
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
      )}

      <div>
        <h2 className="text-lg font-semibold">About the client</h2>
        {jobDetails.user.name}
      </div>
    </aside>
  );
};

export default JobPostDetailsAside;
