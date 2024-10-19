import { ChatBubbleOvalLeftEllipsisIcon, HeartIcon, TrashIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Web Accessibility',
    description:
      'We keep your site compliant and accessible, making sure it works for everyone, including users with screen readers.',
    icon: ChatBubbleOvalLeftEllipsisIcon,
  },
  {
    name: 'Search Engine Updates',
    description:
      'We ensure your site meets Google’s latest guidelines so you stay visible and attract more traffic.',
    icon: TrashIcon,
  },
  {
    name: 'Google Business Profile',
    description:
      'We optimise your Google profile to give your business the strongest online presence possible.',
    icon: HeartIcon,
  },
];

export default function ServiceBottom() {
  return (
    <section className="bg-gray-100 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Headline Section */}
        <div className="text-center mb-16">
          <h2 className="relative text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl inline-block">
            Lifetime Updates for Your Website
          </h2>
          <p className="mt-8 text-lg leading-8 text-gray-600">
            We’re committed to keeping your website up to date, both in design and performance.
          </p>
        </div>

        {/* Features Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 h-auto"
            >
              <div className="mb-4">
                <div className="text-brandOrange h-12 w-12 flex items-center justify-center bg-gray-200 rounded-full">
                  <feature.icon className="h-6 w-6 text-brandOrange" aria-hidden="true" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-brandBlue mb-2">
                {feature.name}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Call to action button */}
        <div className="text-center mt-16">
          <a
            href="/contact"
            className="inline-block bg-brandOrange hover:bg-brandOrange-dark text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
          >
            Keep Your Website Fresh
          </a>
        </div>
      </div>
    </section>
  );
}
