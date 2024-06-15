import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface PostDetailsAsideProps {
  connectCost: number;
  availableConnects: number;
  jobId: string;
}

const JobPostDetailsAside = ({
  connectCost,
  availableConnects,
  jobId,
}: PostDetailsAsideProps) => {
  return (
    <aside className="border-l-[1px] px-6 py-8 md:w-1/4">
      <section className="flex flex-col justify-between gap-3">
        <Link href={`/freelance-jobs/${jobId}/apply`}>
          <Button>Apply Now</Button>
        </Link>
        <form action="">
          <Button variant={'outline'} className="space-x-2">
            <Heart /> <span>Save Job</span>
          </Button>
        </form>
        <div className="space-y-2">
          <p className="text-sm text-slate-700">
            Required Connects to submit a proposal: {connectCost}
          </p>
          <p className="text-sm text-slate-700">
            Available Connects: {availableConnects}
          </p>
        </div>
        <div>
          <h2>About the client</h2>
        </div>
      </section>
    </aside>
  );
};

export default JobPostDetailsAside;
