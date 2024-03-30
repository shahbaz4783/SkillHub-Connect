import PersonalInfo from '@/components/layouts/settings/profile/Personallnfo';
import UserAddress from '@/components/layouts/settings/profile/UserAddress';
import UserBio from '@/components/layouts/settings/profile/UserBio';
import UserSkills from '@/components/layouts/settings/profile/UserSkills';
import React from 'react';

const page = () => {
  return (
    <>
      <div className="grid gap-6 md:grid-cols-2">
        <PersonalInfo />
        <UserBio />
        <UserAddress />
        <UserSkills />
      </div>
    </>
  );
};

export default page;
