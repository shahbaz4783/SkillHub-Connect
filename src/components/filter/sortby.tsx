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
        <SelectItem value="less">Less Application</SelectItem>
        <SelectItem value="salary">Salary</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default Sortby;
