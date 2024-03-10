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
import FormError from './FormError';
import FormSuccess from './FormSuccess';
import { servicePostFormFields } from '@/constants/form';
import { servicePostAction } from '@/actions/servicePost.action';
import { serviceSchema } from '@/schema/listing.schema';
import { useState, useTransition } from 'react';

const ServicePostForm = () => {
	const [isPending, startTransition] = useTransition();
	const [formMessage, setFormMessage] = useState<{
		error: string | undefined;
		success: string | undefined;
	}>({
		error: '',
		success: '',
	});

	const form = useForm<z.infer<typeof serviceSchema>>({
		resolver: zodResolver(serviceSchema),
		defaultValues: {
			title: '',
			description: '',
			tags: '',
			price: '',
			time: '',
			category: '',
		},
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
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='flex flex-col gap-4'
				>
					{servicePostFormFields.map((data) => (
						<FormField
							key={data.id}
							control={form.control}
							name={data.name}
							render={({ field }) => (
								<FormItem>
									<FormLabel>{data.label}</FormLabel>
									<FormControl>
										<Input
											type={data.type}
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
					<Button type='submit'>{isPending ? 'Submitting' : 'Submit'}</Button>
				</form>
			</Form>
		</>
	);
};

export default ServicePostForm;
