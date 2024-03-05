import { Button } from '@/components/ui/button';
import { signOut } from '@/auth';
import React from 'react';

const page = () => {
	return (
		<div>
			<form
				action={async () => {
					'use server';
					await signOut();
				}}
			>
				<Button variant={'destructive'}>Sign Out</Button>
			</form>
		</div>
	);
};

export default page;
