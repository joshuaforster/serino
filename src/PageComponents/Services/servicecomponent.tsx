import React from 'react';

interface Feature {
  headline: string;
  detail: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>; // Optional icon for each feature
}

interface ServiceFeatureProps {
  title: string;
  description: string;
  subText?: string; // Optional subText to make it reusable
  mainImage: string; // Single image URL
  backgroundClass: string; // Background class for dynamic bg
  reverse?: boolean; // Optional prop for reverse layout
  features: Feature[]; // Array of 3 headlines and descriptions with optional icons
}

export default function ServiceFeature({
  title,
  description,
  subText = "We create custom-built websites for tradespeople across the UK. Sure, we cost more than Wix or Squarespace, but here’s why: Our websites are hand-coded, built for performance, and managed for you. No templates. No DIY headaches. Just a professional site that works and helps your business grow.",
  mainImage,
  backgroundClass, // Use this for dynamic background
  reverse = false,
  features,
}: ServiceFeatureProps) {
  return (
    <div className={`overflow-hidden ${backgroundClass} dark:bg-gray-900 py-24 sm:py-32`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {/* Text Section */}
          <div className={`lg:pr-8 lg:pt-4 ${reverse ? 'lg:order-2' : ''}`}>
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-brandOrange">{title}</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-brandBlue sm:text-4xl">{description}</p>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                {subText}
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 dark:text-gray-300 lg:max-w-none">
                {features.map((feature, index) => (
                  <div key={index} className="relative pl-9">
                    {feature.icon ? (
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-brandOrange" aria-hidden="true" />
                    ) : (
                      <div className="absolute left-1 top-1 h-5 w-5 text-gray-300"> {/* Placeholder for icon */} </div>
                    )}
                    <dt className="inline font-semibold text-brandBlue">{feature.headline}</dt>{' '}
                    <dd className="inline text-black dark:text-white">{feature.detail}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Image Section */}
          <div className={`flex justify-center items-center ${reverse ? 'lg:order-1' : ''}`}>
            <div className="w-full h-full max-w-full max-h-full overflow-hidden flex justify-center items-center border-4 border-brandBlue">
              <img
                alt="Service feature"
                src={mainImage}
                className="object-cover w-full h-full aspect-square"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}






// import React from 'react';

// interface TextSectionProps {
//   title: string;
//   description: string;
//   bulletPoints: string[]; // List of bullet points
//   additionalInfo?: string; // Optional subtext for further details
// }

// export default function TextSection({
//   title,
//   description,
//   bulletPoints,
//   additionalInfo,
// }: TextSectionProps) {
//   return (
//     <div className="bg-white dark:bg-gray-900 py-24 sm:py-32">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         <div className="max-w-3xl mx-auto text-center">
//           {/* Title */}
//           <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">{title}</h2>

//           {/* Description */}
//           <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">{description}</p>
//         </div>

//         {/* Bullet Points */}
//         <div className="mt-12 max-w-3xl mx-auto space-y-4 text-left">
//           <ul className="space-y-3">
//             {bulletPoints.map((point, index) => (
//               <li key={index} className="text-base leading-7 text-gray-700 dark:text-gray-300 list-disc pl-5">
//                 {point}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Optional Additional Info */}
//         {additionalInfo && (
//           <div className="mt-8 max-w-3xl mx-auto">
//             <p className="text-sm text-gray-500 dark:text-gray-400">{additionalInfo}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
