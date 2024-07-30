'use client';

import { closeJobAction } from '@/actions/listings.action';
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
import { useFormState } from 'react-dom';
import Submit from '../buttons/submit';

export function DeleteDialogConfirmation({ postId }: { postId: string }) {
  const [formState, formAction] = useFormState(
    closeJobAction.bind(null, postId),
    {
      message: {},
    },
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="w-full justify-start p-2 font-normal"
          variant="ghost"
        >
          Remove Posting
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="space-y-3">
          <DialogTitle>Close Job</DialogTitle>
          <DialogDescription>
            Use this to close your job to new applicants and notify current
            applicants. Those you have hired will not be affected.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Cancel
            </Button>
          </DialogClose>
          <form action={formAction}>
            <Submit title="Close Job" loadingTitle="Closing..." />
          </form>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
