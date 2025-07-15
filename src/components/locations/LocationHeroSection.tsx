"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { locations } from "@/data/locations";

const LocationHeroSection = () => {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);
  const [isPopoverHovered, setIsPopoverHovered] = useState<boolean>(false);

  const handleHover = (cityName: string) => {
    setHoveredCity(cityName);
  };

  const handleLeave = () => {
    setTimeout(() => {
      if (!isPopoverHovered) {
        setHoveredCity(null);
      }
    }, 100);
  };

  return (
    <div className="relative w-[80%] min-h-screen mx-auto flex space-y-10 flex-col-reverse md:flex-row items-center justify-center">
      {/* LEFT SIDE LOCATIONS */}
      <div className="md:w-[50%]">
        {locations.map((loc, index) => (
          <div
            key={loc.id}
            className={`${index % 2 === 0 ? "" : "md:ml-[25%] md:-mt-10"} w-36 h-36 md:w-44 md:h-44 p-4 rounded-full border-2 border-white/20 flex flex-col justify-center items-center cursor-po-inter`}
            onMouseEnter={() => handleHover(loc.name)}
            onMouseLeave={handleLeave}
          >
            <h3 className="text-md md:text-lg text-center font-semibold">{loc.name}</h3>
          </div>
        ))}
      </div>

      {/* RIGHT SIDE MAP */}
      <div className="md:w-[50%] relative overflow-hidden shadow-lg">
        <Image
          src="/indiamap.png"
          width={1080}
          height={1080}
          alt="Map of India"
          className="w-full h-full object-contain"
        />

        {locations.map((loc) => (
          <div key={loc.id}>
            <Popover open={hoveredCity === loc.name}>
              <PopoverTrigger asChild>
                <Image
                  src="/pointer.png"
                  width={40}
                  height={40}
                  alt={`${loc.name} pointer`}
                  className={`absolute z-30 ${loc.styles} h-10 w-10 object-contain`}
                  onMouseEnter={() => handleHover(loc.name)}
                  onMouseLeave={handleLeave}
                />
              </PopoverTrigger>

              <PopoverContent
                side="top"
                align="center"
                sideOffset={10}
                className="p-0 border-none shadow-xl bg-transparent"
                onMouseEnter={() => setIsPopoverHovered(true)}
                onMouseLeave={() => {
                  setIsPopoverHovered(false);
                  setHoveredCity(null);
                }}
              >
                <div className="bg-white text-black rounded-xl overflow-hidden shadow-lg w-[300px]">
                  <iframe
                    src={loc.iframeSrc}
                    width="300"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                  <div className="p-2 text-center font-bold text-purple-700">
                    {loc.name}
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationHeroSection;
