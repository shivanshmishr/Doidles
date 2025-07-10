"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TestimonialData } from "@/data/testimonialData";

export const TestimonialSection = () => {
  return (
    <div className="min-h-screen w-[90%] md:w-[80%] mx-auto">

      <h1 className="gamingFont text-4xl text-center font-extrabold my-12">
        TESTIMONIALS
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-center space-y-10">
        {/* Left Section */}
        <div className="md:w-[50%]">
          {/* Outer Ring */}
          <div className="outer-spin border-2 flex flex-col justify-center items-center border-white/40 w-[40vh] h-[40vh] md:w-[60vh] md:h-[60vh] rounded-full mx-auto relative">
            <Image
              width={100}
              height={100}
              src="/testimonial/test2.png"
              alt="testi1"
              className="absolute -left-6 md:-left-10 w-12 h-12 p-1 bg-[#D1FFF4] rounded-full md:w-20 md:h-20"
            />

            <div className="absolute -top-2.5 md:-top-4 rounded-full w-5 h-5 md:w-8 md:h-8 bg-[#D214E6]" />
            <div className="absolute -bottom-2.5 md:-bottom-4 rounded-full w-5 h-5 md:w-8 md:h-8 bg-[#A05A43]" />

            <Image
              width={100}
              height={100}
              src="/testimonial/testi3.png"
              alt="testi1"
              className="absolute -right-5 md:-right-10 w-12 h-12 p-1 bg-[#C0D9BF] rounded-full md:w-20 md:h-20"
            />

            {/* Inner Ring */}
            <div className="inner-spin border-2 flex flex-col justify-center items-center border-white/40 w-[25vh] h-[25vh] md:w-[40vh] md:h-[40vh] rounded-full mx-auto relative">
              <Image
                width={100}
                height={100}
                src="/testimonial/test2.png"
                alt="testi1"
                className="absolute top-0 -translate-y-1/2 w-12 h-12 p-1 bg-[#D1FFF4] rounded-full md:w-20 md:h-20"
              />

              <div className="absolute -left-3 rounded-full w-6 h-6 bg-[#D214E6]" />
              <div className="absolute -right-3 rounded-full w-6 h-6 bg-[#A05A43]" />

              <Image
                width={100}
                height={100}
                src="/testimonial/testi3.png"
                alt="testi1"
                className="absolute -bottom-6 md:-bottom-10 w-12 h-12 p-1 bg-[#C0D9BF] rounded-full md:w-20 md:h-20"
              />

              {/* Center Image */}
              <Image
                width={100}
                height={100}
                src="/testimonial/testi1.png"
                alt="testi1"
                className="w-16 h-16 p-2 bg-[#F6D3BD] rounded-full md:w-28 md:h-28"
              />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-[100%] md:w-[50%]">
          <Carousel className="md:w-[80%] mx-auto">
            <CarouselContent className="mb-3">
              {TestimonialData.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="p-1 ">
                    <div className="border-2 relative bg-white/10 border-white/10 rounded-2xl shadow-2xl">
                      <Image
                        src="/testimonial/arrow.png"
                        width={60}
                        height={60}
                        alt="arrow"
                        className="absolute right-4 top-4 w-10 h-10 object-contain"
                      />
                      <div className="flex flex-col h-[25vh] md:h-[40vh] items-center justify-center p-3">
                        <p className="text-md md:text-lg my-2 text-center font-semibold">
                          "{item.content}"
                        </p>
                        <p className="text-xl md:text-2xl font-semibold text-center">
                          {item.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex flex-row justify-end gap-x-2 items-end">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};