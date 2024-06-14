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

const ServiceCard = async () => {
  const postData = await getAllServiceListings();

  return (
    <>
      {postData?.listings.map((data) => (
        <Link key={data.id} href={`/services/${data.id}`}>
          <Card className="cursor-pointer hover:bg-slate-50">
            <CardHeader>
              <Image
                src={data.imageUrl}
                width={500}
                height={500}
                alt=""
                className="aspect-video object-cover"
              />
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                <CircleUserRound />
                <CardTitle>{data.user.name}</CardTitle>
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