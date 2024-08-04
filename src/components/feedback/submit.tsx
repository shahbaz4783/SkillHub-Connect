'use client';

import { useFormStatus } from 'react-dom';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

interface SubmitButtonProps {
  title: string;
  loadingTitle: string;
  className?: string;
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link';
}

const Submit = ({
  title,
  loadingTitle,
  className,
  variant,
}: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button
      variant={variant}
      className={cn('w-full py-5 lg:w-auto', className)}
      type="submit"
      disabled={pending}
    >
      {pending ? loadingTitle : title}
    </Button>
  );
};

export default Submit;
