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
  FormDescription,
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
import Submit from '@/components/feedback/submit';
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
          <div>
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem className="gap-6 lg:flex">
                  <div className="lg:w-1/3">
                    <FormLabel>Address</FormLabel>
                    <FormDescription>
                      Your main address, like your house number and street name
                    </FormDescription>
                  </div>
                  <div className="flex-1 space-y-3">
                    <FormControl>
                      <Input
                        className="text-slate-500"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
          </div>
          <hr />
          <div>
            <FormField
              control={form.control}
              name="address2"
              render={({ field }) => (
                <FormItem className="gap-6 lg:flex">
                  <div className="lg:w-1/3">
                    <FormLabel>Address 2</FormLabel>
                    <FormDescription>
                      Include any additional location details or landmarks
                    </FormDescription>
                  </div>
                  <div className="flex-1 space-y-3">
                    <FormControl>
                      <Input
                        className="text-slate-500"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
          </div>
          <hr />
          <div>
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem className="gap-6 lg:flex">
                  <div className="lg:w-1/3">
                    <FormLabel>Country</FormLabel>
                    <FormDescription>
                      Enter the country you reside in
                    </FormDescription>
                  </div>
                  <div className="flex-1 space-y-3">
                    <FormControl>
                      <Input
                        className="text-slate-500"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
          </div>
          <hr />
          <div>
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem className="gap-6 lg:flex">
                  <div className="lg:w-1/3">
                    <FormLabel>City</FormLabel>
                    <FormDescription>
                      Enter the name of the city where you live
                    </FormDescription>
                  </div>
                  <div className="flex-1 space-y-3">
                    <FormControl>
                      <Input
                        className="text-slate-500"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
          </div>
          <hr />
          <div>
            <FormField
              control={form.control}
              name="postal_code"
              render={({ field }) => (
                <FormItem className="gap-6 lg:flex">
                  <div className="lg:w-1/3">
                    <FormLabel>Postal Code</FormLabel>
                    <FormDescription>
                      Fill in the postal code relevant to your address
                    </FormDescription>
                  </div>
                  <div className="flex-1 space-y-3">
                    <FormControl>
                      <Input
                        className="text-slate-500"
                        type="number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
          </div>

          <FormError message={formState.message.error} />
          <FormSuccess message={formState.message.success} />
          <Submit
            title="Update Address"
            loadingTitle="Updating Your Profile..."
          />
        </form>
      </Form>
    </>
  );
};

export default UpdateAddressForm;
