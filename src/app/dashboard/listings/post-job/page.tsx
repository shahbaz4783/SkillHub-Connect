import JobPostForm from '@/components/forms/post/JobPostForm';
import SectionHeading from '@/components/shared/SectionHeading';
import React from 'react';

const page = () => {
  return (
    <div className="space-y-12 md:w-2/3">
      <SectionHeading title="Post a Job" subTitle='' />
      <JobPostForm />
    </div>
  );
};

export default page;
