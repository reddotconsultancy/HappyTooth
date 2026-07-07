"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ClinicCard from "@/components/ClinicCard";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
 const [selectedService, setSelectedService] = useState("");
 const [selectedLocation, setSelectedLocation] = useState("");
 const [patientName, setPatientName] = useState("");
 const [patientPhone, setPatientPhone] = useState("");
 const [isSubmitting, setIsSubmitting] = useState(false);
 const [showQuickBookAlert, setShowQuickBookAlert] = useState(false);
 const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
 const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);

 const servicesList = [
  "Root Canal Treatment",
  "Smile Designing & Veneers",
  "Aligners & Braces",
  "Teeth Whitening",
  "Paediatric Dentistry",
  "Dental Implants",
  "Crowns & Bridges",
 ];


 const whyChooseUs = [
  {
   num: "01",
   title: "A specialist treats you, not a generalist pretending to be one",
   desc: "Dr. Thushara Sudhakaran holds an MDS in Endodontics. That is a postgraduate specialisation earned over three years, specifically in root canal treatment and dental pulp diseases. When you need a root canal here, you are treated by the person who trained to do exactly that.",
  },
  {
   num: "02",
   title: "We tell you what we find, all of it, including the small stuff",
   desc: "A full clinical examination takes time. We do it properly. If there is early decay forming between two teeth, we tell you, and show you on the X-ray. Small problems cost little to fix. The same problems left for two years cost considerably more. You deserve to know what is actually in your mouth.",
  },
  {
   num: "03",
   title: "Modern equipment used correctly, not just displayed in the brochure",
   desc: "Digital X-rays, rotary endodontic systems, ultrasonic scalers, intraoral scanners, we have them and we use them as intended. Good equipment in the hands of trained clinicians produces better outcomes. It is that straightforward.",
  },
  {
   num: "04",
   title: "We see children the right way, with patience, not just a small chair",
   desc: "A child's first dental experience shapes how they feel about dentists for decades. We take time with young patients. No rushing, no dismissing their anxiety, no 'just open wide.' Children who leave here without fear come back when they need to, and that is what protects their teeth long-term.",
  },
  {
   num: "05",
   title: "You get a treatment plan with a price before anything starts",
   desc: "Before we begin any procedure, you know what it involves, how many visits it requires, and what it costs. No mid-treatment surprises. No discovering halfway through that the total is three times what you expected. Every treatment decision is yours to make, informed, not pressured.",
  },
  {
   num: "06",
   title: "Emergency cases get seen, not added to a waiting list",
   desc: "We keep capacity for same-day emergency appointments. If you call us with a dental abscess, a tooth knocked loose, or pain that has stopped you sleeping, we will see you. Dental emergencies treated quickly stay manageable. Left waiting, they get significantly worse.",
  },
 ];


 const handleQuickBook = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!selectedService) {
   setIsServiceDropdownOpen(true);
   return;
  }
  if (!selectedLocation) {
   setIsLocationDropdownOpen(true);
   return;
  }
  if (!patientName || !patientPhone) {
   alert("Please enter your name and phone number to book an appointment.");
   return;
  }

  setIsSubmitting(true);
  try {
   const res = await fetch("/api/book", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
     service: selectedService,
     location: selectedLocation,
     name: patientName,
     phone: patientPhone,
    }),
   });

   if (res.ok) {
    setShowQuickBookAlert(true);
    setPatientName("");
    setPatientPhone("");
    
    // Optional: Still open WhatsApp as a secondary immediate contact
    const waNumber = selectedLocation.includes("Kallambalam") ? "918714470808" : "917356100602";
    const textMsg = `Hello HappyTooth! I just submitted an appointment request for ${selectedService} at ${selectedLocation}. My name is ${patientName}.`;
    const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(textMsg)}`;
    
    setTimeout(() => {
     window.open(waLink, "_blank");
    }, 1500);

    setTimeout(() => setShowQuickBookAlert(false), 6000);
   } else {
    alert("Something went wrong submitting your request. Please try again or contact us directly.");
   }
  } catch (error) {
   alert("Failed to submit request. Please check your connection.");
  }
  setIsSubmitting(false);
 };

 return (
  <div className="overflow-hidden">
   {/* 1. UPGRADED HERO SECTION */}
   <section className="relative bg-gradient-to-b from-bg-light-blue/30 via-bg-light-blue/10 to-transparent py-20 lg:py-28">
    {/* Glow backdrop halos */}
    <div className="absolute top-10 right-[15%] w-[32rem] h-[32rem] bg-primary-teal/10 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-5 left-5 w-96 h-96 bg-accent-teal/5 rounded-full blur-3xl"></div>

    {/* Quick booking Toast alert overlay */}
    {showQuickBookAlert && (
     <div className="fixed top-24 lg:top-36 right-5 bg-white border-l-4 border-primary-teal text-navy-blue py-5 px-6 rounded-2xl shadow-2xl z-[10000] animate-fade-in-up max-w-sm sm:max-w-md flex items-start gap-4 whitespace-normal">
      <span className="w-8 h-8 rounded-full bg-primary-teal/10 flex items-center justify-center text-primary-teal text-sm font-bold shrink-0 mt-0.5">✓</span>
      <div>
       <p className="text-sm sm:text-base font-black text-navy-blue">Appointment Request Sent!</p>
       <p className="text-xs sm:text-sm text-soft-gray mt-1.5 leading-relaxed">
        Your request for <strong className="text-navy-blue">{selectedService}</strong> at <strong className="text-navy-blue">{selectedLocation}</strong> has been sent to our desk. We are also opening WhatsApp to connect you instantly.
       </p>
      </div>
     </div>
    )}

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
     <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      {/* Left Column: Headings & Selector */}
      <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
       <ScrollReveal animation="fade-up">
        <span className="inline-block text-primary-teal font-extrabold text-xs tracking-widest uppercase bg-primary-teal/15 py-2 px-5 rounded-full">
         Specialist Dental Clinic | Thiruvananthapuram
        </span>
       </ScrollReveal>
       <ScrollReveal animation="fade-up" delay={1}>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-navy-blue leading-tight">
         Your Teeth <br />
         Deserve Better <br />
         <span className="text-accent-teal">Than Just Fine.</span>
        </h1>
       </ScrollReveal>
       <ScrollReveal animation="fade-up" delay={2}>
        <p className="text-sm sm:text-base md:text-lg text-soft-gray leading-relaxed max-w-xl mx-auto lg:mx-0 text-justify ">
         HappyTooth has been saving teeth in Thiruvananthapuram since 2021. Our Kallambalam Root Canal Centre built that reputation, honest answers, specialist-led treatment, and a dentist who actually explains what is going on. Now we are bringing that same standard to a larger, state-of-the-art specialist facility: the new Smile Studio in Murukkumpuzha, equipped for everything from a routine clean to a full smile transformation.
        </p>
       </ScrollReveal>

       <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 pt-4">
        <Link
         href="/contact"
         className="w-full sm:w-auto bg-navy-blue hover:bg-accent-teal text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-sm hover:shadow-md text-center transform hover:-translate-y-0.5 active:scale-95"
        >
         Book an Appointment
        </Link>
        <Link
         href="/services"
         className="w-full sm:w-auto text-center font-bold text-sm text-soft-gray hover:text-primary-teal transition py-4 px-8 flex items-center justify-center gap-1"
        >
         <span>See all treatments</span>
         <span>→</span>
        </Link>
       </div>

       {/* Click outside overlay for custom dropdowns */}
       {(isServiceDropdownOpen || isLocationDropdownOpen) && (
        <div 
         className="fixed inset-0 z-40 cursor-default" 
         onClick={() => {
          setIsServiceDropdownOpen(false);
          setIsLocationDropdownOpen(false);
         }}
        />
       )}

       {/* Interactive Feature: Quick Treatment selector widget */}
       <div className="glass-panel p-4 sm:p-5 rounded-[2rem] shadow-xl max-w-2xl mx-auto lg:mx-0 relative z-[55] mt-6 hover-lift">
        <form onSubmit={handleQuickBook} className="flex flex-col gap-3">
         <div className={`flex flex-col md:flex-row gap-3 relative ${isServiceDropdownOpen || isLocationDropdownOpen ? "z-20" : "z-10"}`}>
          {/* Service Custom Dropdown */}
          <div className={`flex-grow relative ${isServiceDropdownOpen ? "z-20" : "z-10"}`}>
          <button
           type="button"
           onClick={() => {
            setIsServiceDropdownOpen(!isServiceDropdownOpen);
            setIsLocationDropdownOpen(false);
           }}
           className="w-full flex items-center justify-between text-xs font-normal py-3.5 px-4 bg-white border border-gray-200 hover:border-primary-teal/40 focus:border-primary-teal rounded-xl outline-none text-navy-blue transition text-left"
          >
           <span className="truncate">{selectedService || "Select Treatment..."}</span>
           <svg 
            className={`w-4 h-4 text-soft-gray shrink-0 transition-transform duration-300 ${isServiceDropdownOpen ? "rotate-180" : ""}`} 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            viewBox="0 0 24 24"
           >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
           </svg>
          </button>

          {isServiceDropdownOpen && (
           <div className="absolute left-0 right-0 mt-2 bg-white rounded-2xl border border-gray-150 shadow-2xl pt-2 pb-4 z-[60] max-h-56 overflow-y-auto overscroll-contain animate-fade-in">
            <button
             type="button"
             onClick={() => {
              setSelectedService("");
              setIsServiceDropdownOpen(false);
             }}
             className="w-full text-left text-xs font-normal py-2.5 px-4 hover:bg-bg-light-blue/30 text-soft-gray transition-colors"
            >
             Select Treatment...
            </button>
            {servicesList.map((svc) => (
             <button
              key={svc}
              type="button"
              onClick={() => {
               setSelectedService(svc);
               setIsServiceDropdownOpen(false);
              }}
              className={`w-full text-left text-xs font-normal py-2.5 px-4 transition-colors flex items-center justify-between ${
               selectedService === svc 
                ? "bg-[#FAF7F2] text-accent-teal" 
                : "hover:bg-bg-light-blue/30 text-navy-blue"
              }`}
             >
              <span>{svc}</span>
              {selectedService === svc && (
               <span className="text-accent-teal text-[10px] font-black">✓</span>
              )}
             </button>
            ))}
           </div>
          )}
         </div>

         {/* Location Custom Dropdown */}
         <div className={`flex-grow relative ${isLocationDropdownOpen ? "z-20" : "z-0"}`}>
          <button
           type="button"
           onClick={() => {
            setIsLocationDropdownOpen(!isLocationDropdownOpen);
            setIsServiceDropdownOpen(false);
           }}
           className="w-full flex items-center justify-between text-xs font-normal py-3.5 px-4 bg-white border border-gray-200 hover:border-primary-teal/40 focus:border-primary-teal rounded-xl outline-none text-navy-blue transition text-left"
          >
           <span className="truncate">{selectedLocation || "Select Clinic Location..."}</span>
           <svg 
            className={`w-4 h-4 text-soft-gray shrink-0 transition-transform duration-300 ${isLocationDropdownOpen ? "rotate-180" : ""}`} 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            viewBox="0 0 24 24"
           >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
           </svg>
          </button>

          {isLocationDropdownOpen && (
           <div className="absolute left-0 right-0 mt-2 bg-white rounded-2xl border border-gray-150 shadow-2xl py-2 z-[60] animate-fade-in">
            <button
             type="button"
             onClick={() => {
              setSelectedLocation("");
              setIsLocationDropdownOpen(false);
             }}
             className="w-full text-left text-xs font-normal py-2.5 px-4 hover:bg-bg-light-blue/30 text-soft-gray transition-colors"
            >
             Select Clinic Location...
            </button>
            {[
             "Kallambalam Clinic",
             "Murukkumpuzha Studio"
            ].map((loc) => (
             <button
              key={loc}
              type="button"
              onClick={() => {
               setSelectedLocation(loc);
               setIsLocationDropdownOpen(false);
              }}
              className={`w-full text-left text-xs font-normal py-2.5 px-4 transition-colors flex items-center justify-between ${
               selectedLocation === loc 
                ? "bg-[#FAF7F2] text-accent-teal" 
                : "hover:bg-bg-light-blue/30 text-navy-blue"
              }`}
             >
              <span>{loc}</span>
              {selectedLocation === loc && (
               <span className="text-accent-teal text-[10px] font-black">✓</span>
              )}
             </button>
            ))}
           </div>
          )}
         </div>
         </div>
         
         <div className="flex flex-col md:flex-row gap-3 relative z-0">
          <input 
           type="text" 
           placeholder="Your Name" 
           value={patientName}
           onChange={(e) => setPatientName(e.target.value)}
           className="flex-grow text-xs font-normal py-3.5 px-4 bg-white border border-gray-200 focus:border-primary-teal rounded-xl outline-none text-navy-blue transition"
           required
          />
          <input 
           type="tel" 
           placeholder="Phone Number" 
           value={patientPhone}
           onChange={(e) => setPatientPhone(e.target.value)}
           className="flex-grow text-xs font-normal py-3.5 px-4 bg-white border border-gray-200 focus:border-primary-teal rounded-xl outline-none text-navy-blue transition"
           required
          />
          <button
           type="submit"
           disabled={isSubmitting}
           className="bg-primary-teal hover:bg-accent-teal disabled:opacity-70 text-white text-xs font-bold py-3.5 px-6 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md shrink-0 transform hover:-translate-y-0.5 active:scale-95"
          >
           {isSubmitting ? "Sending..." : "Book Now"}
          </button>
         </div>
        </form>
       </div>
      </div>

      {/* Right Column: Overlapping Image Collage */}
      <ScrollReveal animation="fade-left" className="lg:col-span-6 relative flex justify-center items-center lg:justify-end py-8">
       <div className="relative w-full max-w-md sm:max-w-lg h-[28rem] md:h-[32rem]">
        {/* 1. Main Background Image */}
        <div className="absolute top-4 left-6 w-[80%] h-[75%] rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 bg-white p-3 z-10 transform hover:scale-[1.01] transition duration-500">
         <div className="relative w-full h-full rounded-2xl overflow-hidden">
          <Image
           src="/images/indian_rct_procedure.png"
           alt="Indian Dentist performing root canal treatment"
           fill
           sizes="(max-width: 768px) 100vw, 450px"
           className="object-cover"
           priority
          />
         </div>
        </div>

        {/* 2. Overlapping Card */}
        <div className="absolute bottom-4 right-4 w-[55%] h-[45%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white p-2.5 z-20 transform hover:rotate-1 hover:scale-102 transition duration-500">
         <div className="relative w-full h-full rounded-xl overflow-hidden">
          <Image
           src="/images/dr_thushara.png"
           alt="Doctor Profile Dr. Thushara Sudhakaran"
           fill
           sizes="(max-width: 768px) 50vw, 250px"
           className="object-cover"
          />
         </div>
        </div>

        {/* 3. Floating Card */}
        <div className="absolute top-16 left-0 w-[40%] h-[35%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white p-2 z-20 transform hover:-rotate-1 hover:scale-102 transition duration-500 hidden sm:block">
         <div className="relative w-full h-full rounded-xl overflow-hidden">
          <Image
           src="/images/indian_dentist_team.png"
           alt="Indian Dentist Specialist Team"
           fill
           sizes="(max-width: 768px) 40vw, 200px"
           className="object-cover"
          />
         </div>
        </div>


       </div>
      </ScrollReveal>
     </div>
    </div>
   </section>

   {/* 2. LEAD CLINICIAN SECTION */}
   <section className="py-20 bg-bg-light-blue/10 relative">
    <div className="absolute top-1/3 left-0 w-80 h-80 bg-primary-teal/5 rounded-full blur-3xl"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
     <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      {/* Image Side */}
      <ScrollReveal animation="fade-right" className="lg:col-span-5 relative">
       <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 bg-white p-3">
        <div className="relative h-[32rem] rounded-[2rem] overflow-hidden">
         <Image
          src="/images/dr_thushara.jpg"
          alt="Dr. Thushara Sudhakaran BDS MDS Lead Endodontist"
          fill
          sizes="(max-width: 1024px) 100vw, 480px"
          className="object-cover object-top"
         />
        </div>
       </div>
      </ScrollReveal>

      {/* Copy details */}
      <ScrollReveal animation="fade-up" className="lg:col-span-7 space-y-6">
       <span className="text-primary-teal font-extrabold text-xs tracking-wider uppercase bg-primary-teal/10 py-1.5 px-4 rounded-full inline-block">
        Our Lead Clinician
       </span>
       <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-blue leading-tight">
        Dr. Thushara Sudhakaran BDS MDS <br />
        <span className="text-xs md:text-sm text-soft-gray font-bold tracking-wide block mt-1">
         Clinical Director & Root Canal Specialist
        </span>
       </h2>

       {/* Quote Block */}
       <div className="border-l-4 border-primary-teal pl-4 py-2 bg-white rounded-r-xl shadow-xs">
        <p className="text-sm md:text-base font-bold text-navy-blue italic">
         “A tooth is worth saving. Almost every tooth that someone wants extracted, I want to try to save first.”
        </p>
       </div>

       <div className="space-y-4 text-sm md:text-base text-soft-gray leading-relaxed">
        <p className="text-justify ">
         Dr. Thushara Sudhakaran completed her BDS from a recognised dental college and went on to earn her MDS in Endodontics, the specialisation that covers root canal treatment, dental pulp disease, and the science of saving teeth that have been badly damaged or infected. She has been in clinical practice since 2021, during which time she has built a reputation in Thiruvananthapuram for being thorough, honest, and technically precise.
        </p>
        <p className="text-justify ">
         She does not oversell treatment. If a tooth can be saved, she will tell you how. If it cannot, she will explain why clearly, and discuss the best replacement option for your situation. Patients who have come to her expecting an extraction have left with their tooth intact more often than they expected.
        </p>
        <p className="text-justify ">
         The Smile Studio is her larger vision, a clinic with the space, equipment, and clinical team to handle the full range of what her patients need, without referring them elsewhere. She runs the clinical side of the clinic; her husband Gokul manages the operations. It is a family practice, built with a long-term view.
        </p>
       </div>

       <div className="pt-2">
        <Link
         href="/about"
         className="inline-block bg-navy-blue hover:bg-accent-teal text-white font-bold py-3.5 px-8 rounded-full transition-all duration-300 shadow-sm hover:shadow-md text-xs transform hover:-translate-y-0.5 active:scale-95"
        >
         Meet Dr. Thushara
        </Link>
       </div>
      </ScrollReveal>
     </div>
    </div>
   </section>

   {/* 3. OUR STORY TIMELINE */}
   <section className="py-20 bg-white border-t border-b border-gray-100 relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
     <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      
      {/* Left Column: Copy */}
      <ScrollReveal animation="fade-right" className="lg:col-span-7 space-y-6">
       <span className="text-primary-teal font-extrabold text-xs tracking-wider uppercase bg-white py-1.5 px-4 rounded-full inline-block border border-gray-200/50 shadow-xs">
        OUR STORY
       </span>
       <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-blue leading-tight">
        Serving since 2021. <br />
        <span className="text-accent-teal">Two locations, one standard.</span>
       </h2>

       <div className="space-y-4 text-soft-gray leading-relaxed text-sm md:text-base">
        <p className="text-justify ">
         HappyTooth did not appear out of nowhere. Starting with our established Kallambalam clinic, we have expanded to a second specialist location in Murukkumpuzha to serve more patients across Thiruvananthapuram.
        </p>
        <p className="text-justify ">
         Our clinics are what happens when you take that same clinical standard, add space, add technology, and build facilities that can handle everything in one place, so patients do not have to run between clinics, get conflicting advice, or wait months for a specialist referral.
        </p>
        <p className="text-sm md:text-base font-semibold italic text-navy-blue text-justify ">
         “Saving Teeth. Designing Smiles.” That is our tagline, and it is literal.
        </p>
       </div>

       {/* Callout box */}
       <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
        <h4 className="font-extrabold text-navy-blue text-sm uppercase tracking-wider mb-1">
         The Kallambalam Practice
        </h4>
        <p className="text-sm text-soft-gray leading-relaxed text-justify ">
         Our original clinic, HappyTooth Dental Care & Root Canal Centre in Kallambalam, has been treating patients since 2021. HappyTooth Smile Studio brings that same standard to a larger, fully-equipped specialist studio.
        </p>
       </div>
      </ScrollReveal>

      {/* Right Column: Visual Clinic Image */}
      <ScrollReveal animation="scale" className="lg:col-span-5 relative h-96 min-h-[350px] rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 bg-white p-2">
       <div className="relative w-full h-full rounded-[1.8rem] overflow-hidden">
        <Image
         src="/images/happytooth-varkala12-1.jpg"
         alt="HappyTooth Smile Studio Specialist Clinic Treatment Room"
         fill
         sizes="(max-width: 1024px) 100vw, 480px"
         className="object-cover transform hover:scale-[1.02] transition-transform duration-500"
        />
       </div>
      </ScrollReveal>

     </div>
    </div>
   </section>

   {/* 4. WHY CHOOSE US (6 Core Points from PDF) */}
   <section 
    className="py-20 relative parallax-bg"
    style={{ backgroundImage: "url('/images/happytooth-varkala11.jpg')" }}
   >
    <div className="absolute inset-0 bg-[#F8F5EE]/90 backdrop-blur-md z-0"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-teal/5 rounded-full blur-3xl"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
     
     <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
      <ScrollReveal animation="fade-up">
       <span className="text-primary-teal font-extrabold text-xs tracking-wider uppercase bg-primary-teal/10 py-1.5 px-4 rounded-full inline-block">
        Why Choose Us
       </span>
      </ScrollReveal>
      <ScrollReveal animation="fade-up" delay={0.5}>
       <h2 className="text-3xl sm:text-4xl font-bold text-navy-blue leading-tight">
        Things we do that <br />
        <span className="text-accent-teal">most clinics do not.</span>
       </h2>
      </ScrollReveal>
      <ScrollReveal animation="fade-up" delay={1}>
       <p className="text-soft-gray text-sm md:text-base leading-relaxed max-w-lg mx-auto">
        Being a good dental clinic is not complicated, but it does require some things that are easy to skip. Here is what we do not skip.
       </p>
      </ScrollReveal>
     </div>

     {/* Value Prop Grid */}
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      {whyChooseUs.map((item, idx) => (
       <ScrollReveal key={idx} animation="fade-up" delay={idx < 8 ? idx : 7}>
        <div 
         className="glass-panel p-6 md:p-8 rounded-[2rem] shadow-md hover:shadow-2xl hover:shadow-navy-blue/5 hover:border-primary-teal/20 transition-all duration-500 ease-out flex flex-col gap-3 group h-full relative overflow-hidden"
        >
         {/* Subtle gradient hover reveal inside the card */}
         <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
         <span className="text-3xl font-black text-primary-teal/15 group-hover:text-primary-teal transition-colors relative z-10">
          {item.num}
         </span>
         <h3 className="text-base md:text-lg font-bold text-navy-blue leading-snug">
          {item.title}
         </h3>
         <p className="text-sm md:text-base text-soft-gray leading-relaxed text-left">
          {item.desc}
         </p>
        </div>
       </ScrollReveal>
      ))}
     </div>

    </div>
   </section>

   {/* 5. NEIGHBOURHOOD SPECIALIST FOCUS */}
   <section className="py-20 bg-white border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
     <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      {/* Left Image */}
      <ScrollReveal animation="fade-right" className="lg:col-span-5 relative">
       <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-primary-teal rounded-tl-2xl"></div>
       <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-primary-teal rounded-br-2xl"></div>
       <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white p-3">
        <Image
         src="/images/indian_patient_smile.png"
         alt="Healthy Smiles at HappyTooth"
         width={600}
         height={600}
         className="rounded-2xl w-full h-auto object-cover transform hover:scale-[1.02] transition-transform duration-700"
        />
       </div>
      </ScrollReveal>

      {/* Right Copy */}
      <ScrollReveal animation="fade-up" className="lg:col-span-7 space-y-6">
       <span className="text-primary-teal font-extrabold text-xs tracking-wider uppercase bg-primary-teal/10 py-1.5 px-4 rounded-full inline-block">
        Trivandrum Specialist Care
       </span>
       <h2 className="text-3xl sm:text-4xl font-bold text-navy-blue leading-tight">
        Why travel to the city for <br />
        <span className="text-accent-teal">specialist treatments?</span>
       </h2>

       <div className="space-y-4 text-soft-gray leading-relaxed text-sm md:text-base text-left">
        <p className="font-bold text-navy-blue text-left">
         We operate clinics in Murukkumpuzha and Kallambalam because both neighbourhoods deserve proper specialist care.
        </p>
        <p className="text-left">
         Most people in Kazhakoottam, Attingal, Pothencode, Kallambalam, and the surrounding areas have been making a long, tiring trip to the city every single time they need anything beyond a basic filling. That should not be the case.
        </p>
        <p className="border-l-4 border-primary-teal pl-4 py-1.5 bg-bg-light-blue/40 rounded-r-xl font-medium text-navy-blue text-left">
         HappyTooth brings specialist-level dental care, root canal, smile design, implants, and orthodontics, directly to your own backyard.
        </p>
       </div>
      </ScrollReveal>
     </div>
    </div>
   </section>


   {/* 6. PATIENT TESTIMONIALS (GOOGLE REVIEWS) */}
   <section className="py-20 bg-bg-light-blue/20 border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     <ScrollReveal animation="fade-up">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
       <span className="text-primary-teal font-extrabold text-xs tracking-wider uppercase bg-primary-teal/10 py-1.5 px-4 rounded-full inline-block">
        Patient Stories
       </span>
       <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-blue leading-tight">
        Patient Google Reviews
       </h2>
       <p className="text-soft-gray text-sm md:text-base max-w-md mx-auto font-medium text-center">
        Read feedback from patients who completed root canal treatments, pediatric care, and restorative procedures at our clinics.
       </p>
      </div>
     </ScrollReveal>

     <div className="w-full overflow-hidden relative py-4">
      {/* Subtle gradient overlays to fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-bg-main to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-bg-main to-transparent z-10 pointer-events-none"></div>

      <div className="flex animate-marquee whitespace-nowrap w-max">
       {/* Set 1 */}
       <div className="flex items-stretch gap-6 pr-6">
        <div className="glass-panel p-6 md:p-8 rounded-[2rem] shadow-sm flex flex-col justify-between w-[290px] sm:w-[420px] shrink-0 whitespace-normal hover:shadow-xl transition-all duration-300">
         <div className="space-y-4">
          <div className="flex items-center gap-1 text-amber-500">
           {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
           ))}
          </div>
          <p className="text-sm md:text-base text-soft-gray italic leading-relaxed">
           {`"Dr. Thushara did a great job in getting my Root canal treatment (RCT) done. Clinic has got a very pleasant ambience, staffs are all great too. Best dental clinic in Kallambalam."`}
          </p>
         </div>
         <div className="pt-6 border-t border-gray-100/50 flex items-center gap-3 mt-4">
          <div className="w-9 h-9 rounded-full bg-primary-teal/15 text-primary-teal flex items-center justify-center font-extrabold text-xs">
           BI
          </div>
          <div>
           <span className="block text-xs font-bold text-navy-blue">Bibin</span>
           <span className="block text-[10px] text-soft-gray">Kallambalam Patient</span>
          </div>
         </div>
        </div>

        <div className="glass-panel p-6 md:p-8 rounded-[2rem] shadow-sm flex flex-col justify-between w-[290px] sm:w-[420px] shrink-0 whitespace-normal hover:shadow-xl transition-all duration-300">
         <div className="space-y-4">
          <div className="flex items-center gap-1 text-amber-500">
           {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
           ))}
          </div>
          <p className="text-sm md:text-base text-soft-gray italic leading-relaxed">
           {`"Best dental clinic now at Kallambalam. And best care and good service. Thank you."`}
          </p>
         </div>
         <div className="pt-6 border-t border-gray-100/50 flex items-center gap-3 mt-4">
          <div className="w-9 h-9 rounded-full bg-primary-teal/15 text-primary-teal flex items-center justify-center font-extrabold text-xs">
           MK
          </div>
          <div>
           <span className="block text-xs font-bold text-navy-blue">Madhusoodana Kurup</span>
           <span className="block text-[10px] text-soft-gray">Kallambalam Patient</span>
          </div>
         </div>
        </div>

        <div className="glass-panel p-6 md:p-8 rounded-[2rem] shadow-sm flex flex-col justify-between w-[290px] sm:w-[420px] shrink-0 whitespace-normal hover:shadow-xl transition-all duration-300">
         <div className="space-y-4">
          <div className="flex items-center gap-1 text-amber-500">
           {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
           ))}
          </div>
          <p className="text-sm md:text-base text-soft-gray italic leading-relaxed">
           {`"The customer service was great! The staff were very friendly and helpful. They gave good supervision during my visit, which made me feel safe. The care I received was gentle and kind. I also appreciated the quick service; I didn't have to wait long. Overall, it was an excellent visit!"`}
          </p>
         </div>
         <div className="pt-6 border-t border-gray-100/50 flex items-center gap-3 mt-4">
          <div className="w-9 h-9 rounded-full bg-primary-teal/15 text-primary-teal flex items-center justify-center font-extrabold text-xs">
           VE
          </div>
          <div>
           <span className="block text-xs font-bold text-navy-blue">Velraj</span>
           <span className="block text-[10px] text-soft-gray">Kallambalam Patient</span>
          </div>
         </div>
        </div>
       </div>

       {/* Set 2 (Duplicate for loop) */}
       <div className="flex items-stretch gap-6 pr-6" aria-hidden="true">
        <div className="glass-panel p-6 md:p-8 rounded-[2rem] shadow-sm flex flex-col justify-between w-[290px] sm:w-[420px] shrink-0 whitespace-normal hover:shadow-xl transition-all duration-300">
         <div className="space-y-4">
          <div className="flex items-center gap-1 text-amber-500">
           {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
           ))}
          </div>
          <p className="text-sm md:text-base text-soft-gray italic leading-relaxed">
           {`"Dr. Thushara did a great job in getting my Root canal treatment (RCT) done. Clinic has got a very pleasant ambience, staffs are all great too. Best dental clinic in Kallambalam."`}
          </p>
         </div>
         <div className="pt-6 border-t border-gray-100/50 flex items-center gap-3 mt-4">
          <div className="w-9 h-9 rounded-full bg-primary-teal/15 text-primary-teal flex items-center justify-center font-extrabold text-xs">
           BI
          </div>
          <div>
           <span className="block text-xs font-bold text-navy-blue">Bibin</span>
           <span className="block text-[10px] text-soft-gray">Kallambalam Patient</span>
          </div>
         </div>
        </div>

        <div className="glass-panel p-6 md:p-8 rounded-[2rem] shadow-sm flex flex-col justify-between w-[290px] sm:w-[420px] shrink-0 whitespace-normal hover:shadow-xl transition-all duration-300">
         <div className="space-y-4">
          <div className="flex items-center gap-1 text-amber-500">
           {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
           ))}
          </div>
          <p className="text-sm md:text-base text-soft-gray italic leading-relaxed">
           {`"Best dental clinic now at Kallambalam. And best care and good service. Thank you."`}
          </p>
         </div>
         <div className="pt-6 border-t border-gray-100/50 flex items-center gap-3 mt-4">
          <div className="w-9 h-9 rounded-full bg-primary-teal/15 text-primary-teal flex items-center justify-center font-extrabold text-xs">
           MK
          </div>
          <div>
           <span className="block text-xs font-bold text-navy-blue">Madhusoodana Kurup</span>
           <span className="block text-[10px] text-soft-gray">Kallambalam Patient</span>
          </div>
         </div>
        </div>

        <div className="glass-panel p-6 md:p-8 rounded-[2rem] shadow-sm flex flex-col justify-between w-[290px] sm:w-[420px] shrink-0 whitespace-normal hover:shadow-xl transition-all duration-300">
         <div className="space-y-4">
          <div className="flex items-center gap-1 text-amber-500">
           {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
           ))}
          </div>
          <p className="text-sm md:text-base text-soft-gray italic leading-relaxed">
           {`"The customer service was great! The staff were very friendly and helpful. They gave good supervision during my visit, which made me feel safe. The care I received was gentle and kind. I also appreciated the quick service; I didn't have to wait long. Overall, it was an excellent visit!"`}
          </p>
         </div>
         <div className="pt-6 border-t border-gray-100/50 flex items-center gap-3 mt-4">
          <div className="w-9 h-9 rounded-full bg-primary-teal/15 text-primary-teal flex items-center justify-center font-extrabold text-xs">
           VE
          </div>
          <div>
           <span className="block text-xs font-bold text-navy-blue">Velraj</span>
           <span className="block text-[10px] text-soft-gray">Kallambalam Patient</span>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
   </section>

   {/* OUR CLINICS CONTACT SECTION */}
   <section className="py-20 bg-white border-t border-b border-gray-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     
     <ScrollReveal animation="fade-up">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
       <span className="text-primary-teal font-extrabold text-xs tracking-wider uppercase bg-primary-teal/10 py-1.5 px-4 rounded-full inline-block">
        Our Locations
       </span>
       <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-blue">
        Contact & Locations
       </h2>
       <p className="text-soft-gray text-sm md:text-base leading-relaxed text-justify max-w-2xl mx-auto">
        We operate two fully equipped dental offices headed by lead specialist Dr. Thushara Sudhakaran. Find the specific hours, phone lines, and locations for each branch below.
       </p>
      </div>
     </ScrollReveal>

     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <ClinicCard
       name="HappyTooth Smile Studio"
       branch="Murukkumpuzha, Thiruvananthapuram"
       badge="Flagship Studio · Open Daily"
       status="Open All 7 Days"
       address="Ground Floor, Mangalasseri Tower, Murukkumpuzha, Thiruvananthapuram to 695302"
       phone="+91 73561 00602"
       telLink="tel:+917356100602"
       waLink="https://wa.me/917356100602"
       timings="9:30 AM to 6:30 PM (All 7 Days)"
       parking="Ample private parking (fits 6+ cars)"
       mapUrl="https://maps.google.com/?q=HappyTooth+Smile+Studio,+Murukkumpuzha,+Thiruvananthapuram"
      />

      <ClinicCard
       name="HappyTooth Dental Care"
       branch="Kallambalam, Thiruvananthapuram"
       badge="Root Canal Centre · Serving since 2021"
       status="Closed on Sundays"
       address="Mavinmoodu, Kallambalam to Varkala Road, Kallambalam, Thiruvananthapuram to 695605"
       phone="+91 87144 70808"
       telLink="tel:+918714470808"
       waLink="https://wa.me/918714470808"
       timings="9:30 AM to 6:30 PM (Monday to Saturday)"
       parking="Parking available"
       mapUrl="https://maps.app.goo.gl/ve3hNRyxmV5PFGxR7"
      />
     </div>
    </div>
   </section>

   {/* 7. CALL TO ACTION */}
   <section className="relative bg-navy-blue py-20 text-white overflow-hidden border-t border-white/5">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(0,136,110,0.2),transparent_50%)]"></div>
    <div className="absolute top-0 right-0 w-80 h-80 bg-accent-teal/10 rounded-full blur-3xl"></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
     <span className="text-[10px] font-black text-accent-teal tracking-widest uppercase bg-white/10 py-1.5 px-4 rounded-full inline-block">
      Get Started
     </span>
     <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
      Come in once. <br />
      See what proper dental care feels like.
     </h2>
     <p className="text-gray-300 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed text-center">
      A consultation is the best place to start, especially if it has been a while since you had a proper check-up, or if you have been putting off treatment because you were not sure where to go. We will examine your teeth, explain what we find, and give you a clear plan. No commitment required at that stage.
     </p>
     <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
      <Link
       href="/contact"
       className="w-full sm:w-auto border border-white/20 hover:border-white text-white hover:bg-white/10 font-bold py-4 px-8 rounded-full transition-all duration-300 text-center"
      >
       Book a Consultation
      </Link>
      <Link
       href="/services"
       className="w-full sm:w-auto border border-white/20 hover:border-white text-white hover:bg-white/10 font-bold py-4 px-8 rounded-full transition-all duration-300 text-center"
      >
       Explore All Services
      </Link>
     </div>
    </div>
   </section>
  </div>
 );
}
