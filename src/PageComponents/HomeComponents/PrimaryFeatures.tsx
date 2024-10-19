import { Link } from 'react-router-dom';

const portfolioItems = [
  {
    id: 1,
    title: 'Lambert & Wright',
    category: { name: 'Renovation' },
    description:
      "Lambert & Wright specialise in property renovations in Leicester. Their expertise lies in transforming homes with exceptional craftsmanship, delivering tailored renovations that meet the highest standards.",
    date: 'Sep 20, 2024',
    datetime: '2024-09-20',
    imageUrl: 'images/Lambert&Wright.png',
  },
  {
    id: 2,
    title: 'Sampson N CO',
    category: { name: 'Bespoke Interiors' },
    description:
      "Based in Norwich, Sampson N CO offer bespoke kitchen and bathroom solutions. They provide high-quality designs and installations, ensuring each space is both functional and beautifully crafted.",
    date: 'Sep 10, 2024',
    datetime: '2024-09-10',
    imageUrl: 'images/sampsonMockup.png',
  },
  {
    id: 3,
    title: 'AD Forster',
    category: { name: 'Window Cleaning' },
    description:
      "AD Forster, operating in Norwich, are known for their reliable and professional window cleaning services. They help keep homes and businesses looking their best with meticulous attention to detail.",
    date: 'Sep 5, 2024',
    datetime: '2024-09-05',
    imageUrl: 'images/adforsterMockup.png',
  },
];

export default function HomepagePortfolio() {
  return (
    <div className="relative px-6 pb-20 pt-16 lg:px-8 bg-gray-100 lg:pb-28 lg:pt-24">
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brandBlue sm:text-4xl">Portfolio Projects</h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-black sm:mt-4">
            Here are some of the projects we've completed for our clients.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <div
              key={item.title}
              className="flex flex-col border-4 border-brandBlue pt-6 "
            >
              <div className="flex-shrink-0">
                <img alt={item.title} src={item.imageUrl} className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-1 flex-col justify-between p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-black">
                    {item.category.name}
                  </p>
                  <Link to={`/portfolio/${item.id}`} className="mt-2 block">
                    <p className="text-xl font-semibold text-black">{item.title}</p>
                    <p className="mt-3 text-base text-black">{item.description}</p>
                  </Link>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div className="text-sm text-black">
                    <time dateTime={item.datetime}>{item.date}</time>
                  </div>
                  <Link to={`/portfolio/${item.id}`} className="text-black hover:underline">
                    View Project →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
