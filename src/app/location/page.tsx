"use client";
import React, { useState, useEffect } from 'react';
import LocationHeroSection from '@/components/locations/LocationHeroSection';
import AnimatedLocations from '@/components/locations/UpcomingLocation';

const LocationPage = () => {
  return (
    <div>
      <LocationHeroSection />
      <AnimatedLocations/>
    </div>
  );
};

export default LocationPage;