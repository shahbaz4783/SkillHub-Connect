import React from 'react';
import ProfileUpdateCard from '../../../wrapper/ProfileUpdateCard';
import UpdateSkills from '@/components/forms/UpdateSkills';

const UserSkills = () => {
  return (
    <ProfileUpdateCard title="Skills">
      <UpdateSkills />
    </ProfileUpdateCard>
  );
};

export default UserSkills;
