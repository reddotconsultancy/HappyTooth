import React from "react";
import BreadcrumbHero from "@/components/BreadcrumbHero";
import ClinicCard from "@/components/ClinicCard";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
 title: "Best Dental Clinic in Murukkumpuzha",
 description: "Book an appointment at HappyTooth Smile Studio in Murukkumpuzha, Thiruvananthapuram. Our brand new flagship clinic specializing in cosmetic dentistry, dental implants, aligners, and root canals.",
 alternates: { canonical: "/clinics/murukkumpuzha" },
 openGraph: {
  title: "Best Dental Clinic in Murukkumpuzha | HappyTooth Smile Studio",
  description: "HappyTooth Smile Studio in Murukkumpuzha, Thiruvananthapuram — cosmetic dentistry, dental implants, aligners, and root canals. Open 7 days.",
  url: "/clinics/murukkumpuzha",
  images: [
   {
    url: "/images/happytooth-varkala12-1.jpg",
    width: 1200,
    height: 630,
    alt: "HappyTooth Smile Studio, Murukkumpuzha — Flagship dental clinic Thiruvananthapuram",
   },
  ],
 },
};

const clinicSchema = {
 "@context": "https://schema.org",
 "@graph": [
  {
   "@type": "Dentist",
   "@id": "https://www.happytoothdental.in/#clinic-murukkumpuzha",
   "name": "HappyTooth Smile Studio (Murukkumpuzha)",
   "parentOrganization": {
    "@id": "https://www.happytoothdental.in/#organization"
   },
   "image": "https://www.happytoothdental.in/images/happytooth-varkala12-1.jpg",
   "telephone": "+91 73561 00602",
   "priceRange": "$$",
   "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ground Floor, Mangalasseri Tower, Murukkumpuzha",
    "addressLocality": "Thiruvananthapuram",
    "addressRegion": "Kerala",
    "postalCode": "695302",
    "addressCountry": "IN"
   },
   "geo": {
    "@type": "GeoCoordinates",
    "latitude": 8.6136824,
    "longitude": 76.8352005
   },
   "openingHoursSpecification": [
    {
     "@type": "OpeningHoursSpecification",
     "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
     ],
     "opens": "09:30",
     "closes": "18:30"
    }
   ],
   "medicalSpecialty": [
    "Endodontics",
    "Orthodontics",
    "CosmeticDentistry",
    "Implantology"
   ],
   "sameAs": [
    "TODO_JUSTDIAL_PROFILE_LINK",
    "TODO_QUICKERALA_PROFILE_LINK"
   ]
  },
  {
   "@type": "Physician",
   "@id": "https://www.happytoothdental.in/#dr-thushara-sudhakaran",
   "name": "Dr. Thushara Sudhakaran",
   "medicalSpecialty": "Endodontics",
   "jobTitle": "Clinical Director & Root Canal Specialist",
   "credentials": "BDS, MDS Endodontics",
   "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "A B Shetty Memorial Institute of Dental Sciences"
   },
   "memberOf": {
    "@type": "MedicalOrganization",
    "name": "Kerala Dental Council"
   },
   "worksFor": [
    {
     "@type": "Dentist",
     "@id": "https://www.happytoothdental.in/#clinic-murukkumpuzha"
    },
    {
     "@type": "Dentist",
     "@id": "https://www.happytoothdental.in/#clinic-kallambalam"
    }
   ]
  }
 ]
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
   mapUrl: "https://maps.google.com/?q=HappyTooth+Smile+Studio,+Murukkumpuzha,+Thiruvananthapuram",
  },
  {
   id: "kallambalam",
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
   <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
   />
   <BreadcrumbHero
    title="Murukkumpuzha Studio"
    currentPage="Murukkumpuzha"
    bgImage="/images/happytooth-varkala12-1.jpg"
   />


   <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     <ScrollReveal animation="fade-up">
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
      </div>
     </ScrollReveal>

     {clinics
      .filter((c) => c.id === "murukkumpuzha")
      .map((clinic, idx) => {
       return (
        <ScrollReveal key={idx} animation="scale" className="max-w-3xl mx-auto">
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
        </ScrollReveal>
       );
      })}
    </div>
   </section>
  </div>
 );
}
