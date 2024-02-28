import AuthHeader from '@/components/shared/AuthHeader';
import Link from 'next/link';
import { FC } from 'react';
import { FaCheck } from 'react-icons/fa6';

interface AuthLayoutProps {
	children: React.ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
	return (
		<>
			<header className=' flex items-center px-4 py-3'>
				<Link
					href={'/'}
					className='font-serif text-2xl text-green-700 font-semibold'
				>
					SkillHub Connect
				</Link>
			</header>
			<main className='min-h-[90svh] md:w-3/4 m-auto flex flex-col justify-center'>
				<section className='flex justify-between'>
					<aside className='hidden md:block p-8 bg-green-400 flex-1'>
						<h2 className='text-2xl'>Success starts here</h2>
						<ul className='list-none px-4'>
							<li>Over 600 categories</li>
							<li>Pay per project, not per hour</li>
							<li>Access to talent and businesses across the globe</li>
						</ul>
					</aside>
					<aside className='md:bg-slate-200 flex-1 p-8 md:p-16'>
						<AuthHeader />
						{children}
					</aside>
				</section>
			</main>
		</>
	);
};

export default AuthLayout;
