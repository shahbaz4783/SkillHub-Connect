import { getJobPostsResult, getServicePostsResult } from '@/data/search';

interface SearchPageProps {
  searchParams: {
    q: string;
  };
}

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const { q } = searchParams;
  console.log(q);
  const result = await getServicePostsResult(q);
  console.log({ result });

  return (
    <div>
      <h1 className="text-2xl font-semibold">Showing results for "{q}"</h1>
      {result.map((data) => (
        <div>
          <p>{data.title}</p>
          <p>{data.user.name}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchPage;
