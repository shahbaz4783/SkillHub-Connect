import { currentUser } from '@/lib/auth';
import {
	BriefcaseBusiness,
	CirclePlus,
	Home,
	LayoutDashboard,
	Settings,
} from 'lucide-react';

interface NavInterface {
	title: string;
	path: string;
	icon?: React.ElementType;
	variant?:
		| 'link'
		| 'default'
		| 'destructive'
		| 'outline'
		| 'secondary'
		| 'ghost'
		| null;

	submenu: boolean;
	subMenuItems?: {
		title: string;
		path: string;
		icon?: React.ElementType;
	};
}

// Main Header
export const PAGES_NAV_ITEMS: NavInterface[] = [
	{
		title: 'Find Talent',
		path: '/services',
		submenu: false,
	},
	{
		title: 'Find Work',
		path: '/freelance-jobs',
		submenu: false,
	},
	{
		title: 'Support',
		path: '/support',
		submenu: false,
	},
];

// Auth routes
export const AUTH_NAV_ITEMS: NavInterface[] = [
	{
		title: 'Login',
		path: '/login',
		submenu: false,
		variant: 'ghost',
	},
	{
		title: 'Register',
		path: '/signup',
		submenu: false,
		variant: 'default',
	},
];

// User Dashboard Routes
export const ADMIN_NAV_ITEMS: NavInterface[] = [
	{
		title: 'Dashboard',
		path: '/dashboard',
		submenu: false,
		icon: LayoutDashboard,
	},
	{
		title: 'Work',
		path: '/dashboard/work',
		submenu: false,
		icon: BriefcaseBusiness,
	},
	{
		title: 'Listings',
		path: '/dashboard/listings',
		submenu: false,
		icon: CirclePlus,
	},
	{
		title: 'Settings',
		path: '/dashboard/settings',
		submenu: false,
		icon: Settings,
	},
];

// User Dashboard routes (mobile)
export const BOTTOM_NAV_ITEMS: NavInterface[] = [
	{
		title: 'Home',
		path: '/',
		submenu: false,
		icon: Home,
	},
	{
		title: 'Work',
		path: '/dashboard/work',
		submenu: false,
		icon: BriefcaseBusiness,
	},
	{
		title: 'Listings',
		path: '/dashboard/listings',
		submenu: false,
		icon: CirclePlus,
	},
	{
		title: 'Dashboard',
		path: '/dashboard',
		submenu: false,
		icon: LayoutDashboard,
	},

	{
		title: 'Settings',
		path: '/dashboard/settings',
		submenu: false,
		icon: Settings,
	},
];
