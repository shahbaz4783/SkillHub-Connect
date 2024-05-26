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
import { Button } from '../../ui/button';
import FormError from '../../feedback/FormError';
import FormSuccess from '../../feedback/FormSuccess';
import { newPasswordSchema } from '@/validators/auth.schema';
import { useState, useTransition } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useFormState } from 'react-dom';
import Submit from '@/components/buttons/submit';
import { newPasswordAction } from '@/actions/auth.action';

const NewPasswordForm = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get('token') ?? undefined;

  const form = useForm<z.infer<typeof newPasswordSchema>>({
    resolver: zodResolver(newPasswordSchema),
    defaultValues: {
      token: token,
    },
  });

  const [formState, formAction] = useFormState(newPasswordAction, {
    message: {},
  });

  return (
    <>
      <Form {...form}>
        <Link href={'/signup'}>
          <FaArrowLeft size={20} />
        </Link>
        <form action={formAction} className="flex flex-col gap-4">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter Password</FormLabel>
                <FormControl>
                  <Input
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
            name="token"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="hidden" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormError message={formState.message.error} />
          <FormSuccess message={formState.message.success} />

          <Submit
            title="Create New Password"
            loadingTitle="Creating New Password..."
          />
        </form>
      </Form>
    </>
  );
};

export default NewPasswordForm;
