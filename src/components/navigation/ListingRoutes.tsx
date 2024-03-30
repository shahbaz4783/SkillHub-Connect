import Link from 'next/link';
import { Card, CardContent, CardHeader } from '../ui/card';
import { LISTING_ROUTES } from '@/constants/navigation';

const ListingRoutes = () => {
  return (
    <menu className="grid grid-cols-1 justify-between gap-6 md:grid-cols-4">
      {LISTING_ROUTES.map((data) => (
        <Link key={data.path} href={data.path}>
          <Card className="flex w-full cursor-pointer items-center justify-center px-6 py-4">
            <CardHeader className="flex items-center justify-center">
              {data.icon && <data.icon size={35} />}
            </CardHeader>
            <CardContent className="text-center">{data.title}</CardContent>
          </Card>
        </Link>
      ))}
    </menu>
  );
};

export default ListingRoutes;
