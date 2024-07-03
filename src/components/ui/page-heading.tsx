interface PageHeadingInterface {
  title: string;
  subTitle: string;
}

const PageHeading = ({ title, subTitle }: PageHeadingInterface) => {
  return (
    <header className="mb-8 flex flex-col gap-3">
      <h2 className="font-serif text-3xl md:w-1/2 lg:text-5xl">{title}</h2>
      <p className="text-slate-600 md:w-1/2">{subTitle}</p>
    </header>
  );
};

export default PageHeading;
