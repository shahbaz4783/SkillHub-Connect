import { FC } from 'react';

interface SectionTopInterface {
  heading: string;
  subhead?: string;
}

const SectionTop = ({ heading, subhead }: SectionTopInterface) => {
  return (
    <article className="mb-10 flex flex-col gap-4">
      <h2 className="max-w-[12em] font-serif  text-4xl">{heading}</h2>
      <p className="text-stone-600">{subhead}</p>
    </article>
  );
};

export default SectionTop;
