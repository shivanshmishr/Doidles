"use client";
import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

const locations = [
  {
    id: 1,
    city: "Hisar, Haryana",
    address: "Ground and lower ground floor, Eminent Mall, Red Square Market, Mehta Nagar, Hisar, Haryana 125001.",
    phone: "+91- 85700 83809",
    link: "https://wa.me/918570083809"
  },
  {
    id: 2,
    city: " Sisra, Haryana",
    address:
      "Ground Floor, OHM Cine Garden and Shopping Complex, Fatehbad Road, NH9, Sirsa, Haryana 125055",
    phone: "+91- 85700 83809",
    link: "https://wa.me/918570083809"
  },
  {
    id: 3,
    city: "Kullu, Himachal Pradesh",
    address: "4th Floor, Kullu Central Mall, Inter-State Bus Terminal, Bus Stand Road, Sarvari, Kullu, Himachal Pradesh 175101",
    phone: "+91- 98054 79800",
    link: "https://wa.me/919805479800"
  },
  {
    id: 4,
    city: "Coimbatore, Tamil Nadu",
    address:
      "SRK Arcade, Kamakshipuram near Cambodia mills, Trichy road, Ondipudur post, Pallpalayam, Coimbatore, TN- 641016",
    phone: "+91- 96298 65168",
    link: "https://wa.me/919629865168"
  },
  {
    id: 5,
    city: "Calicut, Kerala",
    address:
      "2nd and 4th Floor, RP Blue Diamond Mall, Mavoor Rd, opposite New Bus Stand, Parayancheri, Kottooli, Kozhikode, Kerala 673004",
    phone: "+91- 89435 50691",
    link: "https://wa.me/918943550691"
  },

];

export const ContactAddress = () => {
  return (
    <div className="flex flex-col items-center space-y-5 gap-6 px-4">
      {locations.map((location) => (
        <Link href={location.link}>
          <div
            key={location.id}
            className="bg-[#111111] py-5 text-white p-5 rounded-lg w-full max-w-md shadow-[0_0_30px_#8e2de250]"
          >

            <div className="flex items-center gap-2 text-lg font-semibold mb-2">
              <FaMapMarkerAlt className="text-white" />
              <span className="underline underline-offset-4">{location.city}</span>
            </div>

            <p className="text-lg my-2">{location.address}</p>
            <div className="flex items-center gap-2 text-md">
              <FaPhoneAlt className="text-white" />
              <span>{location.phone}</span>
            </div>
          </div>

        </Link>
      ))}
    </div>

  );
};