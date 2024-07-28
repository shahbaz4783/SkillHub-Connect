import { getJobDetailsData } from '@/data/posts';
import { currentUser } from './auth';
import { getUserAddressByID, getUserProfileByID } from '@/data/user';

export const isOwnedJobPost = async (jobId: string): Promise<boolean> => {
  const user = await currentUser();
  const userId = user?.id;

  const jobInfo = await getJobDetailsData(jobId);
  if (jobInfo?.userId !== userId) {
    return false;
  } else {
    return true;
  }
};

export const isProfileCompleted = async (userId: string): Promise<boolean> => {
  const profile = await getUserProfileByID(userId);
  if (!profile?.bio || !profile?.skills || !profile?.skills) {
    return false;
  } else {
    return true;
  }
};

export const isAddressFilled = async (userId: string): Promise<boolean> => {
  const address = await getUserAddressByID(userId);
  if (
    !address?.address ||
    !address.address2 ||
    !address.city ||
    !address.country ||
    !address.postal_code
  ) {
    return false;
  } else {
    return true;
  }
};
