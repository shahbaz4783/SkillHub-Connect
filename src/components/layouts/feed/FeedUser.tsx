import { currentUser } from '@/lib/auth';
import { CircleUser } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FeedUser = async () => {
	const user = await currentUser();

	return (
		<section className='pb-5 bg-slate-100 rounded-md p-4 space-y-3'>
			<div className='flex gap-3'>
				{user?.image ? (
					<Image
						className='rounded-xl'
						src={user?.image}
						alt='User Profile Image'
						width={80}
						height={80}
					/>
				) : (
					<CircleUser />
				)}
				<div>
					<p>Welcome back,</p>
					<p>{user?.name}</p>
					<p>Web Development | CSS, </p>
				</div>
			</div>
			<div>
				<Link
					className='text-slate-500 hover:text-slate-700 text-sm underline underline-offset-2'
					href={'/dashboard/settings/profile-settings'}
				>
					Update your profile
				</Link>
			</div>
		</section>
	);
};

export default FeedUser;
