import { InboxIcon, EnvelopeIcon, VideoCameraIcon, DevicePhoneMobileIcon, ShieldCheckIcon, CloudIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'No upfront costs',
    description: 'Get your website up and running with zero upfront payment. You just pay £200 per month—like renting a prime digital storefront.',
    icon: InboxIcon,
  },
  {
    name: 'Unlimited updates, hassle-free',
    description: 'Need something changed? Fire us an email, and we’ll get it sorted. No hassle, no waiting around—just results.',
    icon: EnvelopeIcon,
  },
  {
    name: '24/7 email support',
    description: 'Got a question? Send us an email any time, day or night. No phone queues or support scripts—just direct, personal help.',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'Meet over Zoom or in-person',
    description: 'We’re more than happy to jump on a Zoom call to talk through your site, or if you’re local, let’s grab a coffee and chat face-to-face.',
    icon: VideoCameraIcon,
  },
  {
    name: 'No WordPress headaches',
    description: 'Unlike WordPress or Squarespace, our sites have no messy plugins or constant updates. Just smooth, reliable performance.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Hosting included',
    description: 'We’ll host your site on fast, secure servers—all built into the monthly fee. No extra charges or surprises.',
    icon: CloudIcon,
  },
];

export default function Example() {
  return (
    <div className="bg-brandBlue py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-brandOrange sm:text-4xl">
            Why Choose Us
          </h2>
          <p className="mt-6 text-lg leading-8 text-white">
          We build custom websites for tradespeople. They include all the tools and support you need to grow your business.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="flex flex-col border-2 border-white p-6 hover:bg-opacity-80 hover:border-gray-300 bg-gray-800 hover:bg-gray-700 transition-all duration-300"
              >
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center bg-brandOrange">
                    <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-white">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
