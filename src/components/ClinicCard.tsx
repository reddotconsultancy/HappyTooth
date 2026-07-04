import React from "react";

interface ClinicCardProps {
 name: string;
 branch: string;
 badge: string;
 status: string;
 address: string;
 phone: string;
 telLink: string;
 waLink: string;
 timings: string;
 parking: string;
 mapUrl: string;
}

export default function ClinicCard({
 name,
 branch,
 badge,
 status,
 address,
 phone,
 telLink,
 waLink,
 timings,
 parking,
 mapUrl,
}: ClinicCardProps) {
 const isClosed = status.toLowerCase().includes("closed");

 return (
  <div className="bg-[#FAF7F2] rounded-[2.5rem] border border-border-gray border-t-4 border-t-accent-teal shadow-[0_8px_30px_rgb(0,0,0,0.02)] overflow-hidden flex flex-col justify-between hover:shadow-[0_24px_60px_rgba(172,146,102,0.18)] hover:border-accent-teal/40 hover:-translate-y-2 transition-all duration-600 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] text-left">
   {/* Card Header */}
   <div className="p-8 md:p-10 border-b border-border-gray/30 bg-[#FDFBF7]/40 space-y-6">
    <div className="flex flex-wrap items-center justify-between gap-3">
     <span className="text-[10px] font-bold text-white bg-navy-blue px-4.5 py-1.5 rounded-full tracking-[0.2em] uppercase">
      {branch.split(",")[0].trim()}
     </span>
     <span
      className={`text-[9px] font-bold uppercase tracking-[0.15em] py-1.5 px-4 rounded-full border ${
       isClosed
        ? "bg-amber-500/5 text-amber-700 border-amber-500/20"
        : "bg-emerald-500/5 text-emerald-700 border-emerald-500/20"
      }`}
     >
      {status}
     </span>
    </div>
    <div>
     <h3 className="text-2xl md:text-3xl font-serif font-normal text-navy-blue tracking-tight leading-tight">
      {name}
     </h3>
     <p className="text-xs text-accent-teal/90 font-bold uppercase tracking-[0.15em] mt-2.5">
      {badge}
     </p>
    </div>
   </div>

   {/* Card Details Body */}
   <div className="p-8 md:p-10 flex-grow space-y-6">
    {/* Address Row */}
    <div className="flex items-start gap-4 border-b border-border-gray/15 pb-5">
     <div className="w-8 h-8 rounded-full bg-accent-teal/5 flex items-center justify-center text-accent-teal shrink-0">
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
       <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
       <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
     </div>
     <div className="flex-grow grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-1 sm:gap-4 items-start">
      <span className="block text-accent-teal text-[9px] font-bold uppercase tracking-[0.2em] sm:h-8 sm:flex sm:items-center">
       Address
      </span>
      <span className="text-sm text-navy-blue/80 font-medium leading-relaxed sm:py-1.5">
       {address}
      </span>
     </div>
    </div>

    {/* Phone Row */}
    <div className="flex items-start gap-4 border-b border-border-gray/15 pb-5">
     <div className="w-8 h-8 rounded-full bg-accent-teal/5 flex items-center justify-center text-accent-teal shrink-0">
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
       <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
     </div>
     <div className="flex-grow grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-1 sm:gap-4 items-start">
      <span className="block text-accent-teal text-[9px] font-bold uppercase tracking-[0.2em] sm:h-8 sm:flex sm:items-center">
       Phone
      </span>
      <a
       href={telLink}
       className="text-sm font-normal text-navy-blue hover:text-accent-teal transition-colors duration-200 sm:h-8 sm:flex sm:items-center"
      >
       {phone}
      </a>
     </div>
    </div>

    {/* Working Hours Row */}
    <div className="flex items-start gap-4 border-b border-border-gray/15 pb-5">
     <div className="w-8 h-8 rounded-full bg-accent-teal/5 flex items-center justify-center text-accent-teal shrink-0">
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
       <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
     </div>
     <div className="flex-grow grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-1 sm:gap-4 items-start">
      <span className="block text-accent-teal text-[9px] font-bold uppercase tracking-[0.2em] sm:h-8 sm:flex sm:items-center">
       Working Hours
      </span>
      <span className="text-sm text-navy-blue/80 font-medium leading-relaxed sm:py-1.5">
       {timings}
      </span>
     </div>
    </div>

    {/* Parking Row */}
    <div className="flex items-start gap-4">
     <div className="w-8 h-8 rounded-full bg-accent-teal/5 flex items-center justify-center text-accent-teal shrink-0">
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
       <path strokeLinecap="round" strokeLinejoin="round" d="M19 16h-1c0-1.1-.9-2-2-2s-2 .9-2 2H10c0-1.1-.9-2-2-2s-2 .9-2 2H5c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v5c0 1.1-.9 2-2 2zM12 3v4" />
       <circle cx="8" cy="16" r="1" />
       <circle cx="16" cy="16" r="1" />
      </svg>
     </div>
     <div className="flex-grow grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-1 sm:gap-4 items-start">
      <span className="block text-accent-teal text-[9px] font-bold uppercase tracking-[0.2em] sm:h-8 sm:flex sm:items-center">
       Parking
      </span>
      <span className="text-sm text-navy-blue/80 font-medium leading-relaxed sm:py-1.5">
       {parking}
      </span>
     </div>
    </div>
   </div>

   {/* Action / Buttons Footer */}
   <div className="p-8 md:p-10 pt-0 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 bg-transparent">
    <a
     href={waLink}
     target="_blank"
     rel="noopener noreferrer"
     className="flex-1 text-center border border-navy-blue/70 text-navy-blue hover:bg-[#25D366] hover:border-[#25D366] hover:text-white font-bold text-xs uppercase tracking-[0.1em] py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2"
    >
     <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
     </svg>
     <span>Chat on WhatsApp</span>
    </a>
    <a
     href={mapUrl}
     target="_blank"
     rel="noopener noreferrer"
     className="flex-1 text-center bg-navy-blue border border-navy-blue text-[#FAF7F2] hover:bg-accent-teal hover:border-accent-teal hover:text-navy-blue font-bold text-xs uppercase tracking-[0.1em] py-4 rounded-full transition-all duration-300 shadow-md flex items-center justify-center gap-2"
    >
     <span>Open Google Maps</span>
    </a>
   </div>
  </div>
 );
}
