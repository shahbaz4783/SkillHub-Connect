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
import { servicePostFormFields } from '@/constants/form';

const formSchema = z.object({
	title: z.string(),
	description: z.string(),
	tags: z.string(),
	price: z.string(),
	time: z.string(),
	category: z.string(),
});

const ServicePostForm = () => {
	const router = useRouter();
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
	});

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		const response = await fetch('/api/services', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				title: values.title,
				description: values.description,
				tags: values.tags,
				price: Number(values.price),
				time: Number(values.time),
				category: values.category,
			}),
		});

		if (response.ok) {
			router.push('/');
			alert('Service created successfully');
		}
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
					<Button type='submit'>Submit</Button>
				</form>
			</Form>
		</>
	);
};

export default ServicePostForm;
