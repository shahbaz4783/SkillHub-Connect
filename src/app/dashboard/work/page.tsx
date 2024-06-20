import Proposals from '@/components/layouts/work/proposals';
import DashboardHeader from '@/components/shared/DashboardHeader';

const AdminJobsPage = async () => {
  return (
    <>
      <DashboardHeader
        title="Work History"
        subTitle="Overview of your work history"
      />
      <Proposals />
    </>
  );
};

export default AdminJobsPage;
