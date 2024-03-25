import JobPostForm from '@/components/forms/JobPostForm';
import DashboardHeader from '@/components/shared/DashboardHeader';
import React from 'react';

const page = () => {
  return (
    <div className="space-y-12 md:w-2/3">
      <DashboardHeader title="Post a Job" />
      <JobPostForm />
    </div>
  );
};

export default page;
