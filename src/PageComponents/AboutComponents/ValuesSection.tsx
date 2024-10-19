import React from 'react';
import { LifebuoyIcon, NewspaperIcon, PhoneIcon, DevicePhoneMobileIcon, ArrowPathIcon } from '@heroicons/react/20/solid';

export default function ValuesSection() {
  const values = [
    {
      name: 'Tailored Solutions',
      description: "We build every website from the ground up. This meets your needs and reflects your brand's uniqueness.",
      icon: NewspaperIcon,
    },
    {
      name: 'Reliable Performance',
      description: 'We ensure your website works well on all devices. It will load fast and provide a smooth user experience.',
      icon: PhoneIcon,
    },
    {
      name: 'SEO Best Practices',
      description: 'We build our websites with SEO in mind. It boosts visibility and attracts organic traffic to your business.',
      icon: LifebuoyIcon,
    },
    {
      name: 'Responsive Design',
      description: 'We prioritise mobile-first design. It ensures your website works well on smartphones, tablets, and desktops.',
      icon: DevicePhoneMobileIcon,
    },
    {
      name: 'Future-Proofed',
      description: 'We design our websites to evolve with your business. This allows for easy additions and updates without sacrificing performance.',
      icon: ArrowPathIcon,
    },
    {
      name: 'Dedicated Support',
      description: 'You get personalised support and responses from the lead developer to keep your site in the best condition.',
      icon: LifebuoyIcon,
    },
  ];

  return (
    <section className="bg-gray-100 py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Centered headline with a curvy underline */}
        <div className="text-center mb-16">
          <h2 className="relative text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl inline-block">
            Our Values
            {/* Curvy underline */}
            <div className="absolute bottom-[-12px] left-0 w-full h-1 bg-brandOrange rounded-full"></div>
          </h2>
          <p className="mt-8 text-lg leading-8 text-gray-600">
            Our core values guide us, ensuring we deliver the best possible service to our clients.
          </p>
        </div>

        {/* Value cards with varying heights */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 h-auto"
            >
              <div className="mb-4">
                <value.icon className="h-8 w-8 text-brandOrange" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-brandBlue mb-2">
                {value.name}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
