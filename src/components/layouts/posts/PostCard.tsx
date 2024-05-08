import PostActions from './PostActions';

interface PostCardProps {
  title: string;
  description: string;
  price: number;
  date: string;
  id: string;
  postType: string;
}

const PostCard = ({
  title,
  description,
  price,
  date,
  id,
  postType,
}: PostCardProps) => {
  return (
    <div className="space-y-4 rounded-lg bg-slate-100 p-4">
      <div className="space-y-2">
        <div>
          <h1 className="line-clamp-1 font-semibold">{title}</h1>
          <p className="text-sm text-slate-500">{date}</p>
        </div>
        <p className="line-clamp-2 text-slate-600">{description}</p>
        <p className="text-sm font-bold">Price ${price}</p>
      </div>
      <PostActions id={id} postType={postType} />
    </div>
  );
};

export default PostCard;
