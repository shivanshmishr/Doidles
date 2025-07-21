"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ourOfferings } from "@/data/ourOfferings";
import { RiInstagramFill } from "react-icons/ri";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const OurOfferings = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const containerRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const headingRef = useRef(null);

  return (
    <div className="min-h-screen md:w-[80%] lg:w-[55%] mx-auto p-6" ref={containerRef}>
      <h1
        ref={headingRef}
        className="gamingFont text-4xl text-center font-extrabold my-12"
      >
        OUR OFFERINGS
      </h1>

      <div className="grid grid-cols md:grid-cols-2 gap-10 justify-center items-center">
        {ourOfferings.map((item, index) => (
          <div
            key={item.id}
            className="relative w-[100%] mx-auto break-inside-avoid group cursor-pointer"
            onMouseEnter={() => setHoveredCard(item.id)}
            onMouseLeave={() => setHoveredCard(null)}
            ref={(el) => { cardsRef.current[index] = el; }}
          >
            <div className="w-full h-full relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-[#A020F099] border-2 border-white/50 transition-all duration-300 hover:shadow-3xl">
              <Image
                src={item.src}
                alt={item.alt}
                className="w-full h-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                width={500}
                height={500}
              />

              <div className="absolute top-2/3 flex justify-center items-center w-full">
                <h2 className="text-center transform text-white font-bold text-[2.5rem]">
                  {item.name}
                </h2>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 backdrop-blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Hover text */}
              <div
                className={`absolute inset-0 flex justify-center transition-all duration-300 ${
                  hoveredCard === item.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="flex flex-col items-center justify-center">
                  <span className="md:w-[80%] mx-auto text-white text-center font-bold text-[1.25rem]">
                    {item.alt}
                  </span>
                  <div>
                    <RiInstagramFill
                      className="text-white text-2xl mt-2"
                      size={50}
                    />
                  </div>
                </div>
              </div>

              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-purple-400/50 transition-all duration-300" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
