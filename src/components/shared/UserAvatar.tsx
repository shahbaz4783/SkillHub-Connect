import { UserCircle } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface UserAvatarProps {
  imageUrl: string;
  size: number;
}
const UserAvatar = async ({ imageUrl, size }: UserAvatarProps) => {
  return (
    <Avatar>
      <AvatarImage src={imageUrl} alt="Profile" />
      <AvatarFallback>
        <UserCircle fontSize={size} />
      </AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
