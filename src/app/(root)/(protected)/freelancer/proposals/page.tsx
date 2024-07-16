import Proposals from '@/components/cards/proposals';
import ServiceCardSkeleton from '@/components/loaders/ServiceCardSkeleton';
import SectionHeading from '@/components/shared/SectionHeading';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getUserProposals } from '@/data/proposals';
import { Suspense } from 'react';

const ProposalsPage = () => {
  return (
    <>
      <SectionHeading title="Proposals" subTitle="Manage your proposal here" />

      <Tabs defaultValue="service" className="">
        <TabsList className="mb-4 px-4 py-8">
          <TabsTrigger className="p-3" value="service">
            Your applied proposals
          </TabsTrigger>
          <TabsTrigger className="p-3" value="job">
            Proposals received on jobs
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
    </>
  );
};

export default ProposalsPage;
