import React from "react";
import EmployeeImage from "../employee.png"; // Adjust the import path as necessary

export default function MainHero() {
  return (
    <div id="home">
      <div className="flex flex-wrap justify-center items-center text-white mt-12">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-4 py-8">
          <div className="mb-8 md:mb-0 md:mr-8">
            {" "}
            {/* Add right margin on md screens */}
            <h1 className="text-6xl font-extrabold mb-8 md:mb-12 font-sans">
              {" "}
              {/* Adjusted mb for responsiveness */}
              WELCOME TO{" "}
              <span className="text-yellow-300">
                <br />
                THE
              </span>{" "}
              <span className="text-green-500">SHED</span>
            </h1>
            <p className="text-md md:text-md lg:text-xl font-sans leading-relaxed">
              At The Shed, we offer group personal training and personal
              training on site and online. Each of our workouts are researched,
              thought out and created with the client’s goals and bodies in
              mind. We believe in building a base and strong body, gradually. We
              provide monthly programs or new workouts each session, depending
              on each client’s interest. We also offer general memberships for
              gym use only. No sign up fees or commitment beyond a month. All
              members have 24/7 lockbox access to the gym.
            </p>
          </div>
          <div className="md:flex-shrink-0 mt-8 md:mt-0">
            {" "}
            {/* Adjusted top margin for responsiveness */}
            <img
              src="/employee.png"
              alt="Employee"
              className="rounded-lg shadow-lg h-auto md:h-[24rem] lg:h-[38rem] w-full md:w-auto lg:ml-24" // Adjusted width and height for responsiveness
            />
          </div>
        </div>
      </div>
    </div>
  );
}
