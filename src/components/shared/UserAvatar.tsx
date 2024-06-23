import { User, UserCircle } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { auth } from '@/auth';

const UserAvatar = async () => {
  const session = await auth();
  const image = session?.user?.image;

  return (
    <Avatar>
      <AvatarImage src={image || ''} alt="Profile" />
      <AvatarFallback>
        <UserCircle size={48} />
      </AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
