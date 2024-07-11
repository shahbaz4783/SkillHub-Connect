import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

interface DataCardProps {
  title: string;
  icon?: React.ElementType;
  iconSize?: number;
  data?: number;
  href?: string;
  linkTitle?: string;
}

const DataCard = ({
  title,
  icon: Icon,
  iconSize,
  data,
  href,
  linkTitle,
}: DataCardProps) => {
  return (
    <Card className="cursor-pointer">
      <CardContent className="space-y-4">
        <CardTitle className="text-center text-sm font-semibold text-slate-500 lg:text-lg">
          {title}
        </CardTitle>
        <div className="flex items-center justify-center gap-3">
          <CardHeader className="flex items-center justify-center text-slate-600">
            {Icon && <Icon size={iconSize ?? 24} />}
          </CardHeader>
          <CardTitle className="text-lg">{data}</CardTitle>
        </div>
        <div className="text-center text-sm text-slate-500 underline hover:text-slate-600">
          {href && <Link href={href}>{linkTitle}</Link>}
        </div>
      </CardContent>
    </Card>
  );
};

export default DataCard;
