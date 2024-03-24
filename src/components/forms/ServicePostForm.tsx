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
import FormError from './FormError';
import FormSuccess from './FormSuccess';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { servicePostAction } from '@/actions/servicePost.action';
import { serviceSchema } from '@/validators/listing.schema';
import { useState, useTransition } from 'react';
import { Textarea } from '../ui/textarea';
import { categories } from '@/constants/options';

const ServicePostForm = () => {
  const [isPending, startTransition] = useTransition();
  const [formMessage, setFormMessage] = useState<{
    error: string | undefined;
    success: string | undefined;
  }>({
    error: '',
    success: '',
  });

  const form = useForm<z.infer<typeof serviceSchema>>({
    resolver: zodResolver(serviceSchema),
  });

  const onSubmit = (values: z.infer<typeof serviceSchema>) => {
    setFormMessage({ error: '', success: '' });

    startTransition(async () => {
      servicePostAction(values).then((data) => {
        setFormMessage({ error: data?.error, success: data?.success });
      });
    });
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Service Title</FormLabel>
                <FormControl>
                  <Input
                    disabled={isPending}
                    placeholder="Eye-Catching Graphic Design for Your Brand"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Specialization</FormLabel>
                <FormControl>
                  <Input
                    disabled={isPending}
                    placeholder="UI/UX, Graphic Design"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pricing</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    disabled={isPending}
                    placeholder="Enter min $5 to max $5k"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="time"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Delivery Time</FormLabel>
                <FormControl>
                  <Input
                    disabled={isPending}
                    placeholder="3"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Service Category</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="border-none bg-slate-50">
                      <SelectValue placeholder="Select the category of service" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.value} value={category.value}>
                          {category.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Service Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Eye-Catching Graphic Design for Your Brand..."
                    className="resize-none border-none bg-slate-50"
                    rows={6}
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
            {isPending ? 'Submitting...' : 'Submit'}
          </Button>
        </form>
      </Form>
    </>
  );
};

export default ServicePostForm;
