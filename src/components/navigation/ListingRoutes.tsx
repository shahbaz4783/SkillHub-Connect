import Link from 'next/link';
import { LISTING_ROUTES } from '@/constants/navigation';
import DataCard from '../cards/DataCard';

const ListingRoutes = () => {
  return (
    <menu className="grid grid-cols-1 justify-between gap-6 md:grid-cols-4">
      {LISTING_ROUTES.map((data) => (
        <Link key={data.path} href={data.path}>
          <DataCard title={data.title} icon={data.icon} />
        </Link>
      ))}
    </menu>
  );
};

export default ListingRoutes;
