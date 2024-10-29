import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Button from '../../CustomComponents/buttons';

const videos = [
  '/images/4702559-hd_1920_1080_24fps.mp4',
  '/images/5554470-hd_1280_720_24fps.mp4',
  '/images/coverr-backyard-gardening-8168-1080p.mp4',
];

export default function Hero() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 15000); // Switch video every 15 seconds

    return () => clearInterval(intervalId);
  }, []);

  const { ref: headerRef } = useInView({ triggerOnce: true });
  const { ref: paragraphRef } = useInView({ triggerOnce: true });

  return (
    <div className="relative isolate overflow-hidden h-[90vh] pt-12 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
      {/* Background Video */}
      <div className="absolute inset-0 -z-10 w-full h-full">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={videos[currentVideoIndex]} // Dynamic video source
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      <div className="w-full px-4 lg:px-6 max-w-screen-xl mx-auto flex items-start justify-start mt-8">
        {/* Text with Black Background Box */}
        <div className="max-w-2xl lg:max-w-xl text-left bg-black bg-opacity-0 p-6">
          <p
            ref={paragraphRef}
            className="mt-6 text-lg leading-8 text-white"
            style={{
              textShadow: '2px 2px 4px rgba(0, 0, 0, 1)',
              lineHeight: '2',
            }}
          >
            Websites Built for Tradespeople
          </p>
          <h1
            ref={headerRef}
            className="text-5xl font-bold font-oswald text-white"
            style={{
              textShadow: '2px 2px 4px rgba(0, 0, 0, 1)',
              lineHeight: '1.5',
            }}
          >
            Get a Website that Works for Your Trade
          </h1>
          <p className="mt-6 text-lg tracking-tight font-workSans text-white" style={{ lineHeight: '2' }}>
            Forget the DIY headaches. We build high-performing, custom websites for £200/month. They're designed to win you more clients and make your life easier.
          </p>
          <div className="mt-10 flex items-start font-bold gap-x-6">
            <Button className='text-brandBlue' variant="primary" to="/contact" aria-label="Contact us">
              Get A Free Consultation
            </Button>
            <Button variant="secondary" to="/services" aria-label="Find Out More">
              View Our Services <span aria-hidden="true">→</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile and tablet */}
      <div className="hidden lg:flex absolute bottom-6 flex-col items-center w-full">
        <div className="mouse-scroll">
          <div className="mouse">
            <span className="scroll"></span>
          </div>
        </div>
        <p className="text-white mt-4 text-lg">Scroll Down To Learn More</p>
      </div>

      <style>
        {`
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeInUp {
            animation: fadeInUp 2s ease-in-out forwards;
          }

          /* Mouse Scroll Animation */
          .mouse-scroll {
            width: 35px;
            height: 55px;
            border-radius: 25px;
            border: 2px solid white;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .mouse .scroll {
            display: block;
            width: 5px;
            height: 10px;
            border-radius: 5px;
            background-color: white;
            position: relative;
            top: -6px;
            animation: scroll 2s infinite;
          }

          @keyframes scroll {
            0% {
              top: -6px;
              opacity: 1;
            }
            100% {
              top: 10px;
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
}
