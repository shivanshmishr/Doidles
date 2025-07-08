import Image from "next/image";

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
    </div>
  );
};