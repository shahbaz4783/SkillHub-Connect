'use client';

import { DeleteConfirmationDialog } from '@/components/shared/DeleteConfirmationDialog';
import { FilePenLine, Pause } from 'lucide-react';
import Link from 'next/link';

const PostActions = ({ id, postType }: { id: string; postType: string }) => {
  const linkToEditPage = postType === 'jobPost' ? '/post-job' : '/post-service';
  return (
    <div className="flex gap-3">
      <Link href={'/dashboard/listings' + linkToEditPage + `?id=${id}`}>
        <FilePenLine />
      </Link>

      <Pause />
      <DeleteConfirmationDialog id={id} postType={postType} />
    </div>
  );
};

export default PostActions;
