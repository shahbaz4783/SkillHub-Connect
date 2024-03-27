import Image from 'next/image';
import { User } from 'lucide-react';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const UserAvatar = () => {
  const user = useCurrentUser();

  return (
    <>
      {user?.image ? (
        <Avatar>
          <AvatarImage src={user.image} alt="Profile" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      ) : (
        <User />
      )}
    </>
  );
};

export default UserAvatar;
