'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

interface NavLink {
	href: string;
	children: React.ReactNode;
}

const NavLink: FC<NavLink> = ({ href, children }) => {
	const path = usePathname();
	const isActive = path.startsWith(href);

	return (
    <Link
      href={href}
      className={`text-[1rem] transition-all  hover:text-red-900 ${
        isActive && 'font-bold text-slate-700'
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;