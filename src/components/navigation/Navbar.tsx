import { PAGES_NAV_ITEMS } from '@/constants/navigation';
import MobileNav from './MobileNav';
import SearchInput from '@/components/shared/SearchInput';
import Logo from '../shared/Logo';
import AuthNavigation from './AuthNavigation';
import { Suspense } from 'react';
import { ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';

const Navbar = () => {
  return (
    <>
      <header className="sticky top-0 z-10 flex  justify-between bg-slate-50 px-4 py-3 shadow-sm">
        <div className="flex items-center gap-8">
          <Logo />
          <nav className="hidden items-center gap-1 text-lg lg:flex">
            {PAGES_NAV_ITEMS.map((data, index) => (
              <DropdownMenu key={index}>
                <DropdownMenuTrigger asChild>
                  <div className="flex cursor-pointer items-center justify-center gap-1 rounded-sm px-2 py-1 hover:bg-slate-200">
                    <p className="text-sm font-semibold text-slate-600">
                      {data.title}
                    </p>
                    {data.submenu && <ChevronDown size={14} />}
                  </div>
                </DropdownMenuTrigger>
                {data.submenu && (
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      {data.subMenuItems?.map((item) => (
                        <Link key={item.path} href={item.path}>
                          <DropdownMenuItem>
                            <span>{item.title}</span>
                          </DropdownMenuItem>
                        </Link>
                      ))}
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                )}
              </DropdownMenu>
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
