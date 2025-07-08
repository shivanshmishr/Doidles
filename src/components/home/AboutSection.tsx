"use client";
import React from "react";
import Image from "next/image";

export const AboutSection = () => {
  return (
    <div className="bg-black min-h-screen md:w-[80%] mx-auto text-white flex flex-col md:flex-row items-center">
      {/* Left: Image */}
      <div
        className="md:w-[45%] relative h-full"
        style={{
          transform: "perspective(1000px) rotateY(15deg)",
        }}
      >
        <Image
          src="/images/aboutus.webp"
          alt="Founder"
          width={1080}
          height={1080}
          className="w-full h-full object-cover rounded"
        />
      </div>

      {/* Right: Text */}
      <div
        className="bg-neutral-900 p-8 rounded-xl md:w-[55%] h-[60vh] flex flex-col justify-center shadow-lg"
        style={{
          transform: "perspective(1000px) rotateY(-15deg)",
        }}
      >
        <h2 className="text-3xl font-extrabold mb-4">WHY DOODLES?</h2>
        <p className="text-lg leading-relaxed text-gray-300">
          Welcome to Doodles, a vibrant world of fun, learning, and adventure
          for kids aged 5 to 15! Founded by Amit Sharma of Miraj Cinemas,
          Doodles blends entertainment with development through a toddler zone,
          trampoline park, VR games, arcade challenges, and more. Designed to
          inspire creativity and social skills, Doodles offers a safe, exciting
          space where play meets purpose, making it more than just a gaming zone
          but a transformative experience.
        </p>
      </div>
    </div>
  );
};
