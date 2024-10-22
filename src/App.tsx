// src/App.tsx
import React, { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CookieConsent from 'react-cookie-consent';
import Layout from './Layout/layout';
import { ThemeProvider } from './CustomComponents/darkmode';
import ScrollToTop from './CustomComponents/ScrollToTop';
import './App.css';
import { ServicesProvider } from './CustomComponents/ServicesContext';
import { ProjectsProvider } from './CustomComponents/projectsContext';
import PortfolioDetail from './PageComponents/PortfolioComponents/PortfolioDetail';


// Lazy loading pages
const Home = lazy(() => import('./MainPages/Home'));
const About = lazy(() => import('./MainPages/About'));
const Kitchen = lazy(() => import('./MainPages/Kitchen'));
const Bathroom = lazy(() => import('./MainPages/Bathroom'));
const Gallery = lazy(() => import('./MainPages/gallery'));
const FAQ = lazy(() => import('./MainPages/faq'));
const Contact = lazy(() => import('./MainPages/contact'));
const ServiceDetail = lazy(() => import('./CustomComponents/serviceDetail'));
const ServicesHome = lazy(() => import('./MainPages/servicesHome'));
const TermsConditions = lazy(() => import('./MainPages/Legal/TermsConditions'));

const BlogList = lazy(() => import('./MainPages/blogs/BlogList'));
const BlogPostComponent = lazy(() => import('./MainPages/blogs/BlogPost'));
const Pricing = lazy(() => import('./PageComponents/HomeComponents/Pricing'))
const Unfound = lazy(() => import('./MainPages/404'));

// Corrected lazy load for project components
const Portfolio = lazy(() => import('./PageComponents/PortfolioComponents/Portfolio')); // Corrected path


function App() {
  return (
    <ThemeProvider>
      <ServicesProvider>
        <ProjectsProvider>
          <BrowserRouter>
            <ScrollToTop />
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route element={<Layout />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/kitchen" element={<Kitchen />} />
                  <Route path="/bathroom" element={<Bathroom />} />
                  <Route path="/services/:id" element={<ServiceDetail />} />
                  <Route path="/services" element={<ServicesHome />} />
                  <Route path="/pricing" element ={<Pricing />} />
                  <Route path='/blog' element={<BlogList />} />
                  <Route path='/blog/:id' element={<BlogPostComponent />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/portfolio/:id" element={<PortfolioDetail />} /> {/* Specific project holder */}
      
                  <Route path="/termsandconditions" element={<TermsConditions />} />
                  <Route path="*" element={<Unfound />} />
                </Route>
              </Routes>
            </Suspense>
            <CookieConsent
              location="bottom"
              buttonText="I understand"
              cookieName="myAwesomeCookieName"
              style={{ background: "#323D40" }}
              buttonStyle={{ color: "#fff", backgroundColor: "#C58C49", fontSize: "13px", transition: "background-color 0.3s" }}
              buttonClasses="cookie-consent-button"
              expires={150}
            >
              This website uses cookies to enhance the user experience.{" "}
              <Link
                to="/privacy-policy"
                aria-label="Read our Privacy Policy to understand how we use cookies and tracking"
                style={{ color: "white" }}
                className="hover:text-customBlue bg-gray-950"
              >
                Learn more
              </Link>
            </CookieConsent>
          </BrowserRouter>
        </ProjectsProvider>
      </ServicesProvider>
    </ThemeProvider>
  );
}

export default App;
