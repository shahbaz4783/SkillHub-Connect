'use client';

import { AUTH_NAV_ITEMS, PAGES_NAV_ITEMS } from '@/constants/navigation';
import React from 'react';
import NavLink from '../ui/NavLink';
import { Button } from '../ui/button';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Bell,
  CircleHelp,
  LayoutDashboard,
  LogOut,
  Menu,
  Send,
  Settings,
} from 'lucide-react';
import { UserProfileMenu } from '../shared/UserProfileMenu';
import { logout } from '@/actions/auth/logout.action';

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
        className="flex w-[400px] flex-col justify-between bg-slate-50 text-lg sm:w-[540px]"
      >
        <nav
          onClick={onHandleNavMenu}
          className="mt-12 flex flex-col items-start space-y-4"
        >
          {PAGES_NAV_ITEMS.map((data, index) => (
            <NavLink key={index} href={data.path}>
              {data.title}
            </NavLink>
          ))}
        </nav>
        <menu>
          {!user ? (
            <div className="flex justify-between">
              {AUTH_NAV_ITEMS.map((data, index) => (
                <NavLink key={index} href={data.path}>
                  <Button variant={data.variant}>{data.title}</Button>
                </NavLink>
              ))}
            </div>
          ) : (
            <ul className="w-full space-y-4">
              <li className="flex cursor-pointer list-none items-center justify-between">
                <span>Help</span>
                <span>
                  <CircleHelp />
                </span>
              </li>
              <li className="flex cursor-pointer list-none items-center justify-between">
                <span>Direct Contracts</span>
                <span>
                  <Send />
                </span>
              </li>
              <li className="flex cursor-pointer list-none items-center justify-between">
                <span>Apps and Offers</span>
                <span>
                  <LayoutDashboard />
                </span>
              </li>
              <li className="flex cursor-pointer list-none items-center justify-between">
                <span>Notifications</span>
                <span>
                  <Bell />
                </span>
              </li>
              <li className="flex cursor-pointer list-none items-center justify-between">
                <span>Settings</span>
                <span>
                  <Settings />
                </span>
              </li>
              <li
                onClick={async () => await logout()}
                className="flex cursor-pointer list-none items-center justify-between"
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
