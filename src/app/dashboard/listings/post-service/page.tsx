import ServicePostForm from '@/components/forms/post/ServicePostForm';
import DashboardHeader from '@/components/shared/DashboardHeader';
import React from 'react';

const page = () => {
  return (
    <div className="space-y-12 md:w-2/3">
      <DashboardHeader title="Create a Service" subTitle='' />
      <ServicePostForm />
    </div>
  );
};

export default page;
