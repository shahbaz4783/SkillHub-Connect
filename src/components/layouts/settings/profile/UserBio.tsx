import React from 'react';
import ProfileUpdateCard from '../../../wrapper/ProfileUpdateCard';
import UpdateBio from '../../../forms/UpdateBio';

const UserBio = () => {
  return (
    <ProfileUpdateCard title="Bio">
      <UpdateBio />
    </ProfileUpdateCard>
  );
};

export default UserBio;
