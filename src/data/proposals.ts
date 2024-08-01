import { currentUser } from '@/lib/auth';
import paths from '@/lib/paths';
import { prisma } from '@/lib/prisma';
import { ProposalData } from '@/types/types';
import { redirect } from 'next/navigation';

export const getUserProposals = async (): Promise<ProposalData[]> => {
  const user = await currentUser();

  return await prisma.proposal.findMany({
    where: { userId: user?.id, isAccepted: false },
    include: {
      user: {
        select: { name: true, image: true },
      },
      jobPost: {
        select: { title: true, id: true, price: true },
      },
    },
  });
};

export const getProposalsByJobId = async (jobId: string) => {
  return await prisma.proposal.findMany({
    where: { jobPostId: jobId },
    include: {
      user: {
        select: {
          name: true,
          image: true,
          address: { select: { country: true } },
          profile: { select: { userTitle: true, skills: true } },
        },
      },
      jobPost: {
        select: { title: true, id: true, price: true },
      },
    },
    take: 10,
    orderBy: { updatedAt: 'desc' },
  });
};

export const getProposalDetailsById = async (proposalId: string) => {
  return await prisma.proposal.findUnique({
    where: { id: proposalId },
    include: {
      user: {
        select: { name: true, image: true },
      },
    },
  });
};

export const getActiveProposalsCount = async (): Promise<number> => {
  const user = await currentUser();
  const userId = user?.id;

  return prisma.proposal.count({
    where: {
      isAccepted: false,
      userId,
    },
  });
};

export const getLastAppliedProposalOnJob = async (jobId: string) => {
  return await prisma.proposal.findFirst({
    where: { jobPostId: jobId },
    orderBy: {
      updatedAt: 'desc',
    },
  });
};