"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { RiWhatsappFill } from "react-icons/ri";

export const Navbar = () => {
  return (
    <div className="">
      <div className="p-2 w-[95%] mx-auto flex flex-row justify-between items-center text-white">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={300}
          height={300}
          className="w-auto h-20 object-contain"
        />
        <div className="flex flex-row gap-10">
          <li className="text-xl font-semibold text-white">Home</li>
          <li className="text-xl font-semibold text-white">Games</li>
          <li className="text-xl font-semibold text-white">Location</li>
          <li className="text-xl font-semibold text-white">Contact</li>
          <li className="text-xl font-semibold text-white">Party/Event</li>
        </div>
        <button className="flex flex-row items-center gap-2 px-3 py-2 border-2 border-white/20 rounded-lg bg-[#4E035A]">
            <RiWhatsappFill className="text-2xl text-white" />
          <span className="text-xl font-medium text-white">Party Booking</span>
        </button>
      </div>
    </div>
  );
};