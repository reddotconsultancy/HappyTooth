import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { servicesData, getServiceBySlug, getAllSlugs } from "@/lib/services-data";

// ─── Static generation ────────────────────────────────────────────────────────
export function generateStaticParams() {
 return getAllSlugs().map((slug) => ({ slug }));
}

// ─── Per-page metadata ────────────────────────────────────────────────────────
export async function generateMetadata({
 params,
}: {
 params: Promise<{ slug: string }>;
}): Promise<Metadata> {
 const { slug } = await params;
 const svc = getServiceBySlug(slug);
 if (!svc) return {};

 return {
  title: svc.metaTitle,
  description: svc.metaDesc,
  alternates: { canonical: `/services/${svc.slug}` },
  openGraph: {
   title: svc.metaTitle,
   description: svc.metaDesc,
   url: `/services/${svc.slug}`,
   images: [
    {
     url: svc.image,
     width: 1200,
     height: 630,
     alt: `${svc.title} at HappyTooth Dental Clinics, Thiruvananthapuram`,
    },
   ],
  },
 };
}

// ─── Page component ───────────────────────────────────────────────────────────
export default async function ServicePage({
 params,
}: {
 params: Promise<{ slug: string }>;
}) {
 const { slug } = await params;
 const svc = getServiceBySlug(slug);
 if (!svc) notFound();

 // Find adjacent services for navigation
 const currentIndex = servicesData.findIndex((s) => s.slug === slug);
 const prevSvc = currentIndex > 0 ? servicesData[currentIndex - 1] : null;
 const nextSvc =
  currentIndex < servicesData.length - 1
   ? servicesData[currentIndex + 1]
   : null;

 // MedicalProcedure JSON-LD
 const procedureSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: svc.title,
  description: svc.desc,
  procedureType: "https://schema.org/SurgicalProcedure",
  status: "https://schema.org/EventScheduled",
  bodyLocation: "Oral Cavity",
  followup: svc.expectDesc,
  preparation: svc.whoNeedsItems.join(". "),
  performer: {
   "@type": "Dentist",
   name: "HappyTooth Dental Clinics",
   url: "https://www.happytoothdental.in",
   address: [
    {
     "@type": "PostalAddress",
     streetAddress: "Ground Floor, Mangalasseri Tower, Murukkumpuzha",
     addressLocality: "Thiruvananthapuram",
     addressRegion: "Kerala",
     postalCode: "695302",
     addressCountry: "IN",
    },
    {
     "@type": "PostalAddress",
     streetAddress: "Alinmoodu, Kallambalam – Varkala Road, Kallambalam",
     addressLocality: "Thiruvananthapuram",
     addressRegion: "Kerala",
     postalCode: "695605",
     addressCountry: "IN",
    },
   ],
  },
 };

 return (
  <>
   {/* JSON-LD */}
   <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(procedureSchema) }}
   />

   {/* ── Breadcrumb hero ──────────────────────────────────────────────────── */}
   <section className="relative bg-navy-blue text-white py-14 lg:py-20 overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(172,146,102,0.15),transparent_60%)]" />
    <div className="absolute inset-0">
     <Image
      src={svc.image}
      alt={svc.title}
      fill
      className="object-cover opacity-10"
      priority
     />
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
     {/* Breadcrumb */}
     <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-gray-400 mb-6">
      <Link href="/" className="hover:text-accent-teal transition-colors">Home</Link>
      <span>/</span>
      <Link href="/services" className="hover:text-accent-teal transition-colors">Services</Link>
      <span>/</span>
      <span className="text-white font-semibold">{svc.title}</span>
     </nav>

     <div className="max-w-3xl">
      <span className="inline-block text-accent-teal font-extrabold text-xs tracking-widest uppercase bg-accent-teal/15 py-1.5 px-4 rounded-full mb-4">
       Service {svc.serviceNumber} of {servicesData.length}
      </span>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
       {svc.title}
      </h1>
      <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl">
       {svc.subtitle}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mt-8">
       <Link
        href="/contact"
        className="inline-flex items-center justify-center gap-2 bg-accent-teal hover:bg-white hover:text-navy-blue text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg text-sm"
       >
        Book This Treatment
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
         <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
       </Link>
       <Link
        href="/services"
        className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white text-white font-bold py-4 px-8 rounded-full transition-all duration-300 text-sm"
       >
        ← All Services
       </Link>
      </div>
     </div>
    </div>
   </section>

   {/* ── Main content ─────────────────────────────────────────────────────── */}
   <section className="py-16 lg:py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

      {/* Left: Image */}
      <div className="lg:col-span-5">
       <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 bg-white p-3 sticky top-36">
        <div className="relative h-72 md:h-96 lg:h-[28rem] rounded-[2rem] overflow-hidden bg-gray-50">
         <Image
          src={svc.image}
          alt={`${svc.title} procedure at HappyTooth`}
          fill
          sizes="(max-width: 1024px) 100vw, 480px"
          className="object-cover"
         />
        </div>
       </div>
      </div>

      {/* Right: Content */}
      <div className="lg:col-span-7 space-y-8">
       <div>
        <span className="inline-block text-primary-teal font-extrabold text-xs tracking-wider uppercase bg-primary-teal/10 py-1.5 px-4 rounded-full mb-3">
         {svc.subtitle.split(" | ")[0].trim()}
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-navy-blue leading-tight mb-4">
         About {svc.title}
        </h2>
        <div className="space-y-4 text-sm md:text-base text-soft-gray leading-relaxed">
         <p>{svc.desc}</p>
         <p>{svc.methodDetail}</p>
        </div>
       </div>

       {/* Detail blocks */}
       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-gray-100">
        {/* Checklist */}
        <div>
         <h3 className="font-extrabold text-navy-blue mb-3 text-xs md:text-sm uppercase tracking-wider">
          {svc.whoNeedsTitle}
         </h3>
         <ul className="space-y-2.5 text-xs md:text-sm text-soft-gray font-medium">
          {svc.whoNeedsItems.map((item, i) => (
           <li key={i} className="flex items-start gap-2">
            <span className="flex-shrink-0 w-4 h-4 rounded-full bg-primary-teal/15 flex items-center justify-center text-primary-teal text-[10px] mt-0.5">
             ✓
            </span>
            <span>{item}</span>
           </li>
          ))}
         </ul>
        </div>

        {/* Clinical insight box */}
        <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-gray-150 shadow-sm flex flex-col justify-between">
         <div className="space-y-2">
          <h3 className="font-extrabold text-navy-blue text-xs md:text-sm uppercase tracking-wider">
           {svc.expectTitle}
          </h3>
          <p className="text-xs md:text-sm text-soft-gray leading-relaxed">
           {svc.expectDesc}
          </p>
         </div>
         <div className="mt-4 pt-4 border-t border-gray-150">
          <span className="uppercase text-[9px] font-black tracking-wider px-2 py-0.5 bg-primary-teal/15 text-primary-teal rounded-full inline-block mb-2">
           Clinical Insight
          </span>
          <p className="text-xs md:text-sm text-navy-blue font-semibold leading-relaxed">
           {svc.whyHere}
          </p>
         </div>
        </div>
       </div>

       {/* CTA */}
       <div className="bg-navy-blue rounded-3xl p-8 text-white space-y-4">
        <h3 className="text-xl font-extrabold">Ready to get started?</h3>
        <p className="text-sm text-gray-300 leading-relaxed">
         Book a consultation with our specialist team. We&apos;ll examine your teeth, explain what we find, and give you a clear treatment plan — no commitment required at that stage.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
         <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 bg-accent-teal hover:bg-white hover:text-navy-blue text-white font-bold py-3.5 px-8 rounded-full transition-all duration-300 text-sm text-center"
         >
          Book an Appointment
         </Link>
         <a
          href="https://wa.me/917356100602"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white text-white font-bold py-3.5 px-8 rounded-full transition-all duration-300 text-sm text-center"
         >
          WhatsApp Us
         </a>
        </div>
       </div>
      </div>
     </div>
    </div>
   </section>

   {/* ── Other services strip ─────────────────────────────────────────────── */}
   <section className="py-12 bg-bg-light-blue/30 border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
      <div>
       <h3 className="text-sm font-extrabold text-navy-blue uppercase tracking-wider mb-1">
        Explore Other Treatments
       </h3>
       <p className="text-xs text-soft-gray">14 specialist services available at HappyTooth</p>
      </div>
      <div className="flex gap-3 flex-wrap justify-center sm:justify-end">
       {prevSvc && (
        <Link
         href={`/services/${prevSvc.slug}`}
         className="flex items-center gap-2 text-xs font-bold text-navy-blue hover:text-accent-teal border border-gray-200 hover:border-accent-teal py-2.5 px-5 rounded-full transition-all duration-200"
        >
         ← {prevSvc.title}
        </Link>
       )}
       <Link
        href="/services"
        className="text-xs font-bold bg-navy-blue text-white py-2.5 px-5 rounded-full hover:bg-accent-teal transition-all duration-200"
       >
        All Services
       </Link>
       {nextSvc && (
        <Link
         href={`/services/${nextSvc.slug}`}
         className="flex items-center gap-2 text-xs font-bold text-navy-blue hover:text-accent-teal border border-gray-200 hover:border-accent-teal py-2.5 px-5 rounded-full transition-all duration-200"
        >
         {nextSvc.title} →
        </Link>
       )}
      </div>
     </div>
    </div>
   </section>
  </>
 );
}
