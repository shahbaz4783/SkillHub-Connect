import DashboardHeader from '@/components/shared/DashboardHeader';
import SettingsRoutes from '@/components/cards/SettingsRoutes';
import AccountInfo from '@/components/cards/AccountInfo';
import LocationInfo from '@/components/cards/LocationInfo';

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
