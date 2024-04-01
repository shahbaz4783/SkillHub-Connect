import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Search } from 'lucide-react';
import SearchInput from '../shared/SearchInput';

const SearchMobileSheet = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Search />
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>Search</SheetTitle>
          <SearchInput />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default SearchMobileSheet;
