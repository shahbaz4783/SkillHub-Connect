'use client';

import {
  AUTH_NAV_ITEMS,
  PAGES_NAV_ITEMS,
  loggedInExtraNav,
} from '@/constants/navigation';
import React from 'react';
import NavLink from '../ui/NavLink';
import { Button } from '../ui/button';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { LogOut, Menu, Settings } from 'lucide-react';
import Link from 'next/link';
import { signOut } from '@/auth';

const MobileNav = ({
  menuOpen,
  onHandleNavMenu,
}: {
  menuOpen: boolean;
  onHandleNavMenu: () => void;
}) => {
  const user = useCurrentUser();
  return (
    <Sheet>
      <SheetTrigger>
        <Menu size={30} />
      </SheetTrigger>
      <SheetContent
        side={'left'}
        className="flex w-[400px] flex-col justify-between bg-slate-50 sm:w-[540px]"
      >
        <nav
          onClick={onHandleNavMenu}
          className="mt-12 flex flex-col gap-4"
        >
          {PAGES_NAV_ITEMS.map((data, index) => (
            <Link key={data.path} href={data.path}>
              <li className="flex cursor-pointer list-none items-center justify-between border-b-[1px] pb-2">
                <span>{data.title}</span>
                <span>{data.icon && <data.icon />}</span>
              </li>
            </Link>
          ))}
        </nav>
        <menu className="mb-16">
          {!user ? (
            <div className="flex justify-between">
              {AUTH_NAV_ITEMS.map((data, index) => (
                <NavLink key={index} href={data.path}>
                  <Button variant={data.variant}>{data.title}</Button>
                </NavLink>
              ))}
            </div>
          ) : (
            <ul className="flex flex-col gap-4">
              {loggedInExtraNav.map((data) => (
                <Link href={data.path} key={data.path}>
                  <li className="flex cursor-pointer list-none items-center justify-between border-b-[1px] pb-2">
                    <span>{data.title}</span>
                    <span>{data.icon && <data.icon />}</span>
                  </li>
                </Link>
              ))}

              <Link href={'/dashboard/settings'}>
                <li className="flex cursor-pointer list-none items-center justify-between border-b-[1px] pb-2">
                  <span>Settings</span>
                  <span>
                    <Settings />
                  </span>
                </li>
              </Link>
              <li
                onClick={async () => await signOut()}
                className="flex cursor-pointer list-none items-center justify-between border-b-[1px] pb-2"
              >
                <span>Log out</span>
                <span>
                  <LogOut />
                </span>
              </li>
            </ul>
          )}
        </menu>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
