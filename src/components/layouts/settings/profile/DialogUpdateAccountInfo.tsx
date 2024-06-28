import UpdateAccountInfo from '@/components/forms/user/update-account-info';
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

export async function DialogUpdatePersonalInfo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Pen />
        </Button>
      </DialogTrigger>
      <DialogContent className="space-y-6 sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update Account Information</DialogTitle>
          <DialogDescription>
            Update your name or username using the form below.
          </DialogDescription>
        </DialogHeader>
        <UpdateAccountInfo />
      </DialogContent>
    </Dialog>
  );
}
