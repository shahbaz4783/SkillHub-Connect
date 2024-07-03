const SectionHeading = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
  return (
    <header>
      <h1 className="py-4 text-2xl font-semibold">{title}</h1>
      <p className="text-sm text-slate-600">{subTitle}</p>
    </header>
  );
};

export default SectionHeading;
