import DataCard from '@/components/cards/data-card';
import { ProfileViews } from '@/components/charts/profile-views';
import { CheckCircle, CircleDollarSign } from 'lucide-react';

const DashboardAsideLeft = () => {
  return (
    <aside className="space-y-8">
      <div className="grid grid-cols-2 gap-3 lg:gap-8">
        <DataCard
          icon={CircleDollarSign}
          title="Total Revenue"
          data={0}
          linkTitle="Transaction history"
          href="/help"
        />

        <DataCard
          icon={CheckCircle}
          title="Projects Delivered"
          data={0}
          linkTitle="Learn More"
          href="/help"
        />
      </div>

      <ProfileViews />
    </aside>
  );
};

export default DashboardAsideLeft;
