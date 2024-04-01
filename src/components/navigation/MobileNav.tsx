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
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Bell, CircleHelp, LayoutDashboard, Menu, Send } from 'lucide-react';
import { UserProfileMenu } from '../shared/UserProfileMenu';

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
      <SheetContent side={'left'} className="w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetDescription>
            <nav
              onClick={onHandleNavMenu}
              className="flex flex-col items-start space-y-4"
            >
              {PAGES_NAV_ITEMS.map((data, index) => (
                <NavLink key={index} href={data.path}>
                  {data.title}
                </NavLink>
              ))}
            </nav>
            <div className="mt-4">
              {!user ? (
                <div className="gap-4 lg:flex">
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
                </ul>
              )}
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
