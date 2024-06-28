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
import FormError from '../../feedback/FormError';
import FormSuccess from '../../feedback/FormSuccess';
import { userSchema } from '@/validators/user.schema';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { updatePersonalInfoAction } from '@/actions/user.action';
import { useFormState } from 'react-dom';
import Submit from '@/components/buttons/submit';

const UpdateAccountInfo = () => {
  const user = useCurrentUser();
  const name = user?.name as string;
  const email = user?.email as string;
  const username = user?.username as string;

  const form = useForm<z.infer<typeof userSchema>>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name,
      username,
    },
  });

  const [formState, formAction] = useFormState(
    updatePersonalInfoAction.bind(null, email),
    {
      message: {},
    },
  );

  return (
    <>
      <Form {...form}>
        <form action={formAction} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
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
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormError message={formState.message.error} />
          <FormSuccess message={formState.message.success} />
          <Submit title={'Update'} loadingTitle={'Updating your profile...'} />
        </form>
      </Form>
    </>
  );
};

export default UpdateAccountInfo;
