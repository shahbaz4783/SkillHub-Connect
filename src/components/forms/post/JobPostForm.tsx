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
import { Button } from '../../ui/button';
import { jobSchema } from '@/validators/listing.schema';
import { useState, useTransition } from 'react';
import { jobPostAction } from '@/actions/posts/jobPost.action';
import FormError from '../../feedback/FormError';
import FormSuccess from '../../feedback/FormSuccess';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { categories, experienceLvl } from '@/constants/options';
import { Textarea } from '../../ui/textarea';

const JobPostForm = () => {
  const [isPending, startTransition] = useTransition();
  const [formMessage, setFormMessage] = useState<{
    error: string | undefined;
    success: string | undefined;
  }>({
    error: '',
    success: '',
  });

  const [charCount, setCharCount] = useState<number>(0);

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
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job Title</FormLabel>
                <FormDescription>
                  Describe the specific problem you need solved or the task you
                  need to be completed.
                </FormDescription>
                <FormControl>
                  <Input
                    disabled={isPending}
                    placeholder="I need a React Developer for Dynamic Web Applications"
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
            name="skills"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Skills Required</FormLabel>
                <FormDescription>
                  Mention the skills required for the task. (separate them by a
                  comma)
                </FormDescription>
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
                <FormDescription>
                  Enter your budget for this project
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
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job Type</FormLabel>
                <FormDescription>
                  What best describes the nature of this project?
                </FormDescription>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select the type of job" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="single">One-time Project</SelectItem>
                      <SelectItem value="short">Short-term Contract</SelectItem>
                      <SelectItem value="ongoing">
                        Ongoing Collaboration
                      </SelectItem>
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
                <FormDescription>
                  Select the category that best describes your project.
                </FormDescription>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select the category of job" />
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
            name="experience"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Experience Level</FormLabel>
                <FormDescription>
                  What level of experience are you seeking?
                </FormDescription>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select the category of job" />
                    </SelectTrigger>
                    <SelectContent>
                      {experienceLvl.map((exp) => (
                        <SelectItem key={exp.value} value={exp.value}>
                          {exp.title}
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
                <FormDescription>
                  Clearly outline your project goals and the results you want to
                  achieve.
                </FormDescription>
                <FormControl>
                  <Textarea
                    placeholder="Help build the next generation of our e-commerce platform..."
                    rows={6}
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      setCharCount(e.target.value.length);
                    }}
                    onBlur={() => form.trigger('description')}
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
            {isPending ? 'Publishing...' : 'Publish Job'}
          </Button>
        </form>
      </Form>
    </>
  );
};

export default JobPostForm;
