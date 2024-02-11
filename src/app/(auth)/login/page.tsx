import Link from 'next/link';
import LoginForm from './LoginForm';

const Login = () => {
	return (
		<main className='border w-10/12 md:w-1/2 m-auto my-32 p-16'>
			<div className='mb-8'>
				<h2 className='text-3xl font-semibold'>Sign in to your account</h2>
				<p>
					Don't have an account?{' '}
					<Link className='hover:text-green-900 text-green-700' href={'/signup'}>
						Signup
					</Link>
				</p>
			</div>
			<LoginForm />
		</main>
	);
};

export default Login;
