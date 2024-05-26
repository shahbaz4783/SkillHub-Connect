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
import AuthHeader from '../../ui/AuthHeader';
import { Input } from '../../ui/input';
import { resetSchema } from '@/validators/auth.schema';
import FormError from '../../feedback/FormError';
import FormSuccess from '../../feedback/FormSuccess';
import { useFormState } from 'react-dom';
import Submit from '@/components/buttons/submit';
import { resetPasswordAction } from '@/actions/auth.action';

const ForgotPassowordByEmail = () => {
  const form = useForm<z.infer<typeof resetSchema>>({
    resolver: zodResolver(resetSchema),
  });

  const [formState, formAction] = useFormState(resetPasswordAction, {
    message: {},
  });

  return (
    <>
      <AuthHeader
        heading="Forgot Password"
        subHeading="Enter your email to reset your password"
        label=""
        linkTo=""
      />
      <Form {...form}>
        <form action={formAction} className="space-y-8">
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
          <FormError message={formState.message.error} />
          <FormSuccess message={formState.message.success} />
          <Submit
            title="Send Verification Link"
            loadingTitle="Sending verification link..."
          />
        </form>
      </Form>
    </>
  );
};

export default ForgotPassowordByEmail;
