import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import JobPostCardSkeleton from '../loaders/JobCardSkeleton';
import { UserData } from '@/types/types';
import SkillsList from './skills-list';

interface UserDataCardProps {
  fetchData: () => Promise<UserData[]>;
}

const UserCard = async ({ fetchData }: UserDataCardProps) => {
  const users = await fetchData();

  return (
    <article className="grid gap-6 lg:grid-cols-3">
      {users.map(async (data) => (
        <>
          <Suspense fallback={<JobPostCardSkeleton />}>
            <Link key={data.id} href={`/profile/${data.username}`}>
              <Card className="cursor-pointer hover:bg-slate-50">
                <CardContent className="flex">
                  <Image
                    src={data.image as string}
                    draggable={false}
                    width={80}
                    height={80}
                    alt=""
                    className="aspect-square w-1/5 rounded-lg object-cover"
                  />
                  <CardContent className="w-4/5 space-y-1">
                    <CardDescription className="line-clamp-1">
                      {data.name}
                    </CardDescription>
                    <CardTitle className="line-clamp-1">
                      {data.profile.userTitle}
                    </CardTitle>
                    <CardDescription>{data.address.country}</CardDescription>
                  </CardContent>
                </CardContent>
                <CardContent className="space-y-4">
                  <SkillsList skills={data.profile.skills} />
                  <CardDescription className="line-clamp-2">
                    {data.profile.bio}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          </Suspense>
        </>
      ))}
    </article>
  );
};

export default UserCard;
