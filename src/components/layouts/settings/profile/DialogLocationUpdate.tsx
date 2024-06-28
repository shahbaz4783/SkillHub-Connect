import UpdateAddress from '@/components/forms/user/update-address';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { UserAddress } from '@/types/types';
import { Pen } from 'lucide-react';

export async function DialogUpdateLocation({
  address,
  address2,
  city,
  country,
  postal_code,
}: UserAddress) {
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
        <UpdateAddress
          address={address}
          address2={address2}
          city={city}
          country={country}
          postal_code={postal_code}
        />
      </DialogContent>
    </Dialog>
  );
}
