'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import FormError from '../../feedback/FormError';
import FormSuccess from '../../feedback/FormSuccess';
import { addressSchema } from '@/validators/user.schema';
import { Input } from '../../ui/input';
import { updateAddressAction } from '@/actions/user.action';
import { useFormState } from 'react-dom';
import Submit from '@/components/buttons/submit';
import { UserAddress } from '@/types/types';

const UpdateAddressForm = ({
  address,
  address2,
  city,
  country,
  postal_code,
}: UserAddress) => {
  const form = useForm<z.infer<typeof addressSchema>>({
    resolver: zodResolver(addressSchema),
    defaultValues: {
      address,
      address2,
      city,
      country,
      postal_code,
    },
  });
  const [formState, formAction] = useFormState(updateAddressAction, {
    message: {},
  });
  return (
    <>
      <Form {...form}>
        <form action={formAction} className="space-y-6">
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input
                    className="border-none bg-slate-50 py-6 shadow-none"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address2"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address 2</FormLabel>
                <FormControl>
                  <Input
                    className="border-none bg-slate-50 py-6 shadow-none"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input
                    className="border-none bg-slate-50 py-6 shadow-none"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input
                    className="border-none bg-slate-50 py-6 shadow-none"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="postal_code"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Zip/Pin Code</FormLabel>
                <FormControl>
                  <Input
                    className="border-none bg-slate-50 py-6 shadow-none"
                    type="number"
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
            title="Update Profile"
            loadingTitle="Updating Your Profile..."
          />
        </form>
      </Form>
    </>
  );
};

export default UpdateAddressForm;
