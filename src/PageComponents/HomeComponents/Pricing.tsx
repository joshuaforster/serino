import { CheckIcon, XCircleIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';

const features = [
  { feature: 'Custom-coded website', includedInMonthly: true, includedInUpfront: true },
  { feature: 'Unlimited website edits (Subscription Only)', includedInMonthly: true, includedInUpfront: false },
  { feature: 'Mobile-first design', includedInMonthly: true, includedInUpfront: true },
  { feature: 'Ongoing support (Subscription Only)', includedInMonthly: true, includedInUpfront: false },
  { feature: 'SEO optimisation', includedInMonthly: true, includedInUpfront: true },
  { feature: 'Custom project showcase', includedInMonthly: true, includedInUpfront: true },
  { feature: 'Fully managed updates (Subscription Only)', includedInMonthly: true, includedInUpfront: false },
  { feature: 'Website hosting included', includedInMonthly: true, includedInUpfront: false },
  { feature: 'Code ownership (One-Time Payment Only)', includedInMonthly: false, includedInUpfront: true },
];

const tiers = [
  {
    name: 'Monthly Subscription',
    id: 'tier-monthly',
    href: '/contact',
    priceMonthly: '£200',
    description: 'Start with £0 upfront and pay £200 per month with full website management, free updates, and hosting. Code managed by us (not transferable).',
    mostPopular: true,
  },
  {
    name: 'One-Time Payment + Hosting',
    id: 'tier-upfront',
    href: '/contact',
    priceUpfront: '£3,500',
    priceHosting: '£30',
    description: 'Pay £3,500 upfront and £30 per month for hosting. You own the code and can take it with you, but updates and support are billed separately.',
    mostPopular: false,
  },
];

function classNames(...classes: (string | undefined | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export default function Pricing() {
  return (
    <div className="bg-white dark:bg-gray-900 mt-20 py-24 transition-colors duration-500">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-brandOrange">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-brandBlue sm:text-5xl">
            Tailored Plans for Trades & Construction
          </p>
        </div>

        {/* Centering the pricing table */}
        <div className="mx-auto mt-16 grid max-w-md lg:max-w-3xl xl:max-w-5xl grid-cols-1 gap-y-8 gap-x-8 sm:mt-20 lg:grid-cols-2 justify-center">
          {tiers.map((tier) => {
            // Reorder features so ticks come before crosses
            const tierFeatures = [
              ...features.filter((feature) =>
                tier.mostPopular ? feature.includedInMonthly : feature.includedInUpfront
              ),
              ...features.filter((feature) =>
                tier.mostPopular ? !feature.includedInMonthly : !feature.includedInUpfront
              ),
            ];

            return (
              <div
                key={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-brandBlue text-white border-4 border-brandOrange'
                    : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200',
                  'flex flex-col justify-between border-4 border-brandBlue p-8'
                )}
              >
                <div>
                  <div className="flex items-center justify-between gap-x-4">
                    <h3
                      id={tier.id}
                      className={classNames(
                        'text-lg font-bold leading-8',
                        tier.mostPopular ? 'text-brandOrange' : 'text-gray-900'
                      )}
                    >
                      {tier.name}
                    </h3>
                    {tier.mostPopular && (
                      <p className="bg-white/10 px-2.5 py-1 text-xs font-semibold text-white">
                        Most popular
                      </p>
                    )}
                  </div>
                  <p className={classNames(
                    'mt-4 text-sm leading-6',
                    tier.mostPopular ? 'text-white' : 'text-gray-600 dark:text-gray-400'
                  )}>
                    {tier.description}
                  </p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className={classNames(
                      'text-3xl font-bold tracking-tight',
                      tier.mostPopular ? 'text-white' : 'text-gray-900 dark:text-white'
                    )}>
                      {tier.mostPopular ? '£200 / month' : '£3,500 upfront + £30 / month'}
                    </span>
                  </p>
                  <ul className={classNames(
                    'mt-8 space-y-3 text-sm leading-6',
                    tier.mostPopular ? 'text-white' : 'text-gray-600 dark:text-gray-400'
                  )}>
                    {tierFeatures.map((feature) => (
                      <li key={feature.feature} className="flex gap-x-3">
                        {tier.mostPopular && feature.includedInMonthly ? (
                          <CheckIcon className="h-6 w-6 text-brandOrange" aria-hidden="true" />
                        ) : !tier.mostPopular && feature.includedInUpfront ? (
                          <CheckIcon className="h-6 w-6 text-brandOrange" aria-hidden="true" />
                        ) : (
                          <XCircleIcon className="h-6 w-6 text-gray-500" aria-hidden="true" />
                        )}
                        {feature.feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={tier.href}
                  aria-describedby={tier.id}
                  className={classNames(
                    'mt-8 block text-center text-sm font-bold px-3 py-4',
                    tier.mostPopular
                      ? 'bg-brandOrange text-brandBlue hover:bg-opacity-90'
                      : 'text-brandBlue ring-1 ring-inset ring-brandBlue hover:bg-brandOrange hover:text-white'
                  )}
                >
                  Contact Us
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
