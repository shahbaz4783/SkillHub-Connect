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
import { useState, useTransition } from 'react';
import { userSchema } from '@/validators/user.schema';
import { updatePersonalInfoAction } from '@/actions/admin/user.action';
import { useCurrentUser } from '@/hooks/useCurrentUser';

const UpdatePersonalInfo = () => {
  const user = useCurrentUser();
  const name = user?.name as string;
  const email = user?.email as string;
  const username = user?.username as string;

  const [isPending, startTransition] = useTransition();
  const [formMessage, setFormMessage] = useState<{
    error: string | undefined;
    success: string | undefined;
  }>({
    error: '',
    success: '',
  });

  const form = useForm<z.infer<typeof userSchema>>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name,
      email,
      username,
    },
  });

  const onSubmit = (values: z.infer<typeof userSchema>) => {
    setFormMessage({ error: '', success: '' });
    startTransition(async () => {
      updatePersonalInfoAction(values).then((data) => {
        setFormMessage({ error: data.error, success: data.success });
      });
    });
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input disabled={isPending} type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input disabled={isPending} type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input disabled={isPending} type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormError message={formMessage.error} />
          <FormSuccess message={formMessage.success} />
          <Button className="float-right" disabled={isPending} type="submit">
            {isPending ? 'Updating Your Profile...' : 'Update'}
          </Button>
        </form>
      </Form>
    </>
  );
};

export default UpdatePersonalInfo;
