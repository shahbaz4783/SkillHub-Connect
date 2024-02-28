import { Button } from '@/components/ui/button';
import Link from 'next/link';

const NotFound = () => {
	return (
		<main className='flex flex-col gap-8 justify-center items-center h-svh'>
			<article>
				<h1 className='font-serif text-5xl mb-3 text-center'>
					Looking for something?
				</h1>
				<p className='text-center'>
					We can’t find this page. But we can help you find new opportunities:
				</p>
				<div className='text-center'>
					<Link className='text-green-700 underline' href={'/services'}>
						hire talent
					</Link>
					,{' '}
					<Link className='text-green-700 underline' href={'/services'}>
						find work
					</Link>{' '}
					or{' '}
					<Link className='text-green-700 underline' href={'/jobs'}>
						get help
					</Link>
				</div>
			</article>

			<Link href={'/'}>
				<Button>Go to homepage</Button>
			</Link>
		</main>
	);
};

export default NotFound;
