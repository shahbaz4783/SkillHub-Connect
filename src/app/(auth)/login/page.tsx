'use client';

import AuthHeader from '@/components/ui/AuthHeader';
import LoginForm from '../../../components/forms/auth/LoginForm';
import AuthProviders from '@/components/shared/AuthProviders';
import { useSearchParams } from 'next/navigation';
import OAuthError from '@/components/feedback/OAuthError';

const Login = () => {
  const searchParams = useSearchParams();
  const emailAuth = searchParams.get('auth') === 'credential';

  return (
    <>
      <AuthHeader
        heading="Login to your account"
        subHeading="Don’t have an account?"
        label="Sign Up"
        linkTo="/signup"
      />
      {emailAuth ? <LoginForm /> : <AuthProviders />}
      <OAuthError />
    </>
  );
};

export default Login;
