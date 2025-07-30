"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { galleryItems } from "@/data/partycontents";

export const PartyContents = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen custom-bg2 p-6 my-20">
      <div className="max-w-7xl mx-auto">
        <div className="columns-1 md:columns-2 lg:columns-3 items-center gap-5 md:gap-20 md:space-y-20">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative md:w-[80%] break-inside-avoid group cursor-pointer"
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
              animate={{
                rotate: [2, 0, -2, 0, 2],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.1, // Staggered delay for each card
              }}
            >
              <motion.div
                className="relative overflow-hidden rounded-2xl shadow-2xl shadow-[#A020F099] border border-purple-500/30 transition-all duration-300 hover:shadow-3xl"
                whileHover={{
                  scale: 1.05,
                  rotate: 0, // Reset rotation on hover for better UX
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  className={`w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110 ${item.aspectRatio}`}
                  width={500}
                  height={500}
                />

                {/* Overlay with gradient */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Hover text */}
                {/* Video on Hover */}
                {hoveredCard === item.id && (
                  <video
                    className="absolute inset-0 w-full h-full object-cover z-10 rounded-2xl"
                    src={item.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                )}

                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-purple-400/50 transition-all duration-300" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};