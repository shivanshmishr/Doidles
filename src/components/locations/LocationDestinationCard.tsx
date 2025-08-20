// components/DestinationCard.tsx
import { MapPin } from "lucide-react";
import Image from "next/image";

interface DestinationCardProps {
    image: string;
    location: string;
    title: string;
}

export default function DestinationCard({ image, location, title }: DestinationCardProps) {
    return (
        <div className="bg-white/19 backdrop-blur-2xl rounded-xl overflow-hidden shadow-lg">
            {/* Image */}
            <Image 
                src={image} 
                alt={title} 
                width={500}
                height={400}
                className="w-full h-48 object-cover rounded-t-xl" 
                unoptimized
            />

            {/* Content */}
            <div className="p-4">
                <div className="flex items-center text-gray-400 text-sm mb-2">
                    <MapPin className="w-4 h-4 text-purple-500 mr-1" />
                    {location}
                </div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
            </div>
        </div>
    );
}
