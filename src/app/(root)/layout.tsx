import Footer from '@/components/shared/Footer';
import Navbar from '@/components/navigation/Navbar';
import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-svh">
      <Navbar />
      <div className="m-auto mt-8 w-11/12">{children}</div>
      <Footer />
    </div>
  );
};

export default layout;
