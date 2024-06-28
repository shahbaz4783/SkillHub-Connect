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
        User ID
        <CardDescription>{user?.id}</CardDescription>
      </CardContent>
      <CardContent>
        Name
        <CardDescription>{user?.name}</CardDescription>
      </CardContent>
      <CardContent>
        Username
        <CardDescription>{user?.username}</CardDescription>
      </CardContent>
      <CardContent>
        Email
        <CardDescription>{user?.email}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default AccountInfo;
