import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import Link from 'next/link';
import { getAllJobListings } from '@/data/all-listings';

const JobCard = async () => {
  const postData = await getAllJobListings();
  return (
    <>
      {postData?.listings.map((data) => (
        <Link key={data.id} href={`/freelance-jobs/${data.id}`}>
          <Card className="cursor-pointer space-y-8  p-6">
            <CardHeader>
              <CardTitle className="line-clamp-2 text-lg font-semibold capitalize md:line-clamp-1">
                {data.title}
              </CardTitle>
              <p className="text-sm text-slate-500">
                {data.createdAt.toDateString()}
              </p>
            </CardHeader>
            <CardContent className="space-y-6 p-0">
              <menu className="flex gap-16">
                <div>
                  <h2 className="font-semibold">${data.price.toFixed(0)}</h2>
                  <p className="text-sm text-slate-500">Fixed-price</p>
                </div>
                <div>
                  <h2 className="font-semibold capitalize">
                    {data.experience}
                  </h2>
                  <p className="text-sm text-slate-500">Experience level</p>
                </div>
              </menu>
              <CardDescription className="text-md line-clamp-2 text-stone-500">
                {data.description}
              </CardDescription>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2 p-0">
              {data.skills.split(',').map((item, index) => (
                <span
                  key={index}
                  className="rounded-3xl bg-stone-100 px-2 py-1 md:px-4"
                >
                  {item.trim()}
                </span>
              ))}
            </CardFooter>
            <Button>See More</Button>
          </Card>
        </Link>
      ))}
    </>
  );
};

export default JobCard;
