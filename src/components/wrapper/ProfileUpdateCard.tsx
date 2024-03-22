import React from 'react';

const ProfileUpdateCard = ({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}) => {
	return (
		<div className='bg-slate-100 p-8 rounded-md space-y-5'>
			<h2 className='text-xl font-semibold'>{title}</h2>
			{children}
		</div>
	);
};

export default ProfileUpdateCard;
