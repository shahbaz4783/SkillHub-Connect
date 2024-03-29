'use client';

import { useSearchParams } from 'next/navigation';

const SearchPage = () => {
  const search = useSearchParams();
  const searchQuery = search.get('q');
  console.log({ searchQuery });

  console.log({ search });
  return (
    <div>
      <h1>Showing results for "{searchQuery}"</h1>
    </div>
  );
};

export default SearchPage;
