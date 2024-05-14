import { currentUser } from '@/lib/auth';
import { CircleUser } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const FeedUser = async () => {
  const user = await currentUser();

  return (
    <section className="space-y-3 rounded-md bg-slate-100 p-4 pb-5">
      <div className="flex gap-3">
        {user?.image ? (
          <Image
            className="aspect-square rounded-xl"
            src={user?.image}
            alt="User Profile Image"
            width={80}
            height={80}
          />
        ) : (
          <CircleUser />
        )}
        <div className="flex-1">
          <p className="text-lg font-semibold">{user?.name}</p>
          <p className="text-sm">Web Development | CSS | Javascript | React </p>
        </div>
      </div>
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
