import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Search } from 'lucide-react';
import SearchInput from '../shared/SearchInput';
import { Suspense } from 'react';

const SearchMobileSheet = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Search />
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>Search</SheetTitle>
          <Suspense>
            <SearchInput />
          </Suspense>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default SearchMobileSheet;
