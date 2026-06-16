import React from "react";
import Link from "next/link";
import BreadcrumbHero from "@/components/BreadcrumbHero";
import ClinicCard from "@/components/ClinicCard";

export const metadata = {
  title: "Kallambalam Clinic",
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
              Kallambalam Location Details
            </h2>
            <p className="text-soft-gray text-xs md:text-sm leading-relaxed">
              Find directions, timings, and direct contact options for our established Kallambalam clinic below.
            </p>
                  {clinics
              .filter((c) => c.id === "kallambalam")
              .map((clinic, idx) => {
                return (
                  <div key={idx} className="max-w-3xl mx-auto">
                    <ClinicCard
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
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
}
