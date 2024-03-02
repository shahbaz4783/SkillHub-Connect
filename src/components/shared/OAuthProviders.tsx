'use client';

import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Button } from '../ui/button';
import { FaGithub } from 'react-icons/fa6';
import { signIn } from 'next-auth/react';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';

const OAuthProviders = () => {
	const oauthHandler = (provider: 'google' | 'github') => {
		signIn(provider, {
			callbackUrl: DEFAULT_LOGIN_REDIRECT,
		});
	};

	return (
		<div className='space-y-4'>
			<h3>or continue with</h3>
			<div className='flex gap-4'>
				<Button
					className='border flex-1 bg-slate-50 gap-2'
					variant={'ghost'}
					onClick={() => {
						oauthHandler('google');
					}}
				>
					<FcGoogle />
					<span>Google</span>
				</Button>
				<Button
					className='border flex-1 bg-slate-50 gap-2'
					variant={'ghost'}
					onClick={() => {
						oauthHandler('github');
					}}
				>
					<FaGithub />
					<span>Github</span>
				</Button>
			</div>
		</div>
	);
};

export default OAuthProviders;
