import Heading from '@/components/loaders/Heading';
import { Button } from '@/components/ui/button';
import DetailsSection from '@/components/wrapper/DetailsSection';
import { getServiceDetailsData } from '@/data/all-listings';
import { CircleDollarSign, Heart, Timer } from 'lucide-react';
import { Suspense } from 'react';

interface ParamsProps {
  params: {
    serviceId: string;
  };
}

const ServiceDetails = async ({ params }: ParamsProps) => {
  const serviceDetails = await getServiceDetailsData(params.serviceId);

  return (
    <>
      <div className="flex min-h-svh flex-col md:flex-row">
        <Suspense fallback={<Heading />}>
          <main className="md:w-3/4">
            <DetailsSection>
              <p className="text-xl font-semibold">{serviceDetails?.title}</p>
              <p className="text-sm">
                {serviceDetails?.createdAt.toDateString()}
              </p>
            </DetailsSection>

            <DetailsSection>
              <p className="text-sm">{serviceDetails?.description}</p>
            </DetailsSection>

            <DetailsSection>
              <div className="flex gap-12">
                <menu className="flex gap-4 p-2">
                  <div className="pt-1">
                    <CircleDollarSign />
                  </div>
                  <ul>
                    <li className="font-semibold text-stone-600">
                      ${serviceDetails?.price}
                    </li>
                    <li className="text-sm text-slate-500">Price</li>
                  </ul>
                </menu>
                <menu className="flex gap-4 p-2">
                  <div className="pt-1">
                    <Timer />
                  </div>
                  <ul>
                    <li className="font-semibold text-stone-600">
                      {serviceDetails?.time}
                    </li>
                    <li className="text-sm text-slate-500">day delivery</li>
                  </ul>
                </menu>
              </div>
            </DetailsSection>

            <DetailsSection>
              <h2 className="text-lg font-semibold">Skills and Expertise</h2>
              <div className="space-x-3 md:w-1/2">
                {serviceDetails?.tags.split(',').map((item, index) => (
                  <span
                    key={index}
                    className="rounded-3xl bg-slate-200 px-2 py-1 md:px-4"
                  >
                    {item.trim()}
                  </span>
                ))}
              </div>
            </DetailsSection>

            <DetailsSection>
              <h2 className="text-lg font-semibold">Activity on this job </h2>
              <menu>
                <div className="space-x-3 text-sm">
                  <span>Proposals:</span>
                  <span>Less than 5</span>
                </div>
                <div className="space-x-3 text-sm">
                  <span>Proposals:</span>
                  <span>Less than 5</span>
                </div>
              </menu>
            </DetailsSection>
          </main>
        </Suspense>

        <aside className="border-l-[1px] px-6 py-8 md:w-1/4">
          <section className="flex flex-col justify-between gap-3">
            <Button>Buy Now</Button>
            <Button variant={'outline'} className="space-x-2">
              <Heart /> <span>Save Service</span>
            </Button>
          </section>
        </aside>
      </div>
    </>
  );
};

export default ServiceDetails;
