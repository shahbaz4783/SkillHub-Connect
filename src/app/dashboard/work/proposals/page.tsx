import Proposals from '@/components/cards/proposals';
import ServiceCardSkeleton from '@/components/loaders/ServiceCardSkeleton';
import DashboardHeader from '@/components/shared/DashboardHeader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Suspense } from 'react';

const ProposalsPage = () => {
  return (
    <>
      <DashboardHeader title="Proposals" subTitle="Manage your proposal here" />

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
            <Proposals />
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
