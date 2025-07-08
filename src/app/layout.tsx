import type { Metadata } from "next";
import { Comic_Neue, Audiowide } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const comic_neue = Comic_Neue({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-comic-neue",
});

const audiowide = Audiowide({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-audiowide",
});

export const metadata: Metadata = {
  title: "Doodles - The Gaming Zone",
  description:
    "At Doodles, we’re on a mission to create safe, hygienic, and immersive gaming experiences for everyone. With dedicated support and a passion for innovation, we bring cutting-edge entertainment to life. As one of India's pioneering gaming zones, we proudly support the Make in India initiative—spreading the joy of gaming across the nation, one zone at a time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${comic_neue.variable} ${audiowide.variable} antialiased`}>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
};