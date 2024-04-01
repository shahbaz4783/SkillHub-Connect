'use client';

import { Button } from '@/components/ui/button';
import NavLink from '../ui/NavLink';
import { useState } from 'react';
import { AUTH_NAV_ITEMS, PAGES_NAV_ITEMS } from '@/constants/navigation';
import MobileNav from './MobileNav';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { UserProfileMenu } from '../shared/UserProfileMenu';
import SearchInput from '@/components/shared/SearchInput';
import Logo from '../shared/Logo';
import { Bell, CircleHelp, LayoutDashboard, Menu, Send, X } from 'lucide-react';
import SearchMobileSheet from './SearchMobileSheet';

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
          <SearchInput />
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
              <li className="cursor-pointer list-none">
                <CircleHelp />
              </li>
              <li className="cursor-pointer list-none">
                <Send />
              </li>
              <li className="cursor-pointer list-none">
                <LayoutDashboard />
              </li>
              <li className="cursor-pointer list-none">
                <Bell />
              </li>
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
