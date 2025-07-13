import Image from "next/image";
import { HomeHeroSection } from "@/components/home/HomeHeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import PartySectionAnimation from "@/components/home/PartySectionAnimation";
import { OurOfferings } from "@/components/home/OurOfferings";
import { TestimonialSection } from "@/components/home/TestimonialSection";

export default function Home() {
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
};