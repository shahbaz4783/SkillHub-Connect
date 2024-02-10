import { FaEdit, FaMoneyCheck, FaShoppingCart, FaUserCheck } from 'react-icons/fa';
import { TiPin } from 'react-icons/ti';
import {
	GiProgression,
	GiMagnifyingGlass,
	GiMoneyStack,
	GiOnTarget,
} from 'react-icons/gi';
import { GoGlobe } from 'react-icons/go';
import {
	FaListCheck,
	FaAward,
	FaStar,
	FaEye,
	FaSearchengin,
	FaFileContract,
	FaLaptopCode,
	FaRocket,
	FaRegFileCode,
} from 'react-icons/fa6';
import { MdOutlinePayment, MdOutlineStars } from 'react-icons/md';
import { HiOutlineCurrencyDollar } from 'react-icons/hi2';
import { AiOutlineSafety } from 'react-icons/ai';
import { ImProfile } from 'react-icons/im';
import { IoNewspaperOutline, IoRocketOutline } from 'react-icons/io5';
import { IoIosCreate, IoIosDoneAll } from 'react-icons/io';
import { CiMemoPad } from 'react-icons/ci';
import { VscWorkspaceTrusted } from 'react-icons/vsc';
import { GrCatalogOption } from 'react-icons/gr';

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

export const howToGetWork: ListItem[] = [
	{
		heading: '1. Create a profile',
		subheading:
			'Highlight your skills and experience, show your portfolio, and set your ideal pay rate',
		icon: ImProfile,
	},
	{
		heading: '2. Search for jobs',
		subheading:
			'Search on Talent Marketplace™ for the hourly or fixed-price work you’re looking for.',
		icon: FaSearchengin,
	},
	{
		heading: '3. Submit a proposal',
		subheading:
			'Set your rate and tell clients why you’re the right person for the job!',
		icon: IoNewspaperOutline,
	},
	{
		heading: '4. Get contract',
		subheading:
			'If the client likes your proposal they’ll send you a contract to begin working.',
		icon: FaFileContract,
	},
	{
		heading: '5. Complete the work',
		subheading:
			'Check steps off as you finish and work with your client if you have questions.',
		icon: FaLaptopCode,
	},
	{
		heading: '6. Get paid securely',
		subheading:
			'Once the client approves your work, you will get paid and they can leave you feedback.',
		icon: GiMoneyStack,
	},
];

export const howToPostService: ListItem[] = [
	{
		heading: '1. Create a project',
		subheading: 'Create a unique project that showcases your expertise.',
		icon: IoIosCreate,
	},
	{
		heading: '2. Project is reviewed',
		subheading:
			'We will let you know if you need to make any changes before its visible to clients.',
		icon: IoIosDoneAll,
	},
	{
		heading: '3. Get an order',
		subheading:
			'Your timeline starts once the client provides the info you need.',
		icon: GiOnTarget,
	},
	{
		heading: '4. Complete the work',
		subheading:
			'Check steps off as you finish and work with your client if you have questions.',
		icon: FaLaptopCode,
	},
	{
		heading: '5. Get paid securely',
		subheading:
			'Once the client approves your work, you will get paid and they can leave you feedback.',
		icon: GiMoneyStack,
	},
];

export const supportOptions: ListItem[] = [
	{
		heading: 'Get Started',
		subheading: 'How it works, Getting Started, Fees & Protection',
		icon: IoRocketOutline,
	},
	{
		heading: 'Build Your Profile',
		subheading: 'Settings, Programs, Stats',
		icon: ImProfile,
	},
	{
		heading: 'Find a Project',
		subheading: 'Search, Send Proposals, Interview, Accept Offers',
		icon: CiMemoPad,
	},
	{
		heading: 'Start Working',
		subheading: 'Messages, Work Diary, Contracts, Feedback',
		icon: FaLaptopCode,
	},
	{
		heading: 'Payment Issues',
		subheading: 'Timing, Issues, Refunds',
		icon: MdOutlinePayment,
	},
	{
		heading: 'Project Catalog',
		subheading: 'Pre-packaged projects',
		icon: GrCatalogOption,
	},
	{
		heading: 'Trust & Safety',
		subheading: 'Terms of Service, Online Safety, Personal Data',
		icon: VscWorkspaceTrusted,
	},
	{
		heading: 'SkillHub API',
		subheading: 'Development Resources',
		icon: FaRegFileCode,
	},
];