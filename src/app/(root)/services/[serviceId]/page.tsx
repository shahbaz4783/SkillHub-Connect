import { AllSkills } from '@/components/cards/skills-list';
import Heading from '@/components/loaders/Heading';
import UserAvatar from '@/components/shared/UserAvatar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import DetailsSection from '@/components/wrapper/DetailsSection';
import { getServiceDetailsData } from '@/data/all-listings';
import { timeSince } from '@/lib/utils';
import { CircleDollarSign, Heart, Timer, UserCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

interface ParamsProps {
  params: {
    serviceId: string;
  };
}

const ServiceDetails = async ({ params }: ParamsProps) => {
  const serviceDetails = await getServiceDetailsData(params.serviceId);
  if (!serviceDetails) return null;
  return (
    <>
      <div className="flex min-h-svh flex-col md:flex-row">
        <Suspense fallback={<Heading />}>
          <main className="md:w-3/4">
            <DetailsSection>
              <p className="text-2xl font-semibold">{serviceDetails.title}</p>
              <p className="text-sm text-slate-500">
                Updated {timeSince(serviceDetails.updatedAt)}
              </p>
              <div className="flex items-center gap-4">
                <UserAvatar
                  imageUrl={serviceDetails.user.image || ''}
                  size={48}
                />
                <Link
                  className="font-semibold"
                  href={`/profile/${serviceDetails.user.username}`}
                >
                  {serviceDetails.user.name}
                </Link>
              </div>
            </DetailsSection>

            <DetailsSection>
              <Image
                src={serviceDetails.imageUrl}
                width={500}
                height={400}
                alt="Service Image"
              />
            </DetailsSection>

            <DetailsSection>
              <h2 className="text-lg font-semibold">Catalog Details</h2>
              <p className="text-sm">{serviceDetails.description}</p>
            </DetailsSection>

            <DetailsSection>
              <h2 className="text-lg font-semibold">Skills and Expertise</h2>
              <AllSkills skills={serviceDetails.tags} />
            </DetailsSection>
          </main>
        </Suspense>

        <aside className="border-l-[1px] px-6 py-8 md:w-1/4">
          <Card>
            <CardContent className="space-y-6">
              <p className="font-mono text-2xl font-bold">
                ${serviceDetails.price}
              </p>
              <menu>
                <div className="flex justify-between">
                  <p className="text-sm text-slate-500">Delivery Time</p>
                  <p className="font-mono font-semibold">
                    {serviceDetails.time} days
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm text-slate-500">Number of Revisions</p>
                  <p className="font-mono font-semibold">3</p>
                </div>
              </menu>
              <div className="space-y-3">
                <Button className="w-full">Continue</Button>
                <Button variant={'outline'} className="w-full space-x-2">
                  <Heart size={18} /> <span>Save Service</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </aside>
      </div>
    </>
  );
};

export default ServiceDetails;
