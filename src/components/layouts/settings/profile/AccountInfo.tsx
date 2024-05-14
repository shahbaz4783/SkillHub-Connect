import { currentUser } from '@/lib/auth';
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '../../../ui/card';
import { DialogUpdatePersonalInfo } from './DialogUpdateAccountInfo';

const AccountInfo = async () => {
  const user = await currentUser();
  return (
    <Card>
      <CardContent className="flex justify-between">
        <CardTitle className="text-2xl font-normal">Account Info</CardTitle>
        <DialogUpdatePersonalInfo />
      </CardContent>
      <CardContent>
        <CardDescription>User ID</CardDescription>
        {user?.id}
      </CardContent>
      <CardContent>
        <CardDescription>Name</CardDescription>
        {user?.name}
      </CardContent>
      <CardContent>
        <CardDescription>Username</CardDescription>
        {user?.username}
      </CardContent>
      <CardContent>
        <CardDescription>Email</CardDescription>
        {user?.email}
      </CardContent>
    </Card>
  );
};

export default AccountInfo;
