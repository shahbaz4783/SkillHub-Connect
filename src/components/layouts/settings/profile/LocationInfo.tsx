import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '../../../ui/card';
import { DialogUpdateLocation } from './DialogLocationUpdate';
import { currentUser } from '@/lib/auth';
import { getUserAddressByID } from '@/data/user';

const LocationInfo = async () => {
  const user = await currentUser();
  if (!user?.id) return null;

  const userAddress = await getUserAddressByID(user?.id);
  if (!userAddress) return null;

  return (
    <Card>
      <CardContent className="flex justify-between">
        <CardTitle className="text-2xl font-normal">Location</CardTitle>
        <DialogUpdateLocation
          address={userAddress?.address}
          address2={userAddress?.address2}
          country={userAddress?.country}
          city={userAddress?.city}
          postal_code={userAddress?.postal_code}
        />
      </CardContent>
      <CardContent>
        <CardDescription>{userAddress?.address}</CardDescription>
        <CardDescription>{userAddress?.address2}</CardDescription>
        <CardDescription>
          {userAddress?.country}, {userAddress?.city} -
          {userAddress?.postal_code}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default LocationInfo;
