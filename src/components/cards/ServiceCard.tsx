import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { getAllServiceListings } from '@/data/all-listings';
import { CircleUserRound, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

// interface ServiceCardProps {
// 	title: string;
// 	price: number;
// 	days: number;
// 	profile: string;
// 	rating: number;
// 	totalRating: number;
// }

const ServiceCard = async () => {
  const postData = await getAllServiceListings();

  return (
    <>
      {postData?.listings.map((data) => (
        <Link key={data.id} href={`/service/${data.id}`}>
          <Card className="cursor-pointer hover:bg-slate-50">
            <CardHeader>
              <Image
                src={
                  'https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                }
                width={500}
                height={500}
                alt=""
                className="aspect-video object-cover"
              />
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                <CircleUserRound />
                <CardTitle>{data.userId}</CardTitle>
              </div>
              <p className="line-clamp-2">{data.title}</p>
            </CardContent>
            <CardFooter className="flex-col items-start gap-3">
              <div className="flex items-center gap-1">
                <Star />
                <p className="font-semibold">{3}</p>
                <p className="font-light">({35})</p>
              </div>
              <div>
                <p className="font-semibold">From ${data.price}</p>
              </div>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </>
  );
};

export default ServiceCard;