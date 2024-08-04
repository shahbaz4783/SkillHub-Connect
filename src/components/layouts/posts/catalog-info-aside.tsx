import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import NoDataFound from '@/components/ui/NoDataFound';
import { getServiceDetailsData } from '@/data/posts';
import { Heart } from 'lucide-react';

interface CatalogDetailedInfoProps {
  catalogId: string;
}

const CatalogInfoAside = async ({ catalogId }: CatalogDetailedInfoProps) => {
  const serviceDetails = await getServiceDetailsData(catalogId);
  if (!serviceDetails)
    return <NoDataFound message="We cant find anything :(" />;

  return (
    <>
      <Card>
        <CardContent className="space-y-6">
          <p className="font-mono text-2xl font-bold">
            ${serviceDetails.price}
          </p>
          <menu>
            <div className="flex justify-between">
              <p className="text-sm text-slate-500">Delivery Time</p>
              <p className="font-mono font-semibold">
                {serviceDetails.time} days
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm text-slate-500">Number of Revisions</p>
              <p className="font-mono font-semibold">3</p>
            </div>
          </menu>
          <div className="space-y-3">
            <Button className="w-full">Continue</Button>
            <Button variant={'outline'} className="w-full space-x-2">
              <Heart size={18} /> <span>Save Service</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default CatalogInfoAside;
