'use client';

import { Input } from '../ui/input';
import { useSearchParams } from 'next/navigation';
import { Search } from 'lucide-react';
import { searchAction } from '@/actions/search.action';

const SearchInput = () => {
  const searchParams = useSearchParams();
  return (
    <form action={searchAction}>
      <div className="flex items-center gap-3 rounded-md bg-slate-200 px-3">
        <Search />
        <Input
          className="rounded-none bg-slate-200 p-0"
          name="q"
          type="search"
          defaultValue={searchParams.get('q') || ''}
          placeholder="Search"
        />
      </div>
    </form>
  );
};

export default SearchInput;
