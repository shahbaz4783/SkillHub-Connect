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
import Submit from '@/components/buttons/submit';
import { updateProfileAction } from '@/actions/user.action';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

const UpdateBio = () => {
  const [charCount, setCharCount] = useState<{
    title: number;
    skills: number;
    bio: number;
  }>({
    title: 0,
    skills: 0,
    bio: 0,
  });

  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
  });

  const [formState, formAction] = useFormState(updateProfileAction, {
    message: {},
  });

  return (
    <Form {...form}>
      <form action={formAction} className="space-y-6">
        <FormField
          control={form.control}
          name="userTitle"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Edit your title</FormLabel>
              <FormDescription>
                Enter a single sentence description of your professional
                skills/experience (e.g. Expert Web Designer with Ajax
                experience)
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
                {charCount.title}/100 characters (min. 20)
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
              <FormLabel>Edit skills</FormLabel>
              <FormDescription>
                Mention your skills. (separate them by a comma)
              </FormDescription>
              <FormControl>
                <Input
                  placeholder="React, Redux, JavaScript, HTML/CSS, REST APIs"
                  {...field}
                />
              </FormControl>
              <FormDescription className="text-right">
                {charCount.skills}/150 characters (min. 60)
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Profile overview</FormLabel>
              <FormDescription>
                Use this space to show clients you have the skills and
                experience they're looking for.
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
                      bio: e.target.value.length,
                    }));
                  }}
                />
              </FormControl>
              <FormDescription className="text-right">
                {charCount.bio}/1200 characters (min. 120)
              </FormDescription>
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
  );
};

export default UpdateBio;
