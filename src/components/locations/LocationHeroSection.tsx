"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { locations } from "@/data/locations";
import { MapPin, Building } from "lucide-react";
import DestinationCard from "./LocationDestinationCard";
import Link from "next/link";

const destinations = [
  {
    image: "/hisar.png",
    location: "Haryana, In",
    title: "Hisar",
  },
  {
    image: "/kullu.png",
    location: "Himachal Pradesh, In",
    title: "Kullu",
  },
  {
    image: "/callicut.png",
    location: "Kerela, In",
    title: "Calicut (Kozhikode)",
  },
  {
    image: "/coaimbatoor.png",
    location: "Tamil Nadu, In",
    title: "Coimbatore",
  },
];

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
    <div className="relative w-[80%] my-10 min-h-screen mx-auto">

      <div className="flex space-y-10 flex-col-reverse md:flex-row items-center justify-center">
        {/* LEFT SIDE LOCATIONS */}
        <div className="md:w-[50%]">
          {/* Heading */}
          <h2 className="text-4xl gamingFont font-bold mb-4">
            Our <span className="text-[#D214E6]">Presence</span>
          </h2>

          {/* Description */}
          <p className="text-gray-300 mb-10">
            Our professionals and experts are spread across different states in India.
            Visit us at any of our branches to get a consultation on your Business Loan needs.
          </p>

          {/* Stats */}
          <div className="flex flex-row gap-10 mb-10">
            {/* States */}
            <div className="flex flex-col items-center">
              <div className="bg-purple-600/20 p-2 rounded-full mb-2">
                <MapPin className="w-8 h-8 text-[#D214E6]" />
              </div>
              <h3 className="text-2xl font-semibold">04 States</h3>
            </div>

            {/* Branches */}
            <div className="flex flex-col items-center">
              <div className="bg-purple-600/20 p-2 rounded-full mb-2">
                <Building className="w-8 h-8 text-[#D214E6]" />
              </div>
              <h3 className="text-2xl font-semibold">05 Branches</h3>
            </div>
          </div>

          {/* Button */}
          {/* <Link href="/contact">
            <button className="bg-[#D214E6] gamingFont text-white font-medium px-6 py-3 rounded-full shadow-lg transition cursor-pointer">
              Our Branch network
            </button>
          </Link> */}
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

      {/* <div className="my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {destinations.map((dest, index) => (
          <DestinationCard
            key={index}
            image={dest.image}
            location={dest.location}
            title={dest.title}
          />
        ))}
      </div> */}

    </div>
  );
};

export default LocationHeroSection;
