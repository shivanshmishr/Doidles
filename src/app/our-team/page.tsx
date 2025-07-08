"use client";
import React from "react";
import Image from "next/image";

const OurTeamPage = () => {
  return (
    <div className="w-[90%] md:w-[80%] mx-auto flex flex-col space-y-10 mb-20">
      <h1 className="text-4xl font-black my-10 text-center">
        Our Team
      </h1>

      <div className="flex flex-col w-full md:flex-row justify-between items-center gap-10">
        <div className="md:w-[40%]">
          <Image
            src="/images/amitsharma.png"
            alt="Team Member 1"
            width={600}
            height={600}
            className="w-full md:h-[40vh] object-contain"
          />
          <h1 className="text-3xl text-center font-semibold my-1">Amit Sharma</h1>
          <p className="text-[#D214E6] text-center font-medium text-lg">Co-Founder - Doodles</p>
        </div>
        <div className="text-lg md:text-xl font-medium md:w-[60%]">
          <p>With 20+ years in cinema, gaming, and hospitality, Amit Sharma has built brands from the ground up — including leading Miraj Cinemas to become India’s 3rd largest multiplex chain.  Now building Doodles, a next-gen family entertainment zone, he’s driven by innovation and a passion for creating joyful, immersive experiences. His consumer insight and consultant network help us secure prime real estate and drive operational efficiency</p>
        </div>
      </div>

       <div className="flex flex-col w-full md:flex-row-reverse justify-between items-center gap-10">
        <div className="md:w-[40%]">
          <Image
            src="/images/amitsharma.png"
            alt="Team Member 1"
            width={600}
            height={600}
            className="w-full md:h-[40vh] object-contain"
          />
          <h1 className="text-3xl text-center font-semibold my-2">Babulnath Dubey</h1>
          <p className="text-[#D214E6] text-center font-medium text-lg">Co-Founder - Doodles</p>
        </div>
        <div className="text-xl font-medium md:w-[60%]">
          <p>With over 30 years in the gaming industry, including his time at Essel World, Co-founder Babulnath Dubey brings deep expertise in game development, operations, and customer experience, crafting immersive experiences that connect with audiences of all ages.</p>
        </div>
      </div>
    </div>
  );
};

export default OurTeamPage;
