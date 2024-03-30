import { getJobPostsResult } from '@/data/search';

const SearchPage = async ({
  searchParams,
}: {
  searchParams: { q: string };
}) => {
  const result = await getJobPostsResult(searchParams.q);
  console.log({ result });

  return (
    <div>
      {/* <h1 className="text-2xl font-semibold">Showing results for "{result.id}"</h1> */}
    </div>
  );
};

export default SearchPage;
