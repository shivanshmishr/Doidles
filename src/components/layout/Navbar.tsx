"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { RiWhatsappFill } from "react-icons/ri";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="">
      <div className="w-[95%] py-1 mx-auto flex flex-row justify-between items-center ">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={300}
          height={300}
          className="w-auto h-16 object-contain"
        />

        <div className="flex flex-row gap-10">
          <Link href="/">
            <li className="text-xl font-semibold cursor-pointer hover:scale-110 hover:underline transition-all">
              Home
            </li>
          </Link>

          <Link href="/games">
            <li className="text-xl font-semibold cursor-pointer hover:scale-110 hover:underline transition-all">
              Games
            </li>
          </Link>

          <Link href="/location">
            <li className="text-xl font-semibold cursor-pointer hover:scale-110 hover:underline transition-all">
              Location
            </li>
          </Link>

          <Link href="/contact">
            <li className="text-xl font-semibold cursor-pointer hover:scale-110 hover:underline transition-all">
              Contact
            </li>
          </Link>

          <Link href="/party-event">
            <li className="text-xl font-semibold cursor-pointer hover:scale-110 hover:underline transition-all">
              Party/Event
            </li>
          </Link>

          <Link href="/our-team">
            <li className="text-xl font-semibold cursor-pointer hover:scale-110 hover:underline transition-all">
              Our Team
            </li>
          </Link>

        </div>

        <button className="flex flex-row items-center gap-2 px-3 py-1 border-2 border-white/20 rounded-xl bg-[#4E035A] hover:scale-110 cursor-pointer transition-all duration-300">
          <RiWhatsappFill className="text-xl " />
          <span className="text-md font-medium ">Party Booking</span>
        </button>

      </div>
    </div>
  );
};