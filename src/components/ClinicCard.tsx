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
    <div className="bg-[#FAF7F2] rounded-[2.5rem] border border-border-gray border-t-4 border-t-accent-teal shadow-[0_8px_30px_rgb(0,0,0,0.02)] overflow-hidden flex flex-col justify-between hover:shadow-[0_20px_50px_rgba(172,146,102,0.18)] hover:border-accent-teal/40 hover:-translate-y-1.5 transition-all duration-500 ease-out">
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
          <div className="w-8 h-8 rounded-full bg-accent-teal/5 flex items-center justify-center text-accent-teal shrink-0 mt-0.5">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div className="flex-grow grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-1 sm:gap-4 items-start mt-1">
            <span className="block text-accent-teal text-[9px] font-bold uppercase tracking-[0.2em]">
              Address
            </span>
            <span className="text-sm text-navy-blue/80 font-medium leading-relaxed">
              {address}
            </span>
          </div>
        </div>

        {/* Phone Row */}
        <div className="flex items-start gap-4 border-b border-border-gray/15 pb-5">
          <div className="w-8 h-8 rounded-full bg-accent-teal/5 flex items-center justify-center text-accent-teal shrink-0 mt-0.5">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div className="flex-grow grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-1 sm:gap-4 items-start mt-1">
            <span className="block text-accent-teal text-[9px] font-bold uppercase tracking-[0.2em]">
              Phone
            </span>
            <a
              href={telLink}
              className="text-sm font-extrabold text-navy-blue hover:text-accent-teal transition-colors duration-200"
            >
              {phone}
            </a>
          </div>
        </div>

        {/* Working Hours Row */}
        <div className="flex items-start gap-4 border-b border-border-gray/15 pb-5">
          <div className="w-8 h-8 rounded-full bg-accent-teal/5 flex items-center justify-center text-accent-teal shrink-0 mt-0.5">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="flex-grow grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-1 sm:gap-4 items-start mt-1">
            <span className="block text-accent-teal text-[9px] font-bold uppercase tracking-[0.2em]">
              Working Hours
            </span>
            <span className="text-sm text-navy-blue/80 font-medium leading-relaxed">
              {timings}
            </span>
          </div>
        </div>

        {/* Parking Row */}
        <div className="flex items-start gap-4">
          <div className="w-8 h-8 rounded-full bg-accent-teal/5 flex items-center justify-center text-accent-teal shrink-0 mt-0.5">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 16h-1c0-1.1-.9-2-2-2s-2 .9-2 2H10c0-1.1-.9-2-2-2s-2 .9-2 2H5c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v5c0 1.1-.9 2-2 2zM12 3v4" />
              <circle cx="8" cy="16" r="1" />
              <circle cx="16" cy="16" r="1" />
            </svg>
          </div>
          <div className="flex-grow grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-1 sm:gap-4 items-start mt-1">
            <span className="block text-accent-teal text-[9px] font-bold uppercase tracking-[0.2em]">
              Parking
            </span>
            <span className="text-sm text-navy-blue/80 font-medium leading-relaxed">
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
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.714-1.464L0 24zm6.59-4.846c1.666.988 3.311 1.485 5.352 1.486 5.517 0 10.005-4.487 10.008-10.006.002-2.673-1.036-5.186-2.923-7.076-1.887-1.89-4.405-2.93-7.079-2.93-5.521 0-10.012 4.488-10.015 10.006-.001 1.916.48 3.791 1.399 5.431l-.993 3.634 3.753-.984zm11.083-7.5c-.302-.15-1.786-.881-2.062-.982-.278-.1-.48-.15-.68.15-.2.3-.775.98-.95 1.18-.175.2-.35.225-.65.075-.302-.15-1.274-.469-2.427-1.496-.897-.8-1.502-1.787-1.678-2.088-.175-.3-.018-.462.13-.61.135-.13.3-.35.45-.525.15-.175.2-.3.3-.5s.05-.375-.025-.525C9.7 7.731 9.12 6.32 8.878 5.742c-.235-.563-.473-.487-.65-.496-.17-.008-.363-.01-.555-.01-.192 0-.505.072-.77.357-.265.285-1.01.986-1.01 2.404s1.025 2.787 1.17 2.986c.145.2 2.017 3.08 4.887 4.318.682.295 1.215.47 1.63.602.686.218 1.311.187 1.805.114.55-.082 1.786-.731 2.037-1.438.25-.707.25-1.313.175-1.437-.075-.125-.275-.2-.575-.35z" />
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
