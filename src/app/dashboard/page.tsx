import DashboardOverview from '@/components/layouts/dashboard/dashboard-overview';
import Heading from '@/components/loaders/Heading';
import SectionHeading from '@/components/shared/SectionHeading';
import { currentUser } from '@/lib/auth';
import { Suspense } from 'react';

const Dashboard = async () => {
  const user = await currentUser();
  return (
    <>
      <Suspense fallback={<Heading />}>
        <SectionHeading
          title={`Hi ${user?.name}`}
          subTitle="This is your dashboard overview"
        />
      </Suspense>
      <DashboardOverview />
    </>
  );
};

export default Dashboard;
