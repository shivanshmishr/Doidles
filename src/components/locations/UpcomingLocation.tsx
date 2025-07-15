"use client";
import React from "react";

const data = [
  {
    left: (
      <div className="inline-block text-md md:text-xl bg-[#4E035A] px-4 py-2 rounded-lg font-semibold">
        Maharashtra
      </div>
    ),
    right: (
      <div className="space-y-1 text-md md:text-xl text-left">
        <div>Mumbai</div>
        <div>Ambe Jogai</div>
        <div>Akola</div>
      </div>
    ),
  },
  {
    left: <div className="text-md md:text-xl">Hyderabad</div>,
    right: (
      <div className="inline-block text-md md:text-xl bg-[#4E035A] px-4 py-2 rounded-lg font-semibold">
        Telangana
      </div>
    ),
  },
  {
    left: (
      <div className="inline-block text-md md:text-xl bg-[#4E035A] px-4 py-2 rounded-lg font-semibold">
        Haryana
      </div>
    ),
    right: <div className="text-md md:text-xl">Gurugram</div>,
  },
  {
    left: (
      <div className="space-y-1 text-md md:text-xl text-right">
        <div>Sirhind</div>
        <div>Patiala</div>
        <div>Ambala</div>
      </div>
    ),
    right: (
      <div className="inline-block bg-[#4E035A] text-md md:text-xl px-4 py-2 rounded-lg font-semibold">
        Punjab
      </div>
    ),
  },
];

const UpcomingLocationSection = () => {
  return (
    <div className="bg-black text-white py-10 relative">
      <h2 className="text-3xl text-center md:text-3xl font-semibold my-10">
        Upcoming location
      </h2>

      <div className="relative flex flex-col items-center">
        {/* Center vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-600 z-0" />

        {/* Timeline items */}
        <div className="flex flex-col space-y-16 z-10 w-full">
          {data.map((row, index) => (
            <div key={index} className="flex justify-center gap-5 items-start relative">
              {/* Left */}
              <div className="w-1/3 text-right pr-4">{row.left}</div>

              {/* Dot */}
              <div className="w-0 relative">
                <div className="w-3 h-3 md:w-5 md:h-5 bg-[#4E035A] rounded-full absolute left-1/2 -translate-x-1/2 top-1" />
              </div>

              {/* Right */}
              <div className="w-1/3 text-left pl-4">{row.right}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingLocationSection;