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
import { Button } from '../../../components/ui/button';
import { useRouter } from 'next/navigation';
import { signUpFormInput } from '@/constants/form';

const formSchema = z
	.object({
		name: z.string(),
		username: z.string(),
		email: z.string().email({ message: 'Must be a valid email' }),
		password: z.string().min(6),
		passwordConfirm: z.string(),
	})
	.refine(
		(data) => {
			return data.password === data.passwordConfirm;
		},
		{
			message: 'Password do not match',
			path: ['passwordConfirm'],
		}
	);

const SignupForm = () => {
	const router = useRouter();
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
		},
	});

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
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
					<Button type='submit'>Submit</Button>
				</form>
			</Form>
		</>
	);
};

export default SignupForm;