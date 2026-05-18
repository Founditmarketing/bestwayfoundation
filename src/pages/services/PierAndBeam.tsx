import React from 'react';
import ServiceTemplate from '../../components/ServiceTemplate';


export default function PierAndBeam({ isLoading }: { isLoading?: boolean }) {
  return (
    <ServiceTemplate
      isLoading={isLoading}
      title="Pier & Beam Expert"
      subtitle="Restoring Stability to Crawlspace Foundations."
      image="/Concrete-Pillar.H03.2k.png"
      heroImage="/jacitgallery.jpeg"
      content={
        <>
          <p>
            At Best Way Foundation Repair LLC, we specialize in precise pier and beam repair to keep your home safe, stable, and structurally sound. As a second-generation business with over 25 years of hands-on experience, our team carefully inspects every beam, pier, and support system. Owner James Wilson is on-site for every job, ensuring we use proven repair methods and state-of-the-art equipment to lift, level, and reinforce your foundation with accuracy and reliability.
          </p>
          <p>
            Our approach combines efficiency and craftsmanship with our "No Cut Corners" philosophy. From replacing damaged beams to adjusting supports and ensuring proper alignment, every project is handled with care using only heavy-duty materials. We also address underlying issues, including moisture and drainage, to prevent future damage.
          </p>
          <p>
            Serving Lufkin and all surrounding areas, we take pride in delivering results that stand the test of time. When it comes to pier and beam repair, trust Best Way to protect your home and provide lasting peace of mind.
          </p>
          
          <div className="mt-10 bg-gray-50 border-l-4 border-jac-green p-6 shadow-sm">
            <h3 className="font-display font-bold text-2xl text-jac-charcoal uppercase mb-3">How it Works</h3>
            <p className="text-gray-700">
              We inspect your home for damaged beams and uneven floors, then lift and level it using precision equipment. Damaged supports are replaced or reinforced with heavy-duty materials, and drainage issues are corrected to prevent future problems. The result: a stable, level foundation and a home built to last.
            </p>
          </div>
        </>
      }
    />
  );
}
