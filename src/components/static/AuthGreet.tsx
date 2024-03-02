import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AuthGreet = () => {
	return (
		<aside className='hidden rounded-lg bg-gradient-to-r from-slate-600 to-slate-700 text-white md:flex flex-col justify-between gap-16 p-8 w-2/5 '>
			<header className='flex items-center'>
				<Link
					href={'/'}
					className='font-serif text-2xl text-white font-semibold'
				>
					SkillHub Connect
				</Link>
			</header>

			<article className='space-y-6'>
				<h2 className='font-bold  text-5xl'>Start your journey with us.</h2>
				<p className='text-lg'>
					Discover the world’s best community of freelancer and business owners.
				</p>
			</article>

			<article className='bg-slate-800 p-4 rounded-md space-y-5'>
				<q className='text-slate-200'>
					Simply unbelievable! I am really satisfied with my project and
					business. This is absolute wonderful!
				</q>
				<div className='flex gap-3'>
					<Image
						className='border rounded-sm'
						src={
							'https://images.unsplash.com/photo-1619895862022-09114b41f16f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						}
						width={60}
						height={60}
						alt='profile pic'
					/>
					<div>
						<p className='font-semibold'>Timson K</p>
						<p className='text-sm text-slate-300'>Freelancer</p>
					</div>
				</div>
			</article>
		</aside>
	);
};

export default AuthGreet;
