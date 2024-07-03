import { FC } from 'react';

interface DescHeadingInterface {
	heading: string;
	subhead: string;
}

const DescHeading: FC<DescHeadingInterface> = ({ heading, subhead }) => {
	return (
    <article className="mb-10 flex flex-col gap-3">
      <h2 className="font-serif text-3xl md:w-1/2 lg:text-6xl">{heading}</h2>
      <p className="text-slate-500 md:w-1/2">{subhead}</p>
    </article>
  );
};

export default DescHeading;
