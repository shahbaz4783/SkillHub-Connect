import HowToEarn from '@/components/layouts/static/HowToEarn';
import SectionHeading from '@/components/shared/SectionHeading';
import { Button } from '@/components/ui/button';
import PageHeading from '@/components/ui/page-heading';
import Link from 'next/link';

const JobPage = () => {
  return (
    <main className="my-12 space-y-32">
      <section>
        <PageHeading
          title="Find Your Next Opportunity"
          subTitle="Explore and apply to projects that match your skills and interests"
        />
        <div className="flex gap-4">
          <Link href={'/search?q=projects'}>
            <Button className="w-full md:w-auto">Browse Projects</Button>
          </Link>
          <Link href={'/search?q=jobs'}>
            <Button className="w-full md:w-auto" variant={'secondary'}>
              View Job Listings
            </Button>
          </Link>
        </div>
      </section>

      <section className='space-y-16'>
        <h2 className="text-center font-semibold text-3xl">
          Explore the different ways to earn
        </h2>
        <HowToEarn />
      </section>
    </main>
  );
};

export default JobPage;
