import { useState } from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Contact() {

  const [isChecked, setIsChecked] = useState(false); // State for checkbox




  return (
    <div className="relative isolate bg-white dark:bg-gray-900">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-brandBlue dark:text-white">Contact Us</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              You can reach us via phone, whattsapp or email. We're always here to help.
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600 dark:text-gray-300">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <FaPhone aria-hidden="true" className="h-7 w-6 text-brandBlue" />
                </dt>
                <dd>
                  <a href="tel:07743978158" className="hover:text-brandOrange">
                    07743 978158
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <FaEnvelope aria-hidden="true" className="h-7 w-6 text-brandBlue" />
                </dt>
                <dd>
                  <a href="mailto:info@serinodigital.co.uk" className="hover:text-brandOrange">
                    info@serinodigital.co.uk
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <form action="#" method="POST" className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold leading-6 text-brandBlue dark:text-white">
                  Name <span className="text-red-500">*</span>
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="given-name"
                    className="block w-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brandBlue sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-brandBlue dark:text-white">
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="mt-2.5">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brandBlue sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-brandBlue dark:text-white">
                  Phone <span className="text-red-500">*</span>
                </label>
                <div className="mt-2.5">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className="block w-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brandBlue sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-brandBlue dark:text-white">
                  Message <span className="text-red-500">*</span>
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brandBlue sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="flex items-start">
                  <div className="flex h-6 items-center">
                    <input
                      id="consent"
                      name="consent"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-brandOrange focus:ring-brandOrange"
                      checked={isChecked}
                      onChange={() => setIsChecked(!isChecked)}
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm leading-6">
                    <label htmlFor="consent" className="font-medium text-brandBlue dark:text-white">
                      I agree that my data is collected and stored.
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="rounded-md bg-brandOrange px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brandOrange"
                disabled={!isChecked}
              >
                Send message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
