import AccountInfo from '@/components/layouts/settings/profile/AccountInfo';
import LocationInfo from '@/components/layouts/settings/profile/LocationInfo';
import UserActionRoutes from '@/components/navigation/user-action-routes';
import { SETTINGS_ROUTES } from '@/constants/navigation';
import { Suspense } from 'react';
import SettingsPageLoading from './loading';
import SectionHeading from '@/components/shared/SectionHeading';

const SettingsPage = () => {
  return (
    <>
      <SectionHeading title="Settings" subTitle="Manage your account here" />
      <UserActionRoutes routeObj={SETTINGS_ROUTES} />
      <Suspense fallback={<SettingsPageLoading />}>
        <AccountInfo />
        <LocationInfo />
      </Suspense>
    </>
  );
};

export default SettingsPage;
