import AdminNavbar from '@/components/shared/AdminNavbar';
import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className='md:flex min-h-svh gap-8'>
			<AdminNavbar />
			<section className='ml-48 border flex-1 mx-6'>{children}</section>
		</main>
	);
};

export default layout;
