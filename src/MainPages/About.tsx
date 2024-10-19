// About.tsx
import React from 'react';
import HeroSection from '../PageComponents/AboutComponents/HeroSection';
import MissionSection from '../PageComponents/AboutComponents/MissionSection';
import CTA2 from '../PageComponents/Universal/CTA2';
// import ValuesSection from '../PageComponents/AboutComponents/ValuesSection';
// import Pricing from '../PageComponents/HomeComponents/Pricing';

export default function About() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <main className="isolate">
        <MissionSection />
        <HeroSection />
        <CTA2 />
        {/* <ValuesSection /> */}
        {/* <Pricing /> */}
      </main> 
    </div>
  );
}
