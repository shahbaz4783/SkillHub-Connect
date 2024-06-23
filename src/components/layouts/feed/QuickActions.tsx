import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { Skeleton } from '@/components/ui/skeleton';
import { ACCORDION_QUICK_ACTION } from '@/constants/staticData';
import { getConnectBalance } from '@/data/connects';
import Link from 'next/link';
import { Suspense } from 'react';

const QuickActions = async () => {
  const connects = await getConnectBalance();

  return (
    <div className="rounded-md bg-slate-100 p-4">
      <Accordion type="single" collapsible className="w-full">
        <Suspense fallback={<Skeleton className="h-4 w-[100px]" />}>
          <AccordionItem value="item-1">
            <AccordionTrigger>Connects</AccordionTrigger>
            <AccordionContent>
              Available: {connects}
              <div className="mt-2 space-x-4 text-slate-500">
                <Link className="hover:text-slate-700" href={'/connect'}>
                  View Details
                </Link>
                <Link className="hover:text-slate-700" href={'/connect'}>
                  Buy More
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Suspense>

        {ACCORDION_QUICK_ACTION.map((data) => (
          <AccordionItem key={data.value} value={data.value}>
            <AccordionTrigger>{data.title}</AccordionTrigger>
            <AccordionContent>
              <div className="mb-2">
                <Link
                  className="text-slate-500 hover:text-slate-700"
                  href={data.url}
                >
                  {data.urlText}
                </Link>
              </div>
              {data.subtitle}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default QuickActions;
