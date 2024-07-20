import UpdateAccountInfo from '@/components/forms/user/update-account-info';
import SectionHeading from '@/components/shared/SectionHeading';
import { currentUser } from '@/lib/auth';
import { Suspense } from 'react';
import SettingsPageLoading from '../loading';
import UpdateProfileImage from '@/components/forms/user/update-profile-image';

const PersonalInfoUpdatePage = async () => {
  const user = await currentUser();
  if (!user?.id) return null;

  return (
    <section className="space-y-12 lg:w-3/4">
      <SectionHeading
        title="Update your Personal Information"
        subTitle="Change your name, username, and profile image"
      />
      <UpdateProfileImage imageUrl={user?.image || ''} />
      <Suspense fallback={<SettingsPageLoading />}>
        <UpdateAccountInfo />
      </Suspense>
    </section>
  );
};

export default PersonalInfoUpdatePage;
