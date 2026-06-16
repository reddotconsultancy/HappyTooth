import React from "react";
import BreadcrumbHero from "@/components/BreadcrumbHero";
import AppointmentForm from "@/components/AppointmentForm";
import ClinicCard from "@/components/ClinicCard";

export const metadata = {
  title: "Contact Us & Locations",
  description: "Get in touch with Happy Tooth Dental Care & Root Canal Centre. Find clinic directions, maps, timings, and phone details for Murukkumpuzha & Kallambalam.",
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
      {/* Breadcrumb Header */}
      <BreadcrumbHero title="Contact & Locations" currentPage="Contact" bgImage="/images/happytooth-varkala10.jpg" />

      {/* Main layout grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-primary-teal font-extrabold text-xs tracking-wider uppercase bg-primary-teal/10 py-1.5 px-4 rounded-full inline-block">
              Our Locations
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-blue">
              Two Clinics in Thiruvananthapuram
            </h2>
            <p className="text-soft-gray text-xs md:text-sm leading-relaxed">
              We operate two fully equipped dental offices headed by lead specialist Dr. Thushara Sudhakaran. Find the specific hours, phone lines, and locations for each branch below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Clinics separate spaces (Left Column) */}
            <div className="lg:col-span-8 space-y-12">
              <div className="grid grid-cols-1 gap-8">
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

              {/* Extra Help Area */}
              <div className="bg-bg-light-blue/20 rounded-3xl p-6 md:p-8 border border-gray-150 space-y-4">
                <h4 className="font-extrabold text-navy-blue text-base flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-primary-teal rounded-full"></span>
                  Centralized Email & Record Submission
                </h4>
                <p className="text-xs md:text-sm text-soft-gray leading-relaxed">
                  For administrative matters, digital dental X-ray/records submission, international case evaluations, or general dental tourism feedback, please email our centralized team:
                </p>
                <div className="bg-white py-3.5 px-6 rounded-2xl border border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 shadow-xs">
                  <div>
                    <span className="block text-[10px] font-bold text-soft-gray uppercase tracking-wider">Email Address</span>
                    <a href="mailto:smile@happytoothdental.in" className="text-sm font-extrabold text-navy-blue hover:text-primary-teal transition-colors">
                      smile@happytoothdental.in
                    </a>
                  </div>
                  <a
                    href="mailto:smile@happytoothdental.in"
                    className="inline-block bg-navy-blue hover:bg-primary-teal text-white font-bold text-xs py-2.5 px-5 rounded-xl transition duration-300 text-center"
                  >
                    Send Email
                  </a>
                </div>
              </div>

            </div>

            {/* Appointment Form (Right Column) */}
            <div className="lg:col-span-4">
              <AppointmentForm />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
