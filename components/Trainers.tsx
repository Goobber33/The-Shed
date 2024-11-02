import React from "react";
import Image from "next/image";
import TrainerImageJen from "../public/jen.webp";

export default function Trainers() {
  return (
    <div
      id="trainers"
      className="text-white min-h-[150vh] w-full font-oswald flex flex-col items-center justify-center py-20"
    >
      <div className="container flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-20 text-center">
          LEAD <span className="text-[#dde04b]">TRAINER</span>
        </h1>

        {/* Jen Section */}

        <div className="flex flex-wrap items-center justify-center w-full md:flex-row mb-44 md:gap-6">
          {" "}
          <div className="md:w-5/12 flex justify-center py-5">
            <Image
              src={TrainerImageJen}
              alt="Jen"
              className="rounded-xl"
              width={500}
              height={600}
            />
          </div>
          <div className="md:w-7/12 lg:w-1/2 py-5 flex flex-col items-center md:items-start">
            <h1 className="text-2xl font-bold text-center md:text-left mb-5">
              Jen
            </h1>
            <p className="text-lg lg:text-xl font-normal max-w-96% text-start">
              "After working 20 plus years in the fitness and health industry
              and being a competitive runner, triathlete, and tennis player, I
              knew the benefits of strength training. By adding cross training
              to my workouts, I was less prone to injury, stronger overall and
              more successful racing. In 2012, I decided to share my knowledge
              and experience and opened The Shed, in Sandpoint, Idaho. It was my
              goal to create an affordable gym for people of all ages, where
              they could improve their fitness level, receive personal training,
              workouts designed for their bodies and goals, and be encouraged
              and supported. Where everyone gets individual attention and is
              listened to. We don’t compete with each other at The Shed, but
              rather, build each other up. That’s what being a ShedHead is all
              about! As the gym has grown, I’ve even expanded into online
              training. Helping people live healthier lives has been and
              continues to be my mission!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
