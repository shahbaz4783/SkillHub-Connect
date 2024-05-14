import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '../../../ui/card';
import { DialogUpdateLocation } from './DialogLocationUpdate';

const LocationInfo = () => {
  return (
    <Card>
      <CardContent className="flex justify-between">
        <CardTitle className="text-2xl font-normal">Location</CardTitle>
        <DialogUpdateLocation />
      </CardContent>
      <CardContent>
        <p>Time Zone</p>
        <CardDescription>UTC/GMT +01:00</CardDescription>
      </CardContent>
      <CardContent>
        <p>Address</p>
        <CardDescription>
          Schefferpark 253 III <br />
          Noord Rijndersingen <br />
          GA 5195 WH
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default LocationInfo;
