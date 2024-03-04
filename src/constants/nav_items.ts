import { FaList } from 'react-icons/fa';
import { HiOutlineHome } from 'react-icons/hi2';
import { IoBriefcaseOutline, IoSettingsOutline } from 'react-icons/io5';
import { MdOutlineSpaceDashboard } from 'react-icons/md';

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

export const PAGES_NAV_ITEMS: NavInterface[] = [
	{
		title: 'Find Talent',
		path: '/services',
		submenu: false,
	},
	{
		title: 'Find Work',
		path: '/jobs',
		submenu: false,
	},
	{
		title: 'Support',
		path: '/support',
		submenu: false,
	},
];

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

export const ADMIN_NAV_ITEMS: NavInterface[] = [
	{
		title: 'Dashboard',
		path: '/dashboard',
		submenu: false,
		icon: MdOutlineSpaceDashboard,
	},
	{
		title: 'Work',
		path: '/dashboard/work',
		submenu: false,
		icon: IoBriefcaseOutline,
	},
	{
		title: 'Listings',
		path: '/dashboard/listings',
		submenu: false,
		icon: FaList,
	},
	{
		title: 'Settings',
		path: '/dashboard/settings',
		submenu: false,
		icon: IoSettingsOutline,
	},
];

export const BOTTOM_NAV_ITEMS: NavInterface[] = [
	{
		title: 'Dashboard',
		path: '/',
		submenu: false,
		icon: HiOutlineHome,
	},
	{
		title: 'Dashboard',
		path: '/dashboard',
		submenu: false,
		icon: MdOutlineSpaceDashboard,
	},
	{
		title: 'Work',
		path: '/dashboard/work',
		submenu: false,
		icon: IoBriefcaseOutline,
	},
	{
		title: 'Listings',
		path: '/dashboard/listings',
		submenu: false,
		icon: FaList,
	},
	{
		title: 'Settings',
		path: '/dashboard/settings',
		submenu: false,
		icon: IoSettingsOutline,
	},
];
