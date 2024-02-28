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
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import Link from 'next/link';

const formSchema = z.object({
	email: z.string().email({ message: 'Must be a valid email' }),
	password: z.string().min(6),
});

const LoginForm = () => {
	const router = useRouter();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		const signInData = await signIn('credentials', {
			email: values.email,
			password: values.password,
			redirect: false,
		});
		if (signInData?.error) {
			console.log(signInData.error);
		} else {
			console.log('Worked');
			router.push('/dashboard');
		}
	};

	return (
		<>
			<Form {...form}>
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
											className='bg-slate-100 border-none shadow-none'
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
						className='text-sm text-right text-green-700 font-semibold hover:underline'
						href={'/forgot-password'}
					>
						Forgot Password?
					</Link>
					<Button type='submit'>Submit</Button>
				</form>
			</Form>
		</>
	);
};

export default LoginForm;
