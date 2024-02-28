import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Button } from '../ui/button';

const OAuthProviders = () => {
	return (
		<div>
			<h3>or continue with</h3>
			<Button variant={'ghost'}>
				<FcGoogle />
			</Button>
		</div>
	);
};

export default OAuthProviders;
