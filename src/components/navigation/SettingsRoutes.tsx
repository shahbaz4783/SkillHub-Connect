import Link from 'next/link';
import { SETTINGS_ROUTES } from '@/constants/navigation';
import DataCard from '../cards/DataCard';

const SettingsRoutes = () => {
  return (
    <menu className="grid grid-cols-1 justify-between gap-6 md:grid-cols-4">
      {SETTINGS_ROUTES.map((data) => (
        <Link key={data.path} href={data.path}>
          <DataCard title={data.title} icon={data.icon} iconSize={40}/>
        </Link>
      ))}
    </menu>
  );
};

export default SettingsRoutes;
