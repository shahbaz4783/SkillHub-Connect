'use client';

import { getJobPostsResult } from '@/data/search';
import { useSearchParams } from 'next/navigation';

const SearchPage = async () => {
  const search = useSearchParams();
  const searchQuery = search.get('q') as string;

  const result = await getJobPostsResult(searchQuery);
  console.log({ result });

  return (
    <div>
      <h1 className="text-2xl font-semibold">
        Showing results for "{searchQuery}"
      </h1>
    </div>
  );
};

export default SearchPage;
