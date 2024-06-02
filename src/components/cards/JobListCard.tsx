import { getJobPostsResult } from '@/data/search';
import Link from 'next/link';

const JobListCard = async ({ query }: { query: string }) => {
  const listings = await getJobPostsResult(query);
  return (
    <article className="space-y-8">
      {listings?.listings?.map((data) => (
        <Link key={data.id} href={`/freelance-jobs/${data.id}`}>
          <div className="cursor-pointer space-y-6 border-b-[1px] md:px-6 pt-6 pb-10 hover:bg-slate-100">
            <div>
              <p className="text-sm text-slate-500">
                Posted on {data.createdAt.toDateString()}
              </p>
              <h1 className="line-clamp-1 text-lg font-semibold hover:text-slate-600">
                {data.title}
              </h1>
              <div className="space-x-3 text-sm text-slate-500">
                <span>Intermediate</span>
                <span>Est. Budget: ${data.price}</span>
              </div>
            </div>
            <div>
              <p className="line-clamp-2 text-slate-500">{data.description}</p>
            </div>
            <div className="flex-wrap flex gap-3">
              {data.skills.split(',').map((item, index) => (
                <span
                  key={index}
                  className="rounded-3xl bg-slate-200 px-2 py-1 md:px-4"
                >
                  {item.trim()}
                </span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </article>
  );
};

export default JobListCard;
