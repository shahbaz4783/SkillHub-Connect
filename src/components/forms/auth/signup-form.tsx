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
import { signUpFormInput } from '@/constants/form';
import FormError from '../../feedback/FormError';
import FormSuccess from '../../feedback/FormSuccess';
import { signUpSchema } from '@/validators/auth.schema';
import { signUpAction } from '@/actions/auth.action';
import { FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';
import { useFormState } from 'react-dom';
import Submit from '@/components/buttons/submit';

const SignupForm = () => {
  const form = useForm<z.output<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
  });

  const [formState, formAction] = useFormState(signUpAction, {
    message: {},
  });

  return (
    <>
      <Form {...form}>
        <Link href={'/signup'}>
          <FaArrowLeft size={20} />
        </Link>
        <form action={formAction} className="flex flex-col gap-4">
          {signUpFormInput.map((data) => (
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

          <FormError message={formState.message.error} />
          <FormSuccess message={formState.message.success} />

          <Submit title="Sign Up" loadingTitle="Creating Your Account..." />
        </form>
      </Form>
    </>
  );
};

export default SignupForm;
