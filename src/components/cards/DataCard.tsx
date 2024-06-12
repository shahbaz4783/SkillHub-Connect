import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface DataCardProps {
  title: string;
  icon?: React.ElementType;
  iconSize?: number;
  data?: number;
}

const DataCard = ({ title, icon: Icon, iconSize, data }: DataCardProps) => {
  return (
    <Card className="flex w-full cursor-pointer items-center justify-center px-6 py-4">
      <CardHeader className="flex items-center justify-center">
        {Icon && <Icon size={iconSize ?? 35} />}
      </CardHeader>
      <CardContent>
        <CardTitle className="text-lg">{data}</CardTitle>
        <CardTitle className="text-sm font-semibold text-slate-500">
          {title}
        </CardTitle>
      </CardContent>
    </Card>
  );
};

export default DataCard;
