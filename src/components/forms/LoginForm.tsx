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
import { loginFormInput } from '@/constants/form';
import Link from 'next/link';
import { loginSchema } from '@/validators/auth.schema';
import FormError from './FormError';
import FormSuccess from './FormSuccess';
import { loginAction } from '@/actions/login.action';
import { useState, useTransition } from 'react';
import { useSearchParams } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';

const LoginForm = () => {
	const [isPending, startTransition] = useTransition();

	const [formMessage, setFormMessage] = useState<{
		error: string | undefined;
		success: string | undefined;
	}>({
		error: '',
		success: '',
	});

	const searchParams = useSearchParams();
	const urlError =
		searchParams.get('error') === 'OAuthAccountNotLinked' &&
		'Please sign in with the same account you used originally.';

	const form = useForm<z.infer<typeof loginSchema>>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const onSubmit = (values: z.infer<typeof loginSchema>) => {
		setFormMessage({ error: '', success: '' });

		startTransition(async () => {
			loginAction(values).then((data) => {
				setFormMessage({ error: data.error, success: data.success });
			});
		});
	};

	return (
		<>
			<Form {...form}>
				<Link href={'/login'}>
					<FaArrowLeft size={20} />
				</Link>

				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='flex flex-col gap-4'
				>
					{loginFormInput.map((data) => (
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
					<Link
						className='text-sm text-right text-slate-500 font-semibold hover:underline'
						href={'/forgot-password'}
					>
						Forgot Password?
					</Link>
					<FormError message={formMessage.error || urlError} />
					<FormSuccess message={formMessage.success} />
					<Button disabled={isPending} type='submit'>
						{isPending ? 'Logging In...' : 'Login'}
					</Button>
				</form>
			</Form>
		</>
	);
};

export default LoginForm;
