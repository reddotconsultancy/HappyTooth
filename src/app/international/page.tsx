import React from "react";
import Link from "next/link";
import Image from "next/image";
import BreadcrumbHero from "@/components/BreadcrumbHero";

export const metadata = {
  title: "International Patients & Dental Tourism | Happy Tooth Dental Care",
  description: "Plan your dental treatment around your visit to Kerala. Specialist dental care for NRIs, tourists, and Maldivian patients with video consultations and full documentation.",
};

export default function InternationalPatients() {
  const steps = [
    {
      step: "Step 1",
      title: "Reach out before you travel",
      desc: "Contact us on WhatsApp or arrange a video call before your trip. Tell us what's been bothering you, share any existing X-rays or dental reports, and we'll give you an honest assessment of what's needed — and how long it will take. You'll know the treatment plan and the approximate cost before you board a flight.",
    },
    {
      step: "Step 2",
      title: "We schedule around your dates",
      desc: "Once we know how long you'll be in Thiruvananthapuram, we plan the treatment to fit. Most dental work — including root canals, implant consultations, crowns, whitening, and scaling — can be completed within a visit of a few days to two weeks. We tell you upfront what's realistic for your timeframe.",
    },
    {
      step: "Step 3",
      title: "Walk in, get treated",
      desc: "Your appointment is confirmed in advance. You come in, the treatment happens as planned, and we make sure you leave with everything you need — prescriptions, documentation for your records abroad, and clear instructions for aftercare. If you need to continue treatment at home with your regular dentist, we'll make sure they have everything to pick up where we left off.",
    },
    {
      step: "Step 4",
      title: "Follow-up after you leave",
      desc: "After you return home, we're reachable on WhatsApp if anything comes up. Questions about healing, discomfort that concerns you, or just wanting to know if something is normal — we respond. You're not on your own once you've left the clinic.",
    },
  ];

  const reasons = [
    {
      title: "Specialist-led care",
      desc: "Every treatment is delivered by a specialist with postgraduate training in that specific field. You get the same standard of care here that you would expect from a specialist clinic abroad — at a very different cost.",
    },
    {
      title: "Planned around your schedule",
      desc: "We don't ask you to come back five times over five weeks. Treatment is planned to fit your time in Kerala — efficiently, without cutting corners on quality or rushing procedures.",
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
      desc: "Treatment records, X-rays, prescriptions, and clinical notes — all provided on request in a format your dentist at home can use. Continuity of care doesn't stop.",
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
      desc: "HappyTooth Smile Studio is open Monday through Sunday, 9:30 AM to 6:30 PM — including weekends and public holidays.",
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
        bgImage="/images/group-of-talented-multiracial-doctors-and-nurses-i-2026-01-09-06-11-37-utc.webp"
      />

      {/* 1. Header description */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-primary-teal font-extrabold text-xs tracking-wider uppercase bg-primary-teal/10 py-1.5 px-4 rounded-full inline-block">
                World-Class Dental Tourism
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-blue leading-tight">
                Quality dental care, <br />
                <span className="text-primary-teal bg-gradient-to-r from-primary-teal to-accent-teal bg-clip-text text-transparent">planned around your visit.</span>
              </h2>
              <p className="text-soft-gray text-base leading-relaxed">
                Whether you're an NRI visiting family, a tourist passing through Thiruvananthapuram, or travelling specifically for treatment — we make sure your dental care fits around your time here, not the other way around.
              </p>
              <div className="text-xs font-bold text-navy-blue flex items-center gap-3">
                <span className="bg-bg-light-blue py-1.5 px-4 rounded-lg">🗣️ Languages: English · Malayalam · Hindi</span>
              </div>
              <div className="text-sm text-soft-gray space-y-4">
                <p>
                  Many of our patients are visiting Kerala from abroad — NRIs back home for a few weeks, tourists who've extended their stay, or patients from the Maldives who make the short trip across for specialist dental treatment. What they all have in common is that their time here is limited and their expectations are high.
                </p>
                <p>
                  We've built a straightforward process for international patients: consult before you arrive, plan your treatment schedule in advance, and walk in knowing exactly what's going to happen. No surprises, no wasted trips.
                </p>
              </div>
            </div>

            {/* Accent image */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 bg-white p-3">
                <div className="relative h-96 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/happydental.webp"
                    alt="International Patient Dental Care Kerala"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

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
              <div key={idx} className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm space-y-3 hover:shadow-md transition-shadow duration-300">
                <span className="inline-block text-xs font-black text-primary-teal bg-primary-teal/10 px-3.5 py-1 rounded-full">
                  {st.step}
                </span>
                <h3 className="text-lg font-black text-navy-blue">{st.title}</h3>
                <p className="text-xs md:text-sm text-soft-gray leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE HAPPYTOOTH */}
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
              <div key={idx} className="bg-white p-6 md:p-8 rounded-3xl border border-gray-50/70 shadow-xs flex flex-col gap-2 hover:-translate-y-1 transition duration-300">
                <h4 className="font-extrabold text-primary-teal text-sm md:text-base flex items-center gap-2">
                  <span className="w-1.5 h-3.5 bg-primary-teal rounded-full"></span>
                  {r.title}
                </h4>
                <p className="text-xs md:text-sm text-soft-gray leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MALDIVES TOURISM BANNER */}
      <section className="py-16 bg-navy-blue text-white relative overflow-hidden">
        <div className="absolute top-[-20%] right-[-20%] w-[32rem] h-[32rem] bg-primary-teal/10 rounded-full blur-3xl"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <span className="text-[10px] font-black text-accent-teal tracking-widest uppercase bg-white/10 py-1.5 px-4 rounded-full inline-block">
            Medical Tourism
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black">Travelling from the Maldives?</h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Thiruvananthapuram is one of the closest major cities to the Maldives, and a well-established destination for patients seeking specialist dental and medical care. A short flight brings you to a city with direct access to specialist treatment at a fraction of the cost available elsewhere. We work with Maldivian patients regularly — contact us on WhatsApp to plan your visit, and we'll have everything ready before you land.
          </p>
          <div className="pt-2">
            <a
              href="https://wa.me/917356100602"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary-teal hover:bg-white hover:text-navy-blue text-white font-bold py-3.5 px-8 rounded-full transition-all duration-300 shadow-md text-xs"
            >
              Contact Maldives Desk on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 5. PRACTICAL INFORMATION CARDS */}
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
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
                <div className="space-y-2">
                  <h4 className="font-extrabold text-navy-blue text-sm md:text-base">{c.title}</h4>
                  <span className="block text-[10px] font-black text-primary-teal uppercase tracking-wide">
                    {c.badge}
                  </span>
                  <p className="text-xs text-soft-gray leading-relaxed pt-1">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. GET IN TOUCH CTA */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black text-navy-blue">
            Start with a message. We'll take it from there.
          </h2>
          <p className="text-xs md:text-sm text-soft-gray leading-relaxed max-w-xl mx-auto">
            You don't need to wait until you arrive to know what your treatment will involve or what it will cost. Send us a message, share whatever reports or scans you have, and we'll give you a clear picture before you travel.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <a
              href="https://wa.me/917356100602"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-bold py-3.5 px-8 rounded-full transition-all duration-300 shadow-md flex items-center justify-center gap-2 text-xs"
            >
              <span>💬 Chat on WhatsApp</span>
            </a>
            <a
              href="tel:+917356100602"
              className="w-full sm:w-auto border border-navy-blue/20 hover:border-navy-blue text-navy-blue font-bold py-3.5 px-8 rounded-full transition-all duration-300 text-center text-xs"
            >
              Call Murukkumpuzha: +91 73561 00602
            </a>
            <a
              href="tel:+918714470808"
              className="w-full sm:w-auto border border-navy-blue/20 hover:border-navy-blue text-navy-blue font-bold py-3.5 px-8 rounded-full transition-all duration-300 text-center text-xs"
            >
              Call Kallambalam: +91 87144 70808
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
