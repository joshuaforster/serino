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
      className="bg-gradient-to-br from-black to-gray-800 border-t-2 border-white" // High contrast dark gradient
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        {/* Container for all sections */}
        <div className="xl:flex xl:justify-between xl:items-start xl:space-x-16">
          {/* Logo */}
          <div className="space-y-8 xl:w-1/4">
            <picture>
              <img
                className="h-16 mx-auto xl:mx-0"
                src="/images/darkLogo2.png"
                alt="Serino logo"
                loading="lazy"
              />
            </picture>
          </div>

          {/* Navigation, Legal, and Contact Sections */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8 xl:flex-1 xl:grid xl:grid-cols-3 xl:mt-0 xl:space-y-0 xl:gap-8">
            {/* Navigation */}
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

            {/* Legal */}
            <div>
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

            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Contact</h3>
              <ul className="mt-6 space-y-4">
                <li className="flex items-center space-x-2">
                  <a href="tel:07743978158" className="text-sm leading-6 text-white hover:text-customGold transition duration-300">
                    07743 978158
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <a href="mailto:ganoff@sampsonnco.com" className="text-sm leading-6 text-white hover:text-customGold transition duration-300">
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
  
        {/* Footer Bottom */}
        <div className="mt-4 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs text-white leading-5">
            &copy; {currentYear} Serino - All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
