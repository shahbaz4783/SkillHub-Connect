import AuthGreet from '@/components/layouts/static/AuthGreet';
import { FC } from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <>
      <main className="m-auto flex min-h-svh flex-col justify-center md:w-9/12">
        <section className="flex min-h-[90svh] justify-between">
          <AuthGreet />
          <aside className="flex-1 space-y-10 p-8 md:p-16">{children}</aside>
        </section>
      </main>
    </>
  );
};

export default AuthLayout;
