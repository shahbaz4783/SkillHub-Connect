import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { categories } from '@/constants/options';

const JobPostFilter = () => {
  return (
    <>
      <div>
        <h1 className="mb-4 font-semibold">Category</h1>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a category " />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category.value} value={category.value}>
                {category.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <h1 className="mb-4 font-semibold">Experience level</h1>
        <RadioGroup>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="entry" id="xp1" />
            <Label htmlFor="xp1">Entry Level</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="intermediate" id="xp2" />
            <Label htmlFor="xp2">Intermediate</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="expert" id="xp3" />
            <Label htmlFor="xp3">Expert</Label>
          </div>
        </RadioGroup>
      </div>
      <div>
        <h1 className="mb-4 font-semibold">Number of Proposals</h1>
        <RadioGroup>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="under5" id="p1" />
            <Label htmlFor="p1">Less than 5</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="5to10" id="p2" />
            <Label htmlFor="p2">5 to 10</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="10to15" id="p3" />
            <Label htmlFor="p3">10 to 15</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="15to20" id="p4" />
            <Label htmlFor="p4">15 to 20</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="above20" id="p5" />
            <Label htmlFor="p5">More than 20</Label>
          </div>
        </RadioGroup>
      </div>
    </>
  );
};

export default JobPostFilter;
