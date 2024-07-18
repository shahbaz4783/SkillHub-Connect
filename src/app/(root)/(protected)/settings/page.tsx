import SectionHeading from '@/components/shared/SectionHeading';
import ListItem from '@/components/ui/list-item';
import { SETTINGS_ROUTES } from '@/constants/navigation';
import Link from 'next/link';

const SettingsPage = () => {
  return (
    <main className="space-y-16">
      <SectionHeading
        title="Settings"
        subTitle="Update and secure your account details"
      />

      <section className="grid gap-4 lg:grid-cols-3 lg:gap-10">
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
      </section>
    </main>
  );
};

export default SettingsPage;
