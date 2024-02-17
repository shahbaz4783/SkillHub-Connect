import AdminNavbar from '@/components/shared/AdminNavbar';
import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className='md:flex min-h-svh'>
			<AdminNavbar />
			<section>{children}</section>
		</main>
	);
};

export default layout;
