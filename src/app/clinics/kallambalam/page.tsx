import React from "react";
import Link from "next/link";
import BreadcrumbHero from "@/components/BreadcrumbHero";

export const metadata = {
  title: "Happy Tooth Dental Care & Root Canal Centre – Kallambalam",
  description: "Clinic details for Happy Tooth Dental Care & Root Canal Centre in Kallambalam, as well as our new Murukkumpuzha Smile Studio.",
};

export default function KallambalamClinic() {
  const clinics = [
    {
      id: "murukkumpuzha",
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
      dentist: "Dr. Thushara Sudhakaran BDS, MDS",
      dentistRole: "Specialist Endodontist · Lead Dentist",
      mapUrl: "https://maps.google.com/?q=Ground+Floor,+Mangalasseri+Tower,+Murukkumpuzha,+Thiruvananthapuram",
    },
    {
      id: "kallambalam",
      name: "Happy Tooth Dental Care & Root Canal Centre",
      branch: "Kallambalam, Thiruvananthapuram",
      badge: "Established Clinic · 5+ Years",
      status: "Closed on Sundays",
      address: "Mavinmoodu, Kallambalam–Varkala Road, Kallambalam, Thiruvananthapuram – 695605",
      phone: "+91 87144 70808",
      telLink: "tel:+918714470808",
      waLink: "https://wa.me/918714470808",
      timings: "9:30 AM – 6:30 PM (Monday to Saturday)",
      parking: "Street parking available near front",
      dentist: "Dr. Thushara Sudhakaran BDS, MDS",
      dentistRole: "Specialist Endodontist · Lead Dentist",
      mapUrl: "https://maps.app.goo.gl/ve3hNRyxmV5PFGxR7",
    }
  ];

  return (
    <div>
      <BreadcrumbHero
        title="Kallambalam Clinic"
        currentPage="Kallambalam"
        bgImage="/images/happytooth-varkala10.jpg"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-primary-teal font-extrabold text-xs tracking-wider uppercase bg-primary-teal/10 py-1.5 px-4 rounded-full inline-block">
              Our Clinics
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-blue">
              Our Locations in Thiruvananthapuram
            </h2>
            <p className="text-soft-gray text-xs md:text-sm leading-relaxed">
              We operate two fully equipped dental offices headed by lead specialist Dr. Thushara Sudhakaran. Explore details for both clinics below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {clinics.map((clinic, idx) => {
              const isCurrent = clinic.id === "kallambalam";
              return (
                <div
                  key={idx}
                  className={`bg-white rounded-3xl border shadow-md overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all duration-300 ${
                    isCurrent ? "border-primary-teal ring-2 ring-primary-teal/20" : "border-gray-200"
                  }`}
                >
                  {/* Header accent */}
                  <div className="p-6 md:p-8 bg-navy-blue text-white space-y-3 relative">
                    {isCurrent && (
                      <span className="absolute top-4 right-4 bg-primary-teal text-white text-[9px] font-black uppercase tracking-wider py-1 px-2.5 rounded-full shadow-sm">
                        Selected Clinic
                      </span>
                    )}
                    <div className="flex justify-between items-center gap-2">
                      <span className="text-[10px] font-black text-accent-teal uppercase tracking-widest bg-white/10 py-1 px-3 rounded-full">
                        {clinic.branch}
                      </span>
                      <span className={`text-[10px] font-black uppercase tracking-wider py-1 px-2.5 rounded-full ${
                        clinic.status.includes("Closed") ? "bg-red-500/20 text-red-300" : "bg-green-500/20 text-green-300"
                      }`}>
                        {clinic.status}
                      </span>
                    </div>
                    <h3 className="text-lg md:text-xl font-black leading-tight h-14 flex items-center">{clinic.name}</h3>
                    <p className="text-xs text-gray-300 font-medium">{clinic.badge}</p>
                  </div>

                  {/* Details content */}
                  <div className="p-6 md:p-8 flex-grow space-y-6">

                    {/* Location Details */}
                    <div className="space-y-4 text-xs md:text-sm text-soft-gray">
                      {/* Address */}
                      <div className="flex items-start gap-3">
                        <svg className="w-4 h-4 text-primary-teal shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <div>
                          <strong className="block text-navy-blue text-xs uppercase tracking-wider mb-0.5">Address</strong>
                          <span className="text-xs leading-relaxed">{clinic.address}</span>
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="flex items-start gap-3">
                        <svg className="w-4 h-4 text-primary-teal shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <div>
                          <strong className="block text-navy-blue text-xs uppercase tracking-wider mb-0.5">Phone Line</strong>
                          <a href={clinic.telLink} className="text-xs font-bold text-primary-teal hover:underline text-left">
                            {clinic.phone}
                          </a>
                        </div>
                      </div>

                      {/* Hours */}
                      <div className="flex items-start gap-3">
                        <svg className="w-4 h-4 text-primary-teal shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                          <strong className="block text-navy-blue text-xs uppercase tracking-wider mb-0.5">Working Hours</strong>
                          <span className="text-xs leading-relaxed">{clinic.timings}</span>
                        </div>
                      </div>

                      {/* Parking */}
                      <div className="flex items-start gap-3">
                        <svg className="w-4 h-4 text-primary-teal shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 16h-1c0-1.1-.9-2-2-2s-2 .9-2 2H10c0-1.1-.9-2-2-2s-2 .9-2 2H5c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v5c0 1.1-.9 2-2 2zM12 3v4" />
                          <circle cx="8" cy="16" r="1" />
                          <circle cx="16" cy="16" r="1" />
                        </svg>
                        <div>
                          <strong className="block text-navy-blue text-xs uppercase tracking-wider mb-0.5">Parking</strong>
                          <span className="text-xs leading-relaxed">{clinic.parking}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer/Map button */}
                  <div className="p-6 md:p-8 pt-0 border-t border-gray-50 bg-slate-50/50 flex flex-col gap-2">
                    <a
                      href={clinic.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-center bg-primary-teal hover:bg-navy-blue text-white font-bold text-xs py-3 rounded-xl transition duration-300 shadow-sm flex items-center justify-center gap-1.5"
                    >
                      Open Google Maps
                    </a>
                    <a
                      href={clinic.waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-center border border-green-500 text-[#25D366] hover:bg-green-50/50 font-bold text-xs py-3 rounded-xl transition duration-300 flex items-center justify-center gap-1.5"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
