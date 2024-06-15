'use client';

import { Button } from '@/components/ui/button';
import NavLink from '../ui/NavLink';
import { AUTH_NAV_ITEMS, loggedInExtraNav } from '@/constants/navigation';
import { UserProfileMenu } from '../shared/UserProfileMenu';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

const AuthNavigation = () => {
  const session = useSession();
  
  let authContent: React.ReactNode;

  if (session.status === 'loading') {
    authContent = null;
  } else if (session.data?.user) {
    authContent = (
      <div className="hidden items-center gap-8 md:flex">
        {loggedInExtraNav.map((data, index) => (
          <Link href={data.path} key={index} className="w-full space-y-8">
            <li className="flex cursor-pointer list-none items-center justify-between">
              <span>{data.icon && <data.icon />}</span>
            </li>
          </Link>
        ))}
        <li className="cursor-pointer list-none">
          <UserProfileMenu />
        </li>
      </div>
    );
  } else {
    authContent = (
      <div className="hidden gap-4 lg:flex">
        {AUTH_NAV_ITEMS.map((data, index) => (
          <NavLink key={index} href={data.path}>
            <Button variant={data.variant}>{data.title}</Button>
          </NavLink>
        ))}
      </div>
    );
  }

  return authContent;
};

export default AuthNavigation;
