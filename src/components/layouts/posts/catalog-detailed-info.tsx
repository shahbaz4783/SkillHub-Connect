import { AllSkills } from '@/components/cards/skills-list';
import UserAvatar from '@/components/shared/UserAvatar';
import NoDataFound from '@/components/ui/NoDataFound';
import DetailsSection from '@/components/wrapper/DetailsSection';
import { getServiceDetailsData } from '@/data/posts';
import { timeSince } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

interface CatalogDetailedInfoProps {
  catalogId: string;
}

const CatalogDetailedInfo = async ({ catalogId }: CatalogDetailedInfoProps) => {
  const serviceDetails = await getServiceDetailsData(catalogId);
  if (!serviceDetails)
    return <NoDataFound message="We cant find anything :(" />;
  return (
    <>
      <DetailsSection>
        <p className="text-2xl font-semibold">{serviceDetails.title}</p>
        <p className="text-sm text-slate-500">
          Updated {timeSince(serviceDetails.updatedAt)}
        </p>
        <div className="flex items-center gap-4">
          <UserAvatar imageUrl={serviceDetails.user.image || ''} size={48} />
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
          className="aspect-video w-full rounded-md"
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
    </>
  );
};

export default CatalogDetailedInfo;
