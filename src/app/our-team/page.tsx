"use client";
import React from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FadeInSection = ({
  children,
  direction = "left",
}: {
  children: React.ReactNode;
  direction?: "left" | "right";
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -100 : 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

const OurTeamPage = () => {
  return (
    <div className="w-[90%] md:w-[80%] mx-auto flex flex-col space-y-20 mb-20">
      <h1 className="text-4xl font-black my-10 text-center">Our Team</h1>

      {/* First Member - Fade from Left */}
      <FadeInSection direction="left">
        <div className="flex flex-col w-full md:flex-row justify-between gap-10">
          <div className="md:w-[40%]">
            <Image
              src="/main/team/guru.png"
              alt="Amit Sharma"
              width={600}
              height={600}
              className="w-[60%] mx-auto md:h-[40vh] object-contain"
            />
            <h1 className="text-3xl text-center font-semibold my-1">
              Amit Sharma
            </h1>
            <p className="text-[#D214E6] text-center font-medium text-lg">
              Co-Founder - Doodles
            </p>
          </div>
          <div className="text-lg md:text-xl font-medium text-center md:text-left md:w-[60%] md:mt-20">
            <p>
              Amit Sharma has 23+ years in cinema, retail, and hospitality.
              Ex-MD of Miraj Cinemas; scaled it to 250+ screens, India’s 3rd
              largest chain. His insight and network ensure prime locations and
              efficient operations.
            </p>
          </div>
        </div>
      </FadeInSection>

      {/* Second Member - Fade from Right */}
      <FadeInSection direction="right">
        <div className="flex flex-col w-full md:flex-row-reverse justify-between gap-10">
          <div className="md:w-[40%]">
            <Image
              src="/main/team/babul.png"
              alt="Babulnath Dubey"
              width={600}
              height={600}
              className="w-[60%] mx-auto md:h-[40vh] object-contain"
            />
            <h1 className="text-3xl text-center font-semibold my-2">
              Babulnath Dubey
            </h1>
            <p className="text-[#D214E6] text-center font-medium text-lg">
              Co-Founder - Doodles
            </p>
          </div>
          <div className="text-lg md:text-xl font-medium text-center md:text-left md:w-[60%] md:mt-20">
            <p>
              Babulnath Dubey has 30+ years of experience in the gaming industry. Formerly with Essel World and Giggles, excelling in game development and operations. His expertise is in crafting immersive, age-inclusive customer experiences.
            </p>
          </div>
        </div>
      </FadeInSection>

      {/* Third Member - Fade from Left */}
      {/* <FadeInSection direction="left">
        <div className="flex flex-col w-full md:flex-row justify-between gap-10">
          <div className="md:w-[40%]">
            <Image
              src="/images/amitsharma.png"
              alt="Bhavesh Shah"
              width={600}
              height={600}
              className="w-[60%] mx-auto md:h-[40vh] object-contain"
            />
              <h1 className="text-3xl text-center font-semibold my-1">
                Bhavesh Shah
              </h1>
              <p className="text-[#D214E6] text-center font-medium text-lg">
                Co-Founder - Doodles
              </p>

          </div>
          <div className="text-lg md:text-xl font-medium text-center md:text-left md:w-[60%] md:mt-20">
            <p>
              Bhavesh Shah: 25+ years as India’s top amusement equipment
              distributor and consultant. Trusted by clients across India and
              internationally, including Tanzania. Among the only industry
              experts with comprehensive expertise in arcades, trampolines,
              bowling, snow worlds, and VR, delivering unparalleled entertainment
              solutions.
            </p>
          </div>
        </div>
      </FadeInSection> */}
    </div>
  );
};

export default OurTeamPage;