import React from 'react';
import { ArrowRight, Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact({ isLoading }: { isLoading?: boolean }) {
  return (
    <>
      {/* Page Banner */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/jacitimage.jpg"
            alt="Contact Us background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-jac-navy-dark/95 via-jac-green/85 to-jac-green/50"></div>
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase text-white mb-4">Get In Touch</h1>
            <p className="text-lg md:text-xl text-white/85 font-medium">
              Reach out today for a free evaluation. Our experts are ready to secure your property's foundation with lasting results.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Info & Map - Left Side */}
          <div className="flex flex-col gap-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="w-12 h-12 rounded-full bg-jac-lime flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-jac-green" />
                </div>
                <h3 className="font-display text-lg uppercase text-jac-green mb-1">Call Us</h3>
                <a href="tel:9039328150" className="text-lg font-bold text-gray-700 hover:text-jac-green transition-colors">(903) 932-8150</a>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="w-12 h-12 rounded-full bg-jac-lime flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-jac-green" />
                </div>
                <h3 className="font-display text-lg uppercase text-jac-green mb-1">Email Us</h3>
                <a href="mailto:bestwayfoundationrepair936@gmail.com" className="text-sm font-semibold text-gray-700 hover:text-jac-green transition-colors break-all">bestwayfoundationrepair936@gmail.com</a>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="w-12 h-12 rounded-full bg-jac-lime flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-jac-green" />
                </div>
                <h3 className="font-display text-lg uppercase text-jac-green mb-1">Headquarters</h3>
                <p className="text-sm font-semibold text-gray-700">Longview, TX, United States</p>
                <p className="text-xs text-gray-500 italic mt-1">Proudly serving Longview and all surrounding areas.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="w-12 h-12 rounded-full bg-jac-lime flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-jac-green" />
                </div>
                <h3 className="font-display text-lg uppercase text-jac-green mb-1">Hours</h3>
                <p className="text-sm font-semibold text-gray-700">Mon – Fri: 8:00 AM – 6:00 PM</p>
                <p className="text-xs text-gray-500 italic mt-1">Free inspections available.</p>
              </div>
            </div>

            {/* Google Map */}
            <div className="h-[360px] w-full relative rounded-lg overflow-hidden shadow-lg border border-gray-200">
              <iframe
                src="https://www.google.com/maps?q=Longview,+TX&z=10&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                title="Best Way Foundation Repair service area map"
              ></iframe>
            </div>
          </div>

          {/* Form - Right Side */}
          <form className="bg-white rounded-lg shadow-xl border border-gray-200 p-8 md:p-10 space-y-4">
            <h2 className="font-display text-2xl md:text-3xl uppercase text-jac-green mb-1">Request an Estimate</h2>
            <div className="section-divider mb-6"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="fname" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">First Name *</label>
                <input type="text" id="fname" required className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-jac-green focus:ring-1 focus:ring-jac-green transition-colors" />
              </div>
              <div>
                <label htmlFor="lname" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Last Name *</label>
                <input type="text" id="lname" required className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-jac-green focus:ring-1 focus:ring-jac-green transition-colors" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Email Address *</label>
              <input type="email" id="email" required className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-jac-green focus:ring-1 focus:ring-jac-green transition-colors" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Phone Number *</label>
              <input type="tel" id="phone" required className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-jac-green focus:ring-1 focus:ring-jac-green transition-colors" />
            </div>
            <div>
              <label htmlFor="address" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Property Address</label>
              <input type="text" id="address" className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-jac-green focus:ring-1 focus:ring-jac-green transition-colors" />
            </div>
            <div>
              <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Service Needed *</label>
              <select id="service" defaultValue="" required className="w-full border border-gray-300 rounded-md px-4 py-3 bg-white focus:outline-none focus:border-jac-green focus:ring-1 focus:ring-jac-green transition-colors">
                <option value="" disabled>Select a Service...</option>
                <option value="foundation-repair">Foundation Repair</option>
                <option value="house-leveling">House Leveling</option>
                <option value="pier-and-beam">Pier &amp; Beam Repair</option>
                <option value="drainage-solutions">Drainage Solutions</option>
                <option value="other">Other / Not Sure</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">How Can We Help?</label>
              <textarea id="message" rows={4} className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-jac-green focus:ring-1 focus:ring-jac-green transition-colors resize-none"></textarea>
            </div>
            <button type="submit" className="w-full bg-jac-lime text-jac-green py-4 rounded-full font-bold uppercase tracking-wide text-base hover:bg-jac-green hover:text-white transition-colors shadow-md flex items-center justify-center gap-2">
              Submit Request <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
