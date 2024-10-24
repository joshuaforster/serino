import React from 'react';

export default function CTA2() {
  return (
    <section className="bg-white dark:bg-gray-900 pt-16 h-screen flex items-center justify-center">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 w-full">
        <div className="relative isolate overflow-hidden bg-brandBlue px-6 pt-16 pb-16 shadow-2xl sm:px-16 md:pt-24 lg:px-24">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#2463EB" />
                <stop offset={1} stopColor="#2463EB" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center z-1000">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
              Simple, Clean, and Fast Websites Coded Just for Your Business
            </h2>
            <p className="mt-6 text-lg leading-8 text-white dark:text-white">
              We specialise in custom websites that focus on simplicity, speed, and functionality. No gimmicks—just quality code.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="bg-white dark:bg-gray-800 px-3.5 py-2.5 text-sm font-semibold text-gray-900 dark:text-white shadow-sm hover:bg-gray-100 dark:hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Contact Us
              </a>
              <a href="/services" className="text-sm font-semibold leading-6 text-white">
                Services <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
