import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const BrandName = () => (
  <span className="font-bold uppercase tracking-wide text-jac-lime">Best Way</span>
);



interface ServiceTemplateProps {
  isLoading?: boolean;
  title: string;
  subtitle?: string;
  image: string;
  heroImage?: string;
  content: React.ReactNode;

}

export default function ServiceTemplate({ isLoading, title, subtitle, image, heroImage, content }: ServiceTemplateProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 bg-jac-dark overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage || "/jacitgallery.jpeg"}
            alt={`${title} Background`}
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
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: isLoading ? 0.9 : 0.2 }}
              className="text-xl md:text-2xl text-jac-lime font-bold uppercase tracking-widest max-w-2xl"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </section>

      {/* Body Content (Split Layout) */}
      <section className="relative bg-white overflow-hidden py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Text */}
          <div className="order-2 lg:order-1">
            <h2 className="font-display  text-3xl md:text-5xl uppercase text-jac-charcoal mb-8">
              Expert <span className="text-jac-green">Service</span> Execution
            </h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              {content}
            </div>
            
            <div className="mt-10">
              <Link to="/contact" className="inline-flex items-stretch group relative overflow-hidden border border-jac-green text-jac-charcoal">
                <div className="absolute inset-0 bg-jac-green w-0 group-hover:w-full transition-all duration-300 ease-out z-0"></div>
                <div className="group-hover:text-white px-8 py-4 font-bold tracking-wide text-sm flex items-center justify-center relative z-10 transition-colors duration-300 uppercase">
                  Schedule Free Inspection
                </div>
                <div className="border-l border-jac-green group-hover:border-transparent group-hover:text-white px-6 flex items-center justify-center relative z-10 transition-colors duration-300">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 w-full overflow-hidden rounded-sm group flex items-start justify-center lg:justify-end">
            <img 
              src={image} 
              alt={title} 
              className="w-full max-w-md lg:max-w-[90%] xl:max-w-[80%] h-auto object-contain object-top group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>


      {/* Final Call to Action */}
      <section className="bg-black py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-jac-green/10 via-black to-black"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 relative z-10 text-center">
          <h2 className="font-display  text-3xl sm:text-4xl md:text-6xl text-white uppercase mb-4 tracking-tight">
            Level up your home—<br className="hidden md:block"/>Call <BrandName /> today!
          </h2>
          <div className="flex flex-col items-center gap-6 justify-center text-white mt-10">
            <div className="flex flex-col items-center gap-1">
              <a href="tel:9362385604" className="text-3xl md:text-5xl font-bold hover:text-jac-lime transition-colors tracking-wide flex items-center gap-4">
                <Phone className="w-8 h-8 md:w-10 md:h-10 text-jac-lime" />
                (936) 238-5604
              </a>
            </div>

            <div className="mt-6 inline-block">
              <Link to="/contact" className="flex items-stretch group relative overflow-hidden border border-jac-lime">
                <div className="absolute inset-0 bg-jac-lime w-0 group-hover:w-full transition-all duration-300 ease-out z-0"></div>
                <div className="bg-black/30 group-hover:bg-transparent group-hover:text-jac-charcoal backdrop-blur-sm text-jac-lime px-6 sm:px-10 py-4 sm:py-5 font-bold tracking-wide text-sm sm:text-xl flex items-center justify-center border-r-0 relative z-10 transition-all duration-300 uppercase">
                  Schedule Free Inspection
                </div>
                <div className="bg-jac-lime/10 group-hover:bg-transparent border-l border-jac-lime/30 group-hover:border-jac-lime/0 px-4 sm:px-6 flex items-center justify-center relative z-10 transition-colors duration-300">
                  <ArrowRight className="w-6 h-6 text-jac-lime group-hover:text-jac-charcoal group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
