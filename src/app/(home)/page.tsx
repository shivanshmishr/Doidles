"use client";
import { useEffect, useState } from "react";
import { HomeHeroSection } from "@/components/home/HomeHeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import PartySectionAnimation from "@/components/home/PartySectionAnimation";
import { OurOfferings } from "@/components/home/OurOfferings";
import { TestimonialSection } from "@/components/home/TestimonialSection";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Wait until everything (images, videos, fonts) is fully loaded
    const handleLoad = () => setLoading(false);

    if (document.readyState === "complete") {
      // Page already loaded
      setLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (loading) {
    // Loader UI
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <HomeHeroSection />

      {/* About Us Section */}
      <AboutSection />

      {/* Party Section */}
      <PartySectionAnimation />

      {/* Our Offerings Section */}
      <OurOfferings />

      {/* Testimonial Section */}
      <TestimonialSection />
    </div>
  );
}
