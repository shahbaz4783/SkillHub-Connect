import DashboardHeader from '@/components/shared/DashboardHeader';
import SettingsRoutes from '@/components/navigation/SettingsRoutes';
import AccountInfo from '@/components/layouts/settings/profile/AccountInfo';
import LocationInfo from '@/components/layouts/settings/profile/LocationInfo';

const SettingsPage = () => {
	return (
		<>
			<DashboardHeader title='Settings' />
			<SettingsRoutes />
			<AccountInfo />
			<LocationInfo />
		</>
	);
};

export default SettingsPage;
