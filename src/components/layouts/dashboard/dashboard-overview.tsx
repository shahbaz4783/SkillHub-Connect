import {
  Briefcase,
  CheckCircle,
  CircleDollarSign,
  NotebookPen,
} from 'lucide-react';
import DataCard from '@/components/cards/data-card';
import { getUserListingsData } from '@/data/user-listings';

const DashboardOverview = async () => {
  const jobListingData = await getUserListingsData('job');
  const totalJobCount = jobListingData?.count;
  const serviceListingData = await getUserListingsData('service');
  const totalServiceCount = serviceListingData?.count;
  return (
    <section className="grid grid-cols-1 justify-between gap-6 md:grid-cols-4">
      <DataCard icon={CircleDollarSign} title="This Month Revenue" data={0} />
      <DataCard icon={CheckCircle} title="Projects Delivered" data={0} />
      <DataCard icon={Briefcase} title="Jobs Posted" data={totalJobCount} />
      <DataCard
        icon={NotebookPen}
        title="Services Listed"
        data={totalServiceCount}
      />
    </section>
  );
};

export default DashboardOverview;
