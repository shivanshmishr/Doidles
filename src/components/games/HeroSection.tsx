"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export const HeroSection = () => {
  const [play, setPlay] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (play && iframeRef.current) {
      // Focus the game once it's rendered
      iframeRef.current.focus();
    }
  }, [play]);

  return (
    <div className="relative min-h-screen bg-center flex flex-col items-center justify-center text-white custom-bg">
      <Marquee speed={100}>
        <h1 className="gamingFont text-[#D214E6] text-3xl md:text-6xl font-semibold text-center my-5 md:my-10">
          GAME
        </h1>
      </Marquee>

      <div className="relative md:w-[80%] mx-auto">
        {!play ? (
          <>
            <Image
              src="/images/game.gif"
              alt="Party Events"
              width={1920}
              height={1080}
              className="w-full h-[60vh] object-cover"
            />
            <button
              onClick={() => setPlay(true)}
              className="absolute top-1/2 mt-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-row items-center gap-2 px-5 py-3 md:px-10 md:py-5 border-2 border-white/20 rounded-xl bg-[#4E035A] hover:scale-110 cursor-pointer transition-all duration-300"
            >
              <span className="text-xl md:text-4xl font-bold ">Tap to Play</span>
            </button>
          </>
        ) : (
          <iframe
            ref={iframeRef}
            src="/dinoo/dino_fit.html"
            title="Dino Game"
            className="w-full h-[30vh] md:h-[50vh] overflow-y-hidden border-2 border-white/40 rounded-xl"
          />
        )}
      </div>

      <Marquee speed={200}>
        <h1 className="gamingFont text-[#D214E6] text-xl md:text-4xl font-semibold text-center my-5 md:my-10">
          LEVEL UP YOUR PLAYTIME
        </h1>
      </Marquee>
    </div>
  );
};
