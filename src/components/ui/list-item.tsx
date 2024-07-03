import { cn } from '@/lib/utils';

interface ListInterface {
  title: string;
  subheading: string;
  className?: string;
  iconSize?: string;
  children: React.ReactNode;
}

const ListItem = ({
  title,
  subheading,
  children,
  className,
  iconSize = '1.6em',
}: ListInterface) => {
  return (
    <menu className={cn('flex gap-4 p-2', className)}>
      <div className="pt-1" style={{ fontSize: iconSize }}>
        {children}
      </div>
      <ul className='space-y-1'>
        <li className="text-xl font-semibold text-slate-700">{title}</li>
        <li className="text-sm text-slate-500">{subheading}</li>
      </ul>
    </menu>
  );
};

export default ListItem;
