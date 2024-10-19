import React from 'react';

export default function TopHeader() {
  return (
    <div className="hidden lg:block bg-black text-white py-2">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 lg:px-6 text-sm">
        <div>
          <span>Contact us: </span>
          <a href="tel:+441234567890" className="hover:underline">
            +44 123 456 7890
          </a>
        </div>
        <div>
          <a href="mailto:info@example.com" className="hover:underline">
            info@serinodigital.com
          </a>
        </div>
      </div>
    </div>
  );
}
