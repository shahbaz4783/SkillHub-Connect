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
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import { Input } from '@/components/ui/input';
import { loginFormInput } from '@/constants/form';
import Link from 'next/link';
import { loginSchema } from '@/validators/auth.schema';
import FormError from '../feedback/FormError';
import FormSuccess from '../feedback/FormSuccess';
import { loginAction } from '@/actions/auth/login.action';
import { FaArrowLeft } from 'react-icons/fa';
import Submit from '../buttons/submit';
import { useFormState } from 'react-dom';

const LoginForm = () => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
  });

  const [formState, formAction] = useFormState(loginAction, {
    message: {},
    otpReceive: false,
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
          {formState.otpReceive && (
            <div className="m-auto">
              <FormField
                control={form.control}
                name="otp"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <InputOTP maxLength={6} {...field} className="w-full">
                        <InputOTPGroup>
                          <InputOTPSlot index={0} />
                          <InputOTPSlot index={1} />
                          <InputOTPSlot index={2} />
                        </InputOTPGroup>
                        <InputOTPSeparator />
                        <InputOTPGroup>
                          <InputOTPSlot index={3} />
                          <InputOTPSlot index={4} />
                          <InputOTPSlot index={5} />
                        </InputOTPGroup>
                      </InputOTP>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          )}
          <FormError message={formState.message.error} />
          <FormSuccess message={formState.message.success} />
          <Submit
            title={formState.otpReceive ? 'Login' : 'Send OTP'}
            loadingTitle={
              formState.otpReceive ? 'Logging In...' : 'Sending OTP...'
            }
          />
        </form>
      </Form>
    </>
  );
};

export default LoginForm;
