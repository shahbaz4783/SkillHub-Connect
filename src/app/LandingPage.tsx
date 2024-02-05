import Hero from "@/components/section/Hero";
import {
	popular_categories,
	getStartedList,
	forClient,
	forTalent,
} from '@/data/list_data';
import SectionTop from '@/components/layouts/SectionTop';
import ListItem from '@/components/layouts/ListItem';
import Link from 'next/link';
import Image from 'next/image';
import DescHeading from '@/components/layouts/DescHeading';
import { FaArrowRight } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

export default function LandingPage() {
	return (
		<>
			<main className='w-10/12 m-auto'>
				<Hero />

				<section className='mb-24'>
					<SectionTop
						heading='Browse talent by category'
						subhead='Explore diverse expertise and Skills across categories'
					/>
					<article className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
						{popular_categories.map((item) => (
							<menu
								key={item.title}
								className='flex flex-col gap-3 rounded-lg bg-card bg-slate-100 p-6 hover:bg-slate-200 cursor-pointer'
							>
								<h2 className='font-semibold text-lg'>{item.title}</h2>
								<div className='flex gap-6 text-stone-600 font-semibold'>
									<p>{item.rating}</p>
									<p>{item.skills} skills</p>
								</div>
							</menu>
						))}
					</article>
				</section>

				<section className='flex mb-24'>
					<aside className='hidden md:flex flex-[3]'>
						<Image src='/hero-img.png' alt='' width={500} height={500} />
					</aside>
					<aside className='flex-[5]'>
						<SectionTop
							heading='Getting work done has never been easier'
							subhead=''
						/>
						<article className='flex flex-col gap-2'>
							{getStartedList.map((data) => (
								<ListItem
									key={data.heading}
									title={data.heading}
									subheading={data.subheading}
								>
									{data.icon && <data.icon />}
								</ListItem>
							))}
						</article>
					</aside>
				</section>

				<section className='rounded-md p-6 mb-24 bg-gradient-to-r from-blue-800 to-indigo-900'>
					<h3 className='mb-24 text-xl text-stone-100'>For clients</h3>

					<DescHeading
						heading='Find talent your way'
						subhead='Work with the largest network of independent professionals and get things done—from quick turnarounds to big transformations.'
					/>
					<menu className='grid md:grid-cols-3 gap-6'>
						{forClient.map((data) => (
							<Link
								href={data.link}
								key={data.title}
								className='flex flex-col justify-center gap-4 bg-green-600 text-stone-100 hover:bg-stone-100 hover:text-green-600 p-4 rounded-lg'
							>
								<h2 className='text-2xl w-4/5 font-bold '>{data.heading}</h2>
								<p className='text-lg'>
									{data.title} <FaArrowRight />{' '}
								</p>
							</Link>
						))}
					</menu>
				</section>

				<section className='flex mb-24'>
					<aside className='flex-[5]'>
						<SectionTop
							heading='Where Industry Leaders Find Top Talent'
							subhead='Access the top 1% on SkillHub Connect, coupled with a suite of cutting-edge workforce management tools. Redefine innovation and embrace the future of success'
						/>
						<article className='flex flex-col gap-2'>
							{getStartedList.map((data) => (
								<ListItem
									key={data.heading}
									title={data.heading}
									subheading={data.subheading}
								>
									{data.icon && <data.icon />}
								</ListItem>
							))}
						</article>
					</aside>

					<aside className='hidden md:flex flex-[3]'>
						<Image src='/hero-img.png' alt='' width={500} height={500} />
					</aside>
				</section>

				<section className='text-stone-100 rounded-md p-6 mb-24 bg-gradient-to-r from-blue-800 to-indigo-900'>
					<h3 className='mb-10 text-xl'>For talent</h3>

					<DescHeading
						heading='Find great work'
						subhead='Meet clients you’re excited to work with and take your career or business to new heights.'
					/>
					<menu className='grid md:grid-cols-3 gap-6 border-t-2 pt-8'>
						{forTalent.map((data) => (
							<p>{data}</p>
						))}
						<Link href={'/jobs'}>
							<Button variant={'secondary'}>Find Opportunities</Button>
						</Link>
					</menu>
				</section>

				<section className='flex flex-col md:flex-row gap-4 text-black mb-24'>
					<aside className='flex flex-col gap-8 rounded-md bg-gradient-to-r p-8 from-stone-100 to-stone-200'>
						<h1 className='text-3xl md:text-6xl font-serif md:w-3/4'>
							Why businesses turn to SkillHub
						</h1>
						<article className='flex flex-col gap-2'>
							{getStartedList.map((data) => (
								<ListItem
									key={data.heading}
									title={data.heading}
									subheading={data.subheading}
								>
									{data.icon && <data.icon />}
								</ListItem>
							))}
						</article>
					</aside>
					<aside className='flex flex-col gap-8 rounded-md bg-stone-100 p-8'>
						<h2 className='text-3xl md:w-1/2'>
							We’re the world’s work marketplace
						</h2>
						<article className='flex flex-col gap-2'>
							{getStartedList.map((data) => (
								<ListItem
									key={data.heading}
									title={data.heading}
									subheading={data.subheading}
								>
									{data.icon && <data.icon />}
								</ListItem>
							))}
						</article>
					</aside>
				</section>
			</main>
		</>
	);
}
