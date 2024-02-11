import { Input } from '@/components/ui/input';
import React from 'react';

const Login = () => {
	return (
		<div>
			<form action='' className='m-28 p-8 border'>
				<Input type='email' placeholder='Email' />
				<Input type='password' placeholder='Password' />
			</form>
		</div>
	);
};

export default Login;
