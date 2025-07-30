"use client";
import React from "react";
import Image from "next/image";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export const Footer = () => {
  return (
    <div className="w-[90%] mx-auto">

      {/* Brand Logo */}
      <div>
        <Image
          width={300}
          height={200}
          src="/images/logo.png"
          alt="doodle"
          className="w-auto h-20 object-contain"
        />
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 justify-end gap-6 mt-10">
        <div className="flex flex-col pb-10 items-center md:border-r-2 border-white/20">
          <h1 className="text-xl font-semibold my-4">Quick Links</h1>
          <ul className="space-y-2 flex flex-col justify-center items-center md:items-start md:ml-10">
            <li className="text-md text-white/80">About Us</li>
            <li className="text-md text-white/80">Game</li>
            <li className="text-md text-white/80">Party/Event</li>
            <li className="text-md text-white/80">Contact</li>
          </ul>
        </div>
        <div className="flex flex-col pb-10 items-center md:border-r-2 border-white/20">
          <h1 className="text-xl font-semibold my-4">Our Offering</h1>
          <ul className="space-y-2 flex flex-col justify-center items-center md:items-start md:ml-10">
            <li className="text-md text-white/80">Games</li>
            <li className="text-md text-white/80">Events</li>
            <li className="text-md text-white/80">Party Bookings</li>
            <li className="text-md text-white/80">Offers</li>
          </ul>
        </div>
        <div className="flex flex-col pb-10 items-center">
          <h1 className="text-xl font-semibold my-4">Contact Us</h1>
          <div className="md:px-10 flex flex-col space-y-2">
            <p className="text-lg font-semibold my-1">Address</p>
            <p className="text-md text-center md:text-left font-normal text-white/90">
               Doodlesdodling Entertainment Private Limited, Teloz Spaces, 12A, 3rd Floor, Techniplex - II, Off, Veer Savarkar Flyover, Goregaon West, Mumbai, Maharashtra 400062
            </p>
            <p>
              <IoCall className="inline-block mr-2" />
              +91 85700 83809
            </p>
            <p>
              <IoMdMail className="inline-block mr-2" />
              info@doodlesdodling.com
            </p>
          </div>
        </div>
      </div>

      {/* Social Media Handles */}
      <div>
        <h1 className="text-xl font-semibold text-center">Social Media</h1>
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center space-x-4 mt-4">
            <a
              href="https://wa.me/918570083809"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoWhatsapp className="text-2xl hover:scale-110 transition-all" />
            </a>
            <a
              href=" https://www.instagram.com/doodles.india/?next=%2F"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiInstagramFill className="text-2xl hover:scale-110 transition-all" />
            </a>
            <a
              href="https://linktr.ee/DoodlesDodling"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoLinkedin className="text-2xl hover:scale-110 transition-all" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61556630883390"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-2xl hover:scale-110 transition-all" />
            </a>
          </div>
        </div>
      </div>
      <hr className="border-white/50 mt-10" />
      <p className="text-xs md:text-sm text-center my-3">© 2025 DoodlesDodling Entertainment Private Limited. All Rights Reserved.</p>
    </div>
  );
};