import { ADMIN_NAV_ITEMS } from '@/constants/nav_items';
import { currentUser } from '@/lib/auth';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AdminNavbar = async () => {
	const user = await currentUser();
	return (
		<aside className='hidden md:flex flex-col gap-8 border sticky top-0 p-6 h-svh'>
			<header className='flex items-center'>
				<Link href={'/'} className='font-serif text-xl font-semibold'>
					SkillHub Connect
				</Link>
			</header>
			<section className='border-b-[1px] pb-5'>
				{user?.image && (
					<Image
						className='rounded-xl'
						src={user?.image}
						alt='User Profile Image'
						width={80}
						height={80}
					/>
				)}
			</section>
			<nav className='flex flex-col gap-4 '>
				{ADMIN_NAV_ITEMS.map((data, index) => (
					<Link
						key={index}
						href={data.path}
						className='flex gap-2 items-center hover:bg-slate-200 p-2 rounded-md'
					>
						<span>{data.icon && <data.icon size={20} />}</span>
						<span>{data.title}</span>
					</Link>
				))}
			</nav>
		</aside>
	);
};

export default AdminNavbar;
