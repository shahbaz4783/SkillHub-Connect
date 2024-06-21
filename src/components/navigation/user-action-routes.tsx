import Link from 'next/link';
import DataCard from '../cards/DataCard';

interface UserActionRoutes {
  title: string;
  path: string;
  icon: React.ElementType;
}
interface WorkRoutesProps {
  routeObj: UserActionRoutes[];
}

const UserActionRoutes = ({ routeObj }: WorkRoutesProps) => {
  return (
    <menu className="grid grid-cols-1 justify-between gap-6 md:grid-cols-4">
      {routeObj.map((data) => (
        <Link key={data.path} href={data.path}>
          <DataCard title={data.title} icon={data.icon} />
        </Link>
      ))}
    </menu>
  );
};

export default UserActionRoutes;
