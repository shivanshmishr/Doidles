"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

export const PartyHeader = () => {

  const birthdayBooking = [
    { id: 1, img: "/partevents/img1.jpg" },
    { id: 2, img: "/partevents/img2.jpg" },
    { id: 3, img: "/partevents/img3.jpg" },
    { id: 4, img: "/partevents/img4.jpg" },
    { id: 5, img: "/partevents/img5.jpg" }
  ];

  const schoolPicnic = [
    { id: 1, img: "/schoolpic/img1.jpg" },
    { id: 2, img: "/schoolpic/img2.jpg" },
    { id: 3, img: "/schoolpic/img3.jpg" },
    { id: 4, img: "/schoolpic/img4.jpg" },
    { id: 5, img: "/schoolpic/img5.jpg" },
  ];

  return (
    <div className="min-h-screen bg-black px-4 py-12">
      <h1 className="gamingFont text-[#4E035A] text-4xl text-center font-extrabold mb-12">
        Party / Event
      </h1>

      {/* Birthday Booking */}
      <h2 className="text-white text-3xl text-center font-extrabold mb-6">
        Birthday Booking
      </h2>
      <Marquee pauseOnHover speed={50} gradient={false}>
        {birthdayBooking.map((item) => (
          <div
            key={item.id}
            className="inline-block mx-4 my-2 w-40 h-40 md:h-[40vh] md:w-[40vh] rounded-lg shadow-[0_0_20px_#8e2de2] overflow-hidden"
          >
            <Image
              src={item.img}
              alt={`birthday-${item.id}`}
              width={500}
              height={500}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </Marquee>

      {/* School Picnic */}
      <h2 className="text-white text-3xl text-center font-extrabold mt-16 mb-6">
        School Picnic
      </h2>
      <Marquee pauseOnHover speed={50} gradient={false} direction="right">
        {schoolPicnic.map((item) => (
          <div
            key={item.id}
            className="inline-block mx-4 my-2 w-40 h-40 md:h-[40vh] md:w-[40vh] rounded-lg shadow-[0_0_20px_#8e2de2] overflow-hidden"
          >
            <Image
              src={item.img}
              alt={`picnic-${item.id}`}
              width={500}
              height={500}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};