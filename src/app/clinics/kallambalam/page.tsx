import React from "react";
import BreadcrumbHero from "@/components/BreadcrumbHero";
import ClinicCard from "@/components/ClinicCard";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
 title: "Best Dentist in Kallambalam",
 description: "Visit HappyTooth Dental Care in Kallambalam, Thiruvananthapuram. Specializing in advanced root canals, family dental care, and emergency treatments serving since 2021.",
 alternates: { canonical: "/clinics/kallambalam" },
 openGraph: {
  title: "Best Dentist in Kallambalam | HappyTooth Dental Care & Root Canal Centre",
  description: "HappyTooth Dental Care & Root Canal Centre in Kallambalam, Thiruvananthapuram — advanced root canals, family dental care, and emergency treatments since 2021.",
  url: "/clinics/kallambalam",
  images: [
   {
    url: "/images/happytooth-varkala10.webp",
    width: 1200,
    height: 630,
    alt: "HappyTooth Dental Care, Kallambalam — Root Canal Centre Thiruvananthapuram",
   },
  ],
 },
 twitter: {
  card: "summary_large_image",
  title: "Best Dentist in Kallambalam | HappyTooth Dental Care & Root Canal Centre",
  description: "HappyTooth Dental Care & Root Canal Centre in Kallambalam, Thiruvananthapuram — advanced root canals, family dental care, and emergency treatments since 2021.",
  images: ["/images/happytooth-varkala10.webp"],
 },
};

const clinicSchema = {
 "@context": "https://schema.org",
 "@graph": [
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

export default function KallambalamClinic() {
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
    dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema).replace(/</g, "\\u003c") }}
   />
   <BreadcrumbHero
    title="Kallambalam Clinic"
    currentPage="Kallambalam"
    bgImage="/images/happytooth-varkala10.webp"
   />


   <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     <ScrollReveal animation="fade-up">
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
      </div>
     </ScrollReveal>

     {clinics
      .filter((c) => c.id === "kallambalam")
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
            src="https://www.google.com/maps?q=8.7613543,76.7859502&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Kallambalam Clinic Location Map"
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
        About the Clinic
       </span>
       <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-blue">
        A Specialist Dental Clinic in Kallambalam
       </h2>
      </div>
     </ScrollReveal>

     <ScrollReveal animation="fade-up" delay={1}>
      <div className="max-w-3xl mx-auto space-y-4 text-soft-gray text-sm md:text-base leading-relaxed">
       <p>
        HappyTooth Dental Care &amp; Root Canal Centre at Alinmoodu has been treating patients in Kallambalam for years. It is where the practice began, and it is where our reputation in northern Thiruvananthapuram was built — on honest answers, specialist-led treatment, and a dentist who explains what is actually going on inside the tooth.
       </p>
       <p>
        The full range of dental care is available here — from routine check-ups, cleaning and fillings through to crowns, veneers, smile design, implants, aligners and children&rsquo;s dentistry. Every patient is seen by a specialist in the relevant field rather than by a general dentist working outside their training.
       </p>
       <p>
        The clinic is led by Dr. Thushara Sudhakaran, BDS, MDS in Endodontics, who has completed more than 1,000 root canal treatments. That specialism means complex cases other clinics refer elsewhere are handled here from the first appointment.
       </p>
       <p>
        We work to a &ldquo;save the tooth first&rdquo; philosophy. Almost every tooth a patient arrives expecting to lose, we would rather try to save. Where a tooth genuinely cannot be saved we say so plainly, explain why, and discuss the best replacement option before anything is agreed.
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
        The clinic is at Alinmoodu on the Kallambalam&ndash;Varkala Road, Thiruvananthapuram 695605. Street parking is available near the front. We regularly see patients from Kallambalam itself and from Varkala, Kazhakkoottam, Nedumangad and across the southern Thiruvananthapuram district.
       </p>
       <p>
        The clinic is open Monday to Saturday, 9:30 AM to 6:30 PM, and closed on Sundays. If you need a Sunday appointment, our Smile Studio at Murukkumpuzha is open all seven days and the same clinical team works across both locations.
       </p>
       <p>
        Walk-ins are welcome, but booking ahead is strongly recommended &mdash; particularly for root canals, crowns and other time-intensive treatments. For an emergency, call ahead on +91 87144 70808 and we will make every effort to see you the same day. Our team speaks Malayalam, English and Hindi.
       </p>
       <p>
        Bring any previous dental records, X-rays and a list of current medications if you have them. There is no complicated paperwork. You will receive a transparent cost estimate before treatment begins, broken down stage by stage for multi-step work, and we accept UPI, debit and credit cards, and cash.
       </p>
      </div>
     </ScrollReveal>
    </div>
   </section>

   {/* Treatments & standards */}
   <section className="py-20 bg-bg-light-blue/20 border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     <ScrollReveal animation="fade-up">
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
       <span className="text-primary-teal font-extrabold text-xs tracking-wider uppercase bg-primary-teal/10 py-1.5 px-4 rounded-full inline-block">
        Standards
       </span>
       <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-blue">
        What We Treat &amp; How We Work
       </h2>
      </div>
     </ScrollReveal>

     <ScrollReveal animation="fade-up" delay={1}>
      <div className="max-w-3xl mx-auto space-y-4 text-soft-gray text-sm md:text-base leading-relaxed">
       <p>
        The full range of HappyTooth treatments is available at Kallambalam. Alongside specialist endodontics we handle conservative dentistry, general and family dental care, scaling and polishing, fillings, crowns and bridges, veneers, smile design, dental implants, aligners and braces, gum care, extractions and children&rsquo;s dental care. You are not referred elsewhere for the larger cases &mdash; they are planned and carried out here.
       </p>
       <p>
        Root canal treatment uses rotary nickel-titanium files and, where required, magnification for precision. Many cases finish in a single sitting; molars, curved canals and retreatments may need two visits. A crown is fitted afterwards to protect the tooth, and that is planned and priced as part of the same treatment rather than sprung on you later.
       </p>
       <p>
        Instruments are sterilised to hospital-grade standards between every single patient, and digital X-rays keep radiation exposure far below conventional film. We also take dental anxiety seriously &mdash; patients who have avoided treatment for years because of a bad experience elsewhere are common here rather than unusual. If that describes you, say so when you book and we will plan the appointment accordingly.
       </p>
      </div>
     </ScrollReveal>
    </div>
   </section>
  </div>
 );
}
