import React from 'react';
import { Skeleton } from '../ui/skeleton';

const FullPageSkeleton = () => {
  return (
    <div className="h-[90svh] p-12">
      <Skeleton className="h-full" />
    </div>
  );
};

export default FullPageSkeleton;
