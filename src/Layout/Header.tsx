import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const navigationLinks = [
    { name: 'Home', path: '/' },
    { name: 'Approach', path: '/about' },
    { name: 'What We Do', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: "FAQ's", path: '/faq' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact', isPrimary: true }, // Highlight Contact
  ];

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation(); // Get current path

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (path: string) => {
    if (window.location.pathname !== '/') {
      window.location.href = '/' + path;
    } else {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full font-oswald bg-white shadow-md lg:top-4 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:w-[95%] z-50 lg:shadow-lg lg:rounded-md lg:border lg:border-gray-300 py-3">
      <nav className="px-4 lg:px-6 py-3">
        <div className="flex items-center justify-between mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center" onClick={() => handleLinkClick('#hero')}>
            <img src="/images/logo2.png" className="h-14" alt="Company Logo" />
          </Link>
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <ul className="flex items-center space-x-4">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  {link.isPrimary ? (
                    <Link
                      to={link.path}
                      className={`block text-brandBlue bg-brandOrange border-2 border-brandOrange py-2 px-4 font-bold uppercase hover:bg-brandOrange hover:text-white transition-colors rounded-sm`} // Changed to rounded-sm for less rounding
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <Link
                      to={link.path}
                      className={`relative block py-2 px-3 text-sm text-black uppercase font-bold hover:bg-gray-200 transition-colors ${
                        location.pathname === link.path ? 'curved-underline-active' : 'curved-underline'
                      }`}
                      style={{
                        color: location.pathname === link.path ? 'black' : 'inherit',
                      }}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="mobile-menu-2"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <ul className="flex flex-col mt-4 space-y-1">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  {link.isPrimary ? (
                    <a
                      href={link.path}
                      className="block py-2 pr-4 pl-3 text-sm text-black border-b border-gray-100 hover:bg-gray-50 uppercase font-bold"
                      onClick={() => handleLinkClick(link.path)}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <a
                      href={link.path}
                      className="block py-2 pr-4 pl-3 text-sm text-black border-b border-gray-100 hover:bg-gray-50 uppercase font-bold"
                      onClick={() => handleLinkClick(link.path)}
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      <style>
        {`
          .curved-underline::after {
            content: '';
            display: block;
            width: 100%;
            height: 4px; /* Thinner underline */
            background: #FFA500; /* Brand orange */
            border-radius: 50px; /* Curved shape */
            margin-top: 8px; /* Space between text and underline */
            position: absolute;
            left: 0;
            bottom: -4px;
            transform: scaleX(0); /* Start hidden */
            transition: transform 0.3s ease-in-out;
          }

          .curved-underline:hover::after {
            transform: scaleX(1); /* Full width on hover */
          }

          .curved-underline-active::after {
            content: '';
            display: block;
            width: 100%;
            height: 4px; /* Thinner underline */
            background: #007BFF; /* Brand blue for active */
            border-radius: 50px; /* Curved shape */
            margin-top: 8px; /* Space between text and underline */
            position: absolute;
            left: 0;
            bottom: -4px;
            transform: scaleX(1); /* Full width for active */
          }

          .curved-underline {
            position: relative;
          }

          .curved-underline-active {
            position: relative;
          }
        `}
      </style>
    </header>
  );
}
