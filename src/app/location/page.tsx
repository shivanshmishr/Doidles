"use client";
import React, { useState, useEffect } from 'react';
import LocationHeroSection from '@/components/locations/LocationHeroSection';
import UpcomingLocationSection from '@/components/locations/UpcomingLocation';

const LocationPage = () => {
  return (
    <div>
      <LocationHeroSection />
      <UpcomingLocationSection/>
    </div>
  );
};

export default LocationPage;