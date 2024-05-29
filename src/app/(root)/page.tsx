import { auth } from '@/auth';
import LandingPage from '../../components/layouts/static/LandingPage';
import LoginHomePage from '@/components/layouts/feed/LoginHomePage';

const HomePage = async () => {
  const session = await auth();

  return <>{session ? <LoginHomePage /> : <LandingPage />}</>;
};

export default HomePage;
