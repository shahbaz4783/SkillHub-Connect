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
import { useState } from 'react';
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
import { cn } from '@/lib/utils';
import Submit from '@/components/feedback/submit';
import SectionHeading from '@/components/shared/SectionHeading';
import { Progress } from '@/components/ui/progress';

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

  const [formStep, setFormStep] = useState<number>(1);
  const increment = () => setFormStep((prevCount) => prevCount + 1);
  const decrement = () => setFormStep((prevCount) => prevCount - 1);

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
        <form
          action={formAction}
          className="flex min-h-[80svh] flex-col justify-between space-y-12 rounded-md border p-4"
        >
          {/* FORM STEP - 1 */}
          <div
            className={cn('m-auto grid gap-8 lg:w-3/4 lg:grid-cols-2', {
              hidden: formStep > 1,
            })}
          >
            <aside className="space-y-6">
              <div className="space-x-4 text-sm">
                <span>1/4</span>
                <span>Job post</span>
              </div>
              <SectionHeading
                title="Let's start with a strong title."
                subTitle="This helps your job post stand out to the right candidates. It’s the first thing they’ll see, so make it count!"
                className="space-y-6 lg:w-3/4"
              />
            </aside>
            <section className="space-y-8">
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
                          <SelectItem
                            key={category.value}
                            value={category.value}
                          >
                            {category.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </section>
          </div>

          {/* FORM STEP - 2 */}
          <div
            className={cn('m-auto grid gap-8 lg:w-3/4 lg:grid-cols-2', {
              hidden: formStep < 2 || formStep > 2,
            })}
          >
            <aside className="space-y-6">
              <div className="space-x-4 text-sm">
                <span>2/4</span>
                <span>Job post</span>
              </div>
              <SectionHeading
                title="What are the main skills required for your work?"
                subTitle="Specify the key skills and experience levels required to complete the work effectively."
                className="space-y-6 lg:w-3/4"
              />
            </aside>
            <section className="space-y-12">
              <FormField
                control={form.control}
                name="skills"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Skills Required</FormLabel>
                    <FormDescription>
                      Mention the skills required for the task. (separate them
                      by a comma)
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
            </section>
          </div>

          {/* FORM STEP - 3 */}
          <div
            className={cn('m-auto grid gap-8 lg:w-3/4 lg:grid-cols-2', {
              hidden: formStep < 3 || formStep > 3,
            })}
          >
            <aside className="space-y-6">
              <div className="space-x-4 text-sm">
                <span>3/4</span>
                <span>Job post</span>
              </div>
              <SectionHeading
                title="Next, define your budget and project type."
                subTitle="Specify the budget and choose the type of project to attract the right candidates."
                className="space-y-6 lg:w-3/4"
              />
            </aside>
            <section className="space-y-12">
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
            </section>
          </div>

          {/* FORM STEP - 4 */}
          <div
            className={cn('m-auto grid gap-8 lg:w-3/4 lg:grid-cols-2', {
              hidden: formStep < 4 || formStep > 4,
            })}
          >
            <aside className="space-y-6">
              <div className="space-x-4 text-sm">
                <span>4/4</span>
                <span>Job post</span>
              </div>
              <SectionHeading
                title="Start the conversation."
                className="space-y-6 lg:w-3/4"
              />
              <div className="space-y-4 text-sm text-slate-600">
                <h3>Talent are looking for:</h3>
                <ul className="space-y-2 text-xs">
                  <li>Clear expectations about your task or deliverables</li>
                  <li>The skills required for your work</li>
                  <li>Good communication</li>
                  <li>Details about how you or your team like to work</li>
                </ul>
              </div>
            </aside>
            <section className="space-y-12">
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Job Description</FormLabel>
                    <FormDescription>
                      Clearly outline your project goals and the results you
                      want to achieve.
                    </FormDescription>
                    <FormControl>
                      <Textarea
                        placeholder="Help build the next generation of our e-commerce platform..."
                        rows={12}
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
            </section>
          </div>

          <div className="lg:w-1/2 m-auto">
            <FormError message={formState.message.error} />
            <FormSuccess message={formState.message.success} />
          </div>

          <div className="space-y-4">
            <div>
              <Progress value={formStep * 25} />
            </div>
            <menu className="flex justify-between gap-4">
              <Button
                type="button"
                variant={'outline'}
                disabled={formStep === 1}
                onClick={decrement}
              >
                Back
              </Button>

              <Button
                className={cn({
                  hidden: formStep === 4,
                })}
                type="button"
                onClick={increment}
              >
                Next step
              </Button>

              <Submit
                className={cn({
                  hidden: formStep < 4,
                })}
                title={jobId ? 'Edit this job' : 'Post this job'}
                loadingTitle={jobId ? 'Editing...' : 'Posting...'}
              />
            </menu>
          </div>
        </form>
      </Form>
    </>
  );
};

export default JobPostForm;
