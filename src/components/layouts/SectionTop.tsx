import React from 'react';

interface SectionTopInterface {
	heading: string;
  subhead: string
}

export default function SectionTop({ heading, subhead }: SectionTopInterface) {
	return (
		<article className='flex flex-col gap-3 mb-10'>
			<h2 className='text-4xl font-serif'>{heading}</h2>
			<p className='text-stone-500'>{subhead}</p>
		</article>
	);
}
