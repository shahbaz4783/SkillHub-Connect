import { currentUser } from '@/lib/auth';
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '../../../ui/card';
import { DialogDemo } from './UpdateAccountInfo';

const AccountInfo = async () => {
  const user = await currentUser();
  return (
    <Card>
      <CardContent>
        <DialogDemo />
      </CardContent>
      <CardContent>
        <CardTitle className="text-2xl font-normal">Account Info</CardTitle>
      </CardContent>
      <CardContent>
        <p>User ID</p>
        <CardDescription>{user?.id}</CardDescription>
      </CardContent>
      <CardContent>
        <p>Name</p>
        <CardDescription>{user?.name}</CardDescription>
      </CardContent>
      <CardContent>
        <p>Email</p>
        <CardDescription>{user?.email}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default AccountInfo;
