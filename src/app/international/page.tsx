import React from "react";
import Image from "next/image";
import BreadcrumbHero from "@/components/BreadcrumbHero";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
 title: "Dental Tourism in Kerala | Specialized Care for NRI & International Patients",
 description: "High-quality specialized dental care and root canal treatments in Kerala, India for NRIs, international tourists, and Maldivian patients. Book pre-travel consultations.",
 alternates: { canonical: "/international" },
 openGraph: {
  title: "Dental Tourism Kerala | NRI & International Dental Care \u2014 HappyTooth",
  description: "Specialist dental treatments in Kerala for NRI & international patients. Pre-travel consultations, root canals, implants, aligners. Book your visit at HappyTooth.",
  url: "/international",
  images: [
   {
    url: "/images/happytooth-varkala12-1.jpg",
    width: 1200,
    height: 630,
    alt: "HappyTooth Dental Clinics \u2014 International patients & dental tourism Kerala",
   },
  ],
 },
};

export default function InternationalPatients() {
 const steps = [
  {
   step: "Step 1",
   title: "Reach out before you travel",
   desc: "Contact us on WhatsApp or arrange a video call before your trip. Tell us what's been bothering you, share any existing X-rays or dental reports, and we'll give you an honest assessment of what's needed, and how long it will take. You'll know the treatment plan and the approximate cost before you board a flight.",
  },
  {
   step: "Step 2",
   title: "We schedule around your dates",
   desc: "Once we know how long you'll be in Thiruvananthapuram, we plan the treatment to fit. Most dental work, including root canals, implant consultations, crowns, whitening, and scaling, can be completed within a visit of a few days to two weeks. We tell you upfront what's realistic for your timeframe.",
  },
  {
   step: "Step 3",
   title: "Walk in, get treated",
   desc: "Your appointment is confirmed in advance. You come in, the treatment happens as planned, and we make sure you leave with everything you need, prescriptions, documentation for your records abroad, and clear instructions for aftercare. If you need to continue treatment at home with your regular dentist, we'll make sure they have everything to pick up where we left off.",
  },
  {
   step: "Step 4",
   title: "Follow-up after you leave",
   desc: "After you return home, we're reachable on WhatsApp if anything comes up. Questions about healing, discomfort that concerns you, or just wanting to know if something is normal, we respond. You're not on your own once you've left the clinic.",
  },
 ];

 const reasons = [
  {
   title: "Specialist-led care",
   desc: "Every treatment is delivered by a specialist with postgraduate training in that specific field. You get the same standard of care here that you would expect from a specialist clinic abroad, at a very different cost.",
  },
  {
   title: "Planned around your schedule",
   desc: "We don't ask you to come back five times over five weeks. Treatment is planned to fit your time in Kerala, efficiently, without cutting corners on quality or rushing procedures.",
  },
  {
   title: "Consult before you arrive",
   desc: "Share your X-rays, reports, or concerns over WhatsApp or video call. We assess, plan, and cost your treatment before you travel. You arrive knowing exactly what to expect.",
  },
  {
   title: "International cards accepted",
   desc: "We accept all major international debit and credit cards. No need to carry cash or arrange a currency exchange before your appointment.",
  },
  {
   title: "Full documentation provided",
   desc: "Treatment records, X-rays, prescriptions, and clinical notes, all provided on request in a format your dentist at home can use. Continuity of care doesn't stop.",
  },
  {
   title: "English, Malayalam & Hindi",
   desc: "We communicate fluently in English, Malayalam, and Hindi. You won't spend your appointment struggling to understand what's happening or what you're being asked to decide.",
  },
 ];

 const cards = [
  {
   title: "Consultation",
   badge: "WhatsApp or video call",
   desc: "Available before your visit. Share reports and X-rays digitally. Treatment plan and cost estimate provided in advance.",
  },
  {
   title: "Languages",
   badge: "English · Malayalam · Hindi",
   desc: "All clinical discussions, treatment explanations, and written instructions available in your preferred language.",
  },
  {
   title: "Payment",
   badge: "International cards accepted",
   desc: "Visa, Mastercard, and other major international debit and credit cards. UPI and cash also accepted.",
  },
  {
   title: "Location",
   badge: "Thiruvananthapuram, Kerala",
   desc: "Accessible from Trivandrum International Airport. Well connected by road to Kovalam, Varkala, and surrounding tourist areas.",
  },
  {
   title: "Clinic Hours",
   badge: "Open all 7 days",
   desc: "HappyTooth Smile Studio is open Monday through Sunday, 9:30 AM to 6:30 PM, including weekends and public holidays.",
  },
  {
   title: "After Your Visit",
   badge: "WhatsApp follow-up available",
   desc: "Reach us after you return home with any questions. We stay reachable throughout your recovery.",
  },
 ];

 return (
  <div>
   {/* Breadcrumb Header */}
   <BreadcrumbHero
    title="International Patients"
    currentPage="International Patients"
    bgImage="/images/teeth_whitening_smile.png"
   />

   {/* 1. Header description */}
   <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      
      <ScrollReveal animation="fade-right" className="lg:col-span-7 space-y-6">
       <span className="text-primary-teal font-extrabold text-xs tracking-wider uppercase bg-primary-teal/10 py-1.5 px-4 rounded-full inline-block">
        World-Class Dental Tourism
       </span>
       <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-blue leading-tight">
        Quality dental care, <br />
        <span className="text-accent-teal">planned around your visit.</span>
       </h2>
       <p className="text-soft-gray text-base leading-relaxed">
        {`Whether you're an NRI visiting family, a tourist passing through Thiruvananthapuram, or travelling specifically for treatment, we make sure your dental care fits around your time here, not the other way around.`}
       </p>
       <div className="text-xs font-bold text-navy-blue flex items-center gap-3">
        <span className="bg-bg-light-blue py-1.5 px-4 rounded-lg flex items-center gap-1.5">
         <svg className="w-4 h-4 text-primary-teal shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
         </svg>
         Languages: English · Malayalam · Hindi
        </span>
       </div>
       <div className="text-sm text-soft-gray space-y-4">
        <p>
         {`Many of our patients are visiting Kerala from abroad, NRIs back home for a few weeks, tourists who've extended their stay, or patients from the Maldives who make the short trip across for specialist dental treatment. What they all have in common is that their time here is limited and their expectations are high.`}
        </p>
        <p>
         {`We've built a straightforward process for international patients: consult before you arrive, plan your treatment schedule in advance, and walk in knowing exactly what's going to happen. No surprises, no wasted trips.`}
        </p>
       </div>
      </ScrollReveal>

      {/* Accent image */}
      <ScrollReveal animation="fade-left" className="lg:col-span-5 relative">
       <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-150 bg-white p-3 hover-lift">
        <div className="relative h-96 rounded-[1.8rem] overflow-hidden img-zoom">
         <Image
          src="/images/indian_smile_design.png"
          alt="International Patient Dental Care Kerala"
          fill
          sizes="(max-width: 1024px) 100vw, 480px"
          className="object-cover transition-transform duration-700 ease-out"
         />
        </div>
       </div>
      </ScrollReveal>

     </div>
    </div>
   </section>

   {/* 2. HOW IT WORKS (4 steps timeline) */}
   <section className="py-20 bg-bg-light-blue/20 border-t border-b border-gray-100">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
     <div className="text-center mb-16 space-y-4">
      <span className="text-primary-teal font-extrabold text-xs tracking-wider uppercase bg-primary-teal/10 py-1.5 px-4 rounded-full inline-block">
       Workflow Guide
      </span>
      <h2 className="text-3xl font-extrabold text-navy-blue">How It Works</h2>
      <p className="text-soft-gray text-xs md:text-sm max-w-md mx-auto">
       Four simple stages designed to coordinate your dental treatments efficiently before, during, and after your trip.
      </p>
     </div>

     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {steps.map((st, idx) => (
       <ScrollReveal key={idx} animation="fade-up" delay={idx + 1}>
        <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-150 shadow-sm space-y-3 hover-lift h-full">
         <span className="inline-block text-xs font-bold text-primary-teal bg-primary-teal/10 px-3.5 py-1 rounded-full">
          {st.step}
         </span>
         <h3 className="text-lg font-bold text-navy-blue">{st.title}</h3>
         <p className="text-xs md:text-sm text-soft-gray leading-relaxed text-justify ">{st.desc}</p>
        </div>
       </ScrollReveal>
      ))}
     </div>
    </div>
   </section>

   {/* 3. WHY PATIENTS CHOOSE HAPPYTOOTH */}
   <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
      <span className="text-primary-teal font-extrabold text-xs tracking-wider uppercase bg-primary-teal/10 py-1.5 px-4 rounded-full inline-block">
       Advantages
      </span>
      <h2 className="text-3xl font-extrabold text-navy-blue">
       Why Patients Choose HappyTooth
      </h2>
     </div>

     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {reasons.map((r, idx) => (
       <ScrollReveal key={idx} animation="fade-up" delay={idx % 3}>
        <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-150 shadow-sm flex flex-col gap-2 hover-lift h-full">
         <h4 className="font-extrabold text-primary-teal text-sm md:text-base flex items-center gap-2">
          <span className="w-1.5 h-3.5 bg-primary-teal rounded-full"></span>
          {r.title}
         </h4>
         <p className="text-xs md:text-sm text-soft-gray leading-relaxed text-justify ">{r.desc}</p>
        </div>
       </ScrollReveal>
      ))}
     </div>
    </div>
   </section>

   {/* 4. PRACTICAL INFORMATION CARDS */}
   <section className="py-20 bg-bg-light-blue/20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
      <span className="text-primary-teal font-extrabold text-xs tracking-wider uppercase bg-primary-teal/10 py-1.5 px-4 rounded-full inline-block">
       Travel Logistics
      </span>
      <h2 className="text-3xl font-extrabold text-navy-blue">
       Practical Information
      </h2>
     </div>

     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((c, idx) => (
       <ScrollReveal key={idx} animation="fade-up" delay={idx % 3}>
        <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-150 shadow-sm flex flex-col justify-between hover-lift h-full">
         <div className="space-y-2">
          <h4 className="font-extrabold text-navy-blue text-base md:text-lg">{c.title}</h4>
          <span className="block text-xs font-bold text-accent-teal uppercase tracking-wider">
           {c.badge}
          </span>
          <p className="text-xs md:text-sm text-soft-gray leading-relaxed pt-1 text-justify ">{c.desc}</p>
         </div>
        </div>
       </ScrollReveal>
      ))}
     </div>
    </div>
   </section>

   {/* 5. GET IN TOUCH CTA */}
   <section className="py-20 bg-white border-t border-gray-100">
    <ScrollReveal animation="scale" className="max-w-4xl mx-auto px-4 text-center space-y-6">
     <h2 className="text-2xl sm:text-3xl font-bold text-navy-blue">
      {`Start with a message. We'll take it from there.`}
     </h2>
     <p className="text-xs md:text-sm text-soft-gray leading-relaxed max-w-xl mx-auto text-justify ">
      {`You don't need to wait until you arrive to know what your treatment will involve or what it will cost. Send us a message, share whatever reports or scans you have, and we'll give you a clear picture before you travel.`}
     </p>

     <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
      <a
       href="https://wa.me/917356100602"
       target="_blank"
       rel="noopener noreferrer"
       className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-3.5 px-8 rounded-full transition-all duration-300 shadow-md flex items-center justify-center gap-2 text-xs transform hover:-translate-y-0.5 active:scale-95"
      >
       <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
       </svg>
       <span>Chat on WhatsApp</span>
      </a>
      <a
       href="tel:+917356100602"
       className="w-full sm:w-auto border border-navy-blue/20 hover:border-navy-blue text-navy-blue font-bold py-3.5 px-8 rounded-full transition-all duration-300 text-center text-xs transform hover:-translate-y-0.5 active:scale-95"
      >
       Call Murukkumpuzha: +91 73561 00602
      </a>
      <a
       href="tel:+918714470808"
       className="w-full sm:w-auto border border-navy-blue/20 hover:border-navy-blue text-navy-blue font-bold py-3.5 px-8 rounded-full transition-all duration-300 text-center text-xs transform hover:-translate-y-0.5 active:scale-95"
      >
       Call Kallambalam: +91 87144 70808
      </a>
     </div>
    </ScrollReveal>
   </section>
  </div>
 );
}
