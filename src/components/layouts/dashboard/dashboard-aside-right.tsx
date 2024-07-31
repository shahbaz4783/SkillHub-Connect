import DataCard from '@/components/cards/data-card';
import { Proposals } from '@/components/charts/proposals';
import { getConnectBalance } from '@/data/connects';
import { getActiveProposalsCount } from '@/data/proposals';
import { Coins, NotebookPen } from 'lucide-react';

const DashboardAsideRight = async () => {
  const connects = await getConnectBalance();
  const activeProposals = await getActiveProposalsCount();
  return (
    <aside className="space-y-8">
      <Proposals />

      <div className="grid grid-cols-2 gap-3 lg:gap-8">
        <DataCard
          icon={Coins}
          title="Connects left"
          data={connects || 0}
          linkTitle="Buy More"
          href="/connects"
        />
        <DataCard
          icon={NotebookPen}
          title="Active Proposals"
          data={activeProposals}
          linkTitle="Learn More"
          href="/help"
        />
      </div>
    </aside>
  );
};

export default DashboardAsideRight;
