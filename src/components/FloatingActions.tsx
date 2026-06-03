"use client";

import React from "react";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] px-4 py-3 lg:hidden flex justify-around items-center gap-3">
      <a
        href="https://wa.me/917356100602"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm shadow-sm transition active:scale-95 duration-200"
      >
        {/* WhatsApp Icon */}
        <svg
          className="w-5 h-5 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.714-1.464L0 24zm6.59-4.846c1.666.988 3.311 1.485 5.352 1.486 5.517 0 10.005-4.487 10.008-10.006.002-2.673-1.036-5.186-2.923-7.076-1.887-1.89-4.405-2.93-7.079-2.93-5.521 0-10.012 4.488-10.015 10.006-.001 1.916.48 3.791 1.399 5.431l-.993 3.634 3.753-.984zm11.083-7.5c-.302-.15-1.786-.881-2.062-.982-.278-.1-.48-.15-.68.15-.2.3-.775.98-.95 1.18-.175.2-.35.225-.65.075-.302-.15-1.274-.469-2.427-1.496-.897-.8-1.502-1.787-1.678-2.088-.175-.3-.018-.462.13-.61.135-.13.3-.35.45-.525.15-.175.2-.3.3-.5s.05-.375-.025-.525C9.7 7.731 9.12 6.32 8.878 5.742c-.235-.563-.473-.487-.65-.496-.17-.008-.363-.01-.555-.01-.192 0-.505.072-.77.357-.265.285-1.01.986-1.01 2.404s1.025 2.787 1.17 2.986c.145.2 2.017 3.08 4.887 4.318.682.295 1.215.47 1.63.602.686.218 1.311.187 1.805.114.55-.082 1.786-.731 2.037-1.438.25-.707.25-1.313.175-1.437-.075-.125-.275-.2-.575-.35z" />
        </svg>
        <span>WhatsApp</span>
      </a>
      <a
        href="tel:+917356100602"
        className="flex-1 bg-navy-blue hover:bg-navy-blue/90 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm shadow-sm transition active:scale-95 duration-200"
      >
        {/* Phone Icon */}
        <svg
          className="w-5 h-5 fill-none stroke-current"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
        <span>Call Murukkumpuzha</span>
      </a>
    </div>
  );
}
