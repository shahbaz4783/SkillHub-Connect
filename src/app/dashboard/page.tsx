import Heading from '@/components/loaders/Heading';
import DashboardHeader from '@/components/shared/DashboardHeader';
import { currentUser } from '@/lib/auth';
import { Suspense } from 'react';

const Dashboard = async () => {
  const user = await currentUser();
  return (
    <>
      <DashboardHeader title="Dashboard" />
      <Suspense fallback={<Heading />}>
        <section className="py-4 text-xl text-slate-500">
          <h2>Hey there, {user?.name}</h2>
        </section>
      </Suspense>
    </>
  );
};

export default Dashboard;
