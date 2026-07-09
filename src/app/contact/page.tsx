import React from "react";
import BreadcrumbHero from "@/components/BreadcrumbHero";
import AppointmentForm from "@/components/AppointmentForm";
import ClinicCard from "@/components/ClinicCard";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
 title: "Book an Appointment",
 description: "Book a dental consultation or root canal appointment at HappyTooth. Find addresses, maps, phone numbers, WhatsApp links, and timings for Murukkumpuzha & Kallambalam.",
 alternates: { canonical: "/contact" },

 openGraph: {
  title: "Book a Dental Appointment | HappyTooth Clinics",
  description: "Book a consultation at HappyTooth. Find addresses, maps, phone numbers, and timings for Murukkumpuzha & Kallambalam clinics.",
  url: "/contact",
  images: [
   {
    url: "/images/happytooth-varkala12-1.jpg",
    width: 1200,
    height: 630,
    alt: "HappyTooth Dental Clinics \u2014 Book an appointment",
   },
  ],
 },
};

export default function Contact() {
 const clinics = [
  {
   name: "HappyTooth Smile Studio",
   branch: "Murukkumpuzha, Thiruvananthapuram",
   badge: "Flagship Studio · Open Daily",
   status: "Open All 7 Days",
   address: "Ground Floor, Mangalasseri Tower, Murukkumpuzha, Thiruvananthapuram – 695302",
   phone: "+91 73561 00602",
   telLink: "tel:+917356100602",
   waLink: "https://wa.me/917356100602",
   timings: "9:30 AM – 6:30 PM (All 7 Days)",
   parking: "Ample private parking (fits 6+ cars)",
   dentist: "Dr. Thushara Sudhakaran BDS MDS",
   dentistRole: "Clinical Director & Root Canal Specialist",
   mapUrl: "https://maps.google.com/?q=HappyTooth+Smile+Studio,+Murukkumpuzha,+Thiruvananthapuram",
  },
  {
   name: "HappyTooth Dental Care & Root Canal Centre",
   branch: "Kallambalam, Thiruvananthapuram",
   badge: "Established Clinic · Serving since 2021",
   status: "Closed on Sundays",
   address: "Alinmoodu, Kallambalam–Varkala Road, Kallambalam, Thiruvananthapuram – 695605",
   phone: "+91 87144 70808",
   telLink: "tel:+918714470808",
   waLink: "https://wa.me/918714470808",
   timings: "9:30 AM – 6:30 PM (Monday to Saturday)",
   parking: "Street parking available near front",
   dentist: "Dr. Thushara Sudhakaran BDS MDS",
   dentistRole: "Clinical Director & Root Canal Specialist",
   mapUrl: "https://maps.app.goo.gl/ve3hNRyxmV5PFGxR7",
  }
 ];

 return (
  <div>
   {/* Breadcrumb Header */}
   <BreadcrumbHero title="Book an Appointment" currentPage="Book Appointment" bgImage="/images/happytooth-varkala10.jpg" />

   {/* Clinic Cards */}
   <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <ScrollReveal animation="fade-up">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
       <span className="text-primary-teal font-extrabold text-xs tracking-wider uppercase bg-primary-teal/10 py-1.5 px-4 rounded-full inline-block">
        Our Locations
       </span>
       <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-blue">
        Two Clinics in Thiruvananthapuram
       </h2>
       <p className="text-soft-gray text-sm md:text-base leading-relaxed text-justify max-w-2xl mx-auto">
        We operate two fully equipped dental offices headed by lead specialist Dr. Thushara Sudhakaran. Find the specific hours, phone lines, and locations for each branch below.
       </p>
      </div>
      </ScrollReveal>

     {/* Clinics cards side-by-side */}
     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
      {clinics.map((clinic, idx) => (
       <ClinicCard
        key={idx}
        name={clinic.name}
        branch={clinic.branch}
        badge={clinic.badge}
        status={clinic.status}
        address={clinic.address}
        phone={clinic.phone}
        telLink={clinic.telLink}
        waLink={clinic.waLink}
        timings={clinic.timings}
        parking={clinic.parking}
        mapUrl={clinic.mapUrl}
       />
      ))}
     </div>

      {/* Appointment Form — full width, centred */}
      <ScrollReveal animation="scale">
      <div className="max-w-4xl mx-auto">
       <AppointmentForm />
      </div>
      </ScrollReveal>

    </div>
   </section>

   {/* Google Maps Section */}
   <section className="py-20 bg-bg-light-blue/30">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
      <span className="text-primary-teal font-extrabold text-xs tracking-wider uppercase bg-primary-teal/10 py-1.5 px-4 rounded-full inline-block">
       Find Us
      </span>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-blue">
       Visit Our Clinics
      </h2>
      <p className="text-soft-gray text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
       Use the maps below to get directions to either of our clinic locations in Thiruvananthapuram.
      </p>
     </div>

     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Murukkumpuzha Map */}
      <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
       <div className="p-5 pb-3 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary-teal/10 flex items-center justify-center shrink-0">
         <svg className="w-5 h-5 text-primary-teal" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
         </svg>
        </div>
        <div>
         <h3 className="text-sm font-extrabold text-navy-blue">HappyTooth Smile Studio</h3>
         <p className="text-xs text-soft-gray">Murukkumpuzha, Thiruvananthapuram</p>
        </div>
       </div>
       <div className="px-5 pb-5">
        <div className="rounded-2xl overflow-hidden border border-gray-100">
         <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.1!2d76.8!3d8.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOCczMCcwMCIgTiA3NsKwNDgnMDAiIEU!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin&q=HappyTooth+Smile+Studio+Murukkumpuzha+Thiruvananthapuram"
          width="100%"
          height="280"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="HappyTooth Smile Studio Murukkumpuzha Map"
          className="w-full"
         />
        </div>
       </div>
       <div className="px-5 pb-5">
        <a
         href="https://maps.google.com/?q=HappyTooth+Smile+Studio,+Murukkumpuzha,+Thiruvananthapuram"
         target="_blank"
         rel="noopener noreferrer"
         className="flex items-center justify-center gap-2 bg-navy-blue hover:bg-accent-teal text-white font-bold text-sm py-3 px-6 rounded-xl transition-all duration-300 w-full active:scale-95"
        >
         <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
         </svg>
         Open in Google Maps
        </a>
       </div>
      </div>

      {/* Kallambalam Map */}
      <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
       <div className="p-5 pb-3 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary-teal/10 flex items-center justify-center shrink-0">
         <svg className="w-5 h-5 text-primary-teal" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
         </svg>
        </div>
        <div>
         <h3 className="text-sm font-extrabold text-navy-blue">HappyTooth Dental Care & Root Canal Centre</h3>
         <p className="text-xs text-soft-gray">Kallambalam, Thiruvananthapuram</p>
        </div>
       </div>
       <div className="px-5 pb-5">
        <div className="rounded-2xl overflow-hidden border border-gray-100">
         <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.1!2d76.8!3d8.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOCczNicwMCIgTiA3NsKwNDgnMDAiIEU!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin&q=HappyTooth+Dental+Care+Kallambalam+Thiruvananthapuram"
          width="100%"
          height="280"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="HappyTooth Dental Care Kallambalam Map"
          className="w-full"
         />
        </div>
       </div>
       <div className="px-5 pb-5">
        <a
         href="https://maps.app.goo.gl/ve3hNRyxmV5PFGxR7"
         target="_blank"
         rel="noopener noreferrer"
         className="flex items-center justify-center gap-2 bg-navy-blue hover:bg-accent-teal text-white font-bold text-sm py-3 px-6 rounded-xl transition-all duration-300 w-full active:scale-95"
        >
         <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
         </svg>
         Open in Google Maps
        </a>
       </div>
      </div>
     </div>

    </div>
   </section>
  </div>
 );
}
