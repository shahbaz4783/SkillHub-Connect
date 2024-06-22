import { currentUser } from '@/lib/auth';
import { getUserByID } from './user';

export const getConnectBalance = async () => {
  const user = await currentUser();
  if (!user?.id) return null;

  const userData = await getUserByID(user?.id);

  return userData?.connects;
};
