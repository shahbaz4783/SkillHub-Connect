import JobPostCard from '@/components/cards/job-post-card';
import SectionHeading from '@/components/shared/SectionHeading';
import { Button } from '@/components/ui/button';
import { getJobPosts } from '@/data/all-listings';
import Link from 'next/link';
import React from 'react';

const AllJobPostShowPage = () => {
  return (
    <div className='space-y-8'>
      <div className="mt-8 flex justify-between">
        <SectionHeading title="My Job Posts" />
        <Link href={'./job-post/create'}>
          <Button>Post a new job</Button>
        </Link>
      </div>
      <JobPostCard fetchData={() => getJobPosts('own')} isOwned={true} />
    </div>
  );
};

export default AllJobPostShowPage;
