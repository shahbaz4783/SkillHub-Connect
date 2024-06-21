import Proposals from '@/components/layouts/work/proposals';
import UserActionRoutes from '@/components/navigation/user-action-routes';
import DashboardHeader from '@/components/shared/DashboardHeader';
import { WORK_ROUTES } from '@/constants/navigation';

const AdminJobsPage = async () => {
  return (
    <>
      <DashboardHeader
        title="Work History"
        subTitle="Overview of your work history"
      />
      <UserActionRoutes routeObj={WORK_ROUTES} />
      <Proposals />
    </>
  );
};

export default AdminJobsPage;
