import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subTitle?: string;
  className?: string;
  titleStyle?: string;
  subTitleStyle?: string;
}
const SectionHeading = ({
  title,
  subTitle,
  className,
  titleStyle,
  subTitleStyle,
}: SectionHeadingProps) => {
  return (
    <header className={cn('space-y-2', className)}>
      <h1 className={cn('text-2xl font-semibold', titleStyle)}>{title}</h1>
      <p className={cn('text-sm text-slate-600', subTitleStyle)}>{subTitle}</p>
    </header>
  );
};

export default SectionHeading;
