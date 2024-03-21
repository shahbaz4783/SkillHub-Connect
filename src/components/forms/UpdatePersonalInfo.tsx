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
import { useState, useTransition } from 'react';
import { userSchema } from '@/schema/user.schema';
import { currentUser } from '@/lib/auth';
import { updatePersonalInfoAction } from '@/actions/user.action';

const UpdatePersonalInfo = async () => {
	const user = await currentUser();

	const personalInfo = {
		name: user?.name,
		email: user?.email,
		username: user?.id,
	};

	const [isPending, startTransition] = useTransition();
	const [formMessage, setFormMessage] = useState<{
		error: string | undefined;
		success: string | undefined;
	}>({
		error: '',
		success: '',
	});

	const form = useForm<z.infer<typeof userSchema>>({
		resolver: zodResolver(userSchema),
		// defaultValues: {
		// 	name: user?.name,
		// 	email: user?.email,
		// 	username: user?.id,
		// },
	});

	const onSubmit = (values: z.infer<typeof userSchema>) => {
		setFormMessage({ error: '', success: '' });

		startTransition(async () => {
			updatePersonalInfoAction(values).then((data) => {
				setFormMessage({ error: data.error, success: data.success });
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
					<FormField
						control={form.control}
						name='name'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Full Name</FormLabel>
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
						name='email'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input
										disabled={isPending}
										className='bg-slate-50 py-6 border-none shadow-none'
										type='email'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='username'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Username</FormLabel>
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
					<FormError message={formMessage.error} />
					<FormSuccess message={formMessage.success} />
					<Button disabled={isPending} type='submit'>
						{isPending ? 'Updating Your Profile...' : 'Update Profile'}
					</Button>
				</form>
			</Form>
		</>
	);
};

export default UpdatePersonalInfo;
