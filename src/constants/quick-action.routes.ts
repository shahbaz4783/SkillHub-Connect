import { FaLaptopCode, FaUserGear } from 'react-icons/fa6';
import {
	IoBriefcaseOutline,
	IoFingerPrint,
	IoNotificationsOutline,
} from 'react-icons/io5';
import { MdOutlinePayment } from 'react-icons/md';

interface QuickActionProps {
	title: string;
	path: string;
	icon: React.ElementType;
}

export const SETTINGS_ROUTES: QuickActionProps[] = [
	{
		title: 'Profile Settings',
		path: '/dashboard/settings/profile-settings',
		icon: FaUserGear,
	},
	{
		title: 'Password & Security',
		path: '/dashboard/settings/password-and-security',
		icon: IoFingerPrint,
	},
	{
		title: 'Billing & Payments',
		path: '/dashboard/settings/payment-methods',
		icon: MdOutlinePayment,
	},
	{
		title: 'Notification settings',
		path: '/dashboard/settings/notification-settings',
		icon: IoNotificationsOutline,
	},
];

export const LISTING_ROUTES: QuickActionProps[] = [
	{
		title: 'Post a new service',
		path: '/dashboard/listings/post-service',
		icon: FaLaptopCode,
	},
	{
		title: 'Post a new job',
		path: '/dashboard/listings/post-job',
		icon: IoBriefcaseOutline,
	},
];
