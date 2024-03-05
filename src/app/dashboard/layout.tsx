import AdminNavbar from '@/components/shared/AdminNavbar';
import React from 'react';

const layout = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return (
		<main className='md:flex items-start min-h-svh'>
			<AdminNavbar />
			<aside className='flex-1 p-6 grid gap-8'>{children}</aside>
		</main>
	);
};

export default layout;
