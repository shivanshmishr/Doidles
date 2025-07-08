"use client";
import React from "react";
import { HeroSection } from "@/components/party-events/HeroSection";
import { PartyContents } from "../../components/party-events/PartyContents";

const PartyEvents = () => {
  return (
    <div className="">
      <section className="relative">
        <HeroSection />
      </section>
      <section className="relative">
        <PartyContents />
      </section>
    </div>
  );
};

export default PartyEvents;
