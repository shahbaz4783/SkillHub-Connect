import Image from 'next/image';
import React from 'react';
import SectionTop from '../../ui/SectionTop';
import ListItem from '../../ui/ListItem';
import { howServicesWorks } from '@/constants/staticData';

const HowServiceWorks = () => {
  return (
    <section className="mb-16 flex flex-col justify-between md:flex-row">
      <aside>
        <article className="flex flex-col gap-2 md:mt-16">
          <SectionTop
            heading="How it works"
            subhead="Streamlined Process, Seamless Results"
          />
          {howServicesWorks.map((data) => (
            <ListItem
              key={data.heading}
              title={data.heading}
              subheading={data.subheading}
            >
              {data.icon && <data.icon />}
            </ListItem>
          ))}
        </article>
      </aside>
      <aside>
        <Image
          draggable={false}
          src={'/project-works.svg'}
          alt=""
          width={600}
          height={600}
        />
      </aside>
    </section>
  );
};

export default HowServiceWorks;
