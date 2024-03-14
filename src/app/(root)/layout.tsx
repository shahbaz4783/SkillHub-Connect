import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='h-svh flex flex-col justify-between'>
			<Header />
			<div className='w-11/12 m-auto'>{children}</div>
			<Footer />
		</div>
	);
};

export default layout;
