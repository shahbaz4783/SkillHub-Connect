import PersonalInfo from '@/components/settings/Personallnfo';
import UserAddress from '@/components/settings/UserAddress';
import UserBio from '@/components/settings/UserBio';
import UserSkills from '@/components/settings/UserSkills';
import React from 'react';

const page = () => {
	return (
		<>
			<div className='grid md:grid-cols-2 gap-6'>
				<PersonalInfo />
				<UserBio />
				<UserAddress />
				<UserSkills />
			</div>
		</>
	);
};

export default page;
