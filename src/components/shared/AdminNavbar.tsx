import { auth } from '@/auth';
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
			<section className='flex flex-col gap-1 items-center'>
				{user?.image && (
					<Image
						className='rounded-full'
						src={user?.image}
						alt='User Profile Image'
						width={80}
						height={80}
					/>
				)}
			</section>
			<nav className='flex flex-col'>
				<Link href='/dashboard'>Dashboard</Link>
				<Link href='/dashboard/services'>Services</Link>
				<Link href='/dashboard/jobs'>Jobs</Link>
				<Link href='/dashboard/settings'>Settings</Link>
			</nav>
		</aside>
	);
};

export default AdminNavbar;
