import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import BreadcrumbHero from "@/components/BreadcrumbHero";
import ScrollReveal from "@/components/ScrollReveal";
import { getServiceBySlug } from "@/lib/services-data";
import {
 getLocalityService,
 getAllLocalityParams,
} from "@/lib/locality-services";

// ─── Static generation ────────────────────────────────────────────────────────
export function generateStaticParams() {
 return getAllLocalityParams();
}

// ─── Per-page metadata ────────────────────────────────────────────────────────
export async function generateMetadata({
 params,
}: {
 params: Promise<{ slug: string; locality: string }>;
}): Promise<Metadata> {
 const { slug, locality } = await params;
 const page = getLocalityService(slug, locality);
 if (!page) return {};

 const url = `/services/${slug}/${locality}`;
 return {
  title: page.metaTitle,
  description: page.metaDesc,
  alternates: { canonical: url },
  openGraph: {
   title: page.metaTitle,
   description: page.metaDesc,
   url,
   images: [
    { url: page.image, width: 1200, height: 630, alt: page.heading },
   ],
  },
  twitter: {
   card: "summary_large_image",
   title: page.metaTitle,
   description: page.metaDesc,
   images: [page.image],
  },
 };
}

// ─── Page component ───────────────────────────────────────────────────────────
export default async function LocalityServicePage({
 params,
}: {
 params: Promise<{ slug: string; locality: string }>;
}) {
 const { slug, locality } = await params;
 const page = getLocalityService(slug, locality);
 const svc = getServiceBySlug(slug);
 if (!page || !svc) notFound();

 const schema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: page.heading,
  description: page.metaDesc,
  url: `https://happytoothdental.in/services/${slug}/${locality}`,
  about: {
   "@type": "MedicalProcedure",
   name: svc.title,
   procedureType: "https://schema.org/TherapeuticProcedure",
  },
  provider: {
   "@type": "Dentist",
   "@id": `https://happytoothdental.in/#clinic-${locality}`,
   name: page.clinicName,
   telephone: page.phone,
  },
 };

 return (
  <div>
   <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
   />

   <BreadcrumbHero
    title={page.heading}
    currentPage={page.clinicShort}
    bgImage={page.image}
   />

   {/* Intro */}
   <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     <ScrollReveal animation="fade-up">
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
       <span className="text-primary-teal font-extrabold text-xs tracking-wider uppercase bg-primary-teal/10 py-1.5 px-4 rounded-full inline-block">
        {svc.title}
       </span>
       <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-blue">
        {page.heading}
       </h2>
       <p className="text-soft-gray text-xs md:text-sm leading-relaxed">
        {page.clinicName} · {page.hours}
       </p>
      </div>
     </ScrollReveal>

     <ScrollReveal animation="fade-up" delay={1}>
      <div className="max-w-3xl mx-auto space-y-4 text-soft-gray text-sm md:text-base leading-relaxed">
       {page.intro.map((para, idx) => (
        <p key={idx}>{para}</p>
       ))}
      </div>
     </ScrollReveal>

     <ScrollReveal animation="fade-up" delay={2}>
      <div className="max-w-3xl mx-auto mt-10 relative h-64 sm:h-80 w-full rounded-[2rem] overflow-hidden shadow-xl border border-gray-150 p-2 bg-white hover-lift">
       <div className="relative w-full h-full rounded-2xl overflow-hidden img-zoom">
        <Image
         src={page.image}
         alt={`${svc.title} at ${page.clinicName}`}
         fill
         sizes="(max-width: 1024px) 100vw, 760px"
         className="object-cover transition-transform duration-700 ease-out"
        />
       </div>
      </div>
     </ScrollReveal>
    </div>
   </section>

   {/* Why here */}
   <section className="py-20 bg-bg-light-blue/20 border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     <ScrollReveal animation="fade-up">
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
       <span className="text-primary-teal font-extrabold text-xs tracking-wider uppercase bg-primary-teal/10 py-1.5 px-4 rounded-full inline-block">
        Treatment
       </span>
       <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-blue">
        {page.whyHereTitle}
       </h2>
      </div>
     </ScrollReveal>

     <ScrollReveal animation="fade-up" delay={1}>
      <div className="max-w-3xl mx-auto space-y-4 text-soft-gray text-sm md:text-base leading-relaxed">
       {page.whyHere.map((para, idx) => (
        <p key={idx}>{para}</p>
       ))}
      </div>
     </ScrollReveal>
    </div>
   </section>

   {/* Getting here */}
   <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     <ScrollReveal animation="fade-up">
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
       <span className="text-primary-teal font-extrabold text-xs tracking-wider uppercase bg-primary-teal/10 py-1.5 px-4 rounded-full inline-block">
        Getting Here
       </span>
       <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-blue">
        Finding the Clinic
       </h2>
      </div>
     </ScrollReveal>

     <ScrollReveal animation="fade-up" delay={1}>
      <div className="max-w-3xl mx-auto space-y-4 text-soft-gray text-sm md:text-base leading-relaxed">
       {page.gettingHere.map((para, idx) => (
        <p key={idx}>{para}</p>
       ))}
      </div>
     </ScrollReveal>

     <ScrollReveal animation="fade-up" delay={2}>
      <div className="max-w-3xl mx-auto mt-10 flex flex-wrap justify-center gap-4">
       <a
        href={page.telLink}
        className="bg-primary-teal hover:bg-navy-blue text-white font-bold text-xs py-3.5 px-7 rounded-full transition-all duration-300 shadow-md"
       >
        Call {page.phone}
       </a>
       <a
        href={page.waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-navy-blue hover:bg-primary-teal text-white font-bold text-xs py-3.5 px-7 rounded-full transition-all duration-300 shadow-md"
       >
        Chat on WhatsApp
       </a>
       <a
        href={page.mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white border border-gray-250 hover:border-primary-teal text-navy-blue font-bold text-xs py-3.5 px-7 rounded-full transition-all duration-300 shadow-sm"
       >
        Open Google Maps
       </a>
      </div>
     </ScrollReveal>

     <ScrollReveal animation="fade-up" delay={3}>
      <div className="max-w-3xl mx-auto mt-10 pt-8 border-t border-gray-100 flex flex-wrap justify-center gap-6 text-xs font-bold">
       <Link
        href={`/services/${slug}`}
        className="text-primary-teal hover:text-navy-blue transition-colors"
       >
        More about {svc.title}
       </Link>
       <Link
        href={`/clinics/${locality}`}
        className="text-primary-teal hover:text-navy-blue transition-colors"
       >
        About our {page.clinicShort} clinic
       </Link>
       <Link
        href="/contact"
        className="text-primary-teal hover:text-navy-blue transition-colors"
       >
        Book an appointment
       </Link>
      </div>
     </ScrollReveal>
    </div>
   </section>
  </div>
 );
}
