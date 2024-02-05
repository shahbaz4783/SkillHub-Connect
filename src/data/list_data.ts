import { FaEdit } from 'react-icons/fa';
import { TiPin } from 'react-icons/ti';
import { GiProgression } from 'react-icons/gi';



interface ListItem {
	heading: string;
	subheading: string;
	icon?: React.ElementType;
}

export const popular_categories = [
	{
		title: 'Development and IT',
		img: '/ibm.svg',
		rating: '4.86/5',
		skills: 134,
	},
	{
		title: 'AI Services',
		img: '/ibm.svg',
		rating: '4.72/5',
		skills: 134,
	},
	{
		title: 'Sales and Marketing',
		img: '/ibm.svg',
		rating: '4.89/5',
		skills: 134,
	},
	{
		title: 'Writing and Translation',
		img: '/ibm.svg',
		rating: '4.93/5',
		skills: 134,
	},
	{
		title: 'Finance and Accounting',
		img: '/ibm.svg',
		rating: '4.69/5',
		skills: 134,
	},
	{
		title: 'Design and Creative',
		img: '/ibm.svg',
		rating: '4.88/5',
		skills: 134,
	},
	{
		title: 'Engineering & Architecture',
		img: '/ibm.svg',
		rating: '4.81/5',
		skills: 134,
	},
	{
		title: 'Writing & Translation',
		img: '/ibm.svg',
		rating: '4.75/5',
		skills: 134,
	},
];

export const getStartedList: ListItem[] = [
	{
		heading: 'No cost to join',
		subheading:
			'Register and browse professionals, explore projects, or even book a consultation.',
		icon: FaEdit,
	},
	{
		heading: 'Post a job and hire top talent',
		subheading:
			'Finding talent doesn’t have to be a chore. Post a job or we can search for you!',
		icon: TiPin,
	},
	{
		heading: 'Work with the best—without breaking the bank',
		subheading:
			'Upwork makes it affordable to up your work and take advantage of low transaction rates.',
		icon: GiProgression,
	},
];

export const forClient = [
	{
		heading: 'Post a job and hire a pro',
		link: '/services',
		title: 'Talent Marketplace',
	},
	{
		heading: 'Browse and buy projects',
		link: '/services',
		title: 'Project Catalog',
	},
	{
		heading: 'Get advice from industry expert',
		link: '/services',
		title: 'Consultations',
	},
];

export const forTalent = [
	'Find opportunities for every stage of your freelance career',
	'Control when, where, and how you work',
	'Explore different ways to earn',
];