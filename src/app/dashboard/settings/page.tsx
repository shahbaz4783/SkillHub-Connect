import DashboardHeader from '@/components/shared/DashboardHeader';
import AccountInfo from '@/components/layouts/settings/profile/AccountInfo';
import LocationInfo from '@/components/layouts/settings/profile/LocationInfo';
import UserActionRoutes from '@/components/navigation/user-action-routes';
import { SETTINGS_ROUTES } from '@/constants/navigation';
import { Suspense } from 'react';
import SettingsPageLoading from './loading';

const SettingsPage = () => {
  return (
    <>
      <DashboardHeader title="Settings" subTitle="Manage your account here" />
      <UserActionRoutes routeObj={SETTINGS_ROUTES} />
      <Suspense fallback={<SettingsPageLoading />}>
        <AccountInfo />
        <LocationInfo />
      </Suspense>
    </>
  );
};

export default SettingsPage;
