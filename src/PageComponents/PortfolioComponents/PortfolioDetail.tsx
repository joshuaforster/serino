import { useParams, Link } from 'react-router-dom';
import { portfolioData, PortfolioItem } from '../../Data/PortfolioData';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function PortfolioDetail() {
  const { id } = useParams<Record<string, string | undefined>>();

  if (!id) {
    return <div className="container mx-auto px-6 py-12 text-brandBlue dark:text-white">Project not found</div>;
  }

  const project: PortfolioItem | undefined = portfolioData.find(
    (item) => item.id === parseInt(id)
  );

  if (!project) {
    return <div className="container mx-auto px-6 py-12 text-brandBlue dark:text-white">Project not found</div>;
  }

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container mt-40 mx-auto px-6 py-12">
        {/* Back to All Projects Link */}
        <div className="mb-6">
          <Link
            to="/portfolio"
            className="text-brandBlue dark:text-brandBlue hover:text-brandOrange dark:hover:text-brandOrange font-semibold"
          >
            &larr; Back to All Projects
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-center mb-6 text-brandBlue dark:text-white">
          {project.title}
        </h1>

        <div className="text-center mb-8">
          <a
            href={project.liveLink}
            className="text-brandBlue dark:text-brandBlue hover:text-brandOrange dark:hover:text-brandOrange font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Live Project &rarr;
          </a>
        </div>

        {/* Hint to scroll/swipe through the images */}
        <div className="text-center mb-4 text-brandBlue dark:text-gray-300">
          <p>Scroll through the gallery below to explore the project images</p>
        </div>

        {/* Swiper with pagination and looping */}
        <div className="mb-8">
          <Swiper spaceBetween={10} slidesPerView={1} loop={true} pagination={{ clickable: true }}>
            {project.images.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} alt={`Project ${index + 1}`} className="w-full h-auto" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="text-lg leading-8 text-brandBlue dark:text-gray-300 mb-8">
          {project.description.map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-brandBlue dark:text-white">Technologies Used</h2>
          <ul className="list-disc pl-6 space-y-2">
            {project.technologies.map((tech, index) => (
              <li key={index} className="text-brandBlue dark:text-gray-300">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
