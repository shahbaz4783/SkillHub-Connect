import React from 'react';
import Sortby from './sortby';

const ResultStrip = ({ count }: { count: number }) => {
  return (
    <div className="mb-6 flex items-center justify-between rounded-md bg-slate-200 px-6 py-2">
      <p className="text-lg font-semibold">Search Result: {count}</p>
      <Sortby />
    </div>
  );
};

export default ResultStrip;
