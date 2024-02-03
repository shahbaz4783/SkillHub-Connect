'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLink {
	href: string;
	children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLink) {
	const path = usePathname();
	const isActive = path.startsWith(href);

	return (
		<Link
			href={href}
			className={`${isActive && 'text-purple-700'}`}
		>
			{children}
		</Link>
	);
}
