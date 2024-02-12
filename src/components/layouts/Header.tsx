import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import NavLink from '../ui/NavLink';

const Header = () => {
	return (
		<header className='shadow-sm flex items-start top-0 justify-between px-4 py-3 sticky z-10 bg-slate-50'>
			<div className='flex items-center'>
				<Link
					href={'/'}
					className='font-serif text-2xl text-green-700 font-semibold'
				>
					SkillHub Connect
				</Link>
			</div>
			<nav className='hidden md:flex items-center gap-5 text-lg'>
				<NavLink href='/services'>Find Talent</NavLink>
				<NavLink href='/jobs'>Find Work</NavLink>
				<NavLink href='/support'>Support</NavLink>
			</nav>
			<div className='hidden md:flex gap-4'>
				<Input type='search' placeholder='Search' />
				<NavLink href='/login'>
					<Button variant={'ghost'}>Login</Button>
				</NavLink>
				<NavLink href='/signup'>
					<Button variant={'default'}>Sign up</Button>
				</NavLink>
			</div>
		</header>
	);
};

export default Header;