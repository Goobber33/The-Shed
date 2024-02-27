import React from "react";
import Image from "next/image";
import AdultProgramsImage from "../public/adult.jpeg";
import YouthProgramsImage from "../public/youth.png";

export default function Programs() {
  return (
    <div
      className="text-white min-h-screen w-full font-oswald flex flex-col items-center justify-center px-4"
      id="programs"
    >
      <h1 className="text-4xl font-bold mb-20 text-center">
        OUR <span className="text-green-500">PROGRAMS</span>
      </h1>
      <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-4 lg:gap-44">
        <div className="flex flex-col items-center text-center mb-4 lg:mb-0">
          <div
            className="w-full w-1/2 lg:w-3/4 mb-12 relative"
            style={{ height: "0px", paddingBottom: "76.25%" }}
          >
            <Image
              src={AdultProgramsImage}
              alt="Adult Programs"
              fill
              style={{ objectFit: "cover", objectPosition: "top 10%" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-2xl"
            />
          </div>
          <h1 className="text-4xl font-bold mb-8">Adult Programs</h1>
          <p className="text-xl max-w-xl mb-12 lg:text-center">
            At the Shed, we offer group personal training for Adults. Each
            workout is specifically designed to address the client’s needs,
            whether you are an athlete wishing to cross train for your sport,
            prepare physically for a race/event; work on gait or core strength;
            or a client desiring inch loss; or have special needs: MS,
            paralysis, prosthetics. We look forward to helping you reach your
            goals.{" "}
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div
            className="w-full w-1/2 lg:w-3/4 mb-12 relative"
            style={{ height: "0px", paddingBottom: "76.25%" }}
          >
            <Image
              src={YouthProgramsImage}
              alt="Youth Programs"
              fill
              style={{ objectFit: "cover", objectPosition: "top 10%" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-2xl"
            />
          </div>
          <h1 className="text-4xl font-bold mb-8">Youth Programs</h1>
          <p className="text-xl max-w-xl mb-12 lg:text-center">
            We train all athletes from ages 10 to college level and beyond. We
            design dynamic, functional workouts that prevent injury, identify
            and nullify “power leaks” and prepare the athletes for their sports.
            Workouts will include plyometrics, core and stability training, gait
            analysis, speed training, and lifting. Building complete athletes at
            The Shed is our primary goal.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
