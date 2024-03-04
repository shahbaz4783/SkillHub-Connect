import AdminNavbar from '@/components/shared/AdminNavbar';
import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className='md:flex items-start'>
			<AdminNavbar />
			<aside className='border flex-1 p-6'>{children}</aside>
		</main>
	);
};

export default layout;
