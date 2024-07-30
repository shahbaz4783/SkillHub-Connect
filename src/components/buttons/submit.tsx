'use client';

import { useFormStatus } from 'react-dom';
import { Button } from '../ui/button';

interface SubmitButtonProps {
  title: string;
  loadingTitle: string;
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link';
}

const Submit = ({ title, loadingTitle, variant }: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button
      variant={variant}
      className="w-full py-5 lg:w-auto"
      type="submit"
      disabled={pending}
    >
      {pending ? loadingTitle : title}
    </Button>
  );
};

export default Submit;
