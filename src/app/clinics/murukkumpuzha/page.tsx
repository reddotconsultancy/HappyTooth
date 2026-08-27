import React from "react";
import BreadcrumbHero from "@/components/BreadcrumbHero";
import ClinicCard from "@/components/ClinicCard";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
 title: "Best Dental Clinic in Murukkumpuzha",
 description: "Book an appointment at HappyTooth Smile Studio in Murukkumpuzha, Thiruvananthapuram. Our brand new flagship clinic specializing in cosmetic dentistry, dental implants, aligners, and root canals.",
 alternates: { canonical: "/clinics/murukkumpuzha" },
 openGraph: {
  title: "Best Dental Clinic in Murukkumpuzha | HappyTooth Dental Clinics",
  description: "HappyTooth Smile Studio in Murukkumpuzha, Thiruvananthapuram — cosmetic dentistry, dental implants, aligners, and root canals. Open 7 days.",
  url: "/clinics/murukkumpuzha",
  images: [
   {
    url: "/images/happytooth-varkala12-1.webp",
    width: 1200,
    height: 630,
    alt: "HappyTooth Smile Studio, Murukkumpuzha — Flagship dental clinic Thiruvananthapuram",
   },
  ],
 },
 twitter: {
  card: "summary_large_image",
  title: "Best Dental Clinic in Murukkumpuzha | HappyTooth Dental Clinics",
  description: "HappyTooth Smile Studio in Murukkumpuzha, Thiruvananthapuram — cosmetic dentistry, dental implants, aligners, and root canals. Open 7 days.",
  images: ["/images/happytooth-varkala12-1.webp"],
 },
};

