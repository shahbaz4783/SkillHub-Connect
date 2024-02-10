import { FC } from 'react';
import { cn } from '@/lib/utils';

interface ListInterface {
	title: string;
	subheading: string;
	className?: string;
	iconSize?: string;
	children: React.ReactNode;
}

const ListItem: FC<ListInterface> = ({
	title,
	subheading,
	children,
	className,
	iconSize = '1.6em',
}) => {
	return (
		<menu className={cn('flex gap-4 p-2', className)}>
			<div className='pt-1' style={{ fontSize: iconSize }}>
				{children}
			</div>
			<ul>
				<li className='text-xl font-semibold text-stone-600'>{title}</li>
				<li className='text-sm text-slate-500'>{subheading}</li>
			</ul>
		</menu>
	);
};

export default ListItem;
