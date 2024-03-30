import PostActions from './PostActions';

interface PostCardProps {
	title: string;
	description: string;
	price: number;
	date: string;
}

const PostCard = ({ title, description, price, date }: PostCardProps) => {
	return (
		<div className='bg-slate-100 rounded-lg p-4 space-y-4'>
			<div className='space-y-2'>
				<div>
					<h1 className='line-clamp-1 font-semibold'>{title}</h1>
					<p className='text-slate-500 text-sm'>{date}</p>
				</div>
				<p className='line-clamp-2 text-slate-600'>{description}</p>
				<p className='font-bold text-sm'>Price ${price}</p>
			</div>
			<PostActions />
		</div>
	);
};

export default PostCard;
