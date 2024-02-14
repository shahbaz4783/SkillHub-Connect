import Link from 'next/link';
import React from 'react';

const AdminNavbar = () => {
	return (
		<aside className='flex flex-col gap-8 bg-green-500 p-6'>
      <div></div>
			<section>
				<p>Adam</p>
				<p>adam@mail.com</p>
			</section>
			<nav className='flex flex-col sticky items-start top-[8vh]'>
				<Link href='/dashboard'>Dashboard</Link>
				<Link href='/dashboard/services'>Add a service</Link>
				<Link href='/dashboard/jobs'>Add a job</Link>
				<Link href='/dashboard/settings'>Settings</Link>
			</nav>
		</aside>
	);
};

export default AdminNavbar;
