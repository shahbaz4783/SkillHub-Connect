'use client';

import { useSearchParams } from 'next/navigation';
import React from 'react';
import FormError from './FormError';

const OAuthError = () => {
  const searchParams = useSearchParams();
  const urlError =
    searchParams.get('error') === 'OAuthAccountNotLinked' &&
    'Please sign in with the same account you used originally.';

  return <FormError message={urlError} />;
};

export default OAuthError;
