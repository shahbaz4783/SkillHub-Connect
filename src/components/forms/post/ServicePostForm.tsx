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
import FormError from '../../feedback/FormError';
import FormSuccess from '../../feedback/FormSuccess';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { serviceSchema } from '@/validators/listing.schema';
import { useState } from 'react';
import { Textarea } from '../../ui/textarea';
import { categories } from '@/constants/options';
import { servicePostAction } from '@/actions/listings.action';
import { useFormState } from 'react-dom';
import Submit from '@/components/buttons/submit';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const ServicePostForm = () => {
  const [charCount, setCharCount] = useState<{
    title: number;
    description: number;
  }>({
    title: 0,
    description: 0,
  });

  const [formStep, setFormStep] = useState<number>(0);

  const form = useForm<z.infer<typeof serviceSchema>>({
    resolver: zodResolver(serviceSchema),
  });

  const [formState, formAction] = useFormState(servicePostAction, {
    message: {},
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
                  <FormLabel>Service Title</FormLabel>
                  <FormDescription>
                    Tell the client what you will deliver and how it benefits
                    them.
                  </FormDescription>
                  <FormControl>
                    <Input
                      placeholder="Eye-catching graphic design for your brand"
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
              name="tags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Specialization</FormLabel>
                  <FormDescription>
                    Mention your expertise of the task. (separate them by a
                    comma)
                  </FormDescription>
                  <FormControl>
                    <Input placeholder="UI/UX, Graphic Design" {...field} />
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
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    {...field}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue />
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
                  <FormLabel>Pricing</FormLabel>
                  <FormDescription>
                    Enter the price for this service
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
              name="time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Delivery Time</FormLabel>
                  <FormDescription>
                    In how many days you will deliver it?
                  </FormDescription>
                  <FormControl>
                    <Input placeholder="3" type="number" {...field} />
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
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Upload Image</FormLabel>
                  <FormDescription>
                    Upload an image (must be under 2MB)
                  </FormDescription>
                  <FormControl>
                    <Input type="file" {...field} />
                  </FormControl>
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
              <Submit title="Publish Service" loadingTitle="Publishing..." />
            </div>
          </menu>
        </form>
      </Form>
    </>
  );
};

export default ServicePostForm;
