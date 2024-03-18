import { AUTH_NAV_ITEMS, PAGES_NAV_ITEMS } from '@/constants/navigation.routes';
import React from 'react';
import NavLink from '../ui/NavLink';
import { Button } from '../ui/button';

const MobileNav = ({
	menuOpen,
	onHandleNavMenu,
}: {
	menuOpen: boolean;
	onHandleNavMenu: () => void;
}) => {
	return (
		<>
			{menuOpen && (
				<menu className='fixed flex flex-col justify-around left-0 bg-slate-100 z-50 ease-in duration-500  w-full h-svh'>
					<nav
						onClick={onHandleNavMenu}
						className='items-start flex flex-col gap-8 text-lg p-8'
					>
						{PAGES_NAV_ITEMS.map((data, index) => (
							<NavLink key={index} href={data.path}>
								{data.title}
							</NavLink>
						))}
					</nav>
					<div
						onClick={onHandleNavMenu}
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

export default MobileNav;
