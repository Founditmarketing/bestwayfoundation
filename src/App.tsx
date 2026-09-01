import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Gallery from './pages/Gallery';
import NotFound from './pages/NotFound';
import ServicesIndex from './pages/services/ServicesIndex';
import ServicePage from './pages/services/ServicePage';
import ServiceCityPage from './pages/services/ServiceCityPage';
import ServiceAreas from './pages/locations/ServiceAreas';
import LocationPage from './pages/locations/LocationPage';
import GuidesIndex from './pages/guides/GuidesIndex';
import GuidePage from './pages/guides/GuidePage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

/**
 * Route table, deliberately separate from the router itself: the browser
 * entry wraps it in BrowserRouter, the prerender entry wraps it in
 * StaticRouter. Both render exactly the same tree.
 */
export function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services">
            <Route index element={<ServicesIndex />} />
            <Route path=":serviceSlug" element={<ServicePage />} />
            <Route path=":serviceSlug/:citySlug" element={<ServiceCityPage />} />
          </Route>
          <Route path="service-areas">
            <Route index element={<ServiceAreas />} />
            <Route path=":slug" element={<LocationPage />} />
          </Route>
          <Route path="guides">
            <Route index element={<GuidesIndex />} />
            <Route path=":slug" element={<GuidePage />} />
          </Route>
          {/* Anything else renders a real 404 page instead of a blank shell. */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <>
      <AppRoutes />
      <Analytics />
    </>
  );
}
