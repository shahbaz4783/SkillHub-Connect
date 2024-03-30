import { MapPin, Star, UserRound } from 'lucide-react';
import SectionTop from '../../ui/SectionTop';
import { getAllJobListingsExceptOwn } from '@/data/user-listings';
import Link from 'next/link';

const FeedJobs = async () => {
  const listings = await getAllJobListingsExceptOwn();
  return (
    <section>
      <SectionTop
        heading="Jobs you might like"
        subhead="Check out the latest opportunities matching your profile."
      />
      <article className="space-y-8">
        {listings?.slice(0, 10).map((data) => (
          <Link key={data.id} href={`/freelance-jobs/${data.id}`}>
            <div className="cursor-pointer space-y-6 border-b-[1px] p-4 hover:bg-slate-100">
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
                <p className="line-clamp-2 text-slate-500">
                  {data.description}
                </p>
              </div>
              <div className="space-x-2">
                {data.skills.split(',').map((item, index) => (
                  <span
                    key={index}
                    className="rounded-3xl bg-slate-200 px-2 py-1 md:px-4"
                  >
                    {item.trim()}
                  </span>
                ))}
              </div>
              <div className="flex gap-6 text-sm">
                <p className="flex items-center justify-center">
                  <UserRound />
                  John Smith
                </p>

                <p className="flex">
                  <MapPin />
                  Ireland
                </p>
              </div>
              <div className="space-x-6 text-sm">
                <span>Proposals: 3</span>
                <span>Connects to Apply: 8</span>
              </div>
            </div>
          </Link>
        ))}
      </article>
    </section>
  );
};

export default FeedJobs;
