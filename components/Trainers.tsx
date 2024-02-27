import React from "react";
import Image from "next/image";
import TrainerImageJen from "../public/jen.jpeg"; // Adjust path as necessary
import TrainerImageChris from "../public/chris.jpeg"; // Adjust path as necessary

export default function Trainers() {
  return (
    <div
      id="trainers"
      className="text-white min-h-[240vh] w-full font-oswald flex flex-col items-center justify-center py-20"
    >
      <div className="container flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-20 text-center">
          OUR <span className="text-[#dde04b]">TRAINERS</span>
        </h1>
        {/* Jen Section */}
        <div className="flex flex-wrap items-center justify-center w-full md:flex-row mb-44">
          {" "}
          {/* Increased bottom margin here */}
          <div className="md:w-1/2 flex justify-center py-5">
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
        {/* Chris Section */}
        <div className="flex flex-wrap items-center justify-center w-full md:flex-row-reverse">
          <div className="md:w-7/12 lg:w-1/2 2xl:w-1/2 flex justify-center py-5">
            <Image
              src={TrainerImageChris}
              alt="Chris"
              className="rounded-xl"
              width={500}
              height={600}
            />
          </div>
          <div className="md:w-1/2 py-5 flex flex-col items-center md:items-start">
            <h1 className="text-2xl font-bold text-center md:text-left mb-5">
              Chris
            </h1>
            <p className="text-lg lg:text-xl font-normal max-w-96% text-start mb-44">
              "My journey as a personal trainer began when I had the opportunity
              to work under a renowned chiropractor in Florida, Dr. Edward Hunt.
              This invaluable experience allowed me to witness firsthand the
              intersection of fitness and overall well-being. Collaborating
              closely with the chiropractor, I gained deep insights into the
              importance of proper movement, rehabilitation, and preventive
              care. The passion I developed for helping others improve their
              physical health, combined with my fascination for the human body’s
              potential, was sparked during this time. I am grateful for the
              foundation laid by my experience with the chiropractor, as it
              ignited my desire to guide and support individuals on their unique
              fitness journeys."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
