import { FC } from 'react';

interface SectionTopInterface {
	heading: string;
	subhead: string;
}

const SectionTop: FC<SectionTopInterface> = ({ heading, subhead }) => {
	return (
		<article className='flex flex-col mb-10 gap-4'>
			<h2 className='text-4xl font-serif  max-w-[12em]'>{heading}</h2>
			<p className='text-stone-600'>{subhead}</p>
		</article>
	);
};

export default SectionTop;
