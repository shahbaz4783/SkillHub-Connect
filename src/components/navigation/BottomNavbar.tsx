import { BOTTOM_NAV_ITEMS } from '@/constants/navigation';
import Link from 'next/link';
import React from 'react';

const BottomNavbar = () => {
  return (
    <nav className="sticky bottom-2 m-auto flex w-11/12 justify-center gap-6 rounded-full border bg-slate-200 p-2 backdrop-blur md:hidden ">
      {BOTTOM_NAV_ITEMS.map((data, index) => (
        <Link
          key={index}
          href={data.path}
          className="flex flex-col items-center gap-2 rounded-md p-2"
        >
          {data.icon && <data.icon size={28} />}
        </Link>
      ))}
    </nav>
  );
};

export default BottomNavbar;
