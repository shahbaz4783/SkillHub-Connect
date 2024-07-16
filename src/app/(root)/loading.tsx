import FullPageSkeleton from '@/components/loaders/full-page-skeleton';
import React from 'react';

const loading = () => {
  return (
    <div>
      <FullPageSkeleton />
    </div>
  );
};

export default loading;
