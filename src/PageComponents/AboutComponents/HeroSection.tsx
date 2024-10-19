import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';

export default function Example() {
  return (
    <div className="relative overflow-hidden bg-gray-100 py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="text-lg font-semibold leading-8 tracking-tight text-brandBlue">Why We Don’t Use Web Builders</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Your Business Deserves Better
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-700">
            Tools like Wix or Squarespace might seem tempting with their quick results, but they offer a one-size-fits-all approach. Serino custom builds everything so it works best for your trade, ensuring long-term value.
          </p>
        </div>

        {/* Content Area */}
        <div className="mt-14 grid max-w-none lg:grid-cols-12 lg:gap-12 lg:mt-10">
          {/* Quote Block */}
          <div className="relative lg:order-last lg:col-span-5">
            <figure className="border-l border-brandOrange pl-8">
              <blockquote className="text-xl font-normal italic text-gray-900">
                <p>
                  “Serino took my basic Squarespace website and turned it into a high-performing custom platform. 
                  I went from struggling with slow load times to having a site that loads instantly and looks amazing. 
                  The improvement in leads was immediate.”
                </p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-x-4">
                <div>
                  <div className="font-semibold text-gray-900">George Anoff</div>
                  <div className="text-gray-600">Sampson N CO</div>
                </div>
              </figcaption>
            </figure>
          </div>

          {/* Features List */}
          <div className="lg:col-span-7 text-base leading-7 text-gray-700">
            <p>Here’s why custom-built sites always beat DIY platforms:</p>
            <ul className="mt-6 space-y-6 text-gray-600">
              <li className="flex gap-x-3">
                <CloudArrowUpIcon className="mt-1 h-6 w-6 text-brandBlue animate-pulse" />
                <span>
                  <strong className="font-semibold text-gray-900">Tailored to Your Business.</strong> Custom websites are like getting a tailored suit—they’re made to fit your business perfectly, with no off-the-shelf solutions.
                </span>
              </li>
              <li className="flex gap-x-3">
                <LockClosedIcon className="mt-1 h-6 w-6 text-brandBlue animate-bounce" />
                <span>
                  <strong className="font-semibold text-gray-900">Speed & Reliability.</strong> Optimised for speed and reliability, ensuring your site runs smoothly across devices, unlike clunky template-based sites.
                </span>
              </li>
              <li className="flex gap-x-3">
                <ServerIcon className="mt-1 h-6 w-6 text-brandBlue animate-spin-slow" />
                <span>
                  <strong className="font-semibold text-gray-900">Built to Grow.</strong> We build sites that scale with your business. Web builders struggle to handle growth, making it harder to add new features as you expand.
                </span>
              </li>
            </ul>
            <p className="mt-8">
              Our focus is on delivering fast, responsive, and visually stunning websites that give your business the tools it needs to thrive online.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
