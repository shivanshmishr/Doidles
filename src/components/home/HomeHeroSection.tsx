"use client";
import React, { useState } from "react";

export const HomeHeroSection = () => {
  return (
    <div className="w-full overflow-hidden">
      <video
        autoPlay={true}
        muted
        playsInline
        src="/main/home.mp4"
        width={1920}
        height={1080}
        loop
        className="w-full h-auto max-h-[90vh] object-cover hidden md:block"
      />
      <video
        autoPlay={true}
        muted
        playsInline
        src="main/home.mp4"
        width={1920}
        height={1080}
        loop
        className="w-full h-[100vh] object-cover md:hidden"
      />
    </div>
  );
};
