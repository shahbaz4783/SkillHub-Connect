import { ADMIN_NAV_ITEMS } from '@/constants/navigation';
import Link from 'next/link';
import React, { Suspense } from 'react';
import UserAvatar from '../shared/UserAvatar';
import LogoutIcon from '../forms/auth/logout';
import { Skeleton } from '../ui/skeleton';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { currentUser } from '@/lib/auth';

const AdminNavbar = async () => {
  const user = await currentUser();
  const userImg = user?.image;

  return (
    <aside className="sticky top-0 hidden h-svh flex-col gap-8 bg-slate-50 p-6 md:flex">
      <header className="flex items-center">
        <Link href={'/'} className="font-serif text-xl font-semibold">
          SkillHub Connect
        </Link>
      </header>
      <section className="flex flex-1 flex-col justify-between">
        <nav className="flex flex-col gap-4 ">
          {ADMIN_NAV_ITEMS.map((data, index) => (
            <Link
              key={index}
              href={data.path}
              className="flex items-center gap-2 rounded-md p-2 hover:bg-slate-200"
            >
              <span>{data.icon && <data.icon size={20} />}</span>
              <span>{data.title}</span>
            </Link>
          ))}
        </nav>
        <div className="flex justify-between gap-3 rounded-md bg-slate-200 p-3">
          <Suspense fallback={<Skeleton className="rounded-full" />}>
            <UserAvatar imageUrl={userImg || ''} size={48} />
          </Suspense>
          <LogoutIcon />
        </div>
      </section>
    </aside>
  );
};

export default AdminNavbar;
