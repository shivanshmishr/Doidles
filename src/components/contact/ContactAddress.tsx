"use client";
import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const locations = [
  {
    id: 1,
    city: "Hisar, Haryana",
    address: "Red Square Market, Haryana 125001",
    phone: "+91- XXXXXXX793",
  },
  {
    id: 2,
    city: "Kullu, Himachal Pradesh",
    address: "Inter State Bus Terminal, Bus Stand Rd, Sarvari, Kullu, Himachal Pradesh 175101",
    phone: "+91- XXXXXXX793",
  },
  {
    id: 3,
    city: "Coimbatore, Tamil Nadu",
    address:
      "Sri Hari Mills, SRK Miraj cinemas, Kamachipuram, Coimbatore, Tamil Nadu 641016",
    phone: "+91- XXXXXXX793",
  },
  {
    id: 4,
    city: "Calicut, Kerala",
    address:
      "1526/63, Mavoor Rd, opposite New Bus Stand, Arayidathupalam, Kozhikode, Kerala 673004",
    phone: "+91- XXXXXXX793",
  },
];

export const ContactAddress = () => {
  return (
    <div className="flex flex-col items-center space-y-5 gap-6 py-12 px-4">
      {locations.map((location) => (
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
      ))}
    </div>
  );
};
