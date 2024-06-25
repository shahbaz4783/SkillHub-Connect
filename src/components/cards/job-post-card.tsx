import { timeSince } from '@/lib/utils';
import { JobPostData } from '@/types/types';
import { UserCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface JobPostProps {
  fetchData: () => Promise<JobPostData[]>;
}

const JobPostCard = async ({ fetchData }: JobPostProps) => {
  const posts = await fetchData();

  return (
    <article className="space-y-8">
      {posts.map(async (data) => (
        <>
            <Link key={data.id} href={`/freelance-jobs/${data.id}`}>
              <div className="cursor-pointer space-y-4 border-b-[1px] p-4 hover:bg-slate-100">
                <div>
                  <p className="text-sm text-slate-500">
                    Posted {timeSince(data.createdAt)}
                  </p>
                  <h1 className="line-clamp-1 text-lg font-semibold">
                    {data.title}
                  </h1>
                  <div className="space-x-3 text-sm text-slate-500">
                    <span>Intermediate</span>
                    <span>Est. Budget: ${data.price}</span>
                  </div>
                </div>
                <div>
                  <p className="line-clamp-2 text-slate-600">
                    {data.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {data.skills.split(',').map((item, index) => (
                    <span
                      key={index}
                      className="rounded-3xl bg-slate-200 px-2 py-1 text-sm md:px-4"
                    >
                      {item.trim()}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    {data.user.image ? (
                      <Image
                        className="rounded-full"
                        src={data.user.image}
                        width={30}
                        height={30}
                        alt="Image"
                      />
                    ) : (
                      <UserCircle />
                    )}
                  </div>
                  <p className="text-sm font-semibold">{data.user.name}</p>
                </div>
                <div className="space-x-6 text-sm">
                  <span>
                    {data._count.proposals === 0
                      ? 'No proposals yet'
                      : 'Proposals: ' + data._count.proposals}
                  </span>
                  <span>Connects to Apply: {data.connectCost}</span>
                </div>
              </div>
            </Link>
        </>
      ))}
    </article>
  );
};

export default JobPostCard;
