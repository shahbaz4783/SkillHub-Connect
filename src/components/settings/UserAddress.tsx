import React from 'react';
import ProfileUpdateCard from '../wrapper/ProfileUpdateCard';
import UpdateAddress from '../forms/UpdateAddress';

const UserAddress = () => {
	return (
		<ProfileUpdateCard title='Address'>
			<UpdateAddress />
		</ProfileUpdateCard>
	);
};

export default UserAddress;
