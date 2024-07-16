import AdminNavbar from '@/components/navigation/AdminNavbar';
import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-svh items-start md:flex">
      <AdminNavbar />
      <aside className="grid flex-1 gap-8 p-6">{children}</aside>
    </main>
  );
};

export default layout;
