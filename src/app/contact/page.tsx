import React from "react";
import BreadcrumbHero from "@/components/BreadcrumbHero";
import AppointmentForm from "@/components/AppointmentForm";

export const metadata = {
  title: "Contact Us & Locations | Happy Tooth Dental Care",
  description: "Get in touch with Happy Tooth Dental Care & Root Canal Centre. Find clinic directions, maps, timings, and phone details for Murukkumpuzha & Kallambalam.",
};

export default function Contact() {
  const locations = [
    {
      name: "HappyTooth Smile Studio — Murukkumpuzha",
      badge: "Flagship Studio · Opening June 2026",
      address: "Ground Floor, Mangalasseri Tower, Murukkumpuzha, Thiruvananthapuram – 695302",
      phone: "+91 73561 00602",
      timings: "All 7 days including Sunday · 9:30 AM – 6:30 PM",
      parking: "Ample parking — fits 6+ cars comfortably",
      mapUrl: "https://maps.google.com/?q=Ground+Floor,+Mangalasseri+Tower,+Murukkumpuzha,+Thiruvananthapuram",
    },
    {
      name: "Happy Tooth Dental Care & Root Canal Centre — Kallambalam",
      badge: "Established Clinic · Running 5+ years",
      address: "Mavinmoodu, Kallambalam–Varkala Road, Kallambalam, Thiruvananthapuram – 695605",
      phone: "+91 87144 70808",
      timings: "Monday to Saturday · 9:00 AM – 6:30 PM (Closed on Sundays)",
      parking: "Street parking available near clinic front",
      mapUrl: "https://maps.app.goo.gl/ve3hNRyxmV5PFGxR7",
    }
  ];

  return (
    <div>
      {/* Breadcrumb Header */}
      <BreadcrumbHero title="Contact Us" currentPage="Contact" bgImage="/images/happytooth-varkala10.jpg" />

      {/* Main layout grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Info (Left Column) */}
            <div className="lg:col-span-7 space-y-10 animate-fade-in-up">
              <div className="space-y-4">
                <span className="text-primary-teal font-extrabold text-xs tracking-wider uppercase bg-primary-teal/10 py-1.5 px-4 rounded-full inline-block">
                  Get In Touch
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-blue leading-tight">
                  Reach out to HappyTooth
                </h2>
                <p className="text-soft-gray text-xs md:text-sm leading-relaxed">
                  Whether you’re planning a routine checkup, seeking specialist root canal treatment, or visiting Kerala from abroad, we are here to coordinate your appointments. Contact us directly or fill in the booking form.
                </p>
              </div>

              {/* Info Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                {/* Phone Card */}
                <div className="bg-bg-light-blue/40 rounded-2xl p-6 border border-gray-50 flex items-start gap-4 shadow-xs hover:shadow-md transition duration-300">
                  <span className="flex-shrink-0 w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary-teal shadow-xs">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  <div>
                    <span className="block text-[10px] font-bold text-soft-gray uppercase tracking-wider mb-1">Call us directly</span>
                    <a href="tel:+918714470808" className="block text-xs font-extrabold text-navy-blue hover:text-primary-teal transition-colors">
                      Kallambalam: +91 87144 70808
                    </a>
                    <a href="tel:+917356100602" className="block text-xs font-extrabold text-navy-blue hover:text-primary-teal transition-colors mt-0.5">
                      Murukkumpuzha: +91 73561 00602
                    </a>
                  </div>
                </div>

                {/* Email Card */}
                <div className="bg-bg-light-blue/40 rounded-2xl p-6 border border-gray-50 flex items-start gap-4 shadow-xs hover:shadow-md transition duration-300">
                  <span className="flex-shrink-0 w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary-teal shadow-xs">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <div>
                    <span className="block text-[10px] font-bold text-soft-gray uppercase tracking-wider mb-1">Email address</span>
                    <a href="mailto:smile@happytoothdental.in" className="text-xs font-extrabold text-navy-blue hover:text-primary-teal transition-colors">
                      smile@happytoothdental.in
                    </a>
                  </div>
                </div>
              </div>

              {/* Timing Display Panels (Separate locations) */}
              <div className="space-y-4 pt-4">
                <h3 className="text-lg font-black text-navy-blue flex items-center gap-2">
                  <span className="w-1.5 h-5 bg-primary-teal rounded-full"></span>
                  Clinic Working Hours
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-navy-blue rounded-3xl p-5 text-white shadow-md">
                    <span className="block text-[10px] font-black text-accent-teal tracking-wider uppercase mb-1">Kallambalam Clinic</span>
                    <span className="block text-xs text-gray-300">Monday – Saturday</span>
                    <strong className="block text-sm text-white mt-1">9:00 AM – 6:30 PM</strong>
                    <span className="block text-[10px] text-red-400 mt-2 font-medium">Closed on Sundays</span>
                  </div>
                  <div className="bg-navy-blue rounded-3xl p-5 text-white shadow-md">
                    <span className="block text-[10px] font-black text-accent-teal tracking-wider uppercase mb-1">Murukkumpuzha Studio</span>
                    <span className="block text-xs text-gray-300">All 7 days</span>
                    <strong className="block text-sm text-white mt-1">9:30 AM – 6:30 PM</strong>
                    <span className="block text-[10px] text-green-400 mt-2 font-medium">Open Daily (Inc. Sundays)</span>
                  </div>
                </div>
              </div>

              {/* Map Locations Grid */}
              <div className="space-y-6 pt-4 border-t border-gray-100">
                <h3 className="text-lg font-black text-navy-blue flex items-center gap-2">
                  <span className="w-1.5 h-5 bg-primary-teal rounded-full"></span>
                  Our Locations & Directions
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {locations.map((loc, idx) => (
                    <div key={idx} className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-md flex flex-col group h-full">
                      {/* Stylized Mock Map Graphic Area */}
                      <div className="relative h-36 bg-slate-50 flex flex-col items-center justify-center p-6 text-center overflow-hidden">
                        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                        <div className="w-8 h-8 rounded-full bg-primary-teal/20 flex items-center justify-center text-primary-teal animate-ping duration-1000 absolute"></div>
                        <div className="relative w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary-teal shadow-md border border-gray-100 z-10">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <span className="text-[9px] font-black text-primary-teal mt-2.5 z-10 bg-white py-0.5 px-2.5 rounded-full border shadow-xs">
                          Map Coordinates Loaded
                        </span>
                      </div>

                      {/* Info Area */}
                      <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                        <div className="space-y-2">
                          <span className="text-[9px] font-black text-primary-teal uppercase tracking-wider block">{loc.badge}</span>
                          <h4 className="font-extrabold text-navy-blue text-sm">{loc.name.split("—")[1].trim()}</h4>
                          <p className="text-xs text-soft-gray leading-relaxed">{loc.address}</p>
                          <span className="block text-[10px] text-soft-gray font-medium">📞 Phone: {loc.phone}</span>
                          <span className="block text-[10px] text-soft-gray font-medium">🚗 Parking: {loc.parking}</span>
                        </div>
                        <a
                          href={loc.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full text-center inline-block bg-primary-teal hover:bg-navy-blue text-white font-bold text-xs py-2.5 rounded-xl transition duration-300 shadow-xs hover:shadow-md"
                        >
                          Get Directions / Open in Maps
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Appointment Form (Right Column) */}
            <div className="lg:col-span-5">
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
