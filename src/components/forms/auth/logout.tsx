import { Button } from '@/components/ui/button';
import { signOut } from '@/auth';
import { LogOut } from 'lucide-react';

const LogoutIcon = () => {
  return (
    <div>
      <form
        action={async () => {
          'use server';
          await signOut();
        }}
      >
        <Button type="submit" variant={'ghost'}>
          <LogOut />
        </Button>
      </form>
    </div>
  );
};

export default LogoutIcon;
