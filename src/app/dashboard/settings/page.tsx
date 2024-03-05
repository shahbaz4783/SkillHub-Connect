import { signOut } from '@/auth';
import DashboardHeader from '@/components/shared/DashboardHeader';
import SettingsRoutes from '@/components/shared/SettingsRoutes';
import { Button } from '@/components/ui/button';
import React from 'react';

const SettingsPage = () => {
	return (
		<>
			<DashboardHeader title='Settings' />
			<SettingsRoutes />
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
		</>
	);
};

export default SettingsPage;
