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


// Time since Function
export const timeSince = (date: Date): string => {
  const now: Date = new Date();
  const secondsPast: number = Math.floor(
    (now.getTime() - date.getTime()) / 1000,
  );

  if (secondsPast < 60) {
    return `${secondsPast} second${secondsPast !== 1 ? 's' : ''} ago`;
  }

  const minutesPast: number = Math.floor(secondsPast / 60);
  if (minutesPast < 60) {
    return `${minutesPast} minute${minutesPast !== 1 ? 's' : ''} ago`;
  }

  const hoursPast: number = Math.floor(minutesPast / 60);
  if (hoursPast < 24) {
    return `${hoursPast} hour${hoursPast !== 1 ? 's' : ''} ago`;
  }

  const daysPast: number = Math.floor(hoursPast / 24);
  if (daysPast < 7) {
    return `${daysPast} day${daysPast !== 1 ? 's' : ''} ago`;
  }

  const weeksPast: number = Math.floor(daysPast / 7);
  if (weeksPast < 4) {
    return `${weeksPast} week${weeksPast !== 1 ? 's' : ''} ago`;
  }

  const monthsPast: number = Math.floor(daysPast / 30);
  if (monthsPast < 12) {
    return `${monthsPast} month${monthsPast !== 1 ? 's' : ''} ago`;
  }

  const yearsPast: number = Math.floor(daysPast / 365);
  return `${yearsPast} year${yearsPast !== 1 ? 's' : ''} ago`;
};