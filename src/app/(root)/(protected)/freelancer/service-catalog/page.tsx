import JobPostCard from '@/components/cards/job-post-card';
import ServiceCatalogCard from '@/components/cards/service-catalog-card';
import SectionHeading from '@/components/shared/SectionHeading';
import { Button } from '@/components/ui/button';
import { getServiceCatalog, getServiceCatalogByUsername } from '@/data/posts';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import Link from 'next/link';
import React from 'react';

const MyServiceCatalogPage = () => {
  return (
    <div className="space-y-8">
      <div className="mt-8 flex justify-between">
        <SectionHeading title="My Service Catalog" />
        <Link href={'./service-catalog/create'}>
          <Button>Create a service</Button>
        </Link>
      </div>
      <ServiceCatalogCard
        fetchData={() => getServiceCatalogByUsername('own')}
        isOwned={true}
      />
    </div>
  );
};

export default MyServiceCatalogPage;
