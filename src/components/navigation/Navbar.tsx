'use client';

import { Button } from '@/components/ui/button';
import NavLink from '../ui/NavLink';
import { Suspense, useState } from 'react';
import {
  AUTH_NAV_ITEMS,
  PAGES_NAV_ITEMS,
  loggedInExtraNav,
} from '@/constants/navigation';
import MobileNav from './MobileNav';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { UserProfileMenu } from '../shared/UserProfileMenu';
import SearchInput from '@/components/shared/SearchInput';
import Logo from '../shared/Logo';
import SearchMobileSheet from './SearchMobileSheet';
import Link from 'next/link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const handleNavMenu = () => {
    setMenuOpen((prevMenu) => !prevMenu);
  };

  const user = useCurrentUser();

  return (
    <>
      <header className="sticky top-0 z-10 flex  justify-between bg-slate-50 px-4 py-3 shadow-sm">
        <div className="hidden items-center gap-8 lg:flex">
          <Logo />
          <nav className="flex items-center gap-5 text-lg">
            {PAGES_NAV_ITEMS.map((data, index) => (
              <NavLink key={index} href={data.path}>
                {data.title}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="hidden items-center gap-8 md:flex">
          <Suspense>
            <SearchInput />
          </Suspense>
          {!user ? (
            <div className="hidden gap-4 lg:flex">
              {AUTH_NAV_ITEMS.map((data, index) => (
                <NavLink key={index} href={data.path}>
                  <Button variant={data.variant}>{data.title}</Button>
                </NavLink>
              ))}
            </div>
          ) : (
            <div className="hidden items-center gap-8 md:flex">
              {loggedInExtraNav.map((data) => (
                <Link
                  href={data.path}
                  key={data.path}
                  className="w-full space-y-8"
                >
                  <li className="flex cursor-pointer list-none items-center justify-between">
                    <span>{data.icon && <data.icon />}</span>
                  </li>
                </Link>
              ))}
              <li className="cursor-pointer list-none">
                <UserProfileMenu />
              </li>
            </div>
          )}
        </div>

        <menu className="flex w-full justify-between lg:hidden">
          <MobileNav menuOpen={menuOpen} onHandleNavMenu={handleNavMenu} />
          <Logo />
          <SearchMobileSheet />
        </menu>
      </header>
      {/* <MobileNav menuOpen={menuOpen} onHandleNavMenu={handleNavMenu} /> */}
    </>
  );
};

export default Navbar;
