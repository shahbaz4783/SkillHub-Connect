'use client';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormDescription,
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

import { servicePostAction } from '@/actions/posts/servicePost.action';
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

  const [charCount, setCharCount] = useState<number>(0);

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
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Service Title</FormLabel>
                <FormDescription>
                  Tell the client what you will deliver and how it benefits
                  them.
                </FormDescription>
                <FormControl>
                  <Input
                    disabled={isPending}
                    placeholder="Eye-catching graphic design for your brand"
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      setCharCount(e.target.value.length);
                    }}
                    onBlur={() => form.trigger('title')}
                  />
                </FormControl>
                <FormDescription className="text-right">
                  {charCount}/75 characters (min. 7 words)
                </FormDescription>
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
                <FormDescription>
                  Mention your expertise of the task. (separate them by a comma)
                </FormDescription>
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
                <FormDescription>
                  Enter the price for this service
                </FormDescription>
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
                <FormDescription>
                  In how many days you will deliver it?
                </FormDescription>
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
                <FormDescription>
                  Select a category so it's easy for clients to find your
                  project.
                </FormDescription>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Logo Design" />
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
                <FormDescription>
                  Briefly explain what sets you and your project apart.
                </FormDescription>
                <FormControl>
                  <Textarea
                    placeholder="Eye-Catching Graphic Design for Your Brand..."
                    rows={6}
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      setCharCount(e.target.value.length);
                    }}
                    onBlur={() => form.trigger('title')}
                  />
                </FormControl>
                <FormDescription className="text-right">
                  {charCount}/1200 characters (min. 120)
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormError message={formMessage.error} />
          <FormSuccess message={formMessage.success} />
          <Button disabled={isPending} type="submit">
            {isPending ? 'Publishing...' : 'Publish Service '}
          </Button>
        </form>
      </Form>
    </>
  );
};

export default ServicePostForm;
