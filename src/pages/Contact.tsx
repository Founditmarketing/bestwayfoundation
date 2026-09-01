import React from 'react';
import { ArrowRight, Phone, Mail, MapPin, Clock } from 'lucide-react';
import Img from '../components/Img';
import LeadForm from '../components/LeadForm';


export default function Contact() {
  return (
    <>
      {/* Page Banner */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Img
            src="/img/foundation-repair-longview-tx.jpg"
            alt="Best Way Foundation Repair serving Longview, Texas"
            priority
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
          <LeadForm
            heading="Request an Estimate"
            idPrefix="contact"
            className="bg-white rounded-lg shadow-xl border border-gray-200 p-8 md:p-10 space-y-4"
          />
        </div>
      </section>
    </>
  );
}
