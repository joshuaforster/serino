import { Link } from 'react-router-dom';
import { portfolioData } from '../../Data/PortfolioData';

export default function PortfolioPage() {
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className="container mx-auto mt-40 px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-brandBlue dark:text-white">
          Portfolio
        </h1>
        <div className="space-y-12">
          {portfolioData.map((item) => (
            <div 
              key={item.id} 
              className="flex flex-col lg:flex-row items-center bg-white dark:bg-gray-800 p-6"
            >
              <div className="lg:w-1/2">
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-full object-contain h-64 lg:h-96"
                />
              </div>
              <div className="lg:w-1/2 lg:pl-8 mt-6 lg:mt-0 text-center lg:text-left">
                <h2 className="text-2xl font-semibold mb-4 text-brandBlue dark:text-white">
                  {item.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {item.description.join(' ').split(' ').slice(0, 40).join(' ') + '...'}
                </p>
                <Link
                  to={`/portfolio/${item.id}`}
                  className="text-brandOrange dark:text-indigo-400 hover:text-brandBlue dark:hover:text-indigo-600 font-semibold transition-colors duration-300"
                >
                  More Info &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
