import AuthHeader from '@/components/shared/AuthHeader';
import { FC } from 'react';

interface AuthLayoutProps {
	children: React.ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
	return (
		<main className='min-h-svh md:border md:w-1/2 m-auto p-8 md:p-16'>
			<AuthHeader />
			{children}
		</main>
	);
};

export default AuthLayout;
