'use client';

import AuthHeader from '@/components/ui/AuthHeader';
import LoginForm from '../../../components/forms/LoginForm';
import AuthProviders from '@/components/shared/AuthProviders';
import { useSearchParams } from 'next/navigation';

const Login = () => {
	const searchParams = useSearchParams();
	const emailAuth = searchParams.get('auth') === 'credential';

	return (
		<>
			<AuthHeader
				heading='Login to your account'
				subHeading='Don’t have an account?'
				label='Sign Up'
				linkTo='/signup'
			/>
			{emailAuth ? <LoginForm /> : <AuthProviders />}
		</>
	);
};

export default Login;
