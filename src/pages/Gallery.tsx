import React from 'react';
import { ArrowRight, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const galleryItems = [
  { src: "/jacitgallery.jpeg", title: "Wall Lifting", desc: "Hydraulic lifting of exterior brick foundation." },
  { src: "/jacitgallery2.jpeg", title: "Exterior Excavation", desc: "Foundation excavation on residential structure." },
  { src: "/jacitgallery3.jpeg", title: "Interior Leveling", desc: "Completed interior with newly leveled floors." },
  { src: "/jacitgallery4.jpeg", title: "Concrete Supports", desc: "Deep concrete block installation for stability." },
  { src: "/jacitgallery5.png", title: "Subfloor Installation", desc: "Installing new structural subfloors." },
  { src: "/jacitgallery6.png", title: "Joist Replacement", desc: "Replacing damaged floor joists." },
  { src: "/jacitgallery7.png", title: "Framework Repair", desc: "Securing interior joist framework." },
  { src: "/jacitimage.jpg", title: "Foundation Reinforcement", desc: "Expert assessment and repair of structural damage." },
  { src: "/presspiers.png", title: "Press Piers System", desc: "Heavy duty steel and concrete press pier installation." },
];

export default function Gallery({ isLoading }: { isLoading?: boolean }) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 bg-jac-dark overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/jacitgallery.jpeg"
            alt="Best Way Gallery Background"
            className="w-full h-full object-cover object-center grayscale opacity-30"
          />
          <div className="absolute inset-0 bg-jac-charcoal/80 mix-blend-multiply"></div>
          {/* Subtle Green Overlay */}
          <div className="absolute inset-0 bg-jac-green/20 mix-blend-overlay"></div>

          {/* White Bottom Corner Design */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
            {/* Sub Layer 1 */}
            <motion.div 
              initial={{ opacity: 0, x: 100, y: 100 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: isLoading ? 1.0 : 0.3 }}
              className="absolute inset-0 bg-white/20" style={{ clipPath: 'polygon(calc(100% - 38vw) 100%, 100% calc(100% - 38vw), 100% 100%)' }}
            ></motion.div>

            {/* Sub Layer 2 */}
            <motion.div 
              initial={{ opacity: 0, x: 100, y: 100 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: isLoading ? 0.9 : 0.2 }}
              className="absolute inset-0 bg-white/40" style={{ clipPath: 'polygon(calc(100% - 34vw) 100%, 100% calc(100% - 34vw), 100% 100%)' }}
            ></motion.div>

            {/* Solid White Corner */}
            <motion.div 
              initial={{ opacity: 0, x: 100, y: 100 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: isLoading ? 0.8 : 0.1 }}
              className="absolute inset-0 bg-white" style={{ clipPath: 'polygon(calc(100% - 30vw) 100%, 100% calc(100% - 30vw), 100% 100%)' }}
            ></motion.div>
          </div>
        </div>

        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 text-left">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: isLoading ? 0.8 : 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white uppercase tracking-wide mb-4"
          >
            Project Gallery
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: isLoading ? 0.9 : 0.2 }}
            className="text-xl md:text-2xl text-jac-lime font-bold uppercase tracking-widest max-w-2xl"
          >
            Take a look at our professional foundation repair.
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-white p-2 md:p-4 border-b border-gray-200 -mt-px relative z-20">
        <div className="w-full">
          <div className="flex flex-col items-center justify-center py-32 text-center px-6">
            <h3 className="font-display text-3xl md:text-5xl uppercase text-jac-charcoal mb-6">Gallery Coming Soon</h3>
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
              We are currently compiling our latest project photos. In the meantime, please check out our Facebook page for recent updates and before & afters!
            </p>
            <a href="https://www.facebook.com/profile.php?id=61589371986773" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-[#1877F2] text-white px-8 py-4 rounded-sm font-bold tracking-wide uppercase hover:bg-[#0e5fc5] transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1">
              <Facebook className="w-6 h-6" /> Visit Our Facebook
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-jac-dark py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-jac-green/10 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="font-display  text-4xl md:text-5xl text-white uppercase mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">Contact us today for a free evaluation and professional structural assessment.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="w-full sm:w-auto bg-jac-lime text-jac-charcoal px-8 py-4 font-bold uppercase tracking-wider hover:bg-white transition-colors flex items-center justify-center gap-2">
              Get a Free Quote <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="tel:9362385604" className="w-full sm:w-auto border-2 border-white text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-white hover:text-jac-charcoal transition-colors text-center">
              (936) 238-5604
            </a>
          </div>
        </div>
      </section>


    </>
  );
}
