import { Filter, Minus, Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import JobPostFilter from './JobPostFilter';

const FilterDrawer = () => {
  return (
    <div className="lg:hidden">
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline">
            <Filter />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Filter By</DrawerTitle>
            <DrawerDescription>
              Apply necessary filters as per your needs
            </DrawerDescription>
          </DrawerHeader>
          <div className="px-8">
            <JobPostFilter />
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default FilterDrawer;
