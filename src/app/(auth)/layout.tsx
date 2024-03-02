import OAuthProviders from '@/components/shared/OAuthProviders';
import AuthGreet from '@/components/static/AuthGreet';
import AuthHeader from '@/components/ui/AuthHeader';
import { FC } from 'react';

interface AuthLayoutProps {
	children: React.ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
	return (
		<>
			<main className='min-h-svh md:w-10/12 m-auto flex flex-col justify-center'>
				<section className='flex justify-between min-h-[90svh]'>
					<AuthGreet />
					<aside className='space-y-10 flex-1 p-8 md:p-16'>
						<AuthHeader />
						{children}
						<OAuthProviders />
					</aside>
				</section>
			</main>
		</>
	);
};

export default AuthLayout;
