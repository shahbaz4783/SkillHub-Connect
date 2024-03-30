'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';

import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { useState, useTransition } from 'react';
import FormError from '../feedback/FormError';
import FormSuccess from '../feedback/FormSuccess';
import { addressSchema } from '@/validators/user.schema';
import { Input } from '../ui/input';
import Link from 'next/link';

const UpdateAddress = () => {
	const [isPending, startTransition] = useTransition();
	const [formMessage, setFormMessage] = useState<{
		error: string | undefined;
		success: string | undefined;
	}>({
		error: '',
		success: '',
	});

	const form = useForm<z.infer<typeof addressSchema>>({
		resolver: zodResolver(addressSchema),
	});

	const onSubmit = (values: z.infer<typeof addressSchema>) => {
		setFormMessage({ error: '', success: '' });
		startTransition(async () => {
			// updatePersonalInfoAction(values).then((data) => {
			// 	setFormMessage({ error: data.error, success: data.success });
			// });
		});
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
				<FormField
					control={form.control}
					name='country'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Country</FormLabel>
							<FormControl>
								<Select onValueChange={field.onChange}>
									<SelectTrigger className='bg-slate-50 border-none'>
										<SelectValue placeholder='Select your country' />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value='light'>Light</SelectItem>
										<SelectItem value='dark'>Dark</SelectItem>
										<SelectItem value='system'>System</SelectItem>
									</SelectContent>
								</Select>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='state'
					render={({ field }) => (
						<FormItem>
							<FormLabel>State</FormLabel>
							<FormControl>
								<Select onValueChange={field.onChange}>
									<SelectTrigger className='bg-slate-50 border-none'>
										<SelectValue placeholder='Select your state' />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value='light'>Light</SelectItem>
										<SelectItem value='dark'>Dark</SelectItem>
										<SelectItem value='system'>System</SelectItem>
									</SelectContent>
								</Select>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='address'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Full Address</FormLabel>
							<FormControl>
								<Input
									disabled={isPending}
									className='bg-slate-50 py-6 border-none shadow-none'
									type='text'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='code'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Zip Code</FormLabel>
							<FormControl>
								<Input
									disabled={isPending}
									className='bg-slate-50 py-6 border-none shadow-none'
									type='number'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormError message={formMessage.error} />
				<FormSuccess message={formMessage.success} />
				<Button disabled={isPending} type='submit'>
					{isPending ? 'Updating Your Address...' : 'Update Address'}
				</Button>
			</form>
		</Form>
	);
};

export default UpdateAddress;
