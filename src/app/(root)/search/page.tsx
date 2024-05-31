import JobListCard from '@/components/cards/JobListCard';
import { redirect } from 'next/navigation';

interface SearchPageProps {
  searchParams: {
    q: string;
  };
}

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const { q } = searchParams;
  if (!q) redirect('/');

  return (
    <div>
      <h1 className="text-2xl font-semibold">Showing results for "{q}"</h1>
      <JobListCard query={q} />
    </div>
  );
};

export default SearchPage;
