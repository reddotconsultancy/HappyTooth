import React from "react";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbHero from "@/components/BreadcrumbHero";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
 title: "Modern Dental Infrastructure & Clean Clinic Facilities",
 description: "Explore the advanced clinical facilities, modern treatment technology, and hospital-grade sterilization standards at HappyTooth clinics in Murukkumpuzha and Kallambalam.",
};

export default function Facilities() {
 const diagnosticGear = [
  {
   title: "Portable Digital X-Ray",
   desc: "Digital X-rays produce a clear, detailed image of the tooth and surrounding bone in seconds, visible on screen immediately, with significantly less radiation than older film-based systems. There's no waiting, no chemical processing, and the image can be zoomed and examined in detail. For patients who feel anxious about X-rays, the speed and simplicity help.",
  },
  {
   title: "Intraoral Scanner",
   desc: "The traditional way of taking a dental impression involved filling a tray with putty and asking patients to hold it in their mouth for several minutes, uncomfortable, and occasionally triggering a gag reflex. A digital intraoral scanner replaces that entirely. A small wand is passed gently over the teeth and produces a precise 3D digital model in under two minutes. Used for crowns, bridges, aligners, and treatment planning.",
  },
  {
   title: "Intraoral Camera",
   desc: "A small, pen-sized camera that captures a live, close-up video of the inside of your mouth and displays it on the screen in front of you. Most patients have never seen their own teeth clearly before. When a dentist explains what's happening and you can actually see it, the treatment makes more sense and the decision to proceed feels less uncertain. No more taking a dentist's word for it.",
  },
 ];

 const treatmentGear = [
  {
   title: "Latest Dental Chairs",
   desc: "Dental chairs at Smile Studio are modern units designed for patient comfort and clinical efficiency. Smooth electronic positioning, padded headrests, and proper lumbar support make a real difference during longer procedures. The chair adjusts precisely for each treatment, rather than the patient having to sit in an awkward position because the equipment is limited.",
  },
  {
   title: "Advanced Ultrasonic Scaler with Air Polishing",
   desc: "Scaling, the removal of tartar and hardened deposits, has a reputation for being uncomfortable. The advanced ultrasonic scaler at Smile Studio uses precisely controlled vibrations to remove deposits with significantly less pressure and sensitivity than older manual instruments. The integrated air polishing removes surface stains and biofilm gently using a fine spray of water, air, and polishing powder, leaving teeth visibly cleaner with minimal abrasion and far less discomfort.",
  },
 ];

 const comfortFeatures = [
  {
   title: "In-Chair Television Screens",
   desc: "Every treatment chair has a screen positioned where patients can watch something during their appointment. It sounds simple, and it is, but having something to focus on during a procedure makes a measurable difference to how patients experience treatment time, particularly for longer appointments. Bring your own content or watch from what's on.",
   icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4" />
    </svg>
   ),
  },
  {
   title: "Noise-Cancelling Headphones",
   desc: "For many people, the sound of dental equipment is the hardest part. The drill, the suction, the scaling, these sounds trigger anxiety even in patients who are otherwise comfortable. Noise-cancelling headphones are available at every chair. Put them on, connect your phone, and the clinical sounds largely disappear. Use them with the in-chair screen, your own music, a podcast, or just silence.",
   icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14a3 3 0 000-4M19.5 17a6 6 0 000-10" />
    </svg>
   ),
  },
  {
   title: "Children's Play Area",
   desc: "Waiting for a sibling's appointment, or sitting with a parent who's about to go in, for a child, that wait can feel long and unfamiliar. The play area at Smile Studio gives younger patients and siblings something to do while they wait, in a space that feels less clinical and more welcoming. It also helps reduce the anxiety around the visit itself, children who associate the clinic with something positive are far easier to treat when it's their turn.",
   icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
   ),
  },
 ];

 return (
  <div>
   {/* Breadcrumb Header */}
   <BreadcrumbHero
    title="Our Facilities"
    currentPage="Facilities"
    bgImage="/images/teeth_whitening_smile.png"
   />

   {/* 1. Introduction section */}
   <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      
      {/* Gallery grids */}
      <ScrollReveal animation="fade-right" className="lg:col-span-5 grid grid-cols-2 gap-4">
       <div className="relative h-44 rounded-2xl overflow-hidden shadow-md border border-gray-50 bg-white p-2">
        <div className="relative w-full h-full rounded-xl overflow-hidden">
         <Image
          src="/images/happytooth-varkala4.jpg"
          alt="HappyTooth Smile Studio Waiting Lobby"
          fill
          sizes="(max-width: 768px) 50vw, 200px"
          className="object-cover"
         />
        </div>
       </div>
       <div className="relative h-44 rounded-2xl overflow-hidden shadow-md border border-gray-50 bg-white p-2">
        <div className="relative w-full h-full rounded-xl overflow-hidden">
         <Image
          src="/images/happytooth-varkala12-1.jpg"
          alt="Dental Cabin Chair Treatment Room"
          fill
          sizes="(max-width: 768px) 50vw, 200px"
          className="object-cover"
         />
        </div>
       </div>
       <div className="relative h-44 rounded-2xl overflow-hidden shadow-md border border-gray-50 bg-white p-2 col-span-2">
        <div className="relative w-full h-full rounded-xl overflow-hidden">
         <Image
          src="/images/happytooth-varkala1.jpg"
          alt="HappyTooth Clinic Exterior Setup"
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover"
         />
        </div>
       </div>
       </ScrollReveal>

      {/* Intro text details */}
      <ScrollReveal animation="fade-left" className="lg:col-span-7 space-y-6">
       <span className="text-primary-teal font-extrabold text-xs tracking-wider uppercase bg-primary-teal/10 py-1.5 px-4 rounded-full inline-block">
        HAPPYTOOTH SMILE STUDIO · MURUKKUMPUZHA
       </span>
       <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-blue leading-tight">
        Designed for comfort. <br />
        <span className="text-accent-teal">Built for precise outcomes.</span>
       </h2>
       
       <div className="space-y-4 text-soft-gray text-base leading-relaxed">
        <p className="font-bold text-navy-blue">
         {`Good dentistry needs the right tools. We've invested in equipment that makes treatment more accurate, faster, and genuinely more comfortable.`}
        </p>
        <p>
         {`HappyTooth Smile Studio is built from scratch as a full-service specialist clinic. Every piece of equipment here was chosen for a reason, not to fill a checklist, but because it changes something real about how treatment is delivered or how patients experience it.`}
        </p>
        <p className="text-xs md:text-sm border-l-4 border-primary-teal pl-4 py-1.5 bg-bg-light-blue/40 rounded-r-xl">
         The facilities listed here are at our Murukkumpuzha clinic. Our Kallambalam clinic, which has been serving patients since 2021, covers the core clinical services. Smile Studio is where everything comes together.
        </p>
       </div>
       </ScrollReveal>
      </div>

     </div>
   </section>

   {/* 2. Diagnostic Equipment Section */}
   <section className="py-20 bg-bg-light-blue/20 border-t border-b border-gray-100 relative">
    <div className="absolute top-10 right-0 w-80 h-80 bg-primary-teal/5 rounded-full blur-3xl"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
     <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      
      {/* Tech Descriptions */}
      <div className="lg:col-span-7 space-y-6">
       <ScrollReveal animation="fade-right" className="space-y-2">
        <span className="text-primary-teal font-extrabold text-xs tracking-wider uppercase bg-white py-1 px-3 rounded-full border border-gray-200/50 inline-block">
         DIAGNOSTIC EQUIPMENT
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-blue">
         Diagnosis drives everything
        </h2>
        <p className="text-xs md:text-sm text-soft-gray font-semibold leading-relaxed">
         {`The more clearly a dentist can see what's happening, in the mouth, under the gum, inside a tooth, the better the treatment decision that follows.`}
        </p>
       </ScrollReveal>

       {/* Collapsible list of tech details */}
       <div className="space-y-4">
        {diagnosticGear.map((dg, idx) => (
         <ScrollReveal key={idx} animation="fade-up" delay={idx + 1}>
          <div className="bg-white p-5 rounded-2xl border border-gray-150 shadow-sm space-y-2 hover-lift">
           <h4 className="font-extrabold text-navy-blue text-sm md:text-base flex items-center gap-2">
            <span className="w-1.5 h-4 bg-primary-teal rounded-full"></span>
            {dg.title}
           </h4>
           <p className="text-xs md:text-sm text-soft-gray leading-relaxed text-justify ">
            {dg.desc}
           </p>
          </div>
         </ScrollReveal>
        ))}
       </div>
      </div>

      {/* Side Image */}
      <ScrollReveal animation="fade-left" className="lg:col-span-5 relative">
       <div className="rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-150 bg-white p-3 hover-lift">
        <div className="relative h-96 rounded-[1.8rem] overflow-hidden img-zoom">
         <Image
          src="/images/happytooth-varkala3.jpg"
          alt="HappyTooth X-Ray and Diagnostic equipment room"
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

   {/* 3. Treatment Equipment Section */}
   <section className="py-20 bg-white relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
     <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      
      {/* Side Image */}
      <ScrollReveal animation="fade-right" className="lg:col-span-5 relative lg:order-2">
       <div className="rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-150 bg-white p-3 hover-lift">
        <div className="relative h-96 rounded-[1.8rem] overflow-hidden img-zoom">
         <Image
          src="/images/happytooth-varkala12-1.jpg"
          alt="Latest Electronic Dental Chair Setup"
          fill
          sizes="(max-width: 1024px) 100vw, 480px"
          className="object-cover transition-transform duration-700 ease-out"
         />
        </div>
       </div>
      </ScrollReveal>

      {/* Treatment descriptions */}
      <div className="lg:col-span-7 space-y-6 lg:order-1">
       <ScrollReveal animation="fade-left" className="space-y-2">
        <span className="text-primary-teal font-extrabold text-xs tracking-wider uppercase bg-primary-teal/10 py-1 px-3 rounded-full inline-block">
         TREATMENT EQUIPMENT
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-blue">
         Precision in clinical procedures
        </h2>
        <p className="text-xs md:text-sm text-soft-gray font-semibold leading-relaxed">
         The equipment used during treatment directly affects how the procedure feels and how long it takes.
        </p>
       </ScrollReveal>

       <div className="space-y-4">
        {treatmentGear.map((tg, idx) => (
         <ScrollReveal key={idx} animation="fade-up" delay={idx + 1}>
          <div className="bg-bg-light-blue/25 p-5 rounded-2xl border border-gray-150 space-y-2 hover-lift">
           <h4 className="font-extrabold text-navy-blue text-sm md:text-base flex items-center gap-2">
            <span className="w-1.5 h-4 bg-primary-teal rounded-full"></span>
            {tg.title}
           </h4>
           <p className="text-xs md:text-sm text-soft-gray leading-relaxed text-justify ">
            {tg.desc}
           </p>
          </div>
         </ScrollReveal>
        ))}
       </div>
      </div>

     </div>
    </div>
   </section>

   {/* 4. Designed for Comfort Section */}
   <section className="py-20 bg-bg-light-blue/20 border-t border-b border-gray-100 relative">
    <div className="absolute top-1/3 left-0 w-80 h-80 bg-accent-teal/5 rounded-full blur-3xl"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
     
     <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
      <span className="text-primary-teal font-extrabold text-xs tracking-wider uppercase bg-primary-teal/10 py-1.5 px-4 rounded-full inline-block">
       DESIGNED FOR COMFORT
      </span>
      <h2 className="text-3xl font-extrabold text-navy-blue">
       Because the experience matters, not just the outcome
      </h2>
      <p className="text-soft-gray text-xs md:text-sm leading-relaxed max-w-xl mx-auto">
       Dental anxiety is real and common. Most people who avoid the dentist had a bad experience somewhere. Smile Studio is designed from scratch to make that fear irrelevant, from waiting areas to chairs.
      </p>
     </div>

     {/* Comfort Grid */}
     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      {comfortFeatures.map((feat, idx) => (
       <ScrollReveal key={idx} animation="fade-up" delay={idx + 1}>
        <div 
         className="bg-white rounded-3xl p-6 md:p-8 border border-gray-150 shadow-sm flex flex-col space-y-4 hover-lift h-full"
        >
         <div className="w-12 h-12 bg-bg-light-blue rounded-2xl flex items-center justify-center shadow-xs">
          {feat.icon}
         </div>
         <h3 className="text-base md:text-lg font-black text-navy-blue leading-snug">
          {feat.title}
         </h3>
         <p className="text-xs md:text-sm text-soft-gray leading-relaxed text-justify ">
          {feat.desc}
         </p>
        </div>
       </ScrollReveal>
      ))}
     </div>

      <ScrollReveal animation="scale">
       <div className="rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-150 bg-white p-3 relative h-64 md:h-80 hover-lift">
        <div className="relative w-full h-full rounded-[1.8rem] overflow-hidden img-zoom">
         <Image
          src="/images/happytooth-varkala4.jpg"
          alt="Lobby reception and play zone"
          fill
          sizes="(max-width: 1024px) 100vw, 960px"
          className="object-cover transition-transform duration-700 ease-out"
         />
        </div>
       </div>
      </ScrollReveal>

    </div>
   </section>

   {/* 5. Sterilisation and Hygiene (Class B Autoclave) */}
   <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      
      {/* Autoclave Image */}
      <ScrollReveal animation="fade-right" className="lg:col-span-5 relative">
       <div className="rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-150 bg-white p-3 hover-lift">
        <div className="relative h-96 rounded-[1.8rem] overflow-hidden img-zoom">
         <Image
          src="/images/happytooth-varkala7.jpg"
          alt="Class B Autoclave sterilizer tray"
          fill
          sizes="(max-width: 1024px) 100vw, 480px"
          className="object-cover transition-transform duration-700 ease-out"
         />
        </div>
       </div>
      </ScrollReveal>

      {/* Clean Details */}
      <ScrollReveal animation="fade-left" className="lg:col-span-7 space-y-6">
       <div className="space-y-2">
        <span className="text-red-500 font-extrabold text-xs tracking-wider uppercase bg-red-50 py-1.5 px-4 rounded-full inline-block">
         STERILISATION & HYGIENE
        </span>
        <h2 className="text-3xl font-extrabold text-navy-blue">
         {`This is the part most patients don't see, and that's exactly why it matters`}
        </h2>
        <p className="text-soft-gray text-base leading-relaxed text-justify ">
         The cleanliness of instruments used in your mouth is non-negotiable. At Smile Studio, every reusable instrument goes through a validated sterilisation cycle before it is used again.
        </p>
       </div>

       <div className="bg-bg-light-blue/40 border border-primary-teal/10 rounded-3xl p-6 md:p-8 space-y-4">
        <h4 className="font-extrabold text-navy-blue text-base flex items-center gap-2">
         <span className="w-2.5 h-2.5 bg-primary-teal rounded-full"></span>
         Class B Autoclave (Hospital Standard)
        </h4>
        <p className="text-xs md:text-sm text-soft-gray leading-relaxed text-justify ">
         An autoclave sterilises instruments using high-pressure steam, killing all bacteria, viruses, fungal spores, and other microorganisms. Class B is the highest standard of autoclave, it removes air from the chamber in a pre-vacuum cycle before the steam enters, which ensures that even complex instruments with narrow channels and hollow sections are fully sterilised throughout. Not just on the surface. This is the standard used in hospitals and surgical theatres. We apply the same standard here.
        </p>
        <div className="bg-white py-3.5 px-5 rounded-2xl border border-gray-150 text-xs font-bold text-navy-blue text-justify ">
         Every instrument that enters your mouth has completed a full Class B sterilisation cycle. No exceptions. Disposable items, needles, gloves, suction tips, are used once and discarded.
        </div>
       </div>
      </ScrollReveal>

     </div>
    </div>
   </section>

   {/* 6. Clinic Info Details Cards */}
   <section className="bg-navy-blue py-16 text-white relative overflow-hidden">
    <div className="absolute top-0 right-0 w-96 h-96 bg-primary-teal/10 rounded-full blur-3xl"></div>
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
     
     <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
      <span className="text-accent-teal font-extrabold text-xs tracking-wider uppercase bg-white/10 py-1.5 px-4 rounded-full inline-block">
       Our Clinics
      </span>
      <h2 className="text-2xl sm:text-3xl font-black">Clinic Address & Contact Info</h2>
      <p className="text-sm sm:text-base font-semibold text-accent-teal mt-2">Open for consultations and appointment bookings.</p>
     </div>

     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Murukkumpuzha */}
      <ScrollReveal animation="fade-right" className="flex">
       <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 backdrop-blur-md space-y-6 hover-lift w-full">
        <span className="text-[10px] font-black text-accent-teal tracking-widest uppercase bg-white/10 py-1 px-3 rounded-full inline-block">
         Murukkumpuzha Studio
        </span>
        <h3 className="text-lg font-black text-white">HappyTooth Smile Studio</h3>
        <div className="space-y-4 text-xs text-gray-200">
         <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-accent-teal shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
           <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
           <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <div>
           <span className="block font-bold text-white">Address:</span>
           <span className="block text-xs text-gray-300 mt-1">Ground Floor, Mangalasseri Tower, Murukkumpuzha, Thiruvananthapuram - 695302</span>
          </div>
         </div>
         <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-accent-teal shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
           <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <div>
           <span className="block font-bold text-white">Phone:</span>
           <a href="tel:+917356100602" className="block text-xs text-gray-300 hover:text-accent-teal transition mt-1">+91 73561 00602</a>
          </div>
         </div>
         <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-accent-teal shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
           <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
           <span className="block font-bold text-white">Hours:</span>
           <span className="block text-xs text-gray-300 mt-1">All 7 days including Sunday · 9:30 AM - 6:30 PM</span>
          </div>
         </div>
         <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-accent-teal shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
           <path strokeLinecap="round" strokeLinejoin="round" d="M19 16h-1c0-1.1-.9-2-2-2s-2 .9-2 2H10c0-1.1-.9-2-2-2s-2 .9-2 2H5c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v5c0 1.1-.9 2-2 2zM12 3v4" />
           <circle cx="8" cy="16" r="1" />
           <circle cx="16" cy="16" r="1" />
          </svg>
          <div>
           <span className="block font-bold text-white">Parking:</span>
           <span className="block text-xs text-gray-300 mt-1">Ample space available, fits 6+ cars comfortably</span>
          </div>
         </div>
        </div>
       </div>
      </ScrollReveal>

      {/* Kallambalam */}
      <ScrollReveal animation="fade-left" className="flex">
       <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 backdrop-blur-md space-y-6 hover-lift w-full">
        <span className="text-[10px] font-black text-accent-teal tracking-widest uppercase bg-white/10 py-1 px-3 rounded-full inline-block">
         Kallambalam Clinic
        </span>
        <h3 className="text-lg font-black text-white">HappyTooth Dental Care & Root Canal Centre</h3>
        <div className="space-y-4 text-xs text-gray-200">
         <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-accent-teal shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
           <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
           <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <div>
           <span className="block font-bold text-white">Address:</span>
           <span className="block text-xs text-gray-300 mt-1">Mavinmoodu, Kallambalam - Varkala Road, Kallambalam, Thiruvananthapuram - 695605</span>
          </div>
         </div>
         <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-accent-teal shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
           <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <div>
           <span className="block font-bold text-white">Phone:</span>
           <a href="tel:+918714470808" className="block text-xs text-gray-300 hover:text-accent-teal transition mt-1">+91 87144 70808</a>
          </div>
         </div>
         <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-accent-teal shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
           <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
           <span className="block font-bold text-white">Hours:</span>
           <span className="block text-xs text-gray-300 mt-1">Monday to Saturday · 9:30 AM - 6:30 PM (Closed on Sundays)</span>
          </div>
         </div>
         <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-accent-teal shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
           <path strokeLinecap="round" strokeLinejoin="round" d="M19 16h-1c0-1.1-.9-2-2-2s-2 .9-2 2H10c0-1.1-.9-2-2-2s-2 .9-2 2H5c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v5c0 1.1-.9 2-2 2zM12 3v4" />
           <circle cx="8" cy="16" r="1" />
           <circle cx="16" cy="16" r="1" />
          </svg>
          <div>
           <span className="block font-bold text-white">Parking:</span>
           <span className="block text-xs text-gray-300 mt-1">Parking available</span>
          </div>
         </div>
        </div>
       </div>
      </ScrollReveal>
     </div>

     <div className="text-center pt-10">
      <Link
       href="/contact"
       className="inline-block bg-accent-teal hover:bg-white text-navy-blue font-bold py-3.5 px-8 rounded-full transition-all duration-300 shadow-md"
      >
       Book Appointment
      </Link>
     </div>
    </div>
   </section>
  </div>
 );
}
