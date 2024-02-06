import { FaEdit, FaShoppingCart, FaUserCheck } from 'react-icons/fa';
import { TiPin } from 'react-icons/ti';
import { GiProgression, GiMagnifyingGlass } from 'react-icons/gi';
import { GoGlobe } from 'react-icons/go';
import { FaListCheck, FaAward, FaStar, FaEye } from 'react-icons/fa6';
import { MdOutlineStars } from 'react-icons/md';
import { HiOutlineCurrencyDollar } from 'react-icons/hi2';
import { AiOutlineSafety } from 'react-icons/ai';


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

export const whyWe: ListItem[] = [
	{
		heading: 'Find the Perfect Experts for Your Needs',
		subheading: 'Access a vast pool of talent to bridge your skill gaps.',
		icon: GiMagnifyingGlass,
	},
	{
		heading: ' Take Control of Your Projects',
		subheading: 'Seamlessly hire, manage, and pay your freelance workforce.',
		icon: FaListCheck,
	},
	{
		heading: 'Get Expert Support at Every Step',
		subheading:
			'Skillhub offers end-to-end guidance for successful collaborations.',
		icon: GoGlobe,
	},
];

export const ourFeatures: ListItem[] = [
	{
		heading: 'Proof of quality',
		subheading:
			'Check any pro’s work samples, client reviews, and identity verification.',
		icon: MdOutlineStars,
	},
	{
		heading: 'No cost until you hire',
		subheading:
			'Interview potential fits for your job, negotiate rates, and only pay for work you approve.',
		icon: HiOutlineCurrencyDollar,
	},
	{
		heading: 'Safe and secure',
		subheading:
			'Focus on your work knowing we help protect your data and privacy. We’re here with 24/7 support if you need it.',
		icon: AiOutlineSafety,
	},
];

export const ourAchievement: ListItem[] = [
	{
		heading: '4.8/5',
		subheading: 'Clients rate professionals on SkillHub',
		icon: FaStar,
	},
	{
		heading: 'Award Winner',
		subheading: 'G2’s 2021 Best Software Awards',
		icon: FaAward,
	},
];

export const howServicesWorks: ListItem[] = [
	{
		heading: 'Browse',
		subheading:
			'Find the type of work you need, clearly defined and ready to start.',
		icon: FaEye,
	},
	{
		heading: 'Buy',
		subheading: 'Work begins as soon as you purchase and provide requirements.',
		icon: FaShoppingCart,
	},
	{
		heading: 'Approve',
		subheading:
			'Receive your project by a set deadline. Review, approve, and pay.',
		icon: FaUserCheck,
	},
];
