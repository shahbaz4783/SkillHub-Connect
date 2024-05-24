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
import { loginFormInput } from '@/constants/form';
import Link from 'next/link';
import { loginSchema } from '@/validators/auth.schema';
import FormError from '../feedback/FormError';
import FormSuccess from '../feedback/FormSuccess';
import { loginAction } from '@/actions/auth/login.action';
import { useSearchParams } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';
import Submit from '../buttons/submit';
import { useFormState } from 'react-dom';

const LoginForm = () => {
  const searchParams = useSearchParams();
  const urlError =
    searchParams.get('error') === 'OAuthAccountNotLinked' &&
    'Please sign in with the same account you used originally.';

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
  });

  const [formState, formAction] = useFormState(loginAction, {
    message: {},
  });

  return (
    <>
      <Form {...form}>
        <Link href={'/login'}>
          <FaArrowLeft size={20} />
        </Link>

        <form action={formAction} className="flex flex-col gap-4">
          {loginFormInput.map((data) => (
            <FormField
              key={data.id}
              control={form.control}
              name={data.name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{data.label}</FormLabel>
                  <FormControl>
                    <Input
                      className="border-none bg-slate-100 py-6 shadow-none"
                      type={data.type}
                      placeholder={data.placeholder}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <Link
            className="text-right text-sm font-semibold text-slate-500 hover:underline"
            href={'/forgot-password'}
          >
            Forgot Password?
          </Link>
          <FormError message={formState.message.error || urlError} />
          <FormSuccess message={formState.message.success} />
          <Submit title="Login" loadingTitle="Logging In..." />
        </form>
      </Form>
    </>
  );
};

export default LoginForm;
