'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import NavLink from '../ui/NavLink';
import { IoIosMenu } from 'react-icons/io';
import { IoCloseOutline } from 'react-icons/io5';
import { useState } from 'react';
import { AUTH_NAV_ITEMS, PAGES_NAV_ITEMS } from '@/constants/navigation.routes';
import MobileNav from './MobileNav';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { UserProfileMenu } from './UserProfileMenu';
import SearchInput from '@/components/shared/SearchInput';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const handleNavMenu = () => {
    setMenuOpen((prevMenu) => !prevMenu);
  };

  const user = useCurrentUser();

  return (
    <>
      <header className="sticky top-0 z-10 flex items-start justify-between bg-slate-50 px-4 py-3 shadow-sm">
        <div className="flex items-center">
          <Link
            href={'/'}
            className="font-serif text-2xl font-semibold text-slate-700"
          >
            SkillHub Connect
          </Link>
        </div>
        <nav className="hidden items-center gap-5 text-lg lg:flex">
          {PAGES_NAV_ITEMS.map((data, index) => (
            <NavLink key={index} href={data.path}>
              {data.title}
            </NavLink>
          ))}
        </nav>
        {!user ? (
          <div className="hidden gap-4 lg:flex">
            <SearchInput />
            {AUTH_NAV_ITEMS.map((data, index) => (
              <NavLink key={index} href={data.path}>
                <Button variant={data.variant}>{data.title}</Button>
              </NavLink>
            ))}
          </div>
        ) : (
          <div className="hidden gap-4 lg:flex">
            <SearchInput />
            <UserProfileMenu />
          </div>
        )}

        <div className="lg:hidden" onClick={handleNavMenu}>
          {menuOpen ? <IoCloseOutline size={32} /> : <IoIosMenu size={32} />}
        </div>
      </header>
      <MobileNav menuOpen={menuOpen} onHandleNavMenu={handleNavMenu} />
    </>
  );
};

export default Header;
