import ServicePostForm from '@/components/forms/post/ServicePostForm';
import SectionHeading from '@/components/shared/SectionHeading';
import React from 'react';

const page = () => {
  return (
    <div className="space-y-12 md:w-2/3">
      <SectionHeading title="Create a Service" subTitle="" />
      <ServicePostForm />
    </div>
  );
};

export default page;
