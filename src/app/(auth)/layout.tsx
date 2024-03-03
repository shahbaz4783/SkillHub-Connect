import AuthGreet from '@/components/static/AuthGreet';
import { FC } from 'react';

interface AuthLayoutProps {
	children: React.ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
	return (
		<>
			<main className='min-h-svh md:w-9/12 m-auto flex flex-col justify-center'>
				<section className='flex justify-between min-h-[90svh]'>
					<AuthGreet />
					<aside className='space-y-10 flex-1 p-8 md:p-16'>{children}</aside>
				</section>
			</main>
		</>
	);
};

export default AuthLayout;
