import React from "react";
import Image from "next/image";
import BreadcrumbHero from "@/components/BreadcrumbHero";

export const metadata = {
  title: "About Us | Happy Tooth Dental Care",
  description: "Learn about HappyTooth's medical philosophy, our specialist team across Murukkumpuzha & Kallambalam, and our Clinical Director Dr. Thushara Sudhakaran.",
};

export default function About() {


  const specialisations = [
    {
      title: "Endodontics",
      desc: "Root canal treatments, retreatments, and conservative tooth restoration",
    },
    {
      title: "Orthodontics",
      desc: "Braces, clear aligners, and dentofacial orthopaedics for children and adults",
    },
    {
      title: "Paediatric Dentistry",
      desc: "Children's dental care from infancy through teenage years, handled by a paediatric specialist",
    },
    {
      title: "Periodontics",
      desc: "Gum disease treatment, scaling, deep cleaning, and surgical periodontal care",
    },
    {
      title: "Prosthodontics",
      desc: "Crowns, bridges, dentures, and full-mouth rehabilitation",
    },
    {
      title: "Oral & Maxillofacial Surgery",
      desc: "Extractions, wisdom teeth, jaw-related procedures, and minor oral surgery",
    },
    {
      title: "Implantology",
      desc: "Single and multiple dental implants, including full-arch restoration",
    },
    {
      title: "Cosmetic & Aesthetic Dentistry",
      desc: "Digital smile design, veneers, teeth whitening, and smile makeovers",
    },
  ];

  const directorStats = [
    { value: "1000+", label: "Root canals completed" },
    { value: "1 visit", label: "Single-sitting RCTs available" },
    { value: "Re-RCT", label: "Complex retreatments undertaken" },
  ];

  const timeline = [
    {
      year: "2014 – 2017",
      title: "MDS — Endodontics & Conservative Dentistry",
      subtitle: "A B Shetty Memorial Institute of Dental Sciences, Mangalore",
      desc: "A 3-year postgraduate surgical and clinical programme covering advanced root canal therapy, endodontic microsurgery, regenerative endodontics, and complex restorative procedures.",
    },
    {
      year: "2017 – 2021",
      title: "Clinical Practice — Apollo White Dental, Hyderabad",
      subtitle: "Specialist endodontic practice at Apollo White Dental",
      desc: "Treating patients from across India and the NRI community, in a setting with international clinical standards and high procedural volume.",
    },
    {
      year: "2021",
      title: "Happy Tooth Dental Care & Root Canal Centre — Kallambalam",
      subtitle: "Her first clinic in Thiruvananthapuram",
      desc: "Over five years it has built a steady, largely word-of-mouth following among patients seeking to save compromised teeth with specialized root canals and conservative dentistry.",
    },
    {
      year: "Opening Soon / June 2026",
      title: "HappyTooth Smile Studio — Murukkumpuzha",
      subtitle: "Her second and flagship clinic",
      desc: "A purpose-built specialist centre expanding into implantology, orthodontics, digital smile design, teeth whitening, and cosmetic dentistry, alongside endodontics. Same founding philosophy, broader scope.",
    },
  ];

  const expectations = [
    {
      title: "The right doctor for your case",
      desc: "Every patient is matched to a specialist in the relevant field — not whoever happens to be available that day.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      title: "Extract only as a last resort",
      desc: "If your tooth can be saved, that will always be the first conversation. Extraction is recommended only when there is genuinely no other option left.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Pain-free, every time",
      desc: "Dental anxiety keeps people away far longer than they should be. The clinical approach here is built around making that fear irrelevant — for every patient, every visit.",
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
        title="About Us"
        currentPage="About Us"
        bgImage="/images/indian_dental_health.png"
      />

      {/* 1. Core Philosophy & Tagline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image Side */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -top-6 -left-6 w-12 h-12 border-t-4 border-l-4 border-primary-teal rounded-tl-2xl"></div>
              <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-4 border-r-4 border-primary-teal rounded-br-2xl"></div>
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white p-3">
                <Image
                  src="/images/indian_dentist_team.png"
                  alt="Happy Tooth Dental Clinic Specialist Team Portrait"
                  width={600}
                  height={600}
                  className="rounded-2xl w-full h-auto object-cover transform hover:scale-[1.01] transition-transform duration-500"
                />
              </div>
            </div>

            {/* Description Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-primary-teal font-extrabold text-xs tracking-wider uppercase bg-primary-teal/10 py-1.5 px-4 rounded-full inline-block">
                Our Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-blue leading-tight">
                A family dental clinic that takes <br />
                <span className="text-primary-teal bg-gradient-to-r from-primary-teal to-accent-teal bg-clip-text text-transparent">specialist care seriously</span>
              </h2>
              <p className="text-soft-gray text-base leading-relaxed">
                HappyTooth covers the full range of dental needs — from a child's first visit to complex restorative treatment in later years. What sets us apart is not the treatments we offer, but the standard to which we deliver them.
              </p>

              {/* How we work card */}
              <div className="bg-bg-light-blue/40 border border-primary-teal/10 rounded-3xl p-6 md:p-8 space-y-4">
                <h3 className="text-lg font-bold text-navy-blue flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-primary-teal rounded-full inline-block"></span>
                  HOW WE WORK
                </h3>
                <h4 className="font-extrabold text-navy-blue text-sm md:text-base leading-snug">
                  Every case is handled by the right specialist — not a generalist filling in
                </h4>
                <div className="text-xs md:text-sm text-soft-gray space-y-3 leading-relaxed">
                  <p>
                    At most dental clinics, general dentists handle a wide range of treatments — including cases that technically require a specialist. We have made a deliberate choice not to work that way.
                  </p>
                  <p>
                    At HappyTooth, your first visit is a consultation and diagnosis. From there, your treatment is assigned to the specialist trained for it — an orthodontic case goes to an orthodontist, a child's treatment to a paediatric dentist, gum problems to a periodontist, and so on. Every treatment is carried out by a specialist from our team of doctors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Team Stats & List of Specialisations */}
      <section className="py-20 bg-bg-light-blue/20 relative">
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary-teal/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left side: stats card */}
            <div className="lg:col-span-4 space-y-8 bg-white border border-gray-100 p-8 rounded-[2rem] shadow-xl">
              <h3 className="text-2xl font-extrabold text-navy-blue">Our Team</h3>
              <p className="text-xs md:text-sm text-soft-gray leading-relaxed">
                We have a team of over eighteen specialist doctors across both locations — more than ten at HappyTooth Smile Studio in Murukkumpuzha and eight at our Kallambalam clinic. Specialist doctor services are available across all dental specialisations, so whatever your dental concern, the right expertise is accessible to you.
              </p>
              <p className="text-xs md:text-sm text-soft-gray leading-relaxed border-t border-gray-100 pt-4">
                Every doctor on our team brings dedicated years of training and clinical experience in their own field. You are never seen by someone working outside their area of expertise.
              </p>


            </div>

            {/* Right side: 8 specializations list */}
            <div className="lg:col-span-8 space-y-6">
              <h3 className="text-2xl font-extrabold text-navy-blue pb-2 border-b border-gray-100 flex items-center gap-2">
                Our Specialisations
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {specialisations.map((sp, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white p-5 rounded-2xl border border-gray-50 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-md flex flex-col gap-2"
                  >
                    <h4 className="font-extrabold text-primary-teal text-sm md:text-base">
                      {sp.title}
                    </h4>
                    <p className="text-xs md:text-sm text-soft-gray leading-relaxed">
                      {sp.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Clinical Director Profile */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left image of Dr. Thushara */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 bg-white p-3">
                <div className="relative h-[32rem] rounded-[2rem] overflow-hidden">
                  <Image
                    src="/images/Doctors-1.webp"
                    alt="Dr. Thushara Sudhakaran Clinical Director Specialist Endodontist"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
              
              {/* Badge Overlay */}
              <div className="absolute top-10 right-0 bg-white/95 backdrop-blur-md rounded-2xl py-3.5 px-6 shadow-xl border border-gray-100 z-10 flex flex-col items-center">
                <span className="text-[10px] text-soft-gray font-extrabold tracking-widest uppercase">Clinical Director</span>
                <span className="text-xs font-black text-navy-blue mt-1">MDS (Endodontics)</span>
              </div>
            </div>

            {/* Right content details */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-primary-teal font-extrabold text-xs tracking-wider uppercase bg-primary-teal/10 py-1.5 px-4 rounded-full inline-block">
                Our Clinical Director
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-blue leading-tight">
                Dr. Thushara Sudhakaran <br />
                <span className="text-xs md:text-sm text-soft-gray font-bold tracking-wide block mt-1">
                  BDS  ·  MDS (Endodontics & Conservative Dentistry)  ·  Specialist Endodontist
                </span>
              </h2>

              <div className="space-y-4 text-soft-gray leading-relaxed text-sm md:text-base">
                <p>
                  HappyTooth was founded by Dr. Thushara Sudhakaran, an endodontist whose practice is built on a single principle — save the tooth before considering extraction. She completed her Masters in Endodontics and Conservative Dentistry from A B Shetty Memorial Institute of Dental Sciences, Mangalore in 2017, and went on to practice at Apollo White Dental in Hyderabad before returning to Kerala to build her own clinics.
                </p>
                <p>
                  She has completed over a thousand root canal treatments — including single-sitting procedures and complex retreatments of previously failed root canals. As Clinical Director, she sets the clinical standards that apply across both HappyTooth locations.
                </p>
              </div>

              {/* Director stats row */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
                {directorStats.map((ds, idx) => (
                  <div key={idx} className="text-center space-y-1">
                    <span className="block text-xl md:text-2xl font-black text-primary-teal leading-none">{ds.value}</span>
                    <span className="block text-[9px] md:text-xs text-soft-gray font-bold leading-tight">{ds.label}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Timeline Journey */}
      <section className="py-20 bg-bg-light-blue/20 border-t border-b border-gray-100 relative">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent-teal/5 rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-16 space-y-4">
            <span className="text-primary-teal font-extrabold text-xs tracking-wider uppercase bg-primary-teal/10 py-1.5 px-4 rounded-full inline-block">
              Her Journey
            </span>
            <h2 className="text-3xl font-extrabold text-navy-blue">Timeline of Expertise</h2>
            <p className="text-soft-gray text-xs md:text-sm max-w-xl mx-auto">
              Follow Dr. Thushara's professional path from academic excellence to establishing leading specialist centers in Thiruvananthapuram.
            </p>
          </div>

          {/* Vertical timeline UI */}
          <div className="relative border-l-2 border-primary-teal/20 pl-6 md:pl-10 space-y-12 ml-4">
            {timeline.map((step, idx) => (
              <div key={idx} className="relative group">
                {/* Bullet node indicator */}
                <div className="absolute -left-[35px] md:-left-[51px] top-1.5 w-6 h-6 rounded-full border-4 border-white bg-primary-teal shadow-md flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                </div>

                {/* Timeline Card */}
                <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm transition-all duration-300 group-hover:shadow-md">
                  <span className="inline-block text-xs font-black text-primary-teal bg-primary-teal/10 px-3 py-1 rounded-full mb-3">
                    {step.year}
                  </span>
                  <h3 className="text-lg font-extrabold text-navy-blue leading-snug">
                    {step.title}
                  </h3>
                  <h4 className="text-xs font-bold text-soft-gray mt-1 mb-3">
                    {step.subtitle}
                  </h4>
                  <p className="text-xs md:text-sm text-soft-gray leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. What to Expect Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-primary-teal font-extrabold text-xs tracking-wider uppercase bg-primary-teal/10 py-1.5 px-4 rounded-full inline-block">
              Experience Care
            </span>
            <h2 className="text-3xl font-extrabold text-navy-blue">What to Expect</h2>
            <p className="text-soft-gray text-xs md:text-sm leading-relaxed">
              We shape our dental practice around your convenience and diagnostic transparency.
            </p>
          </div>

          {/* Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expectations.map((exp, idx) => (
              <div 
                key={idx} 
                className="bg-bg-light-blue/20 rounded-3xl p-6 md:p-8 border border-gray-50 flex flex-col justify-between h-full hover:-translate-y-1.5 transition-transform duration-300"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-xs">
                    {exp.icon}
                  </div>
                  <h3 className="text-lg font-black text-navy-blue leading-snug">
                    {exp.title}
                  </h3>
                  <p className="text-xs md:text-sm text-soft-gray leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Accent Image Callout */}
          <div className="mt-16 rounded-3xl overflow-hidden shadow-xl border border-gray-100 bg-white p-3 relative h-64 md:h-96">
            <Image
              src="/images/indian_family_smile.png"
              alt="Happy Indian family smiling with healthy teeth"
              fill
              className="object-cover rounded-2xl"
            />
          </div>

        </div>
      </section>
    </div>
  );
}
