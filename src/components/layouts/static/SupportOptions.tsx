import ListItem from '@/components/ui/list-item';
import SectionTop from '@/components/ui/SectionTop';
import { supportOptions } from '@/constants/options';

const SupportOptions = () => {
  return (
    <section className="mb-16">
      <SectionTop heading="Search by category" subhead="" />
      <article className="grid gap-8 md:grid-cols-4">
        {supportOptions.map((data, index) => (
          <ListItem
            key={index}
            title={data.heading}
            subheading={data.subheading}
            className="cursor-pointer flex-col rounded-lg bg-slate-100 p-4 py-8 hover:bg-slate-200"
          >
            {data.icon && <data.icon size={40} />}
          </ListItem>
        ))}
      </article>
    </section>
  );
};

export default SupportOptions;
