import Link from 'next/link';
import SignupForm from '../../../components/forms/SignUpForm';

const SignUp = () => {
	return (
		<main className='md:border rounded-lg md:w-1/2 m-auto my-32 p-8 md:p-16'>
			<div className='mb-8'>
				<h2 className='text-3xl font-semibold'>Create a new account</h2>
				<p>
					Already have an account?{' '}
					<Link className='hover:text-green-900 text-green-700' href={'/login'}>
						Login
					</Link>{' '}
				</p>
			</div>
			<SignupForm />
		</main>
	);
};

export default SignUp;
