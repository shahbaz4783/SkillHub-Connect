import { AUTH_NAV_ITEMS, PAGES_NAV_ITEMS } from '@/constants/navigation.routes';
import React from 'react';
import NavLink from '../ui/NavLink';
import { Button } from '../ui/button';
import { useCurrentUser } from '@/hooks/useCurrentUser';

const MobileNav = ({
  menuOpen,
  onHandleNavMenu,
}: {
  menuOpen: boolean;
  onHandleNavMenu: () => void;
}) => {
  const user = useCurrentUser();
  return (
    <>
      {menuOpen && (
        <menu className="fixed left-0 z-50 flex h-svh w-full flex-col justify-around bg-slate-100  duration-500 ease-in">
          <nav
            onClick={onHandleNavMenu}
            className="flex flex-col items-start gap-8 p-8 text-lg"
          >
            {PAGES_NAV_ITEMS.map((data, index) => (
              <NavLink key={index} href={data.path}>
                {data.title}
              </NavLink>
            ))}
          </nav>
          {!user && (
            <div
              onClick={onHandleNavMenu}
              className="flex flex-wrap justify-between gap-4 border-t-2 px-6 pt-6"
            >
              {AUTH_NAV_ITEMS.map((data, index) => (
                <NavLink key={index} href={data.path}>
                  <Button variant={data.variant}>{data.title}</Button>
                </NavLink>
              ))}
            </div>
          )}
        </menu>
      )}
    </>
  );
};

export default MobileNav;
