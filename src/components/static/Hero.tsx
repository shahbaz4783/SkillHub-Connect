import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';

const Hero = () => {
	return (
		<section className='flex min-h-[80svh] px-4 md:px-0'>
			<aside className='flex-1 flex gap-12 flex-col justify-center'>
				<article className='flex flex-col gap-6'>
					<div>
						<h1 className='text-6xl font-serif font-semibold text-green-600'>
							Redefine
						</h1>
						<h1 className='text-6xl font-serif font-semibold text-green-600'>
							the norm...
						</h1>
					</div>
					<div>
						<p className='text-xl text-stone-500 font-semibold'>
							Break free from tradition. Assemble your dream team today.
						</p>
						<p className='text-xl text-stone-500 font-semibold'>
							Right now. Right here.
						</p>
					</div>
					<div className=''>
						<Link href={'/signup'}>
							<Button>Get Started</Button>
						</Link>
					</div>
				</article>
				<article>
					<h3 className='text-stone-500 font-bold'>Trusted by</h3>
					<div className='flex gap-2'>
						<Image
							src={'/microsoft.svg'}
							width={100}
							height={80}
							alt='google'
						/>
						<Image src={'/oracle.svg'} width={100} height={80} alt='google' />
						<Image src={'/netflix.svg'} width={100} height={80} alt='google' />
					</div>
				</article>
			</aside>
			<aside className='flex-1 hidden md:flex'>
				<Image
					draggable={false}
					src={'/images/working.png'}
					width={600}
					height={600}
					alt='Image of hero section'
				/>
			</aside>
		</section>
	);
};

export default Hero;