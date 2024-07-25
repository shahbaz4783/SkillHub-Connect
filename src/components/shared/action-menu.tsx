'use client';

import { MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { DeleteDialogConfirmation } from './delete-confirmation-dailog';
import Link from 'next/link';

interface ActionMenuProps {
  postId: string;
  postType: 'JobPost' | 'SeriveCatalog';
}

export async function ActionMenu({ postId, postType }: ActionMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <Link href={`/client/job-post/${postId}/proposals`}>
          <DropdownMenuItem>View proposals</DropdownMenuItem>
        </Link>
        <DropdownMenuItem>Make Private</DropdownMenuItem>
        <Link href={`/client/job-post/${postId}/edit`}>
          <DropdownMenuItem>Edit Posting</DropdownMenuItem>
        </Link>
        <DeleteDialogConfirmation postId={postId} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
