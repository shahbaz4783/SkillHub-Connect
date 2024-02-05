import React from 'react';

interface DescHeadingInterface {
	heading: string;
	subhead: string;
}

export default function DescHeading({ heading, subhead }: DescHeadingInterface) {
	return (
		<article className='flex flex-col mb-10 gap-6'>
			<h2 className='text-6xl text-stone-100 font-serif md:w-1/2'>{heading}</h2>
			<p className='text-stone-100 md:w-1/2 text-lg'>{subhead}</p>
		</article>
	);
}
