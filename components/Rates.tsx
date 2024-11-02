import React from "react";

export default function Rates() {
  return (
    <div
      className="text-white min-h-screen w-full font-oswald flex flex-col items-center justify-center px-4"
      id="rates"
    >
      <h1 className="text-4xl font-bold mb-10 text-center">
        <span className="text-[#dde04b]">RATES</span>
      </h1>
      <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-4 lg:gap-44">
        <div className="flex flex-col items-center text-center mb-4 lg:mb-0">
          <p className="text-xl max-w-xl text-center sm:text-left leading-loose">
            • Basic gym membership $50 a month <br />
            • Two sessions a week with training $85 a month <br />
            • Three to Four sessions a week with training $125 a month <br />•
            Online Training $85 a month
          </p>
          <p className="text-xl max-w-xl mt-8 text-center sm:text-left">
            All memberships include 24/7 lockbox access to the gym. Family
            discounts available. There is no contract or sign-up fee.
          </p>
        </div>
      </div>
    </div>
  );
}
