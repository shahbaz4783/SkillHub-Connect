import UserAvatar from '@/components/shared/UserAvatar';
import { Skeleton } from '@/components/ui/skeleton';
import { getUserProfileByID } from '@/data/user';
import { currentUser } from '@/lib/auth';
import Link from 'next/link';
import { Suspense } from 'react';

const FeedUser = async () => {
  const user = await currentUser();
  if (!user?.id) return null;
  const userProfile = await getUserProfileByID(user?.id);
  return (
    <section className="space-y-3 rounded-md bg-slate-100 p-4 pb-5">
      <article className="flex gap-3">
        <div className="m-auto w-1/6">
          <Suspense fallback={<Skeleton className="h-12 w-12 rounded-full" />}>
            <UserAvatar />
          </Suspense>
        </div>
        <div className="w-5/6">
          <Suspense fallback={<Skeleton className="h-4" />}>
            <p className="text-lg font-semibold">{user?.name}</p>
          </Suspense>
          <p className="line-clamp-2 text-sm">{userProfile?.userTitle}</p>
        </div>
      </article>
      <div>
        <Link
          className="text-sm text-slate-500 underline underline-offset-2 hover:text-slate-700"
          href={'/dashboard/settings/profile-settings'}
        >
          Update your profile
        </Link>
      </div>
    </section>
  );
};

export default FeedUser;
