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
    <div className="min-h-screen w-[90%] md:w-[80%] mx-auto  flex flex-col md:flex-row items-center justify-center space-y-10">
      {/* Left Section */}
      <div className="md:w-[50%] bg-red-300">hh</div>

      {/* Right Section */}
      <div className="md:w-[50%]">
        <Carousel className="md:w-[80%] w-full mx-auto">
          <CarouselContent className="mb-3">
            {TestimonialData.map((item, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <div className="border-2 bg-white/10 border-white/20 rounded-2xl shadow-2xl">
                    <div className="flex flex-col h-[40vh] items-center justify-center p-3">
                      <p className="text-lg my-2 text-center font-semibold">
                        {item.content}
                      </p>
                      <p className="text-2xl font-semibold text-center">
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
  );
};
