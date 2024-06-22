import type { JobPost } from '@prisma/client';

interface FormState {
  message: {
    error?: string;
    success?: string;
  };
  otpReceive?: boolean;
}

export type JobPostData = JobPost & {
  user: { name: string | null; image: string | null };
  _count: {
    proposals: number;
  };
};
