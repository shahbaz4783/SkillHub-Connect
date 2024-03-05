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
			className={`hover:text-slate-900 transition-all ${
				isActive && 'text-slate-700 font-bold'
			}`}
		>
			{children}
		</Link>
	);
};

export default NavLink;