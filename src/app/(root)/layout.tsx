import Footer from '@/components/shared/Footer';
import Navbar from '@/components/navigation/Navbar';
import { currentUser } from '@/lib/auth';
import React from 'react';

const layout = async ({ children }: { children: React.ReactNode }) => {
	const user = await currentUser();

	return (
    <>
      <Navbar />
      <div className="m-auto w-11/12">{children}</div>
      {!user && <Footer />}
    </>
  );
};

export default layout;
