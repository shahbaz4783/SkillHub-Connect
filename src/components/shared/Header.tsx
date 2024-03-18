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

const Header = () => {
	const [menuOpen, setMenuOpen] = useState<boolean>(false);
	const handleNavMenu = () => {
		setMenuOpen((prevMenu) => !prevMenu);
	};
	return (
		<>
			<header className='shadow-sm flex items-start top-0 justify-between px-4 py-3 sticky z-10 bg-slate-50'>
				<div className='flex items-center'>
					<Link
						href={'/'}
						className='font-serif text-2xl text-slate-700 font-semibold'
					>
						SkillHub Connect
					</Link>
				</div>
				<nav className='hidden lg:flex items-center gap-5 text-lg'>
					{PAGES_NAV_ITEMS.map((data, index) => (
						<NavLink key={index} href={data.path}>
							{data.title}
						</NavLink>
					))}
				</nav>
				<div className='hidden lg:flex gap-4'>
					<Input type='search' placeholder='Search' />
					{AUTH_NAV_ITEMS.map((data, index) => (
						<NavLink key={index} href={data.path}>
							<Button variant={data.variant}>{data.title}</Button>
						</NavLink>
					))}
				</div>
				<div className='lg:hidden' onClick={handleNavMenu}>
					{menuOpen ? <IoCloseOutline size={32} /> : <IoIosMenu size={32} />}
				</div>
			</header>
			<MobileNav menuOpen={menuOpen} onHandleNavMenu={handleNavMenu} />
		</>
	);
};

export default Header;
