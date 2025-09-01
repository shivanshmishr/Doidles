"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function StatesCentersFlow() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [expanded, setExpanded] = useState<number | null>(null);

    const states = [
        {
            image: "/maharashtra.png",
            name: "Maharashtra",
            preview: "Multi-location network",
            count: 3,
            centers: ["Mumbai", "Ambe Jogai", "Akola"],
        },
        {
            image: "/telengana.png",
            name: "Telangana",
            preview: "Metropolitan coverage",
            count: 1,
            centers: ["Hyderabad Center"],
        },
        {
            image: "/haryana.png",
            name: "Haryana",
            preview: "Strategic location",
            count: 1,
            centers: ["Gurugram Center"],
        },
        {
            image: "/punjab.png",
            name: "Punjab",
            preview: "Expanding presence",
            count: 3,
            centers: ["Patiala", "Sirhind", "Ambala"],
        },
    ];

    return (
        <section
            ref={sectionRef}
            className="network-section relative min-h-screen bg-black text-white overflow-hidden py-20"
        >
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-purple-600 bg-clip-text text-transparent animate-pulse drop-shadow-lg">
                        Upcoming Location
                    </h2>
                    <p className="uppercase tracking-[3px] text-gray-400 mt-4">
                        States & Centers
                    </p>
                </div>

                <div className="relative flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-6">
                    {states.map((state, i) => (
                        <div
                            key={i}
                            className="relative flex flex-col items-center opacity-0 translate-y-12 animate-slideIn"
                            style={{ animationDelay: `${i * 200}ms` }}
                            onClick={() => setExpanded(expanded === i ? null : i)} // toggle on click
                        >
                            <div className="relative w-50 h-50 rounded-full bg-gradient-to-br from-purple-600/90 to-gray-900 border border-purple-600/30 flex flex-col items-center justify-center shadow-lg hover:scale-105 hover:-translate-y-2 transition-all duration-500 cursor-pointer overflow-hidden">
                                <Image
                                    src={state.image}
                                    alt={state.name}
                                    width={208}
                                    height={208}
                                    className="rounded-full object-cover w-full h-full"
                                />
                            </div>

                            <h3 className="text-lg font-bold mt-4">{state.name}</h3>
                            <p className="text-purple-300 text-sm text-center">{state.preview}</p>
                            <div className="mt-2 text-xs px-3 py-1 rounded-full bg-purple-600/20 border border-purple-600/40">
                                {state.count} {state.count > 1 ? "Centers" : "Center"}
                            </div>

                            {/* Expandable Centers */}
                            <div
                                className={`mt-6 w-64 bg-black/90 border border-purple-600/30 rounded-2xl px-4 overflow-hidden backdrop-blur-lg shadow-xl transition-all duration-500 
                ${expanded === i ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
                            >
                                {state.centers.map((center, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center border-b border-purple-600/20 last:border-0 py-2 hover:text-purple-300 transition-all"
                                    >
                                        <div className="w-2 h-2 bg-purple-600 rounded-full mr-3 animate-ping"></div>
                                        {center}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style>
                {`
          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.3; }
            50% { transform: translateY(-30px) rotate(180deg); opacity: 0.8; }
          }
          .animate-float { animation: float 8s ease-in-out infinite; }
          .animate-spin-slow { animation: spin 4s linear infinite; }
          @keyframes slideIn {
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-slideIn { animation: slideIn 0.8s ease-out forwards; }
          @keyframes particle {
            0% { transform: translateY(0) scale(0); opacity: 1; }
            50% { transform: translateY(-50vh) scale(1); opacity: 0.8; }
            100% { transform: translateY(-100vh) scale(0); opacity: 0; }
          }
          .animate-particle { animation: particle 4s linear infinite; }
        `}
            </style>
        </section>
    );
}
