'use client';

import { authHeading } from '@/constants/headings';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const AuthHeader = () => {
	const path = usePathname();

	return (
		<>
			{authHeading[path === '/login' ? 'login' : 'signup'].map((data) => (
				<div key={data.link} className='mb-8'>
					<h2 className='text-3xl font-semibold mb-2'>{data.heading}</h2>
					<p>
						{data.subHeaing}
						<Link
							className='hover:text-green-900 text-green-700'
							href={data.link}
						>
							{' '}
							{data.label}
						</Link>
					</p>
				</div>
			))}
		</>
	);
};

export default AuthHeader;
