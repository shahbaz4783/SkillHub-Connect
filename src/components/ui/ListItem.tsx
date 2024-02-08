import { FC } from 'react';

interface ListInterface {
	title: string;
	subheading: string;
	children: React.ReactNode;
}

const ListItem: FC<ListInterface> = ({ title, subheading, children }) => {
	return (
		<menu className='flex gap-4 p-2'>
			<div className='pt-1' style={{ fontSize: '1.6em' }}>
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
