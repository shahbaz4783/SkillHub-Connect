import Image from 'next/image';
import { User } from 'lucide-react';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import Link from 'next/link';

const UserAvatar = () => {
  const user = useCurrentUser();

  return (
    <Link href={'/dashboard'}>
      {user?.image ? (
        <Image
          className="rounded-full"
          src={user?.image}
          alt="User Profile Image"
          width={40}
          height={40}
        />
      ) : (
        <User />
      )}
    </Link>
  );
};

export default UserAvatar;
