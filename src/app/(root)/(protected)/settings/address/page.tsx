import UpdateAddressForm from '@/components/forms/user/update-address';
import SectionHeading from '@/components/shared/SectionHeading';
import { getUserAddressByID, getUserProfileByID } from '@/data/user';
import { currentUser } from '@/lib/auth';

const PersonalInfoUpdatePage = async () => {
  const user = await currentUser();
  if (!user?.id) return null;
  const address = await getUserAddressByID(user?.id);

  return (
    <section className="space-y-12 lg:w-3/4">
      <SectionHeading
        title="Update your Address"
        subTitle="Provide your current city, country, and address details"
      />
      <UpdateAddressForm
        address={address?.address || ''}
        address2={address?.address2 || ''}
        city={address?.city || ''}
        country={address?.country || ''}
        postal_code={address?.postal_code}
      />
    </section>
  );
};

export default PersonalInfoUpdatePage;
