"use client";
import React from 'react';
import { HeroSection } from "@/components/games/HeroSection";
import { PartyContents } from "@/components/games/PartyContents";

const GamesPage = () => {
  return (
    <div className="">
          <section className="relative">
            <HeroSection />
          </section>
          <section className="relative">
            <PartyContents />
          </section>
        </div>
  )
};

export default GamesPage;