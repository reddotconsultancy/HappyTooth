import React from "react";
import Link from "next/link";
import Image from "next/image";

interface BreadcrumbHeroProps {
 title: string;
 currentPage: string;
 bgImage?: string;
}

export default function BreadcrumbHero({
 title,
 currentPage,
 bgImage = "/images/happytooth-varkala11.jpg",
}: BreadcrumbHeroProps) {
 return (
  <section 
   className="relative py-16 md:py-20 overflow-hidden border-b border-gray-100 parallax-bg"
   style={{ backgroundImage: `url(${bgImage})` }}
  >
   {/* Glassmorphism Overlay for Readability */}
   <div className="absolute inset-0 bg-[#F0EAE1]/85 backdrop-blur-sm z-0"></div>

   {/* Abstract background glowing spot */}
   <div className="absolute right-[20%] top-[-20%] w-96 h-96 bg-primary-teal/5 rounded-full z-0 pointer-events-none"></div>

   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
     {/* Left Column: Page Titles & Breadcrumbs */}
     <div className="space-y-4 border-l-4 border-primary-teal pl-6 md:pl-8 text-left">
      <span className="inline-block text-primary-teal font-extrabold text-[10px] md:text-xs tracking-widest uppercase bg-primary-teal/10 py-1.5 px-4 rounded-full">
       HappyTooth Clinic
      </span>
      {/* Dark navy color explicitly styled via inline-style or text-navy-blue to override global CSS overrides */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-navy-blue leading-tight" style={{ animation: 'fade-in-up 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards' }}>
       {title}
      </h1>
      <nav className="flex items-center space-x-2 text-xs md:text-sm text-soft-gray pt-1" style={{ animation: 'fade-in 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s forwards', opacity: 0 }}>
       <Link href="/" className="hover:text-primary-teal transition-colors font-bold text-navy-blue">
        Home
       </Link>
       <span className="text-gray-400 font-bold">/</span>
       <span className="text-primary-teal font-extrabold">{currentPage}</span>
      </nav>
     </div>

     {/* Right Column: Visual Topic Image */}
     <div className="relative flex justify-center md:justify-end" style={{ animation: 'fade-in-up 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.15s forwards', opacity: 0 }}>
      <div className="relative w-full max-w-sm h-48 md:h-56 rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white p-2">
       <div className="relative w-full h-full rounded-xl overflow-hidden">
        <Image
         src={bgImage}
         alt={title}
         fill
         priority
         sizes="(max-width: 768px) 100vw, 384px"
         className="object-cover object-center transform hover:scale-[1.04] transition-transform duration-700 ease-out"
        />
       </div>
      </div>
     </div>
    </div>
   </div>
  </section>
 );
}
