import { InboxIcon, TrashIcon, UsersIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Enquire',
    description: 'We’ll have an informal chat to get to know your business. We’ll discuss your needs and how we can best serve you.',
    icon: InboxIcon,
  },
  {
    name: 'Design & Proposal',
    description: 'We will send you a mockup. Once you’re happy with the mockup, we’ll move forward with a proposal and a contract for approval.',
    icon: UsersIcon,
  },
  {
    name: 'Development & Launch',
    description: 'We start building your site and launch it when ready. You’ll receive a demo link to review, and we’ll handle the payment plan once the site is ready to go live.',
    icon: TrashIcon,
  },
]

export default function Example() {
  return (
    <div className="bg-white pb-20 pt-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Easy As 1-2-3
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We’ll guide you every step of the way with our 3-step process to ensure your project meets all your needs.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="flex flex-col border border-gray-200 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500">
                    <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
