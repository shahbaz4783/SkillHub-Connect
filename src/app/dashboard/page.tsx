import DataCard from '@/components/cards/DataCard';
import Heading from '@/components/loaders/Heading';
import DashboardHeader from '@/components/shared/DashboardHeader';
import { currentUser } from '@/lib/auth';
import { Briefcase, CheckCircle, DollarSign, NotebookPen } from 'lucide-react';
import { Suspense } from 'react';

const Dashboard = async () => {
  const user = await currentUser();
  return (
    <>
      <Suspense fallback={<Heading />}>
        <DashboardHeader
          title={`Hi ${user?.name}`}
          subTitle="This is your dashboard overview"
        />
      </Suspense>
      <section className="grid grid-cols-1 justify-between gap-6 md:grid-cols-4">
        <DataCard icon={DollarSign} title="This Month Revenue" data={1435} />
        <DataCard icon={CheckCircle} title="Project Delivered" data={18} />
        <DataCard icon={Briefcase} title="Jobs Created" data={8} />
        <DataCard icon={NotebookPen} title="Service Added" data={12} />
      </section>
    </>
  );
};

export default Dashboard;
