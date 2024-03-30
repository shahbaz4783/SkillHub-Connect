'use client';

import { DeleteConfirmationDialog } from '@/components/shared/DeleteConfirmationDialog';
import { FilePenLine, Pause } from 'lucide-react';

const PostActions = () => {
  return (
    <div className="flex gap-3">
      <FilePenLine />
      <Pause />
      <DeleteConfirmationDialog />
    </div>
  );
};

export default PostActions;
