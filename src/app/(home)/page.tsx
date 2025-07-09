import Image from "next/image";
import { AboutSection } from "@/components/home/AboutSection";
import { OurOfferings } from "@/components/home/OurOfferings";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Image
        src="/images/herovideo.gif"
        width={1920}
        height={1080}
        alt="Hero Video"
        className="w-full h-auto max-h-[90vh] object-cover"
      />

      {/* About Us Section */}
      <AboutSection />

      {/* Our Offerings Section */}
      <OurOfferings />
    </div>
  );
};