import React from "react";
import BreadcrumbHero from "@/components/BreadcrumbHero";

export const metadata = {
 title: "Terms & Conditions",
 description: "Terms and conditions for HappyTooth Dental Care & Root Canal Centre website use.",
 alternates: { canonical: "/terms" },
};

export default function Terms() {
 return (
  <div>
   <BreadcrumbHero title="Terms & Conditions" currentPage="Terms" />
   <section className="py-20 bg-white">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose text-soft-gray space-y-6">
     <h2 className="text-2xl font-bold text-navy-blue">Website Usage Agreement</h2>
     <p>
      Welcome to the HappyTooth Dental Care & Root Canal Centre website. By accessing or using this website, you agree to comply with and be bound by the following terms and conditions of use.
     </p>
     
     <h3 className="text-xl font-bold text-navy-blue">1. Medical Information Disclaimer</h3>
     <p>
      The content provided on this website, including text, graphics, images, and information, is for general educational purposes only. It is not intended to be a substitute for professional medical or dental advice, diagnosis, or treatment. Always seek the advice of your dentist or other qualified health provider with any questions you may have regarding a dental condition.
     </p>

     <h3 className="text-xl font-bold text-navy-blue">2. Appointment Scheduling</h3>
     <p>
      Submitting an appointment request through our online form does not guarantee an appointment slot. Our clinic staff will contact you to confirm a mutually convenient date and time.
     </p>

     <h3 className="text-xl font-bold text-navy-blue">3. Intellectual Property</h3>
     <p>
      All content and assets on this website, including logos, designs, text, and images, are the property of HappyTooth Dental Care and are protected by applicable intellectual property laws. Reproduction or distribution of any materials without written permission is prohibited.
     </p>

     <h3 className="text-xl font-bold text-navy-blue">4. Modifications to Terms</h3>
     <p>
      We reserve the right to modify these terms and conditions at any time without prior notice. Your continued use of the website following any changes constitutes your acceptance of the revised terms.
     </p>
    </div>
   </section>
  </div>
 );
}
