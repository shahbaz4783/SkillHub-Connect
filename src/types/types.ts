import type { JobPost, ServicePost } from '@prisma/client';

export interface FormState {
  message: {
    error?: string;
    success?: string;
  };
  otpReceive?: boolean;
}

interface User {
  name: string | null;
  image: string | null;
}

export interface JobPostData extends JobPost {
  user: User;
  _count: {
    proposals: number;
  };
}

export interface ServicePostData extends ServicePost {
  user: User;
}
