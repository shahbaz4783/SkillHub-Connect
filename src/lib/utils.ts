import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// Calculate Connect cost
export const calculateProposalCost = (price: number)  => {
  let proposalCost;

  switch (true) {
    case price <= 100:
      proposalCost = 8;
      break;
    case price > 100 && price <= 500:
      proposalCost = 12;
      break;
    case price > 500 && price < 1000:
      proposalCost = 16;
      break;
    default:
      proposalCost = 20;
      break;
  }

  return proposalCost;
}