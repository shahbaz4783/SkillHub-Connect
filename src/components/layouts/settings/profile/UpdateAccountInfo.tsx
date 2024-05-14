import UpdatePersonalInfo from '@/components/forms/UpdatePersonalInfo';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export async function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Update Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click update when you're done.
          </DialogDescription>
        </DialogHeader>
        <UpdatePersonalInfo />
      </DialogContent>
    </Dialog>
  );
}
