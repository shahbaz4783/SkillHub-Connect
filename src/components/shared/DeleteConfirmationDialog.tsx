import {
  deleteJobAction,
  deleteServiceAction,
} from '@/actions/listings.action';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Trash2 } from 'lucide-react';

export function DeleteConfirmationDialog({
  id,
  postType,
}: {
  id: string;
  postType: string;
}) {
  const deletePostHandler = () => {
    if (postType === 'servicePost') return deleteServiceAction(id);
    if (postType === 'jobPost') return deleteJobAction(id);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Trash2 />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Are you sure you want to delete this?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. Proceed with deletion?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
          <Button
            onClick={deletePostHandler}
            variant={'destructive'}
            type="submit"
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
