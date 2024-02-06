import Link from "next/link";
import {
	FaGithub,
	FaLinkedin,
	FaTwitter,
	FaYoutube,
	FaInstagram,
} from 'react-icons/fa';

import { footerData } from '@/data/footer_data';

export default function Footer() {
	return (
		<footer className='bg-black text-white flex flex-col gap-8 py-8'>
			<section className='md:flex justify-between gap-5 w-11/12 m-auto'>
				{footerData.map((data, index) => (
					<article key={index} className='flex flex-col gap-4'>
						<h2 className='text-2xl'>{data.heading}</h2>
						<ul>
							{data.lists.map((item, index) => (
								<li key={index}>{item.name}</li>
							))}
						</ul>
					</article>
				))}
			</section>
			<section className='w-11/12 m-auto flex flex-col gap-6'>
				<article className='flex flex-wrap gap-2 text-2xl'>
					<Link href='https://github.com/shahbaz4783' target='_blank'>
						<FaGithub />
					</Link>
					<Link href='https://www.linkedin.com/in/shahbaz4783' target='_blank'>
						<FaLinkedin />
					</Link>
					<Link href='https://twitter.com/shahbaz4783' target='_blank'>
						<FaTwitter />
					</Link>
					<Link
						href='https://www.youtube.com/@indimerz/featured'
						target='_blank'
					>
						<FaYoutube />
					</Link>
					<Link href='https://www.instagram.com/shahbaz04783' target='_blank'>
						<FaInstagram />
					</Link>
				</article>
				<article className='border-t-[1px] pt-4'>
					<p>&copy; SkillHub Connect Ltd. {new Date().getFullYear()}</p>
				</article>
			</section>
		</footer>
	);
}
