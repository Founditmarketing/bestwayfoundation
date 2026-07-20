import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Gallery from './pages/Gallery';
import PierAndBeam from './pages/services/PierAndBeam';
import FoundationRepair from './pages/services/FoundationRepair';
import HouseLeveling from './pages/services/HouseLeveling';
import DrainageSolutions from './pages/services/DrainageSolutions';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services">
            <Route path="pier-and-beam" element={<PierAndBeam />} />
            <Route path="foundation-repair" element={<FoundationRepair />} />
            <Route path="house-leveling" element={<HouseLeveling />} />
            <Route path="drainage-solutions" element={<DrainageSolutions />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}
