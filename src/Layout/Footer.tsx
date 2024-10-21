import { Link } from 'react-router-dom';

const navigation = {
  nav: [
    { name: 'Home', href: '/', ariaLabel: 'Go to the Home page' },
    { name: 'About', href: '/about', ariaLabel: 'Learn more about us on the About page' },
    { name: 'Services', href: '/services', ariaLabel: 'Explore the Services we offer' },
    { name: "FAQ's", href: '/faq', ariaLabel: 'Find answers to Frequently Asked Questions' },
    { name: 'Blog', href: '/blog', ariaLabel: 'Read our Blog' },
    { name: 'Contact', href: '/contact', ariaLabel: 'Get in touch with us on the Contact page' }
  ],

  legal: [
    { name: 'Privacy Policy', href: '/privacypolicy', ariaLabel: 'Read our Privacy Policy, so you know how our cookies and tracking works' },
    { name: 'Terms & Conditions', href: '/termsandconditions', ariaLabel: 'Read our Terms & Conditions' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear(); 

  return (
    <footer
      className="bg-gradient-to-br from-black to-gray-800 border-t-2 border-white" 
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <picture>
              <img
                className="h-16"
                src="/images/darkLogo2.png"
                alt="Serino logo"
                loading="lazy"
              />
            </picture>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Navigation</h3>
                <ul className="mt-6 space-y-4">
                  {navigation.nav.map((item) => (
                    <li key={item.name}>
                      <Link to={item.href} aria-label={item.ariaLabel} className="text-sm leading-6 text-white hover:text-customGold transition duration-300">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                <ul className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link to={item.href} aria-label={item.ariaLabel} className="text-sm leading-6 text-white hover:text-customGold transition duration-300">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Contact</h3>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-center space-x-2">
                    <a href="tel:07477534661" className="text-sm leading-6 text-white hover:text-customGold transition duration-300">
                      07477 534661
                    </a>
                  </li>
                  <li className="flex items-center space-x-2">
                    <a href="mailto:info@serinodigital.com" className="text-sm leading-6 text-white hover:text-customGold transition duration-300">
                      info@serinodigital.com
                    </a>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-sm leading-6 text-white">
                      Norwich, England
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
  
        <div className="mt-4 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs text-white leading-5">
            &copy; {currentYear} Serino - All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
