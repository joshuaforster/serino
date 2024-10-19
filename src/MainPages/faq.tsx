import React, { useEffect, useState, useRef } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const faqs = [
  {
    id: 1,
    question: "What services do you offer?",
    answer: (
      <span>
        We build custom-coded websites for tradespeople. We ensure a high-performing, scalable, and simple web presence for your business. Our services include website design, development, SEO, hosting, and ongoing maintenance. Learn more on our <Link to="/services" className="text-brandOrange hover:underline">services page</Link>.
      </span>
    ),
  },
  {
    id: 2,
    question: "What makes your websites different?",
    answer: "Our websites are  custom-coded, built for your trade. Our websites are optimised for speed, SEO, and long-term scalability. Unlike web builders, we optimise your site without the platforms restrictions. This gives us full control over performance, design, and functionality."
  },
  {
    id: 3,
    question: "Do you offer ongoing updates and support?",
    answer: "Yes, we offer unlimited updates with our subscription model. You can request changes or updates to your website at any time, and we’ll take care of it—no extra fees."
  },
  {
    id: 4,
    question: "How does your pricing work?",
    answer: "We operate on a subscription model starting at £200 per month. This includes custom design, development, hosting, and unlimited updates. Yet, we offer an upfront payment option with a smaller monthly fee for hosting and support."
  },
  {
    id: 5,
    question: "Will my website be mobile-friendly?",
    answer: "Yes, we design our websites with a mobile-first approach. This ensures your site looks and works on all devices, from smartphones to desktops."
  },
  {
    id: 6,
    question: "How long does it take to build a website?",
    answer: "Our websites take 2-4 weeks to complete, depending on the complexity of the project. This will also depends on how quickly we receive content and feedback from you."
  },
  {
    id: 7,
    question: "Can you help with SEO?",
    answer: "Yes, we use SEO best practices from the start to help your website rank higher on search engines like Google. We optimise for keywords relevant to your trade and location. We will ensure fast loading times and mobile performance."
  },
  {
    id: 8,
    question: "What happens if I want to leave the subscription?",
    answer: "You’re free to leave the subscription at any time after the minimum contract period. However, please note that since we custom-code our websites, the source code remains our intellectual property. You’ll be able to keep your domain, but not the code itself."
  },
  {
    id: 9,
    question: "Do you offer hosting services?",
    answer: "Yes, we provide fast, secure hosting as part of our service. This means you don’t need to worry about server management or renewals. It’s all handled for you as part of your subscription."
  },
  {
    id: 10,
    question: "How do I get started?",
    answer: "Simply reach out to us through our contact form or give us a call. We’ll discuss your business needs, answer any questions you have, and provide you with a clear plan and quote."
  },
  {
    id: 11,
    question: "Can I edit my own content",
    answer: "We’ve found that DIY changes can unintentionally affect your site’s performance and SEO. You wouldn’t expect a customer to fix their own leaking pipe, so it’s best to leave the website tweaks to us. As part of our package, all you need to do is send an email with the changes you need, and we’ll take care of it. This ensures your website stays fast, optimised, and looking great—without any hassle on your part. Even when we’ve set up a CMS for clients to edit content themselves, most have preferred we handle the changes to keep things running smoothly."
  },
  {
    id: 12,
    question: "What do you use to build the site?",
    answer: "We don’t use web builders like Squarespace or Wix. These platforms are for non-designers and non developers. They are for those looking to do it themselves. We custom code everything from scratch. Our stack includes HTML, CSS, JavaScript, React, Tailwind, and TypeScript. The exact tools we use depend on the complexity of your project. The technical details aren’t important. What matters is that we have the flexibility to build whatever we like, however we like. The possibilities of what we can create for your website are endless."
  }
];

const FAQ: React.FC = () => {
  const [activeIndices, setActiveIndices] = useState<number[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndices((prevActiveIndices) => {
      if (prevActiveIndices.includes(index)) {
        return prevActiveIndices.filter((i) => i !== index);
      } else {
        return [...prevActiveIndices, index];
      }
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top } = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on initial render

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>FAQs - Your Custom Website Service</title>
        <meta name="description" content="Find answers to frequently asked questions about our custom website services for tradespeople, including pricing, support, and more." />
      </Helmet>
      <section className="relative pt-32 bg-gray-100 dark:bg-gray-900">
        <div
          ref={sectionRef}
          className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-brandBlue dark:text-white capitalize">Frequently Asked Questions</h2>
            <div className="grid pt-8 text-left border-t border-gray-200 dark:border-gray-700 md:gap-16 md:grid-cols-2">
              {faqs.map((faq, index) => (
                <div key={index} className="mb-10">
                  <div
                    className={`group flex items-center mb-4 text-lg font-medium cursor-pointer ${activeIndices.includes(index) ? 'text-brandOrange' : 'text-brandBlue dark:text-white'} hover:text-brandOrange`}
                    onClick={() => toggleFAQ(index)}
                    role="button"
                    tabIndex={0}
                    onKeyPress={() => toggleFAQ(index)}
                  >
                    {activeIndices.includes(index) ? (
                      <FaMinus className="mr-2 w-5 h-5 group-hover:text-brandOrange" />
                    ) : (
                      <FaPlus className="mr-2 w-5 h-5 text-brandBlue dark:text-white group-hover:text-brandOrange" />
                    )}
                    <h3 className="flex items-center group-hover:text-brandOrange">{faq.question}</h3>
                  </div>
                  {activeIndices.includes(index) && (
                    <div className="text-gray-700 dark:text-gray-300">{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
