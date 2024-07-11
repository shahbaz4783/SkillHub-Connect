const DetailsSection = ({ children }: { children: React.ReactNode }) => {
	return (
    <section className="space-y-3 border-b-[1px] py-8 lg:pr-4">
      {children}
    </section>
  );
};

export default DetailsSection;
