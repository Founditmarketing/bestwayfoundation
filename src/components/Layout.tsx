import React, { useState, useEffect } from 'react';
import { Outlet, NavLink as RouterNavLink, Link, useLocation } from 'react-router-dom';
import {
  Menu,
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  X,
  ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import FloatingContact from './FloatingContact';

const serviceLinks = [
  { to: '/services/foundation-repair', label: 'Foundation Repair' },
  { to: '/services/house-leveling', label: 'House Leveling' },
  { to: '/services/pier-and-beam', label: 'Pier & Beam Repair' },
  { to: '/services/drainage-solutions', label: 'Drainage Solutions' },
];

const NavItem = ({ children, to }: { children: React.ReactNode, to: string }) => (
  <RouterNavLink
    to={to}
    className={({ isActive }) => `text-sm font-bold tracking-wide uppercase transition-colors py-2 ${isActive ? 'text-jac-green border-b-2 border-jac-lime' : 'text-gray-700 hover:text-jac-green'}`}
  >
    {children}
  </RouterNavLink>
);

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden flex flex-col">

      {/* Top Utility Bar */}
      <div className="bg-jac-green text-white text-xs font-semibold h-10 px-4 lg:px-12 flex justify-between items-center relative z-50 shrink-0">
        <div className="flex items-center gap-6">
          <a href="mailto:bestwayfoundationrepair936@gmail.com" className="items-center gap-2 hover:text-jac-lime transition-colors hidden md:flex">
            <Mail className="w-3.5 h-3.5 text-jac-lime" /> bestwayfoundationrepair936@gmail.com
          </a>
          <span className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-jac-lime" /> Longview, TX &amp; Surrounding Areas
          </span>
        </div>
        <div className="flex items-center gap-5">
          <span className="hidden sm:flex items-center gap-2 text-white/80">
            <Clock className="w-3.5 h-3.5 text-jac-lime" /> Mon–Fri: 8:00 AM – 6:00 PM
          </span>
          <a href="https://www.facebook.com/profile.php?id=61589371986773" target="_blank" rel="noopener noreferrer" className="hover:text-jac-lime transition-colors" aria-label="Facebook">
            <Facebook className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 w-full z-40 bg-white transition-all duration-300 border-b border-gray-100 ${isScrolled ? 'shadow-md py-2' : 'py-3'}`}>
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 flex items-center justify-between gap-4">

          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img
              src="/bestwaylogo.png"
              alt="Best Way Foundation Repair LLC"
              className={`w-auto object-contain transition-all duration-300 ${isScrolled ? 'h-12 sm:h-14' : 'h-14 sm:h-16 lg:h-20'}`}
            />
          </Link>

          {/* Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/about">About Us</NavItem>

            {/* Services Dropdown */}
            <div className="relative group/nav py-2">
              <button className="text-sm font-bold tracking-wide uppercase text-gray-700 group-hover/nav:text-jac-green transition-colors flex items-center gap-1 py-2">
                Services <ChevronDown className="w-4 h-4 group-hover/nav:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-64 opacity-0 translate-y-2 pointer-events-none group-hover/nav:opacity-100 group-hover/nav:translate-y-0 group-hover/nav:pointer-events-auto transition-all duration-300 z-50">
                <div className="bg-white border-t-4 border-jac-lime rounded-b-lg shadow-xl flex flex-col py-2 overflow-hidden">
                  {serviceLinks.map((s) => (
                    <RouterNavLink key={s.to} to={s.to} className="px-6 py-3 text-sm font-bold text-gray-700 hover:text-jac-green hover:bg-gray-50 transition-colors">
                      {s.label}
                    </RouterNavLink>
                  ))}
                </div>
              </div>
            </div>

            <NavItem to="/gallery">Gallery</NavItem>
            <NavItem to="/contact">Contact Us</NavItem>
          </nav>

          {/* Phone + CTA */}
          <div className="hidden lg:flex items-center gap-5 shrink-0">
            <a href="tel:9039328150" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-full bg-jac-green/5 border border-jac-green/20 flex items-center justify-center group-hover:bg-jac-green transition-colors">
                <Phone className="w-5 h-5 text-jac-green group-hover:text-jac-lime transition-colors" />
              </div>
              <div className="leading-tight">
                <div className="text-[11px] font-bold uppercase tracking-wider text-gray-500">Call Us Today</div>
                <div className="text-lg font-extrabold text-jac-green whitespace-nowrap">(903) 932-8150</div>
              </div>
            </a>
            <Link to="/contact" className="bg-jac-lime text-jac-green px-6 py-3 rounded-full font-bold uppercase tracking-wide text-sm hover:bg-jac-green hover:text-white transition-colors shadow-sm whitespace-nowrap">
              Free Inspection
            </Link>
          </div>

          <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden p-2 -mr-2 text-jac-green" aria-label="Open menu">
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </header>

      {/* Mobile Slide-Out Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] bg-white flex flex-col lg:hidden overflow-y-auto"
          >
            <div className="sticky top-0 z-50 w-full p-5 flex justify-between items-center bg-white border-b border-gray-100 shadow-sm">
              <img src="/bestwaylogo.png" alt="Best Way Foundation Repair LLC" className="h-12 w-auto object-contain" />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-11 h-11 flex items-center justify-center text-jac-green bg-gray-50 rounded-full"
                aria-label="Close menu"
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            <nav className="flex flex-col gap-1 w-full px-6 pt-6 pb-24">
              <Link to="/" className="font-display font-bold text-xl text-jac-green uppercase py-3 border-b border-gray-100">Home</Link>
              <Link to="/about" className="font-display font-bold text-xl text-jac-green uppercase py-3 border-b border-gray-100">About Us</Link>

              <div className="border-b border-gray-100">
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="w-full font-display font-bold text-xl text-jac-green uppercase py-3 flex items-center justify-between"
                >
                  Services <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isMobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col overflow-hidden pb-2"
                    >
                      {serviceLinks.map((s) => (
                        <Link key={s.to} to={s.to} className="text-base text-gray-600 font-semibold py-2.5 pl-4 hover:text-jac-green">
                          {s.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/gallery" className="font-display font-bold text-xl text-jac-green uppercase py-3 border-b border-gray-100">Gallery</Link>
              <Link to="/contact" className="font-display font-bold text-xl text-jac-green uppercase py-3 border-b border-gray-100">Contact Us</Link>

              <div className="pt-8 flex flex-col gap-4">
                <a href="tel:9039328150" className="w-full bg-jac-green text-white py-4 rounded-full font-bold uppercase tracking-wide text-center flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5 text-jac-lime" /> (903) 932-8150
                </a>
                <Link to="/contact" className="w-full bg-jac-lime text-jac-green py-4 rounded-full font-bold uppercase tracking-wide text-center">
                  Request Free Inspection
                </Link>
                <a href="mailto:bestwayfoundationrepair936@gmail.com" className="text-sm text-gray-500 text-center break-all">
                  bestwayfoundationrepair936@gmail.com
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow flex flex-col">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-jac-navy-dark mt-auto">
        {/* CTA Strip */}
        <div className="bg-jac-lime">
          <div className="max-w-[1400px] mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <h3 className="font-display text-xl md:text-2xl uppercase text-jac-green text-center md:text-left">Ready for a rock-solid foundation? Get your free inspection today.</h3>
            <a href="tel:9039328150" className="bg-jac-green text-white px-8 py-3.5 rounded-full font-bold uppercase tracking-wide text-sm hover:bg-white hover:text-jac-green transition-colors flex items-center gap-2 whitespace-nowrap shrink-0">
              <Phone className="w-4 h-4" /> (903) 932-8150
            </a>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <div className="bg-white rounded-lg p-3 inline-block mb-5">
              <img src="/bestwaylogo.png" alt="Best Way Foundation Repair LLC" className="h-14 w-auto" />
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Providing dependable foundation repair and house leveling services across Deep East Texas for over 25 years. Licensed, insured, locally owned &amp; operated.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/profile.php?id=61589371986773" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-jac-lime hover:text-jac-green transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <img src="/bbblogo2.png" alt="BBB Accredited Business" className="h-10 w-auto" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-6">
            <h4 className="text-white uppercase tracking-wide text-lg mb-2">Quick Links</h4>
            <div className="w-8 h-0.5 bg-jac-lime mb-5"></div>
            <ul className="space-y-3 text-sm text-white/70 font-medium">
              <li><Link to="/" className="hover:text-jac-lime transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-jac-lime transition-colors">About Us</Link></li>
              {serviceLinks.map((s) => (
                <li key={s.to}><Link to={s.to} className="hover:text-jac-lime transition-colors">{s.label}</Link></li>
              ))}
              <li><Link to="/gallery" className="hover:text-jac-lime transition-colors">Project Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-jac-lime transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Hours */}
          <div className="lg:pl-6">
            <h4 className="text-white uppercase tracking-wide text-lg mb-2">Hours of Operation</h4>
            <div className="w-8 h-0.5 bg-jac-lime mb-5"></div>
            <ul className="text-sm text-white/70 font-medium divide-y divide-white/10">
              <li className="flex justify-between py-2"><span>Monday – Friday</span><span className="font-bold text-jac-lime">8:00 AM – 6:00 PM</span></li>
              <li className="flex justify-between py-2"><span>Saturday</span><span className="font-bold text-white/80">Closed</span></li>
              <li className="flex justify-between py-2"><span>Sunday</span><span className="font-bold text-white/80">Closed</span></li>
            </ul>
            <p className="text-xs text-white/50 italic mt-4">Free inspections available — call to schedule.</p>
          </div>

          {/* Contact */}
          <div className="lg:pl-6">
            <h4 className="text-white uppercase tracking-wide text-lg mb-2">Get In Touch</h4>
            <div className="w-8 h-0.5 bg-jac-lime mb-5"></div>
            <ul className="space-y-4 text-sm text-white/70 font-medium">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-jac-lime mt-0.5 shrink-0" />
                <a href="tel:9039328150" className="hover:text-jac-lime transition-colors font-bold text-base text-white">(903) 932-8150</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-jac-lime mt-0.5 shrink-0" />
                <a href="mailto:bestwayfoundationrepair936@gmail.com" className="hover:text-jac-lime transition-colors break-all">bestwayfoundationrepair936@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-jac-lime mt-0.5 shrink-0" />
                <span>Longview, TX, United States<br /><span className="text-white/50 italic">Proudly serving Longview and all surrounding areas.</span></span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 text-white/60 text-xs">
          <div className="max-w-[1400px] mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-2">
            <span>&copy; 2026 Best Way Foundation Repair LLC — All rights reserved.</span>
            <span>2 Generations Leveling You!</span>
          </div>
        </div>
      </footer>

      <FloatingContact />
    </div>
  );
}
