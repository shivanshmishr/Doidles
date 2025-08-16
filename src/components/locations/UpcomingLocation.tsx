"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { Focus } from "lucide-react";
import { RiFocus2Fill } from "react-icons/ri";

const UpcomingLocationSection = () => {
  const locations = [
    {
      state: "Maharashtra",
      cities: ["Mumbai", "Ambe Jogai", "Akola"],
      color: "from-purple-600 to-purple-400"
    },
    {
      state: "Telangana", 
      cities: ["Hyderabad"],
      color: "from-purple-600 to-purple-400"
    },
    {
      state: "Haryana",
      cities: ["Gurugram"],
      color: "from-purple-600 to-purple-400"
    },
    {
      state: "Punjab",
      cities: ["Patiala", "Sirhind", "Ambala"],
      color: "from-purple-600 to-purple-400"
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const lineVariants: Variants = {
    hidden: { scaleX: 0 },
    visible: { 
      scaleX: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="bg-black text-white py-10 px-4 relative overflow-hidden">
      <motion.h2 
        className="text-3xl text-center md:text-4xl font-semibold mb-16"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Upcoming location
      </motion.h2>

      {/* Desktop Horizontal Timeline */}
      <div className="hidden lg:block max-w-6xl mx-auto">
        <div className="relative">
          {/* Horizontal Line */}
          <motion.div 
            className="absolute top-2 left-0 right-0 h-0.5 bg-white/50 origin-left"
            variants={lineVariants}
            initial="hidden"
            animate="visible"
          />
          
          {/* Timeline Items */}
          <motion.div 
            className="flex justify-between items-start relative"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {locations.map((location, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center relative"
                variants={itemVariants}
              >
                {/* Focus Icon */}
                <div className="w-6 h-6 mb-6 relative z-10 flex items-center justify-center">
                  <RiFocus2Fill className="w-6 h-6 text-purple-400" />
                </div>
                
                {/* Location Card */}
                <div className="bg-white/10 backdrop-blur-sm border border-gray-700 rounded-xl p-6 min-w-[200px] hover:border-purple-500 transition-colors duration-300">
                  <h3 className="text-purple-400 text-2xl font-semibold mb-3 text-center">
                    {location.state}
                  </h3>
                  <div className="space-y-2">
                    {location.cities.map((city, cityIndex) => (
                      <div key={cityIndex} className="text-white text-center text-md">
                        {city}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile/Tablet Vertical Timeline */}
      <div className="block lg:hidden max-w-md mx-auto">
        <div className="relative">
          {/* Vertical Line */}
          <motion.div 
            className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-purple-400 origin-top"
            variants={lineVariants}
            initial="hidden"
            animate="visible"
          />
          
          {/* Timeline Items */}
          <motion.div 
            className="space-y-8 relative"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {locations.map((location, index) => (
              <motion.div
                key={index}
                className="flex items-center relative"
                variants={itemVariants}
              >
                {/* Focus Icon */}
                <div className="w-6 h-6 relative z-10 mr-6 flex items-center justify-center">
                  <Focus className="w-6 h-6 text-purple-400" />
                </div>
                
                {/* Location Card */}
                <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-4 flex-1 hover:border-purple-500 transition-colors duration-300">
                  <h3 className="text-purple-400 text-lg font-semibold mb-2">
                    {location.state}
                  </h3>
                  <div className="space-y-1">
                    {location.cities.map((city, cityIndex) => (
                      <div key={cityIndex} className="text-white text-sm">
                        {city}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-purple-600 rounded-full blur-2xl" />
      </div>
    </div>
  );
};

export default UpcomingLocationSection;