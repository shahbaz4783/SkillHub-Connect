import UserActionRoutes from '@/components/navigation/user-action-routes';
import SectionHeading from '@/components/shared/SectionHeading';
import { WORK_ROUTES } from '@/constants/navigation';

const AdminJobsPage = async () => {
  return (
    <>
      <SectionHeading
        title="Work History"
        subTitle="Overview of your work history"
      />
      <UserActionRoutes routeObj={WORK_ROUTES} />
    </>
  );
};

export default AdminJobsPage;
