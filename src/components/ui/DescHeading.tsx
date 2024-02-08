import React, { FC } from 'react';

interface DescHeadingInterface {
	heading: string;
	subhead: string;
}

const DescHeading: FC<DescHeadingInterface> = ({ heading, subhead }) => {
	return (
		<article className='flex flex-col mb-10 gap-6'>
			<h2 className='text-6xl text-stone-100 font-serif md:w-1/2'>{heading}</h2>
			<p className='text-stone-100 md:w-1/2 text-lg'>{subhead}</p>
		</article>
	);
};

export default DescHeading;
