import SettingsNav from '@/components/navigation/settings-nav';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-svh items-start md:flex">
      <SettingsNav />
      <aside className="grid flex-1 gap-8 p-6">{children}</aside>
    </main>
  );
};

export default layout;
