import React, { useEffect, useState, useRef } from 'react';

const logos = [
  "images/logos/[removal.ai]_cf4611e9-5a39-49b2-9fef-23de702a2fe5-logogrey-66a388691126f 1.png",
  "images/logos/image 23.png",
  "images/logos/image 26.png",
];

export default function Logo() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top } = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.9) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on initial render

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="bg-white transition-colors duration-500 border-t border-b border-gray-200">
      <div
        ref={sectionRef}
        className={`py-12 mx-auto max-w-screen-xl px-6 lg:px-8 transition-opacity duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          {/* Left Text */}
          <div className="col-span-2">
            <p className="text-xl font-semibold text-gray-900">
              Companies we work with
            </p>
          </div>

          {/* Right Logos */}
          <div className="col-span-3 grid grid-cols-3 gap-8 text-gray-500 sm:gap-12">
            {logos.map((logo, index) => (
              <div key={index} className="flex justify-center items-center">
                <picture>
                  <img
                    className="h-14 w-full max-w-xs object-contain"
                    src={logo}
                    loading="lazy"
                    alt={`Logo ${index + 1}`}
                  />
                </picture>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
