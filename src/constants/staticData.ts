import { FaEdit } from 'react-icons/fa';
import { TiPin } from 'react-icons/ti';
import { GiProgression, GiMagnifyingGlass } from 'react-icons/gi';
import { GoGlobe } from 'react-icons/go';
import { FaListCheck, FaAward, FaStar } from 'react-icons/fa6';
import { MdOutlineStars } from 'react-icons/md';
import { HiOutlineCurrencyDollar } from 'react-icons/hi2';
import { AiOutlineSafety } from 'react-icons/ai';

import {
  Award,
  Banknote,
  CheckCheck,
  Eye,
  FileBadge,
  Laptop,
  LineChart,
  Newspaper,
  ReceiptText,
  Rocket,
  ShoppingCart,
  Slack,
  SquarePen,
  Target,
  TextSearch,
  UserCheck2,
  UserSquare,
} from 'lucide-react';

export const getStartedList = [
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

export const whyWe = [
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

export const ourFeatures = [
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

export const ourAchievement = [
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

export const howServicesWorks = [
  {
    heading: 'Browse',
    subheading:
      'Find the type of work you need, clearly defined and ready to start.',
    icon: Eye,
  },
  {
    heading: 'Buy',
    subheading: 'Work begins as soon as you purchase and provide requirements.',
    icon: ShoppingCart,
  },
  {
    heading: 'Approve',
    subheading:
      'Receive your project by a set deadline. Review, approve, and pay.',
    icon: UserCheck2,
  },
];

export const howToGetWork = [
  {
    heading: '1. Create a profile',
    subheading:
      'Showcase your skills, professional title, and bio to attract clients.',
    icon: UserSquare,
  },
  {
    heading: '2. Search for jobs',
    subheading: 'Search on Talent Marketplace for the work you’re looking for.',
    icon: TextSearch,
  },
  {
    heading: '3. Submit a proposal',
    subheading:
      'Set your rate and tell clients why you’re the right person for the job!',
    icon: Newspaper,
  },
  {
    heading: '4. Get contract',
    subheading:
      'If the client likes your proposal they’ll send you a contract to begin working.',
    icon: ReceiptText,
  },
  {
    heading: '5. Complete the work',
    subheading:
      'Check steps off as you finish and work with your client if you have questions.',
    icon: Laptop,
  },
  {
    heading: '6. Get paid securely',
    subheading:
      'After client approval, you’ll receive payment and valuable feedback.',
    icon: Banknote,
  },
];

export const howToPostService = [
  {
    heading: '1. Create a project',
    subheading: 'Create a unique project that showcases your expertise.',
    icon: SquarePen,
  },
  {
    heading: '2. Project is reviewed',
    subheading:
      'We will let you know if you need to make any changes before its visible to clients.',
    icon: CheckCheck,
  },
  {
    heading: '3. Get an order',
    subheading:
      'Your timeline starts once the client provides the info you need.',
    icon: Target,
  },
  {
    heading: '4. Begin the work',
    subheading:
      'Start working on the project and maintain communication with the client.',
    icon: Slack,
  },
  {
    heading: '5. Complete the work',
    subheading:
      'Check steps off as you finish and work with your client if you have questions.',
    icon: Laptop,
  },

  {
    heading: '6. Get paid securely',
    subheading:
      'After client approval, you’ll receive payment and valuable feedback.',
    icon: Banknote,
  },
];

// Footer Data
export const footerData = [
  {
    heading: 'Product',
    lists: [
      { name: 'About', url: '/about' },
      { name: 'Team', url: '/team' },
      { name: 'Careers', url: '/careers' },
    ],
  },
  {
    heading: 'Support',
    lists: [
      { name: 'How it works', url: '/features' },
      { name: 'Trust & Safety', url: '/about' },
      { name: 'Help Centre', url: '/support' },
    ],
  },
  {
    heading: 'Discover',
    lists: [
      { name: 'Guides', url: '/guides' },
      { name: 'Stories', url: '/stories' },
      { name: 'News', url: '/news' },
    ],
  },
  {
    heading: 'Browse',
    lists: [
      { name: 'Freelance Services', url: '/guides' },
      { name: 'Freelance Skills', url: '/stories' },
      { name: 'Partnerships', url: '/news' },
    ],
  },
];

// User Feed Carosel Data
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

export const ACCORDION_QUICK_ACTION = [
  {
    value: 'item-2',
    title: 'Proposals',
    subtitle: 'Looking for work? Browse jobs and get started on a proposal.',
    url: '/dashboard/work/proposals',
    urlText: 'My Proposals',
  },
  {
    value: 'item-3',
    title: 'Service Catalog',
    subtitle: 'Create a Catalog service for clients to purchase instantly',
    url: '/dashboard/listings',
    urlText: 'My Service Dashboard',
  },
];
