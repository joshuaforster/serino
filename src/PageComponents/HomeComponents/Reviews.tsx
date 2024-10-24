import { BoltIcon, ChartBarIcon, DevicePhoneMobileIcon } from '@heroicons/react/20/solid';

export default function PerformanceSection() {



  return (
    <section id="performance-section" className="bg-gray-100 text-gray-900 py-16">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="lg:max-w-full grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-lg font-semibold uppercase text-brandOrange text-left">Performance</h2>
            <h1 className="text-4xl font-bold my-4 text-left">
              We Build <span className="text-brandBlue">Better</span> Websites That Perform
            </h1>
            <p className="text-lg mb-6 text-left">
            When it comes to website load times, we strive to produce the shortest load times possible. 
            </p>
            <div className="space-y-6 text-left">
              <div className="flex items-center space-x-4">
                <BoltIcon
                  className='mt-1 h-6 w-6 text-brandBlue'
                />
                <p>Better load times mean more traffic and higher conversion rates over time.</p>
              </div>
              <div className="flex items-center space-x-4">
                <ChartBarIcon className='mt-1 h-6 w-6 text-brandBlue'
                />
                <p>Faster websites improve SEO and can enhance Google Ads performance.</p>
              </div>
              <div className="flex items-center space-x-4">
                <DevicePhoneMobileIcon className='mt-1 h-6 w-6 text-brandBlue'/>
                <p>We strive to make our sites load in under 1 second, improving user experience and conversions.</p>
              </div>
            </div>

            {/* <div className="flex flex-col lg:flex-row mt-8 lg:space-x-8 text-left">
              <div className="flex flex-col items-start space-y-2">
                <p className="text-5xl font-bold text-brandOrange">100%</p>
                <p className="text-sm">Satisfaction Guaranteed</p>
              </div>
              <div className="flex flex-col items-start space-y-2">
                <p className="text-5xl font-bold text-brandOrange">100</p>
                <p className="text-sm">Page Speed Scores</p>
              </div>
              <div className="flex flex-col items-start space-y-2">
                <p className="text-5xl font-bold text-brandOrange">5/5</p>
                <p className="text-sm">Google Reviews</p>
              </div>
            </div> */}

            <a href="/get-started" className="mt-8 inline-block bg-brandOrange text-brandBlue font-bold py-3 px-6 rounded-sm hover:bg-opacity-90 text-left">
              Get Started Today
            </a>
          </div>

          {/* Right side - Review from David Forster */}
          <div className="lg:col-span-5 mt-12 lg:mt-0 lg:pl-8">
            <figure className="border-l border-brandOrange pl-8">
              <blockquote className="text-xl italic font-normal text-gray-900">
                <p>
                  “Serino completely transformed our website. As a window cleaning service, we never thought having a custom-built 
                  website would make such a difference. Our clients find us easier, our leads increased, and the overall experience 
                  is miles better than our old site.”
                </p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-x-4">
                <div>
                  <div className="font-semibold text-gray-900">David Forster</div>
                  <div className="text-gray-600">AD Forster Window Cleaning</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
