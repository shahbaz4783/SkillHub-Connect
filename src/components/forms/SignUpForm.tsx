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
import { useRouter } from 'next/navigation';
import { signUpFormInput } from '@/constants/form';
import FormError from './FormError';
import FormSuccess from './FormSuccess';
import { signUpSchema } from '@/schema/auth';

const SignupForm = () => {
	const router = useRouter();

	const form = useForm<z.infer<typeof signUpSchema>>({
		resolver: zodResolver(signUpSchema),
		defaultValues: {
			name: '',
			username: '',
			email: '',
			password: '',
			passwordConfirm: '',
		},
	});

	const onSubmit = async (values: z.infer<typeof signUpSchema>) => {
		const response = await fetch('/api/user', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: values.name,
				username: values.username,
				email: values.email,
				password: values.password,
			}),
		});

		if (response.ok) {
			router.push('/login');
			alert('user created successfully');
		}
	};

	return (
		<>
			<Form {...form}>
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
					<FormError message='' />
					<FormSuccess message='' />
					<Button type='submit'>Submit</Button>
				</form>
			</Form>
		</>
	);
};

export default SignupForm;
