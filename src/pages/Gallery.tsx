import React from 'react';
import { ArrowRight, Facebook, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Gallery({ isLoading }: { isLoading?: boolean }) {
  return (
    <>
      {/* Page Banner */}
      <section className="relative bg-jac-green overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/jacitgallery.jpeg"
            alt="Best Way Gallery Background"
            className="w-full h-full object-cover object-center opacity-15"
          />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 py-16 md:py-24 text-center">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase text-white mb-4">Project Gallery</h1>
          <p className="text-lg md:text-xl text-jac-lime font-bold uppercase tracking-widest">
            Take a look at our professional foundation repair.
          </p>
          <div className="section-divider mt-6 mx-auto"></div>
        </div>
      </section>

      {/* Gallery Coming Soon */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-5xl uppercase text-jac-green mb-6">Gallery Coming Soon</h2>
          <div className="section-divider mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-500 mb-10 leading-relaxed">
            We are currently compiling our latest project photos. In the meantime, please check out our Facebook page for recent updates and before &amp; afters!
          </p>
          <a href="https://www.facebook.com/profile.php?id=61589371986773" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-[#1877F2] text-white px-8 py-4 rounded-md font-bold tracking-wide uppercase hover:bg-[#0e5fc5] transition-colors shadow-lg">
            <Facebook className="w-6 h-6" /> Visit Our Facebook
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-jac-green py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white uppercase mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-white/85 mb-10 max-w-2xl mx-auto">Contact us today for a free evaluation and professional structural assessment.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="w-full sm:w-auto bg-jac-lime text-jac-green px-8 py-4 rounded-md font-bold uppercase tracking-wider hover:bg-white transition-colors flex items-center justify-center gap-2 shadow-md">
              Get a Free Quote <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="tel:9039328150" className="w-full sm:w-auto border-2 border-white text-white px-8 py-4 rounded-md font-bold uppercase tracking-wider hover:bg-white hover:text-jac-green transition-colors flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" /> (903) 932-8150
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
