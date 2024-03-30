import Footer from '@/components/shared/Footer';
import Header from '@/components/navigation/Header';
import { currentUser } from '@/lib/auth';
import React from 'react';

const layout = async ({ children }: { children: React.ReactNode }) => {
	const user = await currentUser();

	return (
		<>
			<Header />
			<div className='w-11/12 m-auto'>{children}</div>
			{!user && <Footer />}
		</>
	);
};

export default layout;
