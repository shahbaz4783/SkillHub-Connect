import { auth } from '@/auth';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AdminNavbar = async () => {
	const session = await auth();
	return (
		<aside className='hidden md:flex fixed flex-col gap-8 border p-6 h-svh max-w-48'>
			<section>
				{session?.user?.image && (
					<Image
						className='rounded-full'
						src={session?.user?.image}
						alt='User Profile Image'
						width={80}
						height={80}
					/>
				)}

				<p>{session?.user?.name}</p>
				<p>{session?.user?.email}</p>
			</section>
			<nav className='flex flex-col'>
				<Link href='/dashboard'>Dashboard</Link>
				<Link href='/dashboard/services'>Add a service</Link>
				<Link href='/dashboard/jobs'>Add a job</Link>
				<Link href='/dashboard/settings'>Settings</Link>
			</nav>
		</aside>
	);
};

export default AdminNavbar;
