import React from "react";

export default function Hours() {
  return (
    <div
      className="text-white  w-full font-oswald flex flex-col items-center justify-center px-4"
      id="hours"
    >
      <h1 className="text-4xl font-bold mb-10 text-center">
        <span className="text-green-500">TRAINING HOURS</span>
      </h1>
      <div className="flex flex-col lg:flex-row justify-center text-center w-full gap-4 lg:gap-44">
        <div className="flex flex-col items-center text-center mb-4 lg:mb-0">
          <p className="text-xl max-w-xl mb-44 text-left leading-loose">
            <span className="block">Mondays 7am - 12pm</span>
            <span className="block">Tuesday 7am - 12pm</span>
            <span className="block">Thursday 7am - 12pm</span>
            <span className="block">Friday 7am - 12pm</span>
          </p>
        </div>
      </div>
    </div>
  );
}
