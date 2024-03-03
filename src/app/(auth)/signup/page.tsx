'use client';

import AuthHeader from '@/components/ui/AuthHeader';
import SignupForm from '../../../components/forms/SignUpForm';
import AuthProviders from '@/components/shared/AuthProviders';
import { useSearchParams } from 'next/navigation';

const SignUp = () => {
	const searchParams = useSearchParams();
	const emailAuth = searchParams.get('auth') === 'credential';

	return (
		<>
			<AuthHeader
				heading='Create a new account'
				subHeading='Already have an account?'
				label='Login'
				linkTo='/login'
			/>
			{emailAuth ? <SignupForm /> : <AuthProviders />}
		</>
	);
};

export default SignUp;