const clinicSchema = {
 "@context": "https://schema.org",
 "@graph": [
  {
   "@type": "Dentist",
   "@id": "https://happytoothdental.in/#clinic-murukkumpuzha",
   "name": "HappyTooth Smile Studio (Murukkumpuzha)",
   "parentOrganization": {
    "@id": "https://happytoothdental.in/#organization"
   },
   "image": "https://happytoothdental.in/images/happytooth-varkala12-1.webp",
   "telephone": "+91 73561 00602",
   "priceRange": "$$",
   "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ground Floor, Mangalasseri Tower, Thoppumukku, Murukkumpuzha",
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
   ]
  },
  {
   "@type": "Physician",
   "@id": "https://happytoothdental.in/#dr-thushara-sudhakaran",
   "name": "Dr. Thushara Sudhakaran",
   "medicalSpecialty": "Endodontics",
   "jobTitle": "Clinical Director & Root Canal Specialist",
   "honorificSuffix": "BDS, MDS Endodontics",
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
     "@id": "https://happytoothdental.in/#clinic-murukkumpuzha"
    },
    {
     "@type": "Dentist",
     "@id": "https://happytoothdental.in/#clinic-kallambalam"
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
   address: "Ground Floor, Mangalasseri Tower, Thoppumukku, Murukkumpuzha, Thiruvananthapuram – 695302",
   phone: "+91 73561 00602",
   telLink: "tel:+917356100602",
   waLink: "https://wa.me/917356100602",
   timings: "9:30 AM – 6:30 PM (All 7 Days)",
   parking: "Ample private parking (fits 6+ cars)",
   dentist: "Dr. Thushara Sudhakaran BDS MDS",
   dentistRole: "Clinical Director & Root Canal Specialist",
   mapUrl: "https://maps.app.goo.gl/cQFJMx9Nu4Sbyz6B6",
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
    title="Murukkumpuzha Smile Studio"
    currentPage="Murukkumpuzha"
    bgImage="/images/happytooth-varkala12-1.webp"
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
        <div key={idx} className="max-w-3xl mx-auto space-y-8">
         <ScrollReveal animation="scale">
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
         <ScrollReveal animation="fade-up">
          <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100">
           <iframe
            src="https://www.google.com/maps?q=8.6136824,76.8352005&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Murukkumpuzha Smile Studio Location Map"
           />
          </div>
         </ScrollReveal>
        </div>
       );
      })}
    </div>
   </section>

   {/* About this clinic */}
   <section className="py-20 bg-bg-light-blue/20 border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     <ScrollReveal animation="fade-up">
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
       <span className="text-primary-teal font-extrabold text-xs tracking-wider uppercase bg-primary-teal/10 py-1.5 px-4 rounded-full inline-block">
        About the Studio
       </span>
       <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-blue">
        A Specialist Dental Clinic in Murukkumpuzha
       </h2>
      </div>
     </ScrollReveal>

     <ScrollReveal animation="fade-up" delay={1}>
      <div className="max-w-3xl mx-auto space-y-4 text-soft-gray text-sm md:text-base leading-relaxed">
       <p>
        HappyTooth Smile Studio is our flagship clinic at Thoppumukku junction in Murukkumpuzha, Thiruvananthapuram. It was built as a full-spectrum specialist studio — equipped for everything from a routine scale and polish to a complete smile transformation — and it extends the standard established at our Kallambalam Root Canal Centre.
       </p>
       <p>
        The principle here is straightforward: every patient is seen by a specialist in the relevant field, rather than by a general dentist working outside their training. The HappyTooth group has 18+ specialist doctors across both clinics, covering eight dental specialisations. Root canal treatment is carried out by an in-house MDS Endodontist on site, not referred elsewhere.
       </p>
       <p>
        We also work to a &ldquo;save the tooth first&rdquo; philosophy. Extraction is the last resort rather than the default, and where a tooth genuinely cannot be saved we explain why clearly and discuss the best replacement option for your situation before anything is agreed.
       </p>
      </div>
     </ScrollReveal>
    </div>
   </section>

   {/* Visiting the clinic */}
   <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     <ScrollReveal animation="fade-up">
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
       <span className="text-primary-teal font-extrabold text-xs tracking-wider uppercase bg-primary-teal/10 py-1.5 px-4 rounded-full inline-block">
        Visiting Us
       </span>
       <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-blue">
        Finding the Clinic &amp; Planning Your Visit
       </h2>
      </div>
     </ScrollReveal>

     <ScrollReveal animation="fade-up" delay={1}>
      <div className="max-w-3xl mx-auto space-y-4 text-soft-gray text-sm md:text-base leading-relaxed">
       <p>
        The clinic is on the ground floor of Mangalasseri Tower at Thoppumukku, Murukkumpuzha — Thiruvananthapuram 695302. There is ample private parking on site, with room for six or more cars, so you will not need to look for space on the road.
       </p>
       <p>
        We regularly see patients from Murukkumpuzha itself and from Kazhakoottam, Attingal, Pothencode, Varkala, Kovalam and Trivandrum city. The studio is open Monday to Sunday, 9:30 AM to 6:30 PM, including weekends and public holidays, which makes it practical for patients who cannot take time off during the working week.
       </p>
       <p>
        Walk-ins are welcome, but booking ahead is strongly recommended — particularly for root canals, crowns and other time-intensive treatments. For an emergency, call ahead on +91 73561 00602 and we will make every effort to see you the same day. Our team speaks Malayalam, English and Hindi.
       </p>
       <p>
        Bring any previous dental records, X-rays and a list of current medications if you have them. There is no complicated paperwork. You will receive a transparent cost estimate before treatment begins, broken down stage by stage for multi-step work, and we accept UPI, debit and credit cards, cash, and international Visa and Mastercard.
       </p>
      </div>
     </ScrollReveal>
    </div>
   </section>

   {/* Hygiene & technology */}
   <section className="py-20 bg-bg-light-blue/20 border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     <ScrollReveal animation="fade-up">
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
       <span className="text-primary-teal font-extrabold text-xs tracking-wider uppercase bg-primary-teal/10 py-1.5 px-4 rounded-full inline-block">
        Standards
       </span>
       <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-blue">
        Equipment, Hygiene &amp; Comfort
       </h2>
      </div>
     </ScrollReveal>

     <ScrollReveal animation="fade-up" delay={1}>
      <div className="max-w-3xl mx-auto space-y-4 text-soft-gray text-sm md:text-base leading-relaxed">
       <p>
        Diagnosis at the Smile Studio is digital. An intraoral scanner replaces the putty impression tray, producing a precise 3D model in under two minutes and removing the gag reflex that made traditional impressions unpleasant. Digital X-rays deliver 80 to 90 per cent less radiation than conventional film and appear on screen within seconds, and OPG panoramic imaging is available on site, with CBCT referral for implant planning and complex cases.
       </p>
       <p>
        Instruments are sterilised to hospital-grade standards between every single patient. This is not a claim we treat as optional — it is the baseline the studio was built around.
       </p>
       <p>
        We also take dental anxiety seriously. Treatment is carried out using modern anaesthesia with a pain-free approach, and patients who have avoided dental care for years because of a bad experience are common here rather than unusual. If that describes you, say so when you book and we will plan the appointment accordingly.
       </p>
      </div>
     </ScrollReveal>
    </div>
   </section>
  </div>
 );
}
