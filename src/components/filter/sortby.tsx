import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const Sortby = () => {
  return (
    <Select>
      <SelectTrigger className="max-w-[280px]">
        <SelectValue placeholder="Sort By" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="newest">Newest</SelectItem>
        <SelectItem value="relevence">Relevence</SelectItem>
        <SelectItem value="rating">Client rating</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default Sortby;
