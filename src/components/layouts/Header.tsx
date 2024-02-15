'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import NavLink from '../ui/NavLink';
import { IoIosMenu } from 'react-icons/io';
import { IoCloseOutline } from 'react-icons/io5';
import { useState } from 'react';
import { AUTH_NAV_ITEMS, PAGES_NAV_ITEMS } from '@/data/nav_items';

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
						className='font-serif text-2xl text-green-700 font-semibold'
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
			{menuOpen && (
				<menu className='fixed flex flex-col justify-around left-0 bg-slate-100 z-50 ease-in duration-500  w-full h-svh'>
					<nav
						onClick={handleNavMenu}
						className='items-start flex flex-col gap-8 text-lg p-8'
					>
						{PAGES_NAV_ITEMS.map((data, index) => (
							<NavLink key={index} href={data.path}>
								{data.title}
							</NavLink>
						))}
					</nav>
					<div
						onClick={handleNavMenu}
						className='flex gap-4 justify-between px-6 pt-6 border-t-2 flex-wrap'
					>
						{AUTH_NAV_ITEMS.map((data, index) => (
							<NavLink key={index} href={data.path}>
								<Button variant={data.variant}>{data.title}</Button>
							</NavLink>
						))}
					</div>
				</menu>
			)}
		</>
	);
};

export default Header;
