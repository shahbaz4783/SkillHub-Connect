import Link from "next/link";

const footerData = [
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

export default function Footer() {
	return (
		<footer className='bg-black text-white flex flex-col gap-8 py-8'>
			<section className='md:flex justify-between gap-5 w-11/12 m-auto'>
				{footerData.map((data) => (
					<article className='flex flex-col gap-4'>
						<h2 className='text-2xl'>{data.heading}</h2>
						<ul>
							{data.lists.map((item) => (
								<li>{item.name}</li>
							))}
						</ul>
					</article>
				))}
			</section>
			<section className='w-11/12 m-auto flex flex-col gap-6'>
				<article className='flex flex-wrap gap-2'>
					<Link href='https://github.com/shahbaz4783' target='_blank'>
						GitHub
					</Link>
					<Link href='https://www.linkedin.com/in/shahbaz4783' target='_blank'>
            LinkedIn
					</Link>
					<Link href='https://twitter.com/shahbaz4783' target='_blank'>
						Twitter
					</Link>
					<Link href='https://www.youtube.com/@indimerz/featured' target='_blank'>
						Youtube
					</Link>
					<Link href='https://www.instagram.com/shahbaz04783' target='_blank'>
						Instagram
					</Link>
				</article>
				<article className='border-t-[1px] pt-4'>
					<p>&copy; SkillHub Connect Ltd. {new Date().getFullYear()}</p>
				</article>
			</section>
		</footer>
	);
}
