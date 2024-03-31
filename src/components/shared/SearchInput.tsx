'use client';

import { useState } from 'react';
import { Input } from '../ui/input';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';

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
      <div className="flex items-center gap-3 rounded-md bg-slate-200 px-3">
        <Search />
        <Input
          className="bg-slate-200 p-0 rounded-none"
          onChange={(e) => setSearchQuery(e.target.value)}
          type="search"
          value={searchQuery}
          placeholder="Search"
        />
      </div>
    </form>
  );
};

export default SearchInput;
