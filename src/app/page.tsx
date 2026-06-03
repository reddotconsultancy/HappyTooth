"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [selectedService, setSelectedService] = useState("");
  const [showQuickBookAlert, setShowQuickBookAlert] = useState(false);

  const servicesList = [
    "Root Canal Treatment",
    "Smile Designing & Veneers",
    "Aligners & Braces",
    "Teeth Whitening",
    "Paediatric Dentistry",
    "Dental Implants",
    "Crowns & Bridges",
  ];

  const highlights = [
    "Murukkumpuzha, Thiruvananthapuram",
    "Root Canal Specialist on site",
    "Digital X-rays & diagnostics",
    "Children welcome",
    "Emergency appointments available",
  ];

  const whyChooseUs = [
    {
      num: "01",
      title: "A specialist treats you — not a generalist pretending to be one",
      desc: "Dr. Thushara Sudhakaran holds an MDS in Endodontics. That is a postgraduate specialisation earned over three years — specifically in root canal treatment and dental pulp diseases. When you need a root canal here, you are treated by the person who trained to do exactly that.",
    },
    {
      num: "02",
      title: "We tell you what we find — all of it, including the small stuff",
      desc: "A full clinical examination takes time. We do it properly. If there is early decay forming between two teeth, we tell you — and show you on the X-ray. Small problems cost little to fix. The same problems left for two years cost considerably more. You deserve to know what is actually in your mouth.",
    },
    {
      num: "03",
      title: "Modern equipment used correctly, not just displayed in the brochure",
      desc: "Digital X-rays, rotary endodontic systems, ultrasonic scalers, intraoral scanners — we have them and we use them as intended. Good equipment in the hands of trained clinicians produces better outcomes. It is that straightforward.",
    },
    {
      num: "04",
      title: "We see children the right way — with patience, not just a small chair",
      desc: "A child's first dental experience shapes how they feel about dentists for decades. We take time with young patients. No rushing, no dismissing their anxiety, no 'just open wide.' Children who leave here without fear come back when they need to — and that is what protects their teeth long-term.",
    },
    {
      num: "05",
      title: "You get a treatment plan with a price before anything starts",
      desc: "Before we begin any procedure, you know what it involves, how many visits it requires, and what it costs. No mid-treatment surprises. No discovering halfway through that the total is three times what you expected. Every treatment decision is yours to make — informed, not pressured.",
    },
    {
      num: "06",
      title: "Emergency cases get seen — not added to a waiting list",
      desc: "We keep capacity for same-day emergency appointments. If you call us with a dental abscess, a tooth knocked loose, or pain that has stopped you sleeping, we will see you. Dental emergencies treated quickly stay manageable. Left waiting, they get significantly worse.",
    },
  ];

  const pricingSamples = [
    { name: "Cleaning & Polishing", price: "from ₹1,200" },
    { name: "Single-Sitting RCT", price: "from ₹3,500" },
    { name: "Zirconia Crown", price: "from ₹8,000" },
  ];

  const handleQuickBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedService) {
      setShowQuickBookAlert(true);
      setTimeout(() => setShowQuickBookAlert(false), 2000);
    }
  };

  return (
    <div className="overflow-hidden">
      {/* 1. UPGRADED HERO SECTION */}
      <section className="relative bg-gradient-to-b from-bg-light-blue via-bg-light-blue/20 to-white py-20 lg:py-28">
        {/* Glow backdrop halos */}
        <div className="absolute top-10 right-[15%] w-[32rem] h-[32rem] bg-primary-teal/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-5 left-5 w-96 h-96 bg-accent-teal/5 rounded-full blur-3xl"></div>

        {/* Quick booking Toast alert overlay */}
        {showQuickBookAlert && (
          <div className="fixed top-24 right-5 bg-white border-l-4 border-primary-teal text-navy-blue py-3.5 px-6 rounded-2xl shadow-2xl z-50 animate-fade-in-up flex items-center gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-teal/10 flex items-center justify-center text-primary-teal text-xs font-bold">✓</span>
            <span className="text-xs font-bold">Preferred slot locked for: {selectedService}!</span>
          </div>
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headings & Selector */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <span className="inline-block text-primary-teal font-extrabold text-xs tracking-widest uppercase bg-primary-teal/15 py-2 px-5 rounded-full">
                ✨ Specialist Dental Clinic · Thiruvananthapuram
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-navy-blue leading-tight">
                Your Teeth <br />
                Deserve Better <br />
                <span className="bg-gradient-to-r from-primary-teal to-accent-teal bg-clip-text text-transparent">Than Just Fine.</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-soft-gray leading-relaxed max-w-xl mx-auto lg:mx-0">
                HappyTooth Smile Studio is a specialist dental clinic in Murukkumpuzha — built for people who want proper care, honest answers, and a dentist who actually explains what is going on. Led by an MDS Endodontist. Equipped for everything from a routine clean to a full smile transformation.
              </p>

              {/* Clean trust checkmarks row */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 py-2 text-xs font-bold text-navy-blue">
                {highlights.slice(0, 3).map((hl, idx) => (
                  <span key={idx} className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-primary-teal/15 flex items-center justify-center text-primary-teal text-[10px]">✓</span>
                    <span>{hl}</span>
                  </span>
                ))}
              </div>

              {/* Interactive Feature: Quick Treatment selector widget */}
              <div className="bg-white p-4 sm:p-5 rounded-[2rem] shadow-xl border border-gray-100 max-w-lg mx-auto lg:mx-0">
                <form onSubmit={handleQuickBook} className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-grow">
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      required
                      className="w-full text-xs font-bold py-3.5 px-4 bg-gray-50 border border-gray-200 focus:border-primary-teal rounded-xl outline-none text-navy-blue transition"
                    >
                      <option value="">Select Treatment Needed...</option>
                      {servicesList.map((svc) => (
                        <option key={svc} value={svc}>{svc}</option>
                      ))}
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="bg-primary-teal hover:bg-navy-blue text-white text-xs font-bold py-3.5 px-6 rounded-xl transition duration-300 shadow-sm shrink-0"
                  >
                    Quick Book Slot
                  </button>
                </form>
              </div>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto bg-navy-blue hover:bg-primary-teal text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-md text-center transform hover:-translate-y-0.5 active:scale-98"
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
            </div>

            {/* Right Column: Overlapping Image Collage */}
            <div className="lg:col-span-6 relative flex justify-center items-center lg:justify-end py-8">
              <div className="relative w-full max-w-md sm:max-w-lg h-[28rem] md:h-[32rem]">
                {/* 1. Main Background Image */}
                <div className="absolute top-4 left-6 w-[80%] h-[75%] rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 bg-white p-3 z-10 transform hover:scale-[1.01] transition duration-500">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden">
                    <Image
                      src="/images/happytooth-varkala11.jpg"
                      alt="Clinic interior treatment cabin"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* 2. Overlapping Card */}
                <div className="absolute bottom-4 right-4 w-[55%] h-[45%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white p-2.5 z-20 transform hover:rotate-1 hover:scale-102 transition duration-500">
                  <div className="relative w-full h-full rounded-xl overflow-hidden">
                    <Image
                      src="/images/Doctors-1.webp"
                      alt="Doctor Profile Dr. Thushara Sudhakaran"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* 3. Floating Card */}
                <div className="absolute top-16 left-0 w-[40%] h-[35%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white p-2 z-20 transform hover:-rotate-1 hover:scale-102 transition duration-500 hidden sm:block">
                  <div className="relative w-full h-full rounded-xl overflow-hidden">
                    <Image
                      src="/images/happytooth-varkala12.jpg"
                      alt="Clinic dental chair facility"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Floating trust badge */}
                <div className="absolute bottom-28 left-0 bg-white/95 backdrop-blur-md rounded-2xl py-3.5 px-5 shadow-xl border border-gray-100 flex items-center gap-3 z-30 animate-bounce duration-1000">
                  <div className="w-10 h-10 rounded-full bg-primary-teal/15 flex items-center justify-center text-primary-teal">
                    <span className="text-xs font-black">⭐ 4.9</span>
                  </div>
                  <div>
                    <span className="block text-xs font-extrabold text-navy-blue leading-none">Google Rating</span>
                    <span className="block text-[10px] text-soft-gray mt-0.5">10k+ Patients</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. NEIGHBOURHOOD SPECIALIST FOCUS */}
      <section className="py-20 bg-white relative">
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-primary-teal/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-primary-teal rounded-tl-2xl"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-primary-teal rounded-br-2xl"></div>
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white p-3">
                <Image
                  src="/images/happytooth-side.webp"
                  alt="Healthy Smiles at Happy Tooth"
                  width={600}
                  height={600}
                  className="rounded-2xl w-full h-auto object-cover transform hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
            </div>

            {/* Right Copy */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-primary-teal font-extrabold text-xs tracking-wider uppercase bg-primary-teal/10 py-1.5 px-4 rounded-full inline-block">
                Trivandrum Specialist Care
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-blue leading-tight">
                Why travel to the city for <br />
                <span className="text-primary-teal bg-gradient-to-r from-primary-teal to-accent-teal bg-clip-text text-transparent">specialist treatments?</span>
              </h2>

              <div className="space-y-4 text-soft-gray leading-relaxed text-sm md:text-base">
                <p className="font-bold text-navy-blue">
                  We opened in Murukkumpuzha because this neighbourhood deserves a proper specialist clinic.
                </p>
                <p>
                  Most people in Kazhakoottam, Attingal, Pothencode, and the surrounding area have been making a long, tiring trip to the city every single time they need anything beyond a basic filling. That should not be the case.
                </p>
                <p className="border-l-4 border-primary-teal pl-4 py-1.5 bg-bg-light-blue/40 rounded-r-xl font-medium text-navy-blue">
                  HappyTooth Smile Studio brings specialist-level dental care — root canal, smile design, implants, and orthodontics — directly to your own backyard.
                </p>
              </div>

              {/* Checklist details */}
              <div className="grid grid-cols-2 gap-4 pt-4 text-xs font-bold text-navy-blue">
                {highlights.map((hl, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-bg-light-blue/20 py-2.5 px-4 rounded-xl border border-gray-50/50">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-teal"></span>
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR STORY TIMELINE */}
      <section className="py-20 bg-bg-light-blue/20 border-t border-b border-gray-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Copy */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-primary-teal font-extrabold text-xs tracking-wider uppercase bg-white py-1.5 px-4 rounded-full inline-block border border-gray-200/50 shadow-xs">
                OUR STORY
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-blue leading-tight">
                Five years of fixing teeth. <br />
                <span className="text-primary-teal bg-gradient-to-r from-primary-teal to-accent-teal bg-clip-text text-transparent">One new clinic built right.</span>
              </h2>

              <div className="space-y-4 text-soft-gray leading-relaxed text-sm md:text-base">
                <p>
                  HappyTooth Smile Studio did not appear out of nowhere. It is the natural next step for a practice that has been quietly serving patients in Kallambalam for the last five years — where Dr. Thushara Sudhakaran has spent over half a decade saving teeth that other dentists have written off.
                </p>
                <p>
                  The Smile Studio is what happens when you take that same clinical standard, add space, add technology, and build a facility that can handle everything in one place — so patients do not have to run between clinics, get conflicting advice, or wait months for a specialist referral that lands them right back where they started.
                </p>
                <p className="text-xs md:text-sm font-semibold italic text-navy-blue">
                  “Saving Teeth. Designing Smiles.” That is our tagline, and it is literal.
                </p>
              </div>

              {/* Callout box */}
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                <h4 className="font-extrabold text-navy-blue text-xs uppercase tracking-wider mb-1">
                  The Kallambalam Practice
                </h4>
                <p className="text-xs text-soft-gray leading-relaxed">
                  Our original clinic — Happy Tooth Dental Care & Root Canal Centre in Kallambalam — has been treating patients for over 5 years. HappyTooth Smile Studio brings that same standard to a larger, fully-equipped specialist studio.
                </p>
              </div>
            </div>

            {/* Right Column: Interactive details / launch details */}
            <div className="lg:col-span-5 bg-navy-blue text-white rounded-[2rem] p-8 md:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-primary-teal/10 rounded-full blur-3xl"></div>
              
              <div className="space-y-6 relative z-10 text-center lg:text-left">
                <span className="text-[10px] font-black text-accent-teal tracking-widest uppercase bg-white/10 py-1.5 px-4 rounded-full inline-block">
                  Launch Update
                </span>
                <h3 className="text-2xl sm:text-3xl font-black">Opening Soon!</h3>
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                  HappyTooth Smile Studio opens in June 2026. We are currently taking appointment bookings now for opening week onwards. Same founding clinical philosophy, broader scope.
                </p>

                <div className="pt-4 border-t border-white/10 space-y-4">
                  <div className="flex items-center gap-3 justify-center lg:justify-start">
                    <span className="text-xl">💺</span>
                    <span className="text-xs text-gray-200 font-bold">5 Advanced Dental Chairs</span>
                  </div>
                  <div className="flex items-center gap-3 justify-center lg:justify-start">
                    <span className="text-xl">🔬</span>
                    <span className="text-xs text-gray-200 font-bold">Intraoral Digital Scanning</span>
                  </div>
                  <div className="flex items-center gap-3 justify-center lg:justify-start">
                    <span className="text-xl">⚡</span>
                    <span className="text-xs text-gray-200 font-bold">Rotary Endodontic setup</span>
                  </div>
                </div>

                <div className="pt-4 text-center lg:text-left">
                  <Link
                    href="/contact"
                    className="inline-block bg-primary-teal hover:bg-white hover:text-navy-blue text-white font-bold py-3.5 px-8 rounded-full transition-all duration-300 shadow-md text-xs"
                  >
                    Reserve Opening Week Slot
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US (6 Core Points from PDF) */}
      <section className="py-20 bg-white relative">
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-teal/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-primary-teal font-extrabold text-xs tracking-wider uppercase bg-primary-teal/10 py-1.5 px-4 rounded-full inline-block">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-blue leading-tight">
              Things we do that <br />
              <span className="text-primary-teal bg-gradient-to-r from-primary-teal to-accent-teal bg-clip-text text-transparent">most clinics do not.</span>
            </h2>
            <p className="text-soft-gray text-xs md:text-sm leading-relaxed max-w-lg mx-auto">
              Being a good dental clinic is not complicated — but it does require some things that are easy to skip. Here is what we do not skip.
            </p>
          </div>

          {/* Value Prop Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {whyChooseUs.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-md hover:shadow-2xl hover:shadow-navy-blue/5 hover:border-primary-teal/20 transition-all duration-300 flex flex-col gap-3 group"
              >
                <span className="text-3xl font-black text-primary-teal/15 group-hover:text-primary-teal transition-colors">
                  {item.num}
                </span>
                <h3 className="text-base md:text-lg font-black text-navy-blue leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-soft-gray leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. LEAD CLINICIAN SECTION */}
      <section className="py-20 bg-bg-light-blue/20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Image Side */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 bg-white p-3">
                <div className="relative h-[32rem] rounded-[2rem] overflow-hidden">
                  <Image
                    src="/images/Doctors-1.webp"
                    alt="Dr. Thushara Sudhakaran BDS MDS Lead Endodontist"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
              
              {/* Badge */}
              <div className="absolute top-10 left-0 bg-white/95 backdrop-blur-md rounded-2xl py-3 px-5 shadow-xl border border-gray-100 z-10 flex flex-col items-center">
                <span className="text-[10px] text-soft-gray font-extrabold tracking-widest uppercase">Experience</span>
                <span className="text-sm font-black text-primary-teal mt-0.5">5+ Years Practice</span>
              </div>
            </div>

            {/* Copy details */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-primary-teal font-extrabold text-xs tracking-wider uppercase bg-primary-teal/10 py-1.5 px-4 rounded-full inline-block">
                Our Lead Clinician
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-blue leading-tight">
                Dr. Thushara Sudhakaran <br />
                <span className="text-xs md:text-sm text-soft-gray font-bold tracking-wide block mt-1">
                  BDS · MDS (Endodontics)  ·  Lead Dentist & Director
                </span>
              </h2>

              {/* Quote Block */}
              <div className="border-l-4 border-primary-teal pl-4 py-2 bg-white rounded-r-xl shadow-xs">
                <p className="text-sm md:text-base font-bold text-navy-blue italic">
                  “A tooth is worth saving. Almost every tooth that someone wants extracted — I want to try to save first.”
                </p>
              </div>

              <div className="space-y-4 text-xs md:text-sm text-soft-gray leading-relaxed">
                <p>
                  Dr. Thushara Sudhakaran completed her BDS from a recognised dental college and went on to earn her MDS in Endodontics — the specialisation that covers root canal treatment, dental pulp disease, and the science of saving teeth that have been badly damaged or infected. She has been in clinical practice for over five years, during which time she has built a reputation in Thiruvananthapuram for being thorough, honest, and technically precise.
                </p>
                <p>
                  She does not oversell treatment. If a tooth can be saved, she will tell you how. If it cannot, she will explain why clearly — and discuss the best replacement option for your situation. Patients who have come to her expecting an extraction have left with their tooth intact more often than they expected.
                </p>
                <p>
                  The Smile Studio is her larger vision — a clinic with the space, equipment, and clinical team to handle the full range of what her patients need, without referring them elsewhere. She runs the clinical side of the clinic; her husband Gokul manages the operations. It is a family practice, built with a long-term view.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-block bg-navy-blue hover:bg-primary-teal text-white font-bold py-3.5 px-8 rounded-full transition-all duration-300 shadow-md text-xs"
                >
                  Meet Dr. Thushara
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. TRANSPARENT PRICING ACCORDING TO AUDIT */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-8">
          <div className="space-y-2">
            <span className="text-primary-teal font-extrabold text-xs tracking-wider uppercase bg-primary-teal/10 py-1.5 px-4 rounded-full inline-block">
              Transparent Pricing
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-blue">
              Simple, upfront treatment costs
            </h2>
            <p className="text-soft-gray text-xs md:text-sm">
              We believe in honest diagnostics with no mid-treatment surprises. Here are starting estimates for common procedures:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            {pricingSamples.map((pr, idx) => (
              <div key={idx} className="bg-bg-light-blue/20 p-5 rounded-2xl border border-gray-50/60 text-center">
                <span className="block text-xs font-bold text-soft-gray uppercase">{pr.name}</span>
                <span className="block text-xl font-black text-navy-blue mt-1.5">{pr.price}</span>
              </div>
            ))}
          </div>
          <p className="text-[10px] text-soft-gray italic">
            *Final pricing depends on individual case complexity. You get a complete treatment plan with a price before anything starts.
          </p>
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Come in once. <br />
            See what proper dental care feels like.
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            A consultation is the best place to start — especially if it has been a while since you had a proper check-up, or if you have been putting off treatment because you were not sure where to go. We will examine your teeth, explain what we find, and give you a clear plan. No commitment required at that stage.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-primary-teal hover:bg-white hover:text-navy-blue text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-md text-center"
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
