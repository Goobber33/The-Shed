"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false }),
  );

  const imageSources = ["group.png", "group1.png", "group2.png"];

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      console.log("current");
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div id="about" className="text-white mt-44 lg:pr-8">
      <div className="flex flex-wrap justify-center items-center">
        <div className="w-full max-w-6xl py-16">
          <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-2xl"
            onMouseLeave={plugin.current.reset}
            setApi={setApi}
          >
            <CarouselContent>
              {imageSources.map((src: string, index: number) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="border-none overflow-hidden rounded-lg">
                      <CardContent className="flex items-center justify-center">
                        {/* Responsive Image Styling */}
                        <img
                          src={src}
                          alt={`Carousel item ${index + 1}`}
                          className="rounded-2xl md:w-auto md:h-[450px] h-80 w-full h-auto object-cover"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="text-center text-lg text-muted-foreground max-w-2xl">
            {current} of {count}
          </div>
          <p className="text-sm md:text-md lg:text-xl font-sans mt-4 mx-auto lg:mx-0 w-80 lg:w-auto lg:max-w-2xl text-center">
            At The Shed, we offer group personal training and personal training
            on site and online. Each of our workouts are researched, thought out
            and created with the client’s goals and bodies in mind. We believe
            in building a base and strong body, gradually. We provide monthly
            programs or new workouts each session, depending on each client’s
            interest. We also offer general memberships for gym use only. No
            sign up fees or commitment beyond a month. All members have 24/7
            lockbox access to the gym.
          </p>
        </div>
      </div>
    </div>
  );
}
