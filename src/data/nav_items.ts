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
    variant: 'ghost'
	},
	{
		title: 'Register',
		path: '/signup',
		submenu: false,
		variant: 'default',
	},
];
