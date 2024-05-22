'use client';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import AuthHeader from '../ui/AuthHeader';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { resetSchema } from '@/validators/auth.schema';
import { useState, useTransition } from 'react';
import FormError from '../feedback/FormError';
import FormSuccess from '../feedback/FormSuccess';
import { resetPasswordAction } from '@/actions/auth/reset-password.action';

const ForgotPassowordByEmail = () => {
  const [isPending, startTransition] = useTransition();

  const [formMessage, setFormMessage] = useState<{
    error: string | undefined;
    success: string | undefined;
  }>({
    error: '',
    success: '',
  });

  const form = useForm<z.infer<typeof resetSchema>>({
    resolver: zodResolver(resetSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = (values: z.infer<typeof resetSchema>) => {
    setFormMessage({ error: '', success: '' });

    startTransition(async () => {
      resetPasswordAction(values).then((data) => {
        setFormMessage({ error: data.error, success: data.success });
      });
    });
  };

  return (
    <>
      <AuthHeader
        heading="Forgot Password"
        subHeading="Enter your email to reset your password"
        label=""
        linkTo=""
      />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email address"
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
            {isPending ? 'Sending verification link...' : 'Forgot Password'}
          </Button>
        </form>
      </Form>
    </>
  );
};

export default ForgotPassowordByEmail;
