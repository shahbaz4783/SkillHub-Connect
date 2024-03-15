import { Award, FileBadge, LineChart, Rocket, TextSearch } from 'lucide-react';

export const shopByCategory = [
	{ title: 'Web Development', img: '/images/cube.jpg' },
	{ title: 'Logo Design', img: '/images/cube.jpg' },
	{ title: 'Video Editing', img: '/images/cube.jpg' },
	{ title: 'Illustration', img: '/images/cube.jpg' },
	{ title: 'SEO', img: '/images/cube.jpg' },
	{ title: 'WordPress', img: '/images/cube.jpg' },
	{ title: 'Articles and Blogs', img: '/images/cube.jpg' },
	{ title: 'Data Entry', img: '/images/cube.jpg' },
];

export const feedCaroselItem = [
	{
		title: 'Stand out and win more work',
		description:
			'Ads are a proven way to help you get hired at any stage of your career.',
		btnTitle: 'Show me how',
		url: '/',
		icon: Rocket,
	},
	{
		title: 'Win work by being active',
		description:
			'Freelancers who turn on their Availability Badge receive up to 50% more invites.',
		btnTitle: 'Edit Badge',
		url: '/',
		icon: Award,
	},
	{
		title: 'Win work with a targeted boost',
		description:
			'Boosting your profile increases your chance of getting hired by up to 2x.',
		btnTitle: 'Boost Now',
		url: '/',
		icon: FileBadge,
	},
	{
		title: 'Stand out and win more work',
		description:
			'Ads are a proven way to help you get hired at any stage of your career.',
		btnTitle: 'Learn More',
		url: '/',
		icon: LineChart,
	},
	{
		title: 'Skillhub 101 will guide you through the basics of our platform.',
		description: 'Learn how to get started on Skillhub',
		btnTitle: 'Explore Skillhub 101',
		url: '/',
		icon: TextSearch,
	},
];
