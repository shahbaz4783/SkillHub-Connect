import UpdateAddress from '@/components/forms/UpdateAddress';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Pen } from 'lucide-react';

export async function DialogUpdateLocation() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Pen />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click update when you're done.
          </DialogDescription>
        </DialogHeader>
        <UpdateAddress />
      </DialogContent>
    </Dialog>
  );
}
