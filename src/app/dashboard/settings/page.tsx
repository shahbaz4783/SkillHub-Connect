import DashboardHeader from '@/components/shared/DashboardHeader';
import AccountInfo from '@/components/layouts/settings/profile/AccountInfo';
import LocationInfo from '@/components/layouts/settings/profile/LocationInfo';
import UserActionRoutes from '@/components/navigation/user-action-routes';
import { SETTINGS_ROUTES } from '@/constants/navigation';

const SettingsPage = () => {
  return (
    <>
      <DashboardHeader title="Settings" subTitle="Manage your account here" />
      <UserActionRoutes routeObj={SETTINGS_ROUTES} />
      <AccountInfo />
      <LocationInfo />
    </>
  );
};

export default SettingsPage;
