import {
	Bell,
	BriefcaseBusiness,
	CreditCard,
	Fingerprint,
	NotebookPen,
	Pause,
	SquarePen,
	UserCog,
} from 'lucide-react';

interface QuickActionProps {
	title: string;
	path: string;
	icon: React.ElementType;
}

export const SETTINGS_ROUTES: QuickActionProps[] = [
	{
		title: 'Profile Settings',
		path: '/dashboard/settings/profile-settings',
		icon: UserCog,
	},
	{
		title: 'Password & Security',
		path: '/dashboard/settings/password-and-security',
		icon: Fingerprint,
	},
	{
		title: 'Billing & Payments',
		path: '/dashboard/settings/payment-methods',
		icon: CreditCard,
	},
	{
		title: 'Notification settings',
		path: '/dashboard/settings/notification-settings',
		icon: Bell,
	},
];

export const LISTING_ROUTES: QuickActionProps[] = [
	{
		title: 'Post a new service',
		path: '/dashboard/listings/post-service',
		icon: NotebookPen,
	},
	{
		title: 'Post a new job',
		path: '/dashboard/listings/post-job',
		icon: BriefcaseBusiness,
	},
	{
		title: 'Draft',
		path: '/dashboard/listings/drafts',
		icon: SquarePen,
	},
	{
		title: 'Paused',
		path: '/dashboard/listings/paused',
		icon: Pause,
	},
];
