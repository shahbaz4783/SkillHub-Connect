'use client';

import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Button } from '../ui/button';
import { FaGithub } from 'react-icons/fa6';
import { signIn } from 'next-auth/react';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { FaApple } from 'react-icons/fa';
import { MdOutlineMailOutline } from 'react-icons/md';
import Link from 'next/link';

const AuthProviders = () => {
	const oauthHandler = (provider: 'google' | 'apple' | 'github') => {
		signIn(provider, {
			callbackUrl: DEFAULT_LOGIN_REDIRECT,
		});
	};

	return (
		<section className='flex flex-col gap-12'>
			<menu className='space-y-6 flex flex-col'>
				<Button
					className='border flex-1 gap-2 p-4'
					variant={'ghost'}
					onClick={() => {
						oauthHandler('google');
					}}
				>
					<FcGoogle size={20} />
					<span>Continue with Google</span>
				</Button>

				<Link href={{ query: { auth: 'credential' } }} className='flex gap-2'>
					<Button variant={'ghost'} className='border p-6 flex gap-2 flex-1 '>
						<MdOutlineMailOutline size={20} />
						<span>Continue with Email</span>
					</Button>
				</Link>
			</menu>
			<h3 className='text-center text-slate-400 text-sm'>OR</h3>

			<menu className='flex gap-4 flex-1'>
				<Button
					className='border flex-1 gap-2 p-5'
					variant={'ghost'}
					onClick={() => {
						oauthHandler('apple');
					}}
				>
					<FaApple size={20} />
					<span>Apple</span>
				</Button>
				<Button
					className='border flex-1 gap-2 p-5'
					variant={'ghost'}
					onClick={() => {
						oauthHandler('github');
					}}
				>
					<FaGithub size={20} />
					<span>Github</span>
				</Button>
			</menu>
		</section>
	);
};

export default AuthProviders;
