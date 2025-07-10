import Image from "next/image";
import { HomeHeroSection } from "@/components/home/HomeHeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { OurOfferings } from "@/components/home/OurOfferings";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}  
      <HomeHeroSection />

      {/* About Us Section */}
      <AboutSection />

      {/* Our Offerings Section */}
      <OurOfferings />
    </div>
  );
};