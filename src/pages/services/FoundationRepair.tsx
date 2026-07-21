import React from 'react';
import ServiceTemplate from '../../components/ServiceTemplate';


export default function FoundationRepair({ isLoading }: { isLoading?: boolean }) {
  return (
    <ServiceTemplate
      isLoading={isLoading}
      title="Foundation Repair"
      subtitle="Securing Concrete Slab Foundations."
      image="/Construction-Foundation-Pit.H03.2k.png"
      heroImage="/jacitgallery2.jpeg"
      content={
        <>
          <p>
            At Best Way Foundation Repair LLC, we specialize in dependable foundation repair solutions that keep your home safe, level, and structurally sound. As a second-generation business with over 25 years of hands-on experience, our team carefully evaluates every crack, shift, and settling issue to pinpoint the root cause before it becomes a serious problem. Owner James Wilson is on-site for every job to ensure we stabilize, lift, and restore your foundation with precision and care.
          </p>
          <p>
            Our process blends craftsmanship with efficiency. We believe in "No Cut Corners," exclusively utilizing heavy-duty, engineering-approved materials for maximum stability. From reinforcing weakened areas to filling voids and correcting alignment, every project is completed with close attention to detail and long-term durability in mind.
          </p>
          <p>
            Proudly serving Longview and all surrounding areas, we’re dedicated to delivering results that stand firm for decades. When it comes to foundation repair, trust Best Way to strengthen your home from the ground up.
          </p>
          
          <div className="mt-10 bg-gray-50 border-l-4 border-jac-lime p-6 shadow-sm">
            <h3 className="font-display font-bold text-2xl text-jac-charcoal uppercase mb-3">How it Works</h3>
            <p className="text-gray-700">
              We begin with a detailed inspection to identify cracks, settling, or structural weaknesses in your foundation. Using advanced equipment and proven repair methods, we lift, stabilize, and reinforce your home’s base with heavy-duty materials to restore strength and balance. The result: a secure, long-lasting foundation that protects your home for years to come.
            </p>
          </div>
        </>
      }
    />
  );
}
