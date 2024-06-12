import DashboardHeader from '@/components/shared/DashboardHeader';
import SettingsRoutes from '@/components/navigation/SettingsRoutes';
import AccountInfo from '@/components/layouts/settings/profile/AccountInfo';
import LocationInfo from '@/components/layouts/settings/profile/LocationInfo';

const SettingsPage = () => {
	return (
		<>
			<DashboardHeader title='Settings' subTitle='Manage your account here' />
			<SettingsRoutes />
			<AccountInfo />
			<LocationInfo />
		</>
	);
};

export default SettingsPage;
