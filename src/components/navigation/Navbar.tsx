import NavLink from '../ui/NavLink';
import { PAGES_NAV_ITEMS } from '@/constants/navigation';
import MobileNav from './MobileNav';
import SearchInput from '@/components/shared/SearchInput';
import Logo from '../shared/Logo';
import AuthNavigation from './AuthNavigation';
import { Suspense } from 'react';

const Navbar = () => {
  return (
    <>
      <header className="sticky top-0 z-10 flex  justify-between bg-slate-50 px-4 py-3 shadow-sm">
        <div className="flex items-center gap-8">
          <Logo />
          <nav className="hidden items-center gap-5 text-lg lg:flex">
            {PAGES_NAV_ITEMS.map((data, index) => (
              <NavLink key={index} href={data.path}>
                {data.title}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="hidden items-center gap-8 md:flex">
          <SearchInput />
          <Suspense fallback={'Loading...'}>
            <AuthNavigation />
          </Suspense>
        </div>
        <Suspense fallback={'Loading...'}>
          <MobileNav />
        </Suspense>
      </header>
    </>
  );
};

export default Navbar;
