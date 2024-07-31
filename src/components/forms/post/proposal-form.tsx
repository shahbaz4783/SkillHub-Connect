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

import { proposalSchema } from '@/validators/listing.schema';
import { useEffect, useState } from 'react';
import { Textarea } from '../../ui/textarea';
import { timeFrameOptions } from '@/constants/options';
import { addProposalAction } from '@/actions/listings.action';
import { useFormState } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import Submit from '@/components/feedback/submit';

const ProposalForm = ({ jobPostId }: { jobPostId: string }) => {
  const [charCount, setCharCount] = useState<number>(0);

  const form = useForm<z.infer<typeof proposalSchema>>({
    resolver: zodResolver(proposalSchema),
  });

  const { watch, setValue } = form;
  const bid = watch('bid');

  const updateFeesAndPayment = () => {
    const bidAmount = Number(bid) || 0;
    const fees = bidAmount * 0.1;
    const paymentReceive = bidAmount - fees;
    setValue('fees', Number(fees.toFixed(2)));
    setValue('paymentReceive', Number(paymentReceive.toFixed(2)));
  };

  useEffect(() => {
    updateFeesAndPayment();
  }, [bid]);

  const [formState, formAction] = useFormState(
    addProposalAction.bind(null, jobPostId),
    {
      message: {},
    },
  );

  return (
    <Form {...form}>
      <form action={formAction} className="space-y-12">
        <Card className="md:w-2/3">
          <CardContent>
            <CardTitle>
              What is the full amount you'd like to bid for this job?
            </CardTitle>
          </CardContent>
          <CardContent className="space-y-6">
            <div>
              <FormField
                control={form.control}
                name="bid"
                render={({ field }) => (
                  <FormItem className="gap-8 md:flex">
                    <div className="w-2/3">
                      <FormLabel>Bid</FormLabel>
                      <FormDescription>
                        Total amount the client will see on your proposal
                      </FormDescription>
                    </div>
                    <div className="md:w-1/3">
                      <FormControl>
                        <Input
                          placeholder="Enter min $5 to max $5k"
                          className="text-right"
                          type="number"
                          {...field}
                        />
                      </FormControl>
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
                name="fees"
                render={({ field }) => (
                  <FormItem className="gap-8 md:flex">
                    <div className="w-2/3">
                      <FormLabel>10% Freelancer Service Fee</FormLabel>
                    </div>
                    <div className="md:w-1/3">
                      <FormControl>
                        <Input
                          className="cursor-default text-right"
                          type="number"
                          readOnly
                          {...field}
                        />
                      </FormControl>
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
                name="paymentReceive"
                render={({ field }) => (
                  <FormItem className="gap-8 md:flex">
                    <div className="w-2/3">
                      <FormLabel>You’ll Receive</FormLabel>
                      <FormDescription>
                        The estimated amount you'll receive after service fees
                      </FormDescription>
                    </div>
                    <div className="md:w-1/3">
                      <FormControl>
                        <Input
                          readOnly
                          className="cursor-default text-right"
                          type="number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
        </Card>

        <Card className="md:w-2/3">
          <CardContent>
            <CardTitle>How long will this project take?</CardTitle>
            <FormField
              control={form.control}
              name="timeframe"
              render={({ field }) => (
                <FormItem>
                  <aside className="w-2/3 space-y-6">
                    <div>
                      <FormDescription>
                        Select the estimate days of delivery
                      </FormDescription>
                    </div>
                    <div>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          {...field}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a duration" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {timeFrameOptions.map((category) => (
                              <SelectItem
                                key={category.value}
                                value={category.value}
                              >
                                {category.title}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </div>
                  </aside>
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card className="md:w-2/3">
          <CardContent>
            <CardTitle>Cover Letter</CardTitle>
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <aside>
                    <div>
                      <FormDescription>
                        Specify why you are perfect candidate for this job
                      </FormDescription>
                    </div>
                    <div>
                      <FormControl>
                        <Textarea
                          placeholder="Eye-Catching Graphic Design for Your Brand..."
                          rows={6}
                          {...field}
                          onChange={(e) => {
                            field.onChange(e);
                            setCharCount(e.target.value.length);
                          }}
                        />
                      </FormControl>
                      <FormDescription className="text-right">
                        {charCount}/2000 characters (min. 120)
                      </FormDescription>
                      <FormMessage />
                    </div>
                  </aside>
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <FormError message={formState.message.error} />
        <FormSuccess message={formState.message.success} />

        <menu className="flex gap-4">
          <Button type="button" variant={'outline'}>
            Cancel
          </Button>
          <Submit title="Submit Proposal" loadingTitle="Submitting..." />
        </menu>
      </form>
    </Form>
  );
};

export default ProposalForm;
