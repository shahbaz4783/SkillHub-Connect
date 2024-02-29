import { signOut } from '@/auth';
import { Button } from '@/components/ui/button';
import React from 'react';

const SettingsPage = () => {
	return (
		<div>
			<h2>Settings Page</h2>
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

export default SettingsPage;
