import { calculateProposalCost } from '@/lib/utils';
import { JobPost, PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

const jobPosts: JobPost[] = [
  {
    id: 'vibjwevwebijw',
    userId: 'ihjvrwg4anvdsvru',
    title: 'string',
    description: 'string',
    skills: 'string',
    experience: 'string',
    price: 234,
    projectType: '',
    category: 'string',
    connectCost: calculateProposalCost(234),
    status: 'OPEN',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

async function main() {
  console.log('Start seeding...');
  for (const post of jobPosts) {
    await prisma.jobPost.create({
      data: post,
    });
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
