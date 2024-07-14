import Footer from '@/components/shared/Footer';
import Navbar from '@/components/navigation/Navbar';
import { currentUser } from '@/lib/auth';
import React from 'react';

const layout = async ({ children }: { children: React.ReactNode }) => {
	const user = await currentUser();

	return (
    <div className="min-h-svh">
      <Navbar />
      <div className="m-auto w-11/12 my-8">{children}</div>
      {!user && <Footer />}
    </div>
  );
};

export default layout;
