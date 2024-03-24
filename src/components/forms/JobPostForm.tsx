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
import { jobPostFormFields } from '@/constants/form';
import { jobSchema } from '@/validators/listing.schema';
import { useState, useTransition } from 'react';
import { jobPostAction } from '@/actions/jobPost.action';
import FormError from './FormError';
import FormSuccess from './FormSuccess';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { categories, experienceLvl } from '@/constants/options';
import { Textarea } from '../ui/textarea';

const JobPostForm = () => {
  const [isPending, startTransition] = useTransition();
  const [formMessage, setFormMessage] = useState<{
    error: string | undefined;
    success: string | undefined;
  }>({
    error: '',
    success: '',
  });

  const form = useForm<z.infer<typeof jobSchema>>({
    resolver: zodResolver(jobSchema),
  });

  const onSubmit = (values: z.infer<typeof jobSchema>) => {
    setFormMessage({ error: '', success: '' });

    startTransition(async () => {
      jobPostAction(values).then((data) => {
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
                <FormLabel>Project Title</FormLabel>
                <FormControl>
                  <Input
                    disabled={isPending}
                    placeholder="I need a React Developer for Dynamic Web Applications"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="skills"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Skills Required</FormLabel>
                <FormControl>
                  <Input
                    disabled={isPending}
                    placeholder="React, Redux, JavaScript, HTML/CSS, REST APIs"
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
                <FormLabel>Job Budget</FormLabel>
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
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job Type</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange}>
                    <SelectTrigger className="border-none bg-slate-50">
                      <SelectValue placeholder="Select the type of job" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Ongoing project</SelectItem>
                      <SelectItem value="system">New</SelectItem>
                      <SelectItem value="fefe">Other</SelectItem>
                    </SelectContent>
                  </Select>
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
                <FormLabel>Job Category</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange}>
                    <SelectTrigger className="border-none bg-slate-50">
                      <SelectValue placeholder="Select the category of job" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem value={category.value}>
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
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Experience Level</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange}>
                    <SelectTrigger className="border-none bg-slate-50">
                      <SelectValue placeholder="Select the category of job" />
                    </SelectTrigger>
                    <SelectContent>
                      {experienceLvl.map((category) => (
                        <SelectItem value={category.value}>
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
                <FormLabel>Job Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Help build the next generation of our e-commerce platform..."
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

export default JobPostForm;
