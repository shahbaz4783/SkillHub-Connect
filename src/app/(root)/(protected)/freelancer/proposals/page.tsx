import Proposals from '@/components/cards/proposals';
import ServiceCardSkeleton from '@/components/loaders/ServiceCardSkeleton';
import SectionHeading from '@/components/shared/SectionHeading';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getUserProposals } from '@/data/proposals';
import { Suspense } from 'react';

const ProposalsPage = () => {
  return (
    <main className="space-y-16">
      <SectionHeading
        title="My Applications"
        subTitle="View and Manage Your Job Proposals"
      />

      <Tabs defaultValue="service" className="">
        <TabsList className="mb-4 px-4 py-8">
          <TabsTrigger className="p-3" value="service">
            Active
          </TabsTrigger>
          <TabsTrigger className="p-3" value="job">
            Archived
          </TabsTrigger>
        </TabsList>
        <TabsContent value="service">
          <Suspense fallback={<ServiceCardSkeleton />}>
            <Proposals fetchData={() => getUserProposals()} />
          </Suspense>
        </TabsContent>
        <TabsContent value="job">
          <Suspense fallback={<ServiceCardSkeleton />}></Suspense>
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default ProposalsPage;
