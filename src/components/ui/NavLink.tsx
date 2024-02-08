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
		<Link href={href} className={`${isActive && 'text-purple-700'}`}>
			{children}
		</Link>
	);
};

export default NavLink;