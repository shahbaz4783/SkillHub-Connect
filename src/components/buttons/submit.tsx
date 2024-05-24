'use client';

import { useFormStatus } from 'react-dom';
import { Button } from '../ui/button';

const Submit = ({
  title,
  loadingTitle,
}: {
  title: string;
  loadingTitle: string;
}) => {
  const { pending } = useFormStatus();

  return <Button type='submit' disabled={pending}>{pending ? loadingTitle : title}</Button>;
};

export default Submit;
