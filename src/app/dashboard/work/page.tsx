import DashboardHeader from '@/components/shared/DashboardHeader';

const AdminJobsPage = () => {
	return (
    <>
      <DashboardHeader
        title="Work History"
        subTitle="Overview of your work history"
      />
      <div>
        <p>No work history found...</p>
      </div>
    </>
  );
};

export default AdminJobsPage;
