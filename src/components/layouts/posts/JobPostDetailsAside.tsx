import { DeleteDialogConfirmation } from '@/components/shared/delete-confirmation-dailog';
import { ShareDialog, ShareExpaned } from '@/components/shared/share';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import NoDataFound from '@/components/ui/NoDataFound';
import { getJobDetailsData, getJobPostCountByUserId } from '@/data/posts';
import { getUserByID } from '@/data/user';
import { currentUser } from '@/lib/auth';
import paths from '@/lib/paths';
import { formatDate } from '@/lib/utils';
import {
  isAddressFilled,
  isOwnedJobPost,
  isProfileCompleted,
} from '@/lib/validation';
import { Delete, Heart, Pen } from 'lucide-react';
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

  const userJobCount = await getJobPostCountByUserId(jobDetails.userId);

  return (
    <>
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
        <ul className="rounded-md border">
          <Link href={`/client/job-post/${jobId}/proposals`}>
            <Button
              className="w-full justify-start p-2 font-normal"
              variant={'ghost'}
            >
              View proposals
            </Button>
          </Link>
          <Button
            className="w-full justify-start p-2 font-normal"
            variant={'ghost'}
          >
            Make Private
          </Button>
          <Link href={`/client/job-post/${jobId}/edit`}>
            <Button
              className="w-full justify-start p-2 font-normal"
              variant={'ghost'}
            >
              Edit Posting
            </Button>
          </Link>
          <li>
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

      <div className="space-y-4 text-sm">
        <h2 className="text-lg font-semibold">About the client</h2>
        <div>
          <p className=" text-slate-600">{jobDetails.user.name}</p>
          <Link href={paths.profile(jobDetails.user.username || '')}>
            <p className="text-slate-600 hover:text-slate-800">
              @{jobDetails.user.username}
            </p>
          </Link>
        </div>
        <div>
          <p className=" text-slate-600">{jobDetails.user.address?.country}</p>
          <p className=" text-slate-500">{jobDetails.user.address?.city}</p>
        </div>
        <div>
          <p className=" text-slate-600">
            {userJobCount.totalJobPosts} job posted
          </p>
          <p className=" text-slate-500">
            {userJobCount.currentlyActiveJobPost} open job
          </p>
        </div>
        <div>
          <p className="text-xs text-slate-500">
            Member since {formatDate(jobDetails.user.createdAt || new Date())}
          </p>
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Job Link</h2>
        <ShareExpaned shareLink={paths.jobPost(jobDetails.id, '')} />
      </div>
    </>
  );
};

export default JobPostDetailsAside;
