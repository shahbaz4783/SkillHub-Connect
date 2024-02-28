import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Header />
			<div>{children}</div>
			<Footer />
		</>
	);
};

export default layout;
