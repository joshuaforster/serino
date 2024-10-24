export interface PortfolioItem {
  id: number;
  title: string;
  liveLink: string;
  images: string[];
  description: string[]; // Updated to array of strings for paragraphs
  technologies: string[];
  githubLink?: string;
  featureImage: string;  // Add this field for the feature image
}

export const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    title: 'Lambert & Wright',
    liveLink: 'https://lambertandwright.co.uk',
    images: [
      '/images/LambertPortfolio1.png',
      '/images/LambertPortfolio2.png',
      '/images/LambertPortfolio3.png',
    ],
    description: [
      "Lambert & Wright came to us looking for a website that matched the quality of their work. ",
      "Their site had served its purpose, yet they wanted something that better showcased their work. They also wanted something to give their users a smoother experience.",
      "We focused on a clean, modern design. The images did the talking, and the layout made it easy for visitors to browse their work.",
      "The new site is fast, responsive, and reflects the high standards of Lambert & Wright. It helps clients explore their portfolio and get in touch quickly."
    ],
    technologies: ['React', 'Tailwind CSS', 'Typescript'],
    githubLink: 'https://github.com/username/repo1',
    featureImage: 'images/lambertportfolio.png',
  },
  {
    id: 2,
    title: 'Sampson N CO',
    liveLink: 'https://www.sampsonnco.com',
    images: [
      '/images/SampsonPortfolio1.png',
      '/images/SampsonPortfolio2.png',
      '/images/SampsonPortfolio3.png',
    ],
    description: [
      "Sampson N CO, based in Norwich, offers bespoke kitchen and bathroom solutions. They provide high-quality designs and installations, ensuring each space is both functional and beautifully crafted.",
      "Their original website lacked modern design and was difficult to navigate, leading to potential clients missing out on important information. We redesigned the website with a clean, user-friendly interface that makes it easy for clients to explore Sampson N CO's services and portfolio.",
      "The new design highlights their craftsmanship, allowing users to browse their projects effortlessly. The website's performance has been improved, and it is now fully responsive across all devices."
    ],
    technologies: ['Vue', 'Bootstrap', 'Firebase'],
    githubLink: 'https://github.com/username/repo2',
    featureImage: '/images/Sampson N Co.png',
  },
  // {
  //   id: 3,
  //   title: 'AD Forster',
  //   liveLink: 'https://adforsterwindowcleaning.co.uk',
  //   images: [
  //     '/images/adforster page.png',
  //     '/images/adforster page.png',
  //     '/images/adforster page.png',
  //   ],
  //   description: [
  //     "AD Forster, operating in Norwich, is known for their reliable and professional window cleaning services. They help keep homes and businesses looking their best with meticulous attention to detail.",
  //     "Their previous website was outdated and didn't reflect the professionalism and reliability of their service. We built a sleek, modern website that focuses on easy navigation and showcases their services and reviews.",
  //     "With the new design, potential clients can now easily find the information they need and get in touch for a quote. The site is fast, responsive, and gives AD Forster the online presence it deserves."
  //   ],
  //   technologies: ['Angular', 'Sass', 'Firebase'],
  //   githubLink: 'https://github.com/username/repo3',
  //   featureImage: '/images/adforster page.png',
  // },
  // Add more projects as needed
];
