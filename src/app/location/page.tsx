"use client";
import React, { useState, useEffect } from 'react';
import LocationHeroSection from '@/components/locations/LocationHeroSection';
import AnimatedLocations from '@/components/locations/UpcomingLocation';
import StatesCentersFlow from '@/components/locations/StatesCentersFlow';

const LocationPage = () => {
  return (
    <div>
      <LocationHeroSection />
      {/* <AnimatedLocations /> */}
      <StatesCentersFlow />
    </div>
  );
};

export default LocationPage;