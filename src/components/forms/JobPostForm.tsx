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
import { jobSchema } from '@/schema/listing.schema';
import { useState, useTransition } from 'react';
import { jobPostAction } from '@/actions/jobPost.action';
import FormError from './FormError';
import FormSuccess from './FormSuccess';

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
		defaultValues: {
			price: 10,
		},
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
					className='flex flex-col gap-4'
				>
					{jobPostFormFields.map((data) => (
						<FormField
							key={data.id}
							control={form.control}
							name={data.name}
							render={({ field }) => (
								<FormItem>
									<FormLabel>{data.label}</FormLabel>
									<FormControl>
										<Input
											disabled={isPending}
											placeholder={data.placeholder}
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					))}
					<FormError message={formMessage.error} />
					<FormSuccess message={formMessage.success} />
					<Button disabled={isPending} type='submit'>
						{isPending ? 'Submitting...' : 'Submit'}
					</Button>
				</form>
			</Form>
		</>
	);
};

export default JobPostForm;
