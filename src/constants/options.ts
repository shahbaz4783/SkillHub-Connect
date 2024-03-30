import {
  BookText,
  Brush,
  Code,
  CodeXml,
  CreditCard,
  Database,
  DraftingCompass,
  FileCode,
  FileSearch,
  FileVideo,
  Laptop,
  Newspaper,
  NotebookPen,
  Rocket,
  Shield,
  TextSearch,
  WholeWord,
} from 'lucide-react';

export const categories = [
  {
    title: 'Development and IT',
    value: 'webdev',
    img: '/images/cube.jpg',
    icon: CodeXml,
  },
  {
    title: 'Logo Design',
    value: 'logo',
    img: '/images/cube.jpg',
    icon: Brush,
  },
  {
    title: 'Video Editing',
    value: 'video',
    img: '/images/cube.jpg',
    icon: FileVideo,
  },
  {
    title: 'Illustration',
    value: 'illustration',
    img: '/images/cube.jpg',
    icon: DraftingCompass,
  },
  {
    title: 'SEO',
    value: 'seo',
    img: '/images/cube.jpg',
    icon: TextSearch,
  },
  {
    title: 'WordPress',
    value: 'wordpress',
    img: '/images/cube.jpg',
    icon: WholeWord,
  },
  {
    title: 'Articles and Blogs',
    value: 'blog',
    img: '/images/cube.jpg',
    icon: Newspaper,
  },
  {
    title: 'Data Entry',
    value: 'entry',
    img: '/images/cube.jpg',
    icon: Database,
  },
];

export const experienceLvl = [
  {
    title: 'Entry Level',
    value: 'entry',
    img: '/images/cube.jpg',
  },
  {
    title: 'Intermediate',
    value: 'intermediate',
    img: '/images/cube.jpg',
  },
  {
    title: 'Expert',
    value: 'expert',
    img: '/images/cube.jpg',
  },
];

export const supportOptions = [
  {
    heading: 'Get Started',
    subheading: 'How it works, Getting Started, Fees & Protection',
    icon: Rocket,
  },
  {
    heading: 'Build Your Profile',
    subheading: 'Settings, Programs, Stats',
    icon: NotebookPen,
  },
  {
    heading: 'Find a Project',
    subheading: 'Search, Send Proposals, Interview, Accept Offers',
    icon: FileSearch,
  },
  {
    heading: 'Start Working',
    subheading: 'Messages, Work Diary, Contracts, Feedback',
    icon: Laptop,
  },
  {
    heading: 'Payment Issues',
    subheading: 'Timing, Issues, Refunds',
    icon: CreditCard,
  },
  {
    heading: 'Project Catalog',
    subheading: 'Pre-packaged projects',
    icon: BookText,
  },
  {
    heading: 'Trust & Safety',
    subheading: 'Terms of Service, Online Safety, Personal Data',
    icon: Shield,
  },
  {
    heading: 'SkillHub API',
    subheading: 'Development Resources',
    icon: FileCode,
  },
];
