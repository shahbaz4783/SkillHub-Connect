import { WorkHero } from '@/components/layouts/static/Hero';
import HowToEarn from '@/components/layouts/static/HowToEarn';

const HowToWorkPage = () => {
  return (
    <main className="my-12 space-y-32">
      <section>
        <WorkHero />
      </section>

      <section className="space-y-16 bg-slate-50 py-12">
        <h2 className="text-center text-3xl font-semibold">
          Explore the different ways to earn
        </h2>
        <HowToEarn />
      </section>
    </main>
  );
};

export default HowToWorkPage;
