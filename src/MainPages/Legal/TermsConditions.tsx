import React from 'react';

export default function TermsConditions() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 md:grid-cols-12">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Terms and Conditions</h1>
        <div className="text-gray-700 dark:text-gray-400 space-y-4">
          <p>Welcome to Serino Digital. By using our services, you agree to comply with and be bound by the following terms and conditions.</p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">1. Services</h2>
          <p>We provide custom web design, development, and ongoing support services. The specific services and deliverables will be agreed upon at the time of contract signing.</p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">2. Project Scope and Revisions</h2>
          <p>Our services include building a custom website and ongoing updates. Any additional revisions beyond the agreed scope may incur extra charges.</p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">3. Payment</h2>
          <p>Payment is due according to the agreed payment plan, either monthly or upfront. Invoices will be provided, and payments are expected upon receipt. We accept bank transfers and other agreed-upon methods.</p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">4. Cancellations and Termination</h2>
          <p>If you wish to cancel or terminate our services, please provide at least 30 days' notice. Refunds for services will be evaluated based on the work completed up until the termination date.</p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">5. Satisfaction Guarantee</h2>
          <p>We aim to deliver a website that meets your satisfaction. If you have any concerns or issues with the final product, please contact us within 7 days, and we will address the matter promptly.</p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">6. Liability</h2>
          <p>While we take every precaution to deliver high-quality work, we are not liable for any damages caused by third-party hosting providers or external services. Serino Digital cannot be held responsible for any loss of revenue due to website downtime or security breaches unrelated to our work.</p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">7. Privacy</h2>
          <p>Your privacy is important to us. Please refer to our <a href="/privacy-policy" className="text-blue-600 dark:text-blue-400 hover:underline">Privacy Policy</a> for details on how we collect, use, and protect your personal information.</p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">8. Changes to Terms</h2>
          <p>We reserve the right to update or modify these terms and conditions at any time. Any changes will be posted on our website, and it is your responsibility to review them periodically.</p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">9. Contact Us</h2>
          <p>If you have any questions or concerns about these terms and conditions, please contact us at:</p>
          <ul className="list-inside">
            <li><strong>Phone:</strong> <a href="tel:07342367824" className="text-blue-600 dark:text-blue-400 hover:underline">07342 367824</a></li>
            <li><strong>Email:</strong> <a href="mailto:info@serinodigital.com" className="text-blue-600 dark:text-blue-400 hover:underline">info@serinodigital.com</a></li>
            <li><strong>Address:</strong> <span className="text-gray-900 dark:text-gray-300">Norwich, England</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
