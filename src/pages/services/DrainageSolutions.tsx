import React from 'react';
import ServiceTemplate from '../../components/ServiceTemplate';


export default function DrainageSolutions({ isLoading }: { isLoading?: boolean }) {
  return (
    <ServiceTemplate
      isLoading={isLoading}
      title="Drainage Solutions"
      subtitle="Protecting Foundations from Water Damage."
      image="/Steel-Shower-Drain.H03.2k.png"
      heroImage="/jacitimage.jpg"
      content={
        <>
          <p>
            At Best Way Foundation Repair LLC, we specialize in effective drainage solutions to protect homes from water damage, soil erosion, and foundation problems. As a second-generation business with over 25 years of hands-on experience, our team carefully evaluates your property to identify water flow issues. Owner James Wilson is on-site for every job to ensure we provide custom solutions that protect the stability of your foundation.
          </p>
          <p>
            Our approach combines precision and craftsmanship. We believe in "No Cut Corners," installing French drains, grading solutions, vapor barriers, and water diversion systems using heavy-duty materials. Every project is completed with attention to detail to ensure proper drainage and long-term protection. We also address underlying moisture and soil concerns to prevent future foundation damage.
          </p>
          <p>
            Serving Longview and all surrounding areas, we take pride in delivering durable, reliable drainage solutions. When it comes to drainage and water management, trust Best Way to safeguard your home and provide lasting peace of mind.
          </p>
          
          <div className="mt-10 bg-gray-50 border-l-4 border-jac-green p-6 shadow-sm">
            <h3 className="font-display font-bold text-2xl text-jac-charcoal uppercase mb-3">How it Works</h3>
            <p className="text-gray-700">
              We start with a thorough inspection to identify water flow issues, pooling, and soil erosion around your home. Customized solutions—such as French drains, grading adjustments, and vapor barriers—are installed using heavy-duty, engineering-approved materials to redirect water away from your foundation. These measures protect your home from moisture damage, stabilize the soil, and prevent future foundation problems.
            </p>
          </div>
        </>
      }
    />
  );
}
