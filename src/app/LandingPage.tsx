import Hero from "@/components/section/Hero";
import { popular_categories, getStartedList } from '@/data/list_data';
import SectionTop from '@/components/layouts/SectionTop';
import ListItem from '@/components/layouts/ListItem';
import { CiEdit } from 'react-icons/ci';
import Image from 'next/image';


export default function LandingPage() {
	return (
		<>
			<main className='w-11/12 m-auto'>
				<Hero />

				<section className='mb-24'>
					<SectionTop
						heading='Browse talent by category'
						subhead='Explore diverse expertise and Skills across categories'
					/>
					<article className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
						{popular_categories.map((item) => (
							<menu className='flex flex-col gap-3 rounded-lg bg-card bg-slate-100 p-6 hover:bg-slate-200 cursor-pointer'>
								<h2 className='font-semibold text-lg'>{item.title}</h2>
								<div className='flex gap-6 text-stone-600 font-semibold'>
									<p>{item.rating}</p>
									<p>{item.skills} skills</p>
								</div>
							</menu>
						))}
					</article>
				</section>

				<section className='flex'>
					<aside className='hidden md:flex flex-[3]'>
						<Image src='/hero-img.png' alt='' width={500} height={500} />
					</aside>
					<aside className='flex-[5]'>
						<SectionTop
							heading='Getting work done has never been easier'
							subhead=''
						/>
						<article className="flex flex-col gap-2">
							{getStartedList.map((data) => (
								<ListItem title={data.heading} subheading={data.subheading}>
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
