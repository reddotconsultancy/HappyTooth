import React from "react";
import Link from "next/link";
import BreadcrumbHero from "@/components/BreadcrumbHero";

export const metadata = {
  title: "Murukkumpuzha Studio",
  description: "Clinic details for HappyTooth Smile Studio in Murukkumpuzha, as well as our established Kallambalam clinic.",
};

export default function MurukkumpuzhaClinic() {
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
      dentist: "Dr. Thushara Sudhakaran BDS MDS",
      dentistRole: "Clinical Director & Root Canal Specialist",
      mapUrl: "https://maps.google.com/?q=Ground+Floor,+Mangalasseri+Tower,+Murukkumpuzha,+Thiruvananthapuram",
    },
    {
      id: "kallambalam",
      name: "Happy Tooth Dental Care & Root Canal Centre",
      branch: "Kallambalam, Thiruvananthapuram",
      badge: "Established Clinic · Serving since 2021",
      status: "Closed on Sundays",
      address: "Mavinmoodu, Kallambalam–Varkala Road, Kallambalam, Thiruvananthapuram – 695605",
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
      <BreadcrumbHero
        title="Murukkumpuzha Studio"
        currentPage="Murukkumpuzha"
        bgImage="/images/happytooth-varkala13.jpg"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-primary-teal font-extrabold text-xs tracking-wider uppercase bg-primary-teal/10 py-1.5 px-4 rounded-full inline-block">
              Our Clinics
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-blue">
              Murukkumpuzha Location Details
            </h2>
            <p className="text-soft-gray text-xs md:text-sm leading-relaxed">
              Find directions, timings, and direct contact options for our flagship Murukkumpuzha studio below.
            </p>
                  {clinics
              .filter((c) => c.id === "murukkumpuzha")
              .map((clinic, idx) => {
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-[2rem] border-2 border-navy-blue shadow-lg overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300"
                  >
                    <div className="p-6 md:p-8 border-b border-border-gray/60 bg-[#FAF7F2] space-y-4">
                      <div className="flex justify-between items-center gap-2">
                        <span className="text-[10px] font-black text-accent-teal uppercase tracking-widest bg-accent-teal/10 py-1 px-3 rounded-md">
                          {clinic.branch.split(",")[0].trim()}
                        </span>
                        <span className={`text-[10px] font-black uppercase tracking-wider py-1 px-2.5 rounded-md ${
                          clinic.status.includes("Closed")
                            ? "bg-amber-500/10 text-amber-700 border border-amber-500/20"
                            : "bg-emerald-500/10 text-emerald-700 border border-emerald-500/20"
                        }`}>
                          {clinic.status}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-black text-navy-blue tracking-tight">{clinic.name}</h3>
                        <p className="text-xs text-soft-gray font-bold tracking-wide mt-1">{clinic.badge}</p>
                      </div>
                    </div>

                    <div className="p-6 md:p-8 flex-grow space-y-6 bg-transparent">
                      <div className="space-y-5">
                        {/* Address */}
                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 rounded-full bg-accent-teal/10 flex items-center justify-center text-accent-teal shrink-0 mt-0.5">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </div>
                          <div>
                            <strong className="block text-navy-blue text-[10px] uppercase tracking-widest mb-0.5">Address</strong>
                            <span className="text-xs md:text-sm text-soft-gray font-medium leading-relaxed">{clinic.address}</span>
                          </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 rounded-full bg-accent-teal/10 flex items-center justify-center text-accent-teal shrink-0 mt-0.5">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                          </div>
                          <div>
                            <strong className="block text-navy-blue text-[10px] uppercase tracking-widest mb-0.5">Phone</strong>
                            <a href={clinic.telLink} className="text-xs md:text-sm font-extrabold text-primary-teal hover:underline">{clinic.phone}</a>
                          </div>
                        </div>

                        {/* Hours */}
                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 rounded-full bg-accent-teal/10 flex items-center justify-center text-accent-teal shrink-0 mt-0.5">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div>
                            <strong className="block text-navy-blue text-[10px] uppercase tracking-widest mb-0.5">Working Hours</strong>
                            <span className="text-xs md:text-sm text-soft-gray font-medium leading-relaxed">{clinic.timings}</span>
                          </div>
                        </div>

                        {/* Parking */}
                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 rounded-full bg-accent-teal/10 flex items-center justify-center text-accent-teal shrink-0 mt-0.5">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 16h-1c0-1.1-.9-2-2-2s-2 .9-2 2H10c0-1.1-.9-2-2-2s-2 .9-2 2H5c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v5c0 1.1-.9 2-2 2zM12 3v4" />
                              <circle cx="8" cy="16" r="1" />
                              <circle cx="16" cy="16" r="1" />
                            </svg>
                          </div>
                          <div>
                            <strong className="block text-navy-blue text-[10px] uppercase tracking-widest mb-0.5">Parking</strong>
                            <span className="text-xs md:text-sm text-soft-gray font-medium leading-relaxed">{clinic.parking}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 md:p-8 pt-0 flex flex-col sm:flex-row gap-3 bg-transparent">
                      <a
                        href={clinic.waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center border border-green-500 text-[#25D366] hover:bg-green-500 hover:text-white font-bold text-xs py-3.5 rounded-xl transition duration-300 flex items-center justify-center gap-1.5"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.714-1.464L0 24zm6.59-4.846c1.666.988 3.311 1.485 5.352 1.486 5.517 0 10.005-4.487 10.008-10.006.002-2.673-1.036-5.186-2.923-7.076-1.887-1.89-4.405-2.93-7.079-2.93-5.521 0-10.012 4.488-10.015 10.006-.001 1.916.48 3.791 1.399 5.431l-.993 3.634 3.753-.984zm11.083-7.5c-.302-.15-1.786-.881-2.062-.982-.278-.1-.48-.15-.68.15-.2.3-.775.98-.95 1.18-.175.2-.35.225-.65.075-.302-.15-1.274-.469-2.427-1.496-.897-.8-1.502-1.787-1.678-2.088-.175-.3-.018-.462.13-.61.135-.13.3-.35.45-.525.15-.175.2-.3.3-.5s.05-.375-.025-.525C9.7 7.731 9.12 6.32 8.878 5.742c-.235-.563-.473-.487-.65-.496-.17-.008-.363-.01-.555-.01-.192 0-.505.072-.77.357-.265.285-1.01.986-1.01 2.404s1.025 2.787 1.17 2.986c.145.2 2.017 3.08 4.887 4.318.682.295 1.215.47 1.63.602.686.218 1.311.187 1.805.114.55-.082 1.786-.731 2.037-1.438.25-.707.25-1.313.175-1.437-.075-.125-.275-.2-.575-.35z" />
                        </svg>
                        <span>Chat on WhatsApp</span>
                      </a>
                      <a
                        href={clinic.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center bg-navy-blue hover:bg-accent-teal hover:text-navy-blue text-white font-bold text-xs py-3.5 rounded-xl transition duration-300 shadow-md flex items-center justify-center gap-1.5"
                      >
                        Open Google Maps
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
