'use client';

import { useState } from 'react';
import { Input } from '../ui/input';
import { useRouter } from 'next/navigation';

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const onSearch = (event: React.FormEvent) => {
    event.preventDefault();
    const encodeQuery = encodeURI(searchQuery);
    router.push(`/search?q=${encodeQuery}`);
  };
  return (
    <form onSubmit={onSearch}>
      <Input
        onChange={(e) => setSearchQuery(e.target.value)}
        type="search"
        value={searchQuery}
        placeholder="Search"
      />
    </form>
  );
};

export default SearchInput;
