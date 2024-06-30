import DashboardHeader from '@/components/shared/DashboardHeader';
import { getUserDataByUsername } from '@/data/user';
import { cn, timeSince } from '@/lib/utils';
import { MapPin, UserCircle } from 'lucide-react';
import Image from 'next/image';

const UserProfileDetails = async ({ username }: { username: string }) => {
  const userInfo = await getUserDataByUsername(username);
  return (
    <>
      <div className="space-y-6 lg:w-4/6">
        <section className="items-center gap-6 space-y-3 lg:flex">
          {userInfo.image ? (
            <Image
              src={userInfo.image}
              draggable={false}
              width={200}
              height={200}
              alt="Profile pic"
              className="aspect-square w-1/5 rounded-full object-cover"
            />
          ) : (
            <UserCircle size={50} />
          )}
          <div className="space-y-3">
            <div className="space-y-1">
              <p className="text-2xl font-semibold">{userInfo.name}</p>
              <p className="text-slate-500">@{userInfo.username}</p>
              <p className="italic">{userInfo.profile.userTitle}</p>
            </div>
            <div className="space-y-1">
              <div className="flex gap-1">
                <MapPin />
                <p className="font-semibold">{userInfo.address.country}</p>
              </div>
              <p className="text-sm text-slate-500">
                Joined {timeSince(userInfo.createdAt as Date)}
              </p>
            </div>
          </div>
        </section>

        <section>
          <DashboardHeader title="About Me" subTitle="" />
          <p className="line-clamp-3 text-slate-500">{userInfo.profile.bio}</p>
        </section>

        <section className="space-y-4">
          <DashboardHeader title="Skills" subTitle="" />
          <div className="flex flex-wrap gap-3">
            {userInfo.profile.skills.split(',').map((item, index) => (
              <span
                key={index}
                className="rounded-3xl bg-slate-200 px-2 py-1 text-sm md:px-4"
              >
                {item.trim()}
              </span>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default UserProfileDetails;
