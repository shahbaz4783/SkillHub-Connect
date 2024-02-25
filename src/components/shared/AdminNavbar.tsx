import Link from 'next/link';
import React from 'react';

const AdminNavbar = () => {
	return (
		<aside className='flex fixed flex-col gap-8 border p-6 h-svh max-w-48'>
			<section>
				<p>Adam</p>
				<p>adam@mail.com</p>
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
