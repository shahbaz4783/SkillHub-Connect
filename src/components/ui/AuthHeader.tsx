'use client';

import Link from 'next/link';
import React from 'react';

interface authHeaderProps {
	heading: string;
	subHeading: string;
	label: string;
	linkTo: string;
}

const AuthHeader = ({
	heading,
	subHeading,
	label,
	linkTo,
}: authHeaderProps) => {
	return (
		<>
			<div className='mb-8'>
				<h2 className='text-3xl font-semibold mb-2'>{heading}</h2>
				<p>
					{subHeading}
					<Link
						className='hover:text-slate-900 text-slate-500 transition-all'
						href={linkTo}
					>
						{' '}
						{label}
					</Link>
				</p>
			</div>
		</>
	);
};

export default AuthHeader;
