import React from 'react';
import ServiceFeature from '../PageComponents/Services/servicecomponent';
import { DevicePhoneMobileIcon, CodeBracketIcon, ChartBarIcon, ServerIcon } from '@heroicons/react/20/solid';
// import ServiceBottom from '../PageComponents/Services/ServiceBottom';
import CTA2 from '../PageComponents/Universal/CTA2';

export default function ServicesHome() {
  return (
    <div>
      <div className='pt-20'></div>
      <ServiceFeature
  title="Hosting, Domain, and Email Package"
  description="A Complete Solution For Your Business & Portfolio."
  subText="Our package includes fast, secure hosting, domain registration, and email setup. Your website will serve as a professional portfolio. This makes it easy for clients to browse and view your past projects. This will help you showcase your expertise and attract more business."
  mainImage="/images/design2.png"
  backgroundClass="bg-white"
  reverse={false}
  features={[
    { headline: 'Reliable Hosting', detail: 'Fast, secure, and reliable hosting for your website.', icon: ServerIcon },
    { headline: 'Domain Management', detail: 'We handle domain registration and renewals.', icon: DevicePhoneMobileIcon },
    { headline: 'Professional Email Setup', detail: 'Custom business email addresses.', icon: CodeBracketIcon },
  ]}
/>

<ServiceFeature
  title="Web Design & Development"
  description="Beautiful, Custom Websites Built For Performance."
  subText="We tailor our web design and development to your business’s needs. We ensure your website looks and performs well on all devices, from phones to laptops. Our  code ensures fast load times and a simple user experience. We aim to showcase your business in a professional capacity across any platform."
  mainImage="/images/designres.png"
  backgroundClass="bg-gray-100"
  reverse={true}
  features={[
    { headline: 'Tailored for your business', detail: 'We create designs that match your business identity.', icon: DevicePhoneMobileIcon },
    { headline: 'Custom Code', detail: 'Hand-coded for speed, reliability, and scalability.', icon: CodeBracketIcon },
    { headline: 'Mobile-first', detail: 'Your website will look amazing on any device.', icon: ChartBarIcon },
  ]}
/>


      {/* SEO Section */}
      <ServiceFeature
        title="Search Engine Optimisation"
        description="Maximise your website's impact"
        subText="We Use The Latest SEO Techniques To Help Your Business Rank Higher In Search Engines. We Focus On Clean Code, Mobile-First Design, & Optimised Content. This Is To Improve Your Visibility & Drive More Traffic."
        mainImage="/images/googling.png"
        backgroundClass="bg-white"
        reverse={false}
        features={[
          { headline: 'SEO Optimised', detail: 'Rank higher on search engines.', icon: ChartBarIcon },
          { headline: 'Keyword Targeting', detail: 'Focused keyword strategies to bring the right audience.', icon: DevicePhoneMobileIcon },
          { headline: 'Mobile-first SEO', detail: 'Optimised for mobile to improve rankings.', icon: CodeBracketIcon },
        ]}
      />

      {/* Bottom Section */}
      <CTA2 />
    </div>
  );
}
