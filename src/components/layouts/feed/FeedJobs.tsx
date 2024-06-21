import { MapPin, Star, UserCircle, UserRound } from 'lucide-react';
import SectionTop from '../../ui/SectionTop';
import { getAllJobListingsExceptOwn } from '@/data/user-listings';
import Link from 'next/link';
import { getJobDetailsData } from '@/data/all-listings';
import { Avatar } from '@/components/ui/avatar';
import Image from 'next/image';

const FeedJobs = async () => {
  const listings = await getAllJobListingsExceptOwn();
  return (
    <section>
      <SectionTop
        heading="Jobs you might like"
        subhead="Check out the latest opportunities matching your profile."
      />
      <article className="space-y-8">
        {listings?.slice(0, 10).map(async (data) => {
          const jobData = await getJobDetailsData(data.id);
          return (
            <>
              <Link key={data.id} href={`/freelance-jobs/${data.id}`}>
                <div className="cursor-pointer space-y-4 border-b-[1px] p-4 hover:bg-slate-100">
                  <div>
                    <p className="text-sm text-slate-500">
                      Posted on {data.createdAt.toDateString()}
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
                        className="rounded-3xl text-sm bg-slate-200 px-2 py-1 md:px-4"
                      >
                        {item.trim()}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <div>
                      {jobData?.user.image ? (
                        <Image
                          className="rounded-full"
                          src={jobData?.user.image}
                          width={30}
                          height={30}
                          alt="Image"
                        />
                      ) : (
                        <UserCircle />
                      )}
                    </div>
                    <p className="text-sm font-semibold">
                      {jobData?.user.name}
                    </p>
                  </div>
                  <div className="space-x-6 text-sm">
                    <span>
                      {jobData?.proposalCount === 0
                        ? 'No proposals yet'
                        : 'Proposals: ' + jobData?.proposalCount}
                    </span>
                    <span>Connects to Apply: {jobData?.connectCost}</span>
                  </div>
                </div>
              </Link>
            </>
          );
        })}
      </article>
    </section>
  );
};

export default FeedJobs;
