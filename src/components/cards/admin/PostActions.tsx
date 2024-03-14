import { FilePenLine, Pause, Trash2 } from 'lucide-react';

const PostActions = () => {
	return (
		<div className='flex gap-3'>
			<FilePenLine />
			<Trash2 />
			<Pause />
		</div>
	);
};

export default PostActions;
