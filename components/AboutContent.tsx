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
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div id="about" className="text-white mt-44 lg:pr-8">
      <div className="flex flex-wrap justify-center items-start">
        <div className="flex flex-col lg:flex-row w-full max-w-6xl py-16">
          {/* Carousel and its Text Content */}
          <div className="w-full lg:w-7/12 lg:order-1 order-2">
            <Carousel
              plugins={[plugin.current]}
              className="w-full"
              onMouseLeave={plugin.current.reset}
              setApi={setApi}
            >
              <CarouselContent>
                {imageSources.map((src, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card className="border-none overflow-hidden rounded-lg">
                        <CardContent className="flex items-center justify-center">
                          <img
                            src={src}
                            alt={`Carousel item ${index + 1}`}
                            className="rounded-2xl md:w-auto md:h-[450px] h-80 w-full object-cover"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <div className="text-center text-lg text-muted-foreground">
              {current} of {count}
            </div>
            <p className="text-md md:text-md lg:text-xl font-sans mt-4 lg:ml-8 text-center lg:text-left">
              The concept and program was created by Jen Barden, Lead Trainer
              and Owner, from years of working in different fields of health and
              fitness and also from her own athletic achievements. The Shed in
              Sandpoint, Idaho cannot be duplicated and the program itself has
              been tested with proven results.
            </p>
          </div>

          <div className="w-full lg:w-1/2 lg:order-2 order-1 flex flex-col justify-start p-4 lg:p-8 font-sans">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-center lg:text-left">
              ABOUT <span className="text-yellow-300">THE</span>{" "}
              <span className="text-green-500">&nbsp;SHED</span>
            </h1>
            <p className="text-md lg:text-xl">
              The Shed is a unique facility where youth and adults gather to
              workout. The gym is intimate and different than any other in the
              area and perhaps the nation.
            </p>
            <p className="text-md lg:text-xl mt-8">
              Are you an adult training for a race, event or is that on your
              “bucket list”?
            </p>
            <p className="text-md lg:text-xl mt-8 ">Or</p>
            <p className="text-md lg:text-xl mt-8 mb-24">
              Are you finding that your body is “breaking down”, your back, knee
              or hip is causing you to slow down or even give up activities you
              love. Our expertise and training background will help you get on
              track.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
