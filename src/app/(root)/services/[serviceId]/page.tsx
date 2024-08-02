import CatalogDetailedInfo from '@/components/layouts/posts/catalog-detailed-info';
import CatalogInfoAside from '@/components/layouts/posts/catalog-info-aside';
import { OneAndHalf, TwoAndHalf } from '@/components/loaders/text-skeletons';
import { Suspense } from 'react';

interface ParamsProps {
  params: {
    serviceId: string;
  };
}

const ServiceDetails = async ({ params }: ParamsProps) => {
  return (
    <>
      <div className="flex min-h-svh flex-col md:flex-row">
        <main className="md:w-3/4">
          <Suspense
            fallback={
              <div className="space-y-12 py-8 lg:pr-4">
                <OneAndHalf />
                <hr />
                <TwoAndHalf />
                <hr />
                <OneAndHalf />
                <hr />
                <TwoAndHalf />
                <hr />
                <OneAndHalf />
                <hr />
              </div>
            }
          >
            <CatalogDetailedInfo catalogId={params.serviceId} />
          </Suspense>
        </main>

        <aside className="px-6 py-8 md:w-1/4 lg:border-l-[1px]">
          <Suspense
            fallback={
              <div className="space-y-12 py-8 lg:pr-4">
                <OneAndHalf />
                <hr />
                <TwoAndHalf />
                <hr />
                <OneAndHalf />
                <hr />
                <TwoAndHalf />
                <hr />
                <OneAndHalf />
                <hr />
              </div>
            }
          >
            <CatalogInfoAside catalogId={params.serviceId} />
          </Suspense>
        </aside>
      </div>
    </>
  );
};

export default ServiceDetails;
