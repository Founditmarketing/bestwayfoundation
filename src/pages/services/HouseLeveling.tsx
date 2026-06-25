import React from 'react';
import ServiceTemplate from '../../components/ServiceTemplate';


export default function HouseLeveling({ isLoading }: { isLoading?: boolean }) {
  return (
    <ServiceTemplate
      isLoading={isLoading}
      title="House Leveling"
      subtitle="Restoring Balance and Stability."
      image="/Survey-Automatic-Level-on-Tripod.H03.2k.png"
      heroImage="/jacitgallery3.jpeg"
      content={
        <>
          <p>
            At Best Way Foundation Repair LLC, we specialize in professional house leveling services that restore balance, safety, and stability to your home. As a second-generation business with over 25 years of experience, our team accurately identifies areas of settling or uneven floors. Owner James Wilson is on-site for every job, ensuring we use advanced equipment to lift and level your home with precision and care.
          </p>
          <p>
            Our process combines expert technique with our "No Cut Corners" philosophy. From adjusting piers and beams to reinforcing supports using only heavy-duty materials, every step is performed to ensure long-term stability. We also address contributing factors—such as poor drainage or shifting soil—to prevent future settling and foundation issues.
          </p>
          <p>
            Proudly serving Longview and all surrounding areas, we’re dedicated to results that last. When your home needs to be lifted, leveled, or stabilized, trust Best Way to restore its foundation and your peace of mind.
          </p>
          
          <div className="mt-10 bg-gray-50 border-l-4 border-jac-green p-6 shadow-sm">
            <h3 className="font-display font-bold text-2xl text-jac-charcoal uppercase mb-3">How it Works</h3>
            <p className="text-gray-700">
              We begin with a full inspection to locate uneven areas or settling in your home. Using precision jacks and advanced leveling equipment, we carefully lift and realign your structure to its proper position. Damaged supports are reinforced with heavy-duty materials for long-term stability—restoring balance, safety, and confidence in your home’s foundation.
            </p>
          </div>
        </>
      }
    />
  );
}
