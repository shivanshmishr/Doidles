"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiWhatsappFill } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  Sheet,
  SheetHeader,
  SheetTitle,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export const Navbar = () => {
  return (
    <div className="z-40">
      <div className="w-[95%] py-1 mx-auto flex flex-row justify-between items-center">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={300}
            height={300}
            className="w-auto h-12 md:h-16 object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="md:flex md:flex-row gap-10 hidden">
          {[
            "/",
            "/games",
            "/location",
            "/contact",
            "/party-events",
            "/our-team",
          ].map((path, i) => (
            <Link key={i} href={path}>
              <li className="text-xl font-semibold list-none cursor-pointer hover:scale-110 hover:underline transition-all">
                {path === "/"
                  ? "Home"
                  : path
                    .replace("/", "")
                    .replace("-", " ")
                    .replace(/\b\w/g, (l) => l.toUpperCase())}
              </li>
            </Link>
          ))}
        </div>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/918879930979"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex flex-row items-center gap-2 px-3 py-1 border-2 border-white/20 rounded-xl bg-[#4E035A] hover:scale-110 cursor-pointer transition-all duration-300"
        >
          <RiWhatsappFill className="text-xl" />
          <span className="text-md font-medium">Party Booking</span>
        </a>


        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <button className="md:hidden">
              <RxHamburgerMenu className="text-white" size={30} />
            </button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-[80%] bg-black/80 backdrop-blur-2xl flex flex-col space-y-10 justify-center items-center"
          >
            <SheetHeader className="hidden">
              <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
            </SheetHeader>

            <div className="flex flex-col justify-center items-center space-y-6 mt-4 pl-4">
              {[
                "/",
                "/games",
                "/location",
                "/contact",
                "/party-events",
                "/our-team",
              ].map((path, i) => (
                <SheetClose asChild key={i}>
                  <Link href={path}>
                    <li className="text-2xl font-semibold list-none cursor-pointer hover:scale-110 hover:underline transition-all">
                      {path === "/"
                        ? "Home"
                        : path
                          .replace("/", "")
                          .replace("-", " ")
                          .replace(/\b\w/g, (l) => l.toUpperCase())}
                    </li>
                  </Link>
                </SheetClose>
              ))}
            </div>

            <hr className="border-white/20" />

            <SheetClose asChild>
              <a
                href="https://wa.me/918879930979"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit flex flex-row items-center gap-2 px-3 py-2 border-2 border-white/20 rounded-xl bg-[#4E035A] hover:scale-110 cursor-pointer transition-all duration-300"
              >
                <RiWhatsappFill className="text-xl" />
                <span className="text-md font-medium">Party Booking</span>
              </a>
            </SheetClose>

          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};
