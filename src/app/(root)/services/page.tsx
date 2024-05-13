import ServiceCard from '@/components/cards/ServiceCard';
import DescHeading from '@/components/ui/DescHeading';
import { getAllServiceListings } from '@/data/all-listings';
import Link from 'next/link';

const JobDetails = async () => {
  return (
    <main className="my-12">
      <DescHeading
        heading="Browse and buy projects"
        subhead="Complete your most pressing work with Project Catalog. Browse and buy predefined projects in just a few clicks"
      />
      <section className="grid gap-8 md:grid-cols-4">
        <ServiceCard />
      </section>
    </main>
  );
};

export default JobDetails;
