import { currentUser } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export const getUserProposals = async () => {
  const user = await currentUser();
  if (!user?.id) return null;

  return await prisma.proposal.findMany({
    where: { userId: user?.id },
  });
};
