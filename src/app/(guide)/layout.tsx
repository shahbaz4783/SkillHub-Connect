import Footer from '@/components/shared/Footer';
import Header from '@/components/navigation/Navbar';

const layout = ({ children }: { children: React.ReactNode }) => {
	return (
    <>
      <Header />
      <div className="m-auto min-h-svh w-11/12">{children}</div>
      <Footer />
    </>
  );
};

export default layout;
