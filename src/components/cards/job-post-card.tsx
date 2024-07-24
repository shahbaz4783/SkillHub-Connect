import { timeSince } from '@/lib/utils';
import { JobPostData } from '@/types/types';
import { Heart, UserCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import NoDataFound from '../ui/NoDataFound';
import { ActionMenu } from '../shared/action-menu';
import { currentUser } from '@/lib/auth';

interface JobPostProps {
  fetchData: () => Promise<JobPostData[]>;
  isOwned: boolean;
}

const JobPostCard = async ({ fetchData, isOwned }: JobPostProps) => {
  const user = await currentUser();
  const userId = user?.id;

  const posts = await fetchData();
  if (!posts.length) {
    return <NoDataFound message="No job postings have been added yet." />;
  }
  return (
    <section>
      {posts.map(async (data) => (
        <>
          <article key={data.id} className="space-y-6 border-b-[1px] px-3 py-6">
            <div className="flex justify-between">
              <div>
                <p className="text-sm text-slate-500">
                  Posted {timeSince(data.createdAt)}
                </p>
                <Link href={`/client/job-post/${data.id}`}>
                  <h1 className="line-clamp-1 cursor-pointer text-lg font-semibold text-slate-700 hover:text-slate-800">
                    {data.title}
                  </h1>
                </Link>
                <div className="space-x-3 text-sm text-slate-500">
                  <span className="capitalize">{data.experience}</span>
                  <span>Est. Budget: ${data.price}</span>
                </div>
              </div>
              <menu>
                {data.userId === userId ? (
                  <ActionMenu postId={data.id} postType="JobPost" />
                ) : (
                  <Heart />
                )}
              </menu>
            </div>
            <div>
              <Link href={`/client/job-post/${data.id}`}>
                <p className="line-clamp-2 text-slate-600 hover:text-slate-800">
                  {data.description}
                </p>
              </Link>
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
            {!isOwned && (
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
            )}

            <div className="space-x-6 text-sm">
              <span>
                {data._count.proposals === 0
                  ? 'No proposals yet'
                  : 'Proposals: ' + data._count.proposals}
              </span>
              <span>Connects to Apply: {data.connectCost}</span>
            </div>
          </article>
        </>
      ))}
    </section>
  );
};

export default JobPostCard;