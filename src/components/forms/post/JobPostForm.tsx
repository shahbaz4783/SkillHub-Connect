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
import { jobPostAction } from '@/actions/listings.action';
import { useFormState } from 'react-dom';
import Submit from '@/components/buttons/submit';
import { cn } from '@/lib/utils';

interface JobPostFormProps {
  jobId?: string;
  title?: string;
  skills?: string;
  category?: string;
  price?: number;
  projectType?: string;
  experience?: string;
  description?: string;
}

const JobPostForm = ({
  jobId,
  title,
  skills,
  category,
  price,
  projectType,
  experience,
  description,
}: JobPostFormProps) => {
  const [charCount, setCharCount] = useState<{
    title: number;
    description: number;
  }>({
    title: 0,
    description: 0,
  });

  const [formStep, setFormStep] = useState<number>(0);

  const [formState, formAction] = useFormState(
    jobPostAction.bind(null, jobId as string),
    {
      message: {},
    },
  );

  const form = useForm<z.infer<typeof jobSchema>>({
    resolver: zodResolver(jobSchema),
    defaultValues: {
      title,
      skills,
      category,
      price,
      projectType,
      experience,
      description,
    },
  });

  return (
    <>
      <Form {...form}>
        <form action={formAction} className="space-y-12">
          <div
            className={cn('space-y-12', {
              hidden: formStep === 1,
            })}
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job Title</FormLabel>
                  <FormDescription>
                    Describe the specific problem you need solved or the task
                    you need to be completed.
                  </FormDescription>
                  <FormControl>
                    <Input
                      placeholder="I need a React Developer for Dynamic Web Applications"
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        setCharCount((prev) => ({
                          ...prev,
                          title: e.target.value.length,
                        }));
                      }}
                    />
                  </FormControl>
                  <FormDescription className="text-right">
                    {charCount.title}/75 characters (min. 7 words)
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
                    Mention the skills required for the task. (separate them by
                    a comma)
                  </FormDescription>
                  <FormControl>
                    <Input
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
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job Category</FormLabel>
                  <FormDescription>
                    Select the category that best describes your project.
                  </FormDescription>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    {...field}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select the category of job" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.value} value={category.value}>
                          {category.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div
            className={cn('space-y-12', {
              hidden: formStep === 0,
            })}
          >
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
              name="projectType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job Type</FormLabel>
                  <FormDescription>
                    What best describes the nature of this project?
                  </FormDescription>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    {...field}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select the type of job" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="One-time Project">
                        One-time Project
                      </SelectItem>
                      <SelectItem value="Short-term Contract">
                        Short-term Contract
                      </SelectItem>
                      <SelectItem value="Ongoing project">
                        Ongoing project
                      </SelectItem>
                    </SelectContent>
                  </Select>
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
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    {...field}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select the category of job" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {experienceLvl.map((exp) => (
                        <SelectItem key={exp.value} value={exp.value}>
                          {exp.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
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
                    Clearly outline your project goals and the results you want
                    to achieve.
                  </FormDescription>
                  <FormControl>
                    <Textarea
                      placeholder="Help build the next generation of our e-commerce platform..."
                      rows={6}
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        setCharCount((prev) => ({
                          ...prev,
                          description: e.target.value.length,
                        }));
                      }}
                    />
                  </FormControl>
                  <FormDescription className="text-right">
                    {charCount.description}/1200 characters (min. 120)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormError message={formState.message.error} />
          <FormSuccess message={formState.message.success} />

          <menu className="flex gap-4">
            <Button
              type="button"
              variant={'outline'}
              onClick={() => setFormStep(formStep === 0 ? 1 : 0)}
            >
              {formStep === 0 ? 'Next Step' : 'Back'}
            </Button>
            <div
              className={cn({
                hidden: formStep === 0,
              })}
            >
              <Submit title="Publish Job" loadingTitle="Publishing..." />
            </div>
          </menu>
        </form>
      </Form>
    </>
  );
};

export default JobPostForm;
