import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const JobPostFilter = () => {
  return (
    <>
      <div className='bg-slate-200'>
        <h1 className='space-y-8'>Experience level</h1>
        <RadioGroup>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default" id="r1" />
            <Label htmlFor="r1">Entry Level</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="intermediate" id="r2" />
            <Label htmlFor="r2">Intermediate</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="expert" id="r3" />
            <Label htmlFor="r3">Expert</Label>
          </div>
        </RadioGroup>
      </div>
    </>
  );
};

export default JobPostFilter;
