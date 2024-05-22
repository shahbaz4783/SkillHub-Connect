'use client';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '../ui/button';
import FormError from '../feedback/FormError';
import FormSuccess from '../feedback/FormSuccess';
import { newPasswordSchema } from '@/validators/auth.schema';
import { useState, useTransition } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { newPasswordAction } from '@/actions/auth/reset-password.action';

const NewPasswordForm = () => {
  const [isPending, startTransition] = useTransition();
  const [formMessage, setFormMessage] = useState<{
    error: string | undefined;
    success: string | undefined;
  }>({
    error: '',
    success: '',
  });

  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const form = useForm<z.infer<typeof newPasswordSchema>>({
    resolver: zodResolver(newPasswordSchema),
    defaultValues: {
      password: '',
      passwordConfirm: '',
    },
  });

  const onSubmit = (values: z.infer<typeof newPasswordSchema>) => {
    setFormMessage({ error: '', success: '' });

    startTransition(async () => {
      newPasswordAction(values, token).then((data) => {
        setFormMessage({ error: data.error, success: data.success });
      });
    });
  };

  return (
    <>
      <Form {...form}>
        <Link href={'/signup'}>
          <FaArrowLeft size={20} />
        </Link>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter Password</FormLabel>
                <FormControl>
                  <Input
                    disabled={isPending}
                    className="border-none bg-slate-100 py-6 shadow-none"
                    type="password"
                    placeholder="Create a password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="passwordConfirm"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Your Password</FormLabel>
                <FormControl>
                  <Input
                    disabled={isPending}
                    className="border-none bg-slate-100 py-6 shadow-none"
                    type="password"
                    placeholder="Create a password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormError message={formMessage.error} />
          <FormSuccess message={formMessage.success} />
          <Button disabled={isPending} type="submit">
            {isPending ? 'Creating New Password...' : 'Create New Password'}
          </Button>
        </form>
      </Form>
    </>
  );
};

export default NewPasswordForm;
