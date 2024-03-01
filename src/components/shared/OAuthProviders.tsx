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
		<div>
			<h3>or continue with</h3>
			<Button
				variant={'ghost'}
				onClick={() => {
					oauthHandler('google');
				}}
			>
				<FcGoogle />
			</Button>
			<Button
				variant={'ghost'}
				onClick={() => {
					oauthHandler('github');
				}}
			>
				<FaGithub />
			</Button>
		</div>
	);
};

export default OAuthProviders;
