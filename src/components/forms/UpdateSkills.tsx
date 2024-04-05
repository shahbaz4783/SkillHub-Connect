'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { useState, useTransition } from 'react';
import FormError from '../feedback/FormError';
import FormSuccess from '../feedback/FormSuccess';
import { bioSchema } from '@/validators/user.schema';

const UpdateSkills = () => {
  const [isPending, startTransition] = useTransition();
  const [formMessage, setFormMessage] = useState<{
    error: string | undefined;
    success: string | undefined;
  }>({
    error: '',
    success: '',
  });

  const form = useForm<z.infer<typeof bioSchema>>({
    resolver: zodResolver(bioSchema),
  });

  const onSubmit = (values: z.infer<typeof bioSchema>) => {
    setFormMessage({ error: '', success: '' });
    startTransition(async () => {
      // updatePersonalInfoAction(values).then((data) => {
      // 	setFormMessage({ error: data.error, success: data.success });
      // });
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Enter your skills"
                  className="resize-none border-none bg-slate-50"
                  rows={12}
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
          {isPending ? 'Updating Your Skills...' : 'Update Skills'}
        </Button>
      </form>
    </Form>
  );
};

export default UpdateSkills;
