import React from 'react';

export default function ProblemsSection() {
  const problems = [
    {
      headline: "Your website isn’t converting visitors into clients",
      detail: "We build websites that turn visitors into paying clients. Whether you’re a builder, electrician, or decorator. Our focus is on helping you grow your business with a site that works for you.",
    },
    {
      headline: "Your business isn’t showing up in search results",
      detail: "No matter your trade, if potential clients can’t find you online, you’re missing out. We optimise your site for SEO so customers in your area find you first when they need your services.",
    },
    {
      headline: "You’re tired of using one-size-fits-all website builders",
      detail: "Web builders like Wix may seem easy, but they don’t offer the flexibility to allow your business to stand out. We build custom websites tailored to your trade, saving you time and effort.",
    },
    {
      headline: "Your website doesn’t work well on mobile devices",
      detail: "Many of your potential clients are searching for services on their phones. We ensure your site is mobile-responsive. This allows it to work great on any device, preventing missed opportunities.",
    },
    {
      headline: "Your website is outdated and slow",
      detail: "A slow or outdated website gives a poor reflection on your business. We upgrade your site to ensure it’s fast, modern, and friendly for users. We aim to improve your customer experience.",
    },
    {
      headline: "You don’t have time to manage your website",
      detail: "Running a business leaves little time for website upkeep. Let us handle the updates, so you can focus on your trade. We will ensure you have a smooth and efficient website, whilst you focus on what you do best.",
    },
  ];

  return (
    <section className="bg-gray-100 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Centered headline with a curvy underline */}
        <div className="mb-16 text-center">
          <h2 className="relative text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl inline-block">
            Problems We Solve
          </h2>
          <p className="mt-8 text-lg leading-8 text-gray-600">
            We solve these problems, so you don’t have to. Let’s talk about how we can fix your website.
          </p>
        </div>

        {/* Problem cards with solutions */}
        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-8 border border-gray-200 h-auto"
            >
              <div className="text-brandOrange text-2xl font-bold mb-4">
                {index + 1}.
              </div>
              <h3 className="text-xl font-semibold text-brandBlue mb-4">
                {problem.headline}
              </h3>
              <p className="text-gray-600 leading-7">
                {problem.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Call to action button */}
        <div className="text-center mt-16">
          <a
            href="/contact"
            className="inline-block bg-brandOrange hover:bg-brandOrange-dark text-brandBlue font-semibold py-3 px-8 rounded-sm transition-all duration-300"
          >
            Let's Fix Your Website
          </a>
        </div>
      </div>
    </section>
  );
}
