import AccountInfo from '@/components/layouts/settings/profile/AccountInfo';
import LocationInfo from '@/components/layouts/settings/profile/LocationInfo';
import { Suspense } from 'react';
import SettingsPageLoading from './loading';
import SectionHeading from '@/components/shared/SectionHeading';

const SettingsPage = () => {
  return (
    <>
      <SectionHeading title="Settings" subTitle="Manage your account here" />
      <Suspense fallback={<SettingsPageLoading />}>
        <AccountInfo />
        <LocationInfo />
      </Suspense>
    </>
  );
};

export default SettingsPage;
