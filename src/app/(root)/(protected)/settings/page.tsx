import AccountInfo from '@/components/layouts/settings/profile/AccountInfo';
import LocationInfo from '@/components/layouts/settings/profile/LocationInfo';
import { Suspense } from 'react';
import SettingsPageLoading from './loading';
import SectionHeading from '@/components/shared/SectionHeading';
import ListItem from '@/components/ui/list-item';
import { SETTINGS_ROUTES } from '@/constants/navigation';
import Link from 'next/link';

const SettingsPage = () => {
  return (
    <>
      <div className="mb-8">
        <SectionHeading
          title="Settings"
          subTitle="Update and secure your account details"
        />
      </div>
      {/* <Suspense fallback={<SettingsPageLoading />}>
        <AccountInfo />
        <LocationInfo />
      </Suspense> */}
      <div className="grid gap-4 lg:grid-cols-3 lg:gap-12">
        {SETTINGS_ROUTES.map((data) => (
          <Link key={data.path} href={data.path}>
            <ListItem
              title={data.title}
              subheading={data.subtitle}
              className="rounded-lg border p-3 hover:bg-slate-100"
              subHeadStyle="line-clamp-1"
            >
              {data.icon && <data.icon />}
            </ListItem>
          </Link>
        ))}
      </div>
    </>
  );
};

export default SettingsPage;
