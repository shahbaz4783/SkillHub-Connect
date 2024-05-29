import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import YourPostedJobs from '@/components/layouts/posts/YourPostedJobs';
import YourPostedServices from '@/components/layouts/posts/YourPostedServices';
import { Suspense } from 'react';
import ServiceCardSkeleton from '@/components/loaders/ServiceCardSkeleton';

const AllListings = () => {
  return (
    <Tabs defaultValue="service" className="">
      <TabsList className="mb-4 px-4 py-8">
        <TabsTrigger className="p-3" value="service">
          Your Posted Services
        </TabsTrigger>
        <TabsTrigger className="p-3" value="job">
          Your Posted Jobs
        </TabsTrigger>
      </TabsList>
      <TabsContent value="service">
        <Suspense fallback={<ServiceCardSkeleton />}>
          <YourPostedServices />
        </Suspense>
      </TabsContent>
      <TabsContent value="job">
        <Suspense fallback={<ServiceCardSkeleton />}>
          <YourPostedJobs />
        </Suspense>
      </TabsContent>
    </Tabs>
  );
};

export default AllListings;
