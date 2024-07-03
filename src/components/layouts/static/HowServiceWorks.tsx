import Image from 'next/image';
import React from 'react';
import ListItem from '../../ui/list-item';
import { howServicesWorks } from '@/constants/staticData';

const HowServiceWorks = () => {
  return (
    <section className="mb-16 flex flex-col justify-between gap-10 md:flex-row">
      <aside className="flex items-center">
        <div className="space-y-8">
          {howServicesWorks.map((data) => (
            <ListItem
              key={data.heading}
              title={data.heading}
              subheading={data.subheading}
            >
              {data.icon && <data.icon />}
            </ListItem>
          ))}
        </div>
      </aside>
      <aside>
        <Image
          draggable={false}
          className="border"
          src={'/project-works.svg'}
          alt="Project work image"
          width={500}
          height={500}
        />
      </aside>
    </section>
  );
};

export default HowServiceWorks;
