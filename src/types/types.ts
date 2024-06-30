import type { JobPost, Proposal, ServicePost, User } from '@prisma/client';

export interface FormState {
  message: {
    error?: string;
    success?: string;
  };
  otpReceive?: boolean;
}

interface UserBrief {
  name: string | null;
  image: string | null;
}

interface JobPostObj {
  title: string;
  id: string;
  price: number;
}

export interface JobPostData extends JobPost {
  user: UserBrief;
  _count: {
    proposals: number;
  };
}

export interface ProposalData extends Proposal {
  user: UserBrief;
  jobPost: JobPostObj;
}

export interface ServicePostData extends ServicePost {
  user: UserBrief;
}

export interface UserProfile {
  userTitle: string;
  skills: string;
  bio: string;
}

export interface UserAddress {
  address: string;
  address2: string;
  city: string;
  country: string;
  postal_code: number | undefined;
}

export interface UserData extends User {
  profile: UserProfile;
  address: {
    country: string;
  };
}
