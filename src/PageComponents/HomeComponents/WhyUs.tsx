import { useState, useEffect } from 'react';
import { DevicePhoneMobileIcon, DeviceTabletIcon, ChartBarIcon } from '@heroicons/react/20/solid';

// Array of images for automatic transition
const images = [
  '/images/adforsterhome.png',
  '/images/lamberthome.png',
  '/images/sampsonhome.png',
];

const features = [
  {
    name: 'Mobile-first design',
    description:
      'We build your site with mobile users in mind first, ensuring it looks and works great on smartphones before scaling up to tablets and desktops.',
    icon: DevicePhoneMobileIcon,
    link: '/blog/2hC0yHxxZagPzxZGZ94hlZ',
  },
  {
    name: 'Fully responsive',
    description: 'Your website will adapt to any screen size: mobile, tablet, or desktop. Your customers can reach you wherever they are.',
    icon: DeviceTabletIcon,
    link: '/blog/2hC0yHxxZagPzxZGZ94hlZ',
  },
  {
    name: 'Optimised page speed',
    description: 'Over half of web traffic is from mobile. We ensure your site performs well on search engines, especially on mobile.',
    icon: ChartBarIcon,
    link: '/blog/7vMKPERij8LRfXOF5fnmr3',
  },
];

export default function Example() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  // Automatically switch images every 3 seconds (3000 milliseconds)
  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out before switching images
      setIsFading(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsFading(false);
      }, 500); // Set fade duration (in milliseconds)
    }, 3000); // Change the time (in milliseconds) to adjust the speed

    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  return (
    <div className="bg-brandBlue py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main Section with headline, subtext, and image side by side */}
        <div className="flex flex-col lg:flex-row lg:space-x-12">
          {/* Text Section */}
          <div className="lg:w-1/2">
            <h2 className="text-base font-semibold leading-7 text-brandOrange">Websites built for your trade</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
               Let your website work for you
            </p>
            <p className="mt-6 text-lg leading-8 text-white">
              We create custom-built websites for tradespeople across the UK. Sure, we cost more than a DIY web builder. But here’s why, our websites are hand-coded, built for speed and performance, and managed for you. No templates. No DIY hassle. Just a professional, results-driven website that helps your business thrive.
            </p>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 flex justify-center items-center lg:justify-end">
            <img
              alt="Product screenshot"
              src={images[currentImageIndex]} // Use the current image index to show the current image
              className={`w-full max-h-[500px] object-contain transition-opacity duration-1000 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 grid grid-cols-1 gap-y-10 sm:gap-y-20 lg:grid-cols-3 lg:gap-x-8">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="flex flex-col gap-y-4 border border-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-800 hover:bg-gray-700"
            >
              <div className="flex h-12 w-12 items-center justify-center bg-brandOrange">
                <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
              </div>
              <div className="text-base leading-7">
                <h3 className="font-semibold text-white">{feature.name}</h3>
                <p className="mt-2 text-gray-300">{feature.description}</p>
                <div className="mt-4">
                  <a href={feature.link} className="text-brandOrange font-semibold hover:underline">
                    Learn More &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
