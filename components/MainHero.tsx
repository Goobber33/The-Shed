import React from "react";

export default function MainHero() {
  return (
    <div id="home">
      <div className="flex flex-wrap justify-center items-center text-white mt-2 mb-12">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-4 py-16 gap-12">
          <div className="mb-8 md:mb-0 md:mr-8">
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-extrabold mb-8 md:mb-12 font-sans">
              WELCOME&nbsp;TO
              <br />
              <span className="text-yellow-300">THE</span>
              <span className="text-green-500">&nbsp;SHED</span>
            </h1>
            <p className="text-sm md:text-md lg:text-2xl font-sans">
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
            <img
              src="/jenmain.jpg"
              alt="Employee"
              className="object-contain rounded-2xl shadow-lg h-auto md:h-[24rem] lg:h-[38rem] w-full md:w-auto lg:ml-2 2xl:ml-24"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
