'use client';

import { DeleteConfirmationDialog } from '@/components/shared/DeleteConfirmationDialog';
import { FilePenLine, Pause } from 'lucide-react';

const PostActions = ({ id, postType }: { id: string; postType: string }) => {
  return (
    <div className="flex gap-3">
      <FilePenLine />
      <Pause />
      <DeleteConfirmationDialog id={id} postType={postType} />
    </div>
  );
};

export default PostActions;
