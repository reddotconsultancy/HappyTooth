"use client";

import React from "react";
import Image from "next/image";
import BreadcrumbHero from "@/components/BreadcrumbHero";
import ScrollReveal from "@/components/ScrollReveal";

import { servicesData } from "@/lib/services-data";

export default function Services() {
 const serviceCards = [
  { name: "Root Canal", link: "#ENDODONTICS" },
  { name: "Smile Design", link: "#COSMETIC" },
  { name: "Aligners & Braces", link: "#Orthodontics" },
  { name: "Teeth Whitening", link: "#TeethWhitening" },
  { name: "Paediatric Dentistry", link: "#Pediatric" },
  { name: "Dental Implants", link: "#DentalImplants" },
  { name: "Crowns & Bridges", link: "#Restorative" },
  { name: "Dental Veneers", link: "#DentalVeneers" },
  { name: "Gum Care", link: "#GumCare" },
  { name: "Scaling & Polishing", link: "#Preventive" },
  { name: "Extractions", link: "#ExtractionsWisdom" },
  { name: "Dentures & Rehab", link: "#DenturesRehab" },
  { name: "Diagnostics & X-Rays", link: "#XraysDiagnostics" },
  { name: "Emergency Care", link: "#EmergencyCare" },
 ];


 return (
  <div>
   {/* Breadcrumb Header */}
   <BreadcrumbHero
    title="Our Services"
    currentPage="Services"
    bgImage="/images/happytooth-varkala5.jpg"
   />

   {/* Sticky Top Sub-navigation */}
   <section className="services-subnav sticky top-20 lg:top-32 z-20 bg-white/95 backdrop-blur-md py-4 border-b border-gray-100 shadow-sm">
    <div className="max-w-7xl mx-auto px-4">
     <div className="flex flex-wrap items-center justify-center gap-2.5 py-1">
      {serviceCards.map((card, idx) => (
       <a
        key={idx}
        href={card.link}
        className="bg-bg-light-blue/60 hover:bg-primary-teal hover:text-white text-navy-blue font-bold text-[10px] md:text-xs py-2 px-3.5 rounded-full border border-gray-200/50 transition-all duration-300 transform hover:-translate-y-0.5"
       >
        {card.name}
       </a>
      ))}
     </div>
    </div>
   </section>

   {/* Intro Summary Banner */}
   <section className="py-12 bg-white text-center">
    <div className="max-w-4xl mx-auto px-4">
     <span className="text-primary-teal font-extrabold text-xs tracking-wider uppercase bg-primary-teal/10 py-1.5 px-4 rounded-full inline-block mb-4">
      Comprehensive Treatments
     </span>
     <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-blue leading-tight mb-4">
      Specialised Dental Treatments
     </h2>
     <p className="text-xs md:text-sm text-soft-gray leading-relaxed">
      A complete guide to the dental treatments available at HappyTooth Smile Studio. Each service listed here is delivered by our specialist team, led by Dr. Thushara Sudhakaran BDS MDS, Clinical Director & Root Canal Specialist, with a focus on precision, patient comfort, and outcomes that last.
     </p>
     <div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-xs text-navy-blue font-extrabold">
      <span className="bg-bg-light-blue py-1.5 px-3 rounded-lg border border-gray-100">✓ Advanced chair facility</span>
      <span className="bg-bg-light-blue py-1.5 px-3 rounded-lg border border-gray-100">✓ Digital diagnostics</span>
      <span className="bg-bg-light-blue py-1.5 px-3 rounded-lg border border-gray-100">✓ Specialist endodontist on site</span>
     </div>
    </div>
   </section>

   {/* DETAILED SERVICES SECTIONS */}
   <div className="divide-y divide-gray-100 border-t border-gray-100 bg-transparent">
    {servicesData.map((svc, idx) => {
     const isEven = idx % 2 === 0;
     return (
      <section
       key={svc.id}
       id={svc.id}
       className={`services-section py-20 scroll-mt-[152px] lg:scroll-mt-[200px] relative ${isEven ? "bg-white" : "bg-bg-light-blue/15"}`}
      >
       {/* Blur accent halos */}
       <div className={`absolute top-1/4 w-80 h-80 rounded-full blur-3xl opacity-30 ${isEven ? "right-0 bg-primary-teal/10" : "left-0 bg-accent-teal/10"}`}></div>

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
         
         {/* Left Column: Image (Alternates position on desktop) */}
         <ScrollReveal 
          animation={isEven ? "fade-right" : "fade-left"} 
          className={`lg:col-span-5 relative ${isEven ? "" : "lg:order-2"}`}
         >
          <div className="rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-150 bg-white p-3 hover-lift">
           <div className="relative h-72 md:h-96 rounded-[1.8rem] overflow-hidden bg-gray-50 img-zoom">
            <Image
             src={svc.image}
             alt={`${svc.title} treatment procedure`}
             fill
             sizes="(max-width: 1024px) 100vw, 480px"
             className="object-cover transition-transform duration-700 ease-out"
            />
           </div>
          </div>
         </ScrollReveal>

         {/* Right Column: Copy details */}
         <ScrollReveal 
          animation={isEven ? "fade-left" : "fade-right"} 
          className={`lg:col-span-7 space-y-6 ${isEven ? "" : "lg:order-1"}`}
         >
          <div className="space-y-2">
           <span className="text-primary-teal font-extrabold text-[10px] md:text-xs tracking-wider uppercase bg-primary-teal/10 py-1 px-3.5 rounded-full inline-block">
            {svc.subtitle.split(" | ")[0].trim()}
           </span>
           <h2 className="text-2xl md:text-3xl font-extrabold text-navy-blue leading-tight">
            {svc.title}
           </h2>
           <span className="block text-xs font-bold text-soft-gray">
            {svc.subtitle}
           </span>
          </div>

          <div className="space-y-4 text-xs md:text-sm text-soft-gray leading-relaxed text-justify ">
           <p>{svc.desc}</p>
           <p>{svc.methodDetail}</p>
          </div>

          {/* Checkmarks / Detail Blocks row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-gray-150">
           <div>
            <h4 className="font-extrabold text-navy-blue mb-3 text-xs md:text-sm uppercase tracking-wider">
             {svc.whoNeedsTitle}
            </h4>
            <ul className="space-y-2.5 text-xs md:text-sm text-soft-gray font-medium">
             {svc.whoNeedsItems.map((item, keyIdx) => (
              <li key={keyIdx} className="flex items-start gap-2">
               <span className="flex-shrink-0 w-4 h-4 rounded-full bg-primary-teal/15 flex items-center justify-center text-primary-teal text-[10px] mt-0.5">✓</span>
               <span>{item}</span>
              </li>
             ))}
            </ul>
           </div>

           {/* Expectation highlight box */}
           <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-gray-150 shadow-sm flex flex-col justify-between hover-lift">
            <div className="space-y-2">
             <h4 className="font-extrabold text-navy-blue text-xs md:text-sm uppercase tracking-wider">
              {svc.expectTitle}
             </h4>
             <p className="text-xs md:text-sm text-soft-gray leading-relaxed">
              {svc.expectDesc}
             </p>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-150 flex flex-col gap-2">
             <div>
              <span className="uppercase text-[9px] font-black tracking-wider px-2 py-0.5 bg-primary-teal/15 text-primary-teal rounded-full inline-block">
               Clinical Insight
              </span>
             </div>
             <p className="text-xs md:text-sm text-navy-blue font-semibold leading-relaxed">
              {svc.whyHere}
             </p>
            </div>
           </div>
          </div>
         </ScrollReveal>

        </div>
       </div>
      </section>
     );
    })}
   </div>
  </div>
 );
}
