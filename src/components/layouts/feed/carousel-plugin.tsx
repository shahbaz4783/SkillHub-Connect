'use client';

import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Button } from '../../ui/button';
import { feedCaroselItem } from '@/constants/staticData';

const CarouselPlugin = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {feedCaroselItem.map((data, index) => (
          <CarouselItem key={index}>
            <div className="flex rounded-md bg-zinc-100 p-5">
              <div className="md:w-2/3">
                <h2 className="mb-4 text-xl font-semibold">{data.title}</h2>
                <h1 className="text-2xl">{data.description}</h1>
                <Button className="mt-12">{data.btnTitle}</Button>
              </div>
              <div className="flex items-center justify-center md:w-1/3">
                {data.icon && <data.icon size={96} />}
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default CarouselPlugin;
