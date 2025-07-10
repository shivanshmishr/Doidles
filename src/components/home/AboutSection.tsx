"use client";
import React from "react";
import Image from "next/image";

export const AboutSection = () => {
  return (
    <div className="bg-black min-h-screen w-[90%] space-y-5 md:w-[80%] mx-auto text-white flex flex-col">
      {/* About Us Section */}
      <div className="flex flex-col mt-20 mb-10 md:flex-row items-center">
        {/* Left: Image */}
        <div className="w-full md:w-[45%] relative h-full md:rotate-left-3d">
          <Image
            src="/images/aboutus.webp"
            alt="Founder"
            width={1080}
            height={1080}
            className="w-full h-full object-cover rounded"
          />
        </div>

        {/* Right: Text */}
        <div className="w-full md:w-[55%] py-4 bg-neutral-900 p-8 rounded-xl h-[60vh] flex flex-col justify-center shadow-lg md:rotate-right-3d">
          <h2 className="text-3xl font-extrabold mb-4">WHY DOODLES?</h2>
          <p className="text-md md:text-lg leading-relaxed text-gray-300">
            Welcome to Doodles, a vibrant world of fun, learning, and adventure
            for kids aged 5 to 15! Founded by Amit Sharma of Miraj Cinemas,
            Doodles blends entertainment with development through a toddler
            zone, trampoline park, VR games, arcade challenges, and more.
            Designed to inspire creativity and social skills, Doodles offers a
            safe, exciting space where play meets purpose, making it more than
            just a gaming zone but a transformative experience.
          </p>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="my-20">
        {/* Vision */}
        <div className="flex flex-col space-y-5 md:space-y-0 md:flex-row justify-between items-center">
          <h2 className="md:w-[20%] gamingFont text-3xl font-extrabold">
            VISION
          </h2>
          <p className="md:w-[85%] text-lg md:text-xl leading-relaxed text-gray-300">
            Creating joyful spaces where kids explore, grow, and celebrate
          </p>
        </div>

        {/* Mission */}
        <div className="flex flex-col my-10 space-y-5 md:space-y-0 md:flex-row justify-between items-center">
          <h2 className="md:w-[20%] gamingFont text-3xl font-extrabold">
            MISSION
          </h2>
          <p className="md:w-[85%] text-lg md:text-xl leading-relaxed text-gray-300">
            At Doodles, our mission is to deliver safe, hygienic, and engaging
            gaming experiences with dedicated support throughout. As a
            pioneering Indian gaming zone, we align with the Make in India
            vision, bringing the joy of gaming nationwide
          </p>
        </div>
      </div>
    </div>
  );
};
