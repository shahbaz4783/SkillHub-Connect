import Banner from '@/components/shared/Banner';
import HowToEarn from '@/components/layouts/static/HowToEarn';
import ListItem from '@/components/ui/ListItem';
import SectionTop from '@/components/ui/SectionTop';
import { categories } from '@/constants/options';
import Link from 'next/link';

const Services = () => {
  return (
    <main>
      <Banner
        title="Ways to earn"
        slogan="Do the work you love, your way"
        description="Build rewarding relationships in the world’s Work Marketplace. Your home for the work you want."
        placeholder='Try "backend" or "app development" '
      />
      <HowToEarn />

      <section className="mb-16">
        <SectionTop heading="Work that’s waiting for you" subhead="" />
        <article className="grid gap-8 md:grid-cols-2">
          {categories.map((data, index) => (
            <Link
              key={index}
              href={`/jobs/${encodeURIComponent(data.title.toLowerCase())
                .replace(/%20/g, '-')
                .replace(/%26/g, '&')}`}
            >
              <ListItem
                title={data.title}
                subheading={312 + ' jobs available'}
                className="rounded-lg bg-slate-100 p-4"
                iconSize="2.8em"
              >
                {data.icon && <data.icon size={30} />}
              </ListItem>
            </Link>
          ))}
        </article>
      </section>
    </main>
  );
};

export default Services;
