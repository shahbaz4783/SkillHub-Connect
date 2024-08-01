'use client';

import { useState } from 'react';
import { Copy } from 'lucide-react';
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
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

export function ShareDialog({ shareLink }: { shareLink: string }) {
  const [link] = useState('https://skillhub-connect.vercel.app' + shareLink);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(link);
      toast('Link copied to clipboard', {
        description: 'The link has been successfully copied.',
      });
    } catch (err) {
      toast.error('Failed to copy link', {
        description: 'There was an error copying the link. Please try again.',
        action: {
          label: 'Undo',
          onClick: () => console.log('Undo'),
        },
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="w-full justify-start p-2 font-normal"
          variant="ghost"
        >
          Share
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input id="link" value={link} readOnly />
          </div>
          <Button type="button" size="sm" className="px-3" onClick={handleCopy}>
            <span className="sr-only">Copy</span>
            <Copy className="h-4 w-4" />
          </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function ShareExpaned({ shareLink }: { shareLink: string }) {
  const [link] = useState('https://skillhub-connect.vercel.app' + shareLink);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(link);
      toast('Link copied to clipboard', {
        description: 'The link has been successfully copied.',
      });
    } catch (err) {
      toast.error('Failed to copy link', {
        description: 'There was an error copying the link. Please try again.',
        action: {
          label: 'Undo',
          onClick: () => console.log('Undo'),
        },
      });
    }
  };
  return (
    <>
      <Input
        type="text"
        readOnly
        className="text-slate-500"
        value={link}
      />
      <Button onClick={handleCopy} variant={'outline'}>
        Copy Link
      </Button>
    </>
  );
}
