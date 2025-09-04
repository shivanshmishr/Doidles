"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TestimonialData } from "@/data/testimonialData";


export const TestimonialSection = () => {

  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  return (
    <div className="min-h-screen overflow-hidden flex flex-col justify-center items-center w-[90%] md:w-[80%] mx-auto">
      <h1
        ref={headingRef}
        className="gamingFont text-4xl text-center font-extrabold my-12"
      >
        TESTIMONIALS
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-center space-y-10">
        {/* Left Section */}
        <div className="md:w-[50%] relative" ref={leftRef}>
          <Image
            width={100}
            height={100}
            src="/testimonial/testi1.png"
            alt="testi1"
            className="absolute w-16 h-16 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 p-2 rotate-0 bg-[#690882] rounded-full md:w-28 md:h-28"
          />
          <div className="outer-spin border-2 flex flex-col justify-center items-center border-white/40 w-[40vh] h-[40vh] md:w-[60vh] md:h-[60vh] rounded-full mx-auto relative">
            <Image
              width={100}
              height={100}
              src="/testimonial/test2.png"
              alt="testi1"
              className="absolute rotate-0 -left-6 md:-left-10 w-12 h-12 p-1 bg-[#bd3bf9] rounded-full md:w-16 md:h-16"
            />
            <div className="absolute -top-2.5 md:-top-4 rounded-full w-5 h-5 md:w-8 md:h-8 bg-[#D214E6]" />
            <div className="absolute -bottom-2.5 md:-bottom-4 rounded-full w-5 h-5 md:w-8 md:h-8 bg-[#b450f7]" />
            <Image
              width={100}
              height={100}
              src="/testimonial/testi3.png"
              alt="testi3"
              className="absolute rotate-0 -right-5 md:-right-9 w-12 h-12 p-1 bg-[#cf70e1] rounded-full md:w-16 md:h-16"
            />

            {/* Inner Ring */}
            <div className="inner-spin border-2 flex flex-col justify-center items-center border-white/40 w-[25vh] h-[25vh] md:w-[40vh] md:h-[40vh] rounded-full mx-auto relative">
              <Image
                width={100}
                height={100}
                src="/testimonial/test2.png"
                alt="test2"
                className="absolute rotate-0 top-0 -translate-y-1/2 w-12 h-12 p-1 bg-[#68075e] rounded-full md:w-12 md:h-12"
              />
              <div className="absolute -left-3 rounded-full w-6 h-6 bg-[#D214E6]" />
              <div className="absolute -right-3 rounded-full w-6 h-6 bg-[#f80de8]" />
              <Image
                width={100}
                height={100}
                src="/testimonial/testi3.png"
                alt="testi3"
                className="absolute rotate-0 -bottom-6 md:-bottom-8 w-12 h-12 p-1 bg-[#a70cfa] rounded-full md:w-12 md:h-12"
              />

            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-[90%] md:w-[50%]" ref={rightRef}>
          <Carousel className="w-[80%] mx-auto">
            <CarouselContent className="mb-3">
              {TestimonialData.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <div className="border-2 relative bg-white/10 border-white/10 rounded-2xl shadow-2xl">
                      <Image
                        src="/testimonial/arrow.png"
                        width={60}
                        height={60}
                        alt="arrow"
                        className="absolute right-4 top-4 w-5 h-5 md:w-10 md:h-10 object-contain"
                      />
                      <div className="flex flex-col h-[40vh] items-center justify-center p-3">
                        <p className="text-md md:text-lg my-2 text-center font-semibold">
                          "{item.content}"
                        </p>
                        {/* <p className="text-xl md:text-2xl font-semibold text-center">
                          {item.name}
                        </p> */}
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
