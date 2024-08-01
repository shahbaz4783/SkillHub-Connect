import DashboardAsideLeft from '@/components/layouts/dashboard/dashboard-aside-left';
import DashboardAsideRight from '@/components/layouts/dashboard/dashboard-aside-right';
import { OneAndHalf } from '@/components/loaders/text-skeletons';
import SectionHeading from '@/components/shared/SectionHeading';
import { currentUser } from '@/lib/auth';
import { Suspense } from 'react';

const Dashboard = async () => {
  const user = await currentUser();
  return (
    <>
      <Suspense fallback={<OneAndHalf />}>
        <SectionHeading
          title={`Hi ${user?.name}`}
          subTitle="This is your dashboard overview"
        />
      </Suspense>
      <div className="grid gap-8 lg:grid-cols-2">
        <DashboardAsideLeft />
        <DashboardAsideRight />
      </div>
    </>
  );
};

export default Dashboard;
