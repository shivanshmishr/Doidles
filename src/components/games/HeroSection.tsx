"use client";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-center flex flex-col items-center justify-center text-white custom-bg">
      <Marquee speed={100}>
        <h1 className="gamingFont text-[#D214E6] text-6xl font-semibold text-center my-10">
          GAME
        </h1>
      </Marquee>

      <div className="relative md:w-[80%] mx-auto">
        <Image
          src="/images/game.gif"
          alt="Party Events"
          width={1920}
          height={1080}
          className="w-full object-contain"
        />
        <button className="absolute top-1/2 mt-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-row items-center gap-2 px-10 py-5 border-2 border-white/20 rounded-xl bg-[#4E035A] hover:scale-110 cursor-pointer transition-all duration-300">
          <span className="text-4xl font-bold ">Tap to Play</span>
        </button>
      </div>

      <Marquee speed={200}>
        <h1 className="gamingFont text-[#D214E6] text-4xl font-semibold text-center my-10">
          LEVEL UP YOUR PLAYTIME
        </h1>
      </Marquee>
    </div>
  );
};
