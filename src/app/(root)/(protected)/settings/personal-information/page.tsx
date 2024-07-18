import UpdateAccountInfo from '@/components/forms/user/update-account-info';
import UpdateUserProfileForm from '@/components/forms/user/update-user-profile';
import SectionHeading from '@/components/shared/SectionHeading';
import { getUserProfileByID } from '@/data/user';
import { currentUser } from '@/lib/auth';

const PersonalInfoUpdatePage = async () => {
  const user = await currentUser();
  if (!user?.id) return null;
  const profile = await getUserProfileByID(user?.id);

  return (
    <section className="space-y-12 lg:w-3/4">
      <SectionHeading
        title="Update your Personal Information"
        subTitle="Change your name, username, and profile image"
      />
      <UpdateAccountInfo />
    </section>
  );
};

export default PersonalInfoUpdatePage;
