'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import FormError from '../../feedback/FormError';
import FormSuccess from '../../feedback/FormSuccess';
import { profileSchema } from '@/validators/user.schema';
import { useFormState } from 'react-dom';
import Submit from '@/components/feedback/submit';
import { updateProfileAction } from '@/actions/user.action';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { UserProfile } from '@/types/types';

const UpdateUserProfileForm = ({ userTitle, skills, bio }: UserProfile) => {
  const [charCount, setCharCount] = useState<{
    title: number;
    skills: number;
    bio: number;
  }>({
    title: userTitle.length,
    skills: skills.length,
    bio: bio.length,
  });

  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      userTitle,
      skills,
      bio,
    },
  });

  const [formState, formAction] = useFormState(updateProfileAction, {
    message: {},
  });

  return (
    <Form {...form}>
      <form action={formAction} className="space-y-6">
        <div>
          <FormField
            control={form.control}
            name="userTitle"
            render={({ field }) => (
              <FormItem className="gap-6 lg:flex">
                <div className="lg:w-1/3">
                  <FormLabel>Professional Title</FormLabel>
                  <FormDescription>
                    Summarize your expertise with a clear, concise title
                  </FormDescription>
                </div>
                <div className="flex-1 space-y-3">
                  <FormControl>
                    <Input
                      className="text-slate-500"
                      placeholder="Senior Full Stack Developer"
                      type="text"
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
                    {charCount.title}/100 characters (min. 20)
                  </FormDescription>
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
            name="skills"
            render={({ field }) => (
              <FormItem className="gap-6 lg:flex">
                <div className="lg:w-1/3">
                  <FormLabel>Key Skills</FormLabel>
                  <FormDescription>
                    List your main skills, separated by commas
                  </FormDescription>
                </div>
                <div className="flex-1 space-y-3">
                  <FormControl>
                    <Input
                      className="text-slate-500"
                      placeholder="React, Node.js, Express, MongoDB"
                      type="text"
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        setCharCount((prev) => ({
                          ...prev,
                          skills: e.target.value.length,
                        }));
                      }}
                    />
                  </FormControl>
                  <FormDescription className="text-right">
                    {charCount.skills}/150 characters (min. 60)
                  </FormDescription>
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
            name="bio"
            render={({ field }) => (
              <FormItem className="gap-6 lg:flex">
                <div className="lg:w-1/3">
                  <FormLabel>Profile overview</FormLabel>
                  <FormDescription>
                    Summarize your background, experience, and achievements
                  </FormDescription>
                </div>
                <div className="flex-1 space-y-3">
                  <FormControl>
                    <Textarea
                      className="text-slate-500"
                      rows={6}
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        setCharCount((prev) => ({
                          ...prev,
                          bio: e.target.value.length,
                        }));
                      }}
                    />
                  </FormControl>
                  <FormDescription className="text-right">
                    {charCount.bio}/1200 characters (min. 120)
                  </FormDescription>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
        </div>

        <FormError message={formState.message.error} />
        <FormSuccess message={formState.message.success} />
        <Submit
          title="Update Profile"
          loadingTitle="Updating Your Profile..."
        />
      </form>
    </Form>
  );
};

export default UpdateUserProfileForm;
