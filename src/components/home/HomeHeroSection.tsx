"use client";
import React, { useState } from "react";

export const HomeHeroSection = () => {
  return (
    <div className="w-full overflow-hidden">
      <video
        autoPlay={true}
        muted
        playsInline
        src="/homeherovideo.mp4"
        width={1920}
        height={1080}
        loop={false}
        className="w-full h-auto max-h-[90vh] object-cover hidden md:block"
      />
      <video
        autoPlay={true}
        muted
        playsInline
        src="/homeherovideomobile.mp4"
        width={1920}
        height={1080}
        loop={false}
        className="w-full h-[100vh] object-cover md:hidden"
      />
    </div>
  );
};
