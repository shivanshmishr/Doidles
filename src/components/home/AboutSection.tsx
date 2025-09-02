"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";

export const AboutSection = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const ringRef = useRef(null);
  const visionRef = useRef(null);
  const missionRef = useRef(null);

  const imageInView = useInView(imageRef, { once: true });
  const textInView = useInView(textRef, { once: true });
  const ringInView = useInView(ringRef, { once: true });
  const visionInView = useInView(visionRef, { once: true });
  const missionInView = useInView(missionRef, { once: true });

  return (
    <div className="bg-black min-h-screen overflow-y-hidden w-[90%] md:w-[80%] mx-auto text-white flex flex-col">
      {/* About Us Section */}
      <div className="flex flex-col mt-20 mb-10 md:flex-row items-center">
        {/* Left: Image */}
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, x: -100 }}
          animate={imageInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
          className="w-full md:w-[45%] relative h-full"
        >
          <Image
            src="/main/whydoodles.jpg"
            alt="Founder"
            width={1080}
            height={1080}
            className="w-full h-full object-cover rounded"
          />
        </motion.div>

        {/* Right: Text */}
        <motion.div
          ref={textRef}
          initial={{ opacity: 0, x: 100 }}
          animate={textInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
          className="w-full md:w-[55%] py-4 bg-neutral-900 p-4 md:p-8 rounded-xl h-[60vh] flex flex-col justify-center shadow-lg"
        >
          <h2 className="gamingFont text-3xl font-extrabold mb-4">WHY DOODLES?</h2>
          <p className="text-[1rem] md:text-lg leading-relaxed text-gray-300">
            Founded in 2023, Doodles set out with a bold vision to deliver premium family entertainment in tier 2 and tier 3 cities.
            Thriving in our current operational locations, our journey reflects rapid growth and strong customer retention.
            Our co-founders' expertise in gaming and deep understanding of tier 2 and 3 markets have greatly fueled our growth.
          </p>
        </motion.div>
      </div>

      {/* Vision & Mission Section */}
      <div className="my-20 relative">

        {/* Absolute Ring Image */}
        <motion.div
          ref={ringRef}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1.2, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
          className="w-[40vh] h-[40vh] absolute left-1/2 -translate-x-1/2 top-[50%] -translate-y-1/2 z-0"
        >
          <Image
            src="/about_ring.png"
            alt="about_ring"
            width={500}
            height={500}
            className="w-full h-full object-contain"
          />
        </motion.div>


        {/* Vision */}
        <motion.div
          ref={visionRef}
          initial={{ opacity: 0, y: 40 }}
          animate={visionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex flex-col space-y-5 md:space-y-0 md:flex-row justify-between items-center"
        >
          <h2 className="md:w-[20%] gamingFont text-3xl font-extrabold">VISION</h2>
          <p className="md:w-[85%] text-md md:text-xl text-center md:text-left leading-relaxed text-gray-300">
            Creating joyful spaces where kids explore, grow, and celebrate
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div
          ref={missionRef}
          initial={{ opacity: 0, y: 40 }}
          animate={missionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 flex flex-col my-10 space-y-5 md:space-y-0 md:flex-row justify-between items-center"
        >
          <h2 className="md:w-[20%] gamingFont text-3xl font-extrabold">MISSION</h2>
          <p className="md:w-[85%] text-md md:text-xl text-center md:text-left leading-relaxed text-gray-300">
            At Doodles, our mission is to deliver safe, hygienic, and engaging gaming experiences with dedicated support throughout. As an Indian gaming zone, we align with the Make in India vision, bringing the joy of gaming nationwide.          </p>
        </motion.div>
      </div>
    </div>
  );
};
