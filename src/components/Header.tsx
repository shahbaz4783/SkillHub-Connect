import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Header() {
	return (
		<header className='border-b-2 flex items-start top-0 justify-between px-4 py-3 sticky z-10 bg-white'>
			<div className='flex items-center'>
				<Link
					href={'/'}
					className='font-serif text-2xl text-green-700 font-semibold'
				>
					SkillHub Connect
				</Link>
			</div>
			<nav className='hidden md:flex items-center gap-5'>
				<Link href={'/services'}>Find Talent</Link>
				<Link href={'/jobs'}>Find Work</Link>
				<Link href={'/support'}>Support</Link>
			</nav>
			<div className='hidden md:flex gap-4'>
				<Input type='search' placeholder='Search' />
				<Button variant={'ghost'}>Login</Button>
				<Button variant={'default'}>Sign up</Button>
			</div>
		</header>
	);
}
