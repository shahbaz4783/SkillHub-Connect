import { auth } from '@/auth';
import LandingPage from '../../components/layouts/static/LandingPage';
import PersonaliseHomepage from '@/components/layouts/feed/personalise-homepage';

const HomePage = async () => {
  const session = await auth();
  return <>{session ? <PersonaliseHomepage /> : <LandingPage />}</>;
};

export default HomePage;
