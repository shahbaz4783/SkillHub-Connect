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

  return (
    <Button className="w-full py-5 lg:w-auto" type="submit" disabled={pending}>
      {pending ? loadingTitle : title}
    </Button>
  );
};

export default Submit;
