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
import { signUpFormInput } from '@/constants/form';
import FormError from './FormError';
import FormSuccess from './FormSuccess';
import { signUpSchema } from '@/validators/auth.schema';
import { useState, useTransition } from 'react';
import { signUpAction } from '@/actions/auth/signup.action';
import { FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

const SignupForm = () => {
	const [isPending, startTransition] = useTransition();
	const [formMessage, setFormMessage] = useState<{
		error: string | undefined;
		success: string | undefined;
	}>({
		error: '',
		success: '',
	});

	const form = useForm<z.infer<typeof signUpSchema>>({
		resolver: zodResolver(signUpSchema),
	});

	const onSubmit = (values: z.infer<typeof signUpSchema>) => {
		setFormMessage({ error: '', success: '' });

		startTransition(async () => {
			signUpAction(values).then((data) => {
				setFormMessage({ error: data.error, success: data.success });
			});
		});
	};

	return (
		<>
			<Form {...form}>
				<Link href={'/signup'}>
					<FaArrowLeft size={20} />
				</Link>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='flex flex-col gap-4'
				>
					{signUpFormInput.map((data) => (
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
											className='bg-slate-100 py-6 border-none shadow-none'
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
					<Button disabled={isPending} type='submit'>
						{isPending ? 'Creating Your Account...' : 'Sign Up'}
					</Button>
				</form>
			</Form>
		</>
	);
};

export default SignupForm;
