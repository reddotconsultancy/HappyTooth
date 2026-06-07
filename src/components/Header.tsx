"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Facilities", path: "/facilities" },
    {
      name: "Clinics",
      path: "#",
      dropdown: [
        { name: "Murukkumpuzha Studio", path: "/clinics/murukkumpuzha" },
        { name: "Kallambalam Clinic", path: "/clinics/kallambalam" },
      ],
    },
    { name: "International Patients", path: "/international" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-primary-teal/10"
            : "bg-white/90 backdrop-blur-md border-b border-gray-100"
        }`}
      >
        {/* Top Info Bar displaying phone numbers of both centers */}
        <div
          className={`bg-navy-blue text-white text-[10px] sm:text-xs font-bold transition-all duration-300 overflow-hidden ${
            isScrolled ? "h-0 py-0 opacity-0" : "py-2 px-4 sm:px-6 lg:px-8 border-b border-white/5 opacity-100"
          }`}
        >
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
            {/* Left: Email or General text */}
            <div className="hidden lg:flex items-center gap-2 text-gray-300">
              <span>Email:</span>
              <a href="mailto:smile@happytoothdental.in" className="hover:text-primary-teal transition-colors text-white font-semibold">
                smile@happytoothdental.in
              </a>
            </div>
            
            {/* Right: Phone Numbers for both clinics */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 w-full lg:w-auto">
              <div className="flex items-center gap-1.5">
                <span className="text-accent-teal uppercase tracking-wider text-[9px] sm:text-[10px]">Murukkumpuzha:</span>
                <a href="tel:+917356100602" className="hover:text-primary-teal transition-colors font-extrabold text-white">+91 73561 00602</a>
                <a href="https://wa.me/917356100602" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors" title="Chat on WhatsApp">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.714-1.464L0 24zm6.59-4.846c1.666.988 3.311 1.485 5.352 1.486 5.517 0 10.005-4.487 10.008-10.006.002-2.673-1.036-5.186-2.923-7.076-1.887-1.89-4.405-2.93-7.079-2.93-5.521 0-10.012 4.488-10.015 10.006-.001 1.916.48 3.791 1.399 5.431l-.993 3.634 3.753-.984zm11.083-7.5c-.302-.15-1.786-.881-2.062-.982-.278-.1-.48-.15-.68.15-.2.3-.775.98-.95 1.18-.175.2-.35.225-.65.075-.302-.15-1.274-.469-2.427-1.496-.897-.8-1.502-1.787-1.678-2.088-.175-.3-.018-.462.13-.61.135-.13.3-.35.45-.525.15-.175.2-.3.3-.5s.05-.375-.025-.525C9.7 7.731 9.12 6.32 8.878 5.742c-.235-.563-.473-.487-.65-.496-.17-.008-.363-.01-.555-.01-.192 0-.505.072-.77.357-.265.285-1.01.986-1.01 2.404s1.025 2.787 1.17 2.986c.145.2 2.017 3.08 4.887 4.318.682.295 1.215.47 1.63.602.686.218 1.311.187 1.805.114.55-.082 1.786-.731 2.037-1.438.25-.707.25-1.313.175-1.437-.075-.125-.275-.2-.575-.35z" />
                  </svg>
                </a>
              </div>
              <div className="h-3 w-[1px] bg-white/20"></div>
              <div className="flex items-center gap-1.5">
                <span className="text-accent-teal uppercase tracking-wider text-[9px] sm:text-[10px]">Kallambalam:</span>
                <a href="tel:+918714470808" className="hover:text-primary-teal transition-colors font-extrabold text-white">+91 87144 70808</a>
                <a href="https://wa.me/918714470808" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors" title="Chat on WhatsApp">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.714-1.464L0 24zm6.59-4.846c1.666.988 3.311 1.485 5.352 1.486 5.517 0 10.005-4.487 10.008-10.006.002-2.673-1.036-5.186-2.923-7.076-1.887-1.89-4.405-2.93-7.079-2.93-5.521 0-10.012 4.488-10.015 10.006-.001 1.916.48 3.791 1.399 5.431l-.993 3.634 3.753-.984zm11.083-7.5c-.302-.15-1.786-.881-2.062-.982-.278-.1-.48-.15-.68.15-.2.3-.775.98-.95 1.18-.175.2-.35.225-.65.075-.302-.15-1.274-.469-2.427-1.496-.897-.8-1.502-1.787-1.678-2.088-.175-.3-.018-.462.13-.61.135-.13.3-.35.45-.525.15-.175.2-.3.3-.5s.05-.375-.025-.525C9.7 7.731 9.12 6.32 8.878 5.742c-.235-.563-.473-.487-.65-.496-.17-.008-.363-.01-.555-.01-.192 0-.505.072-.77.357-.265.285-1.01.986-1.01 2.404s1.025 2.787 1.17 2.986c.145.2 2.017 3.08 4.887 4.318.682.295 1.215.47 1.63.602.686.218 1.311.187 1.805.114.55-.082 1.786-.731 2.037-1.438.25-.707.25-1.313.175-1.437-.075-.125-.275-.2-.575-.35z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${isScrolled ? "py-2" : "py-3"}`}>
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="group flex items-center gap-2">
                <div className="relative overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                  <Image
                    src="/images/happytooth-logo-1.png"
                    alt="Happy Tooth Logo"
                    width={220}
                    height={60}
                    className="w-auto h-14 md:h-16 object-contain"
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-6 items-center">
              {navLinks.map((link) => {
                if (link.dropdown) {
                  return (
                    <div key={link.name} className="relative group py-2">
                      <button className="text-sm font-semibold text-navy-blue hover:text-primary-teal transition-colors duration-300 flex items-center gap-1">
                        <span>{link.name}</span>
                        <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-100 rounded-2xl shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                        {link.dropdown.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.path}
                            className="block px-4 py-2.5 text-xs font-bold text-navy-blue hover:bg-bg-light-blue hover:text-primary-teal transition-colors"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }
                const isActive =
                  pathname === link.path ||
                  (link.path !== "/" && pathname.startsWith(link.path));
                return (
                  <Link
                    key={link.name}
                    href={link.path}
                    className={`text-sm font-semibold relative py-2 transition-colors duration-300 ${
                      isActive ? "text-primary-teal" : "text-navy-blue hover:text-primary-teal"
                    } group`}
                  >
                    <span>{link.name}</span>
                    {/* Animated Sliding Underline */}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary-teal transform origin-left transition-transform duration-300 ${
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    ></span>
                  </Link>
                );
              })}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="relative overflow-hidden group bg-primary-teal text-white font-semibold text-sm py-3.5 px-7 rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-primary-teal/20 flex items-center gap-2 transform hover:-translate-y-0.5"
              >
                {/* Glow effect on hover */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-accent-teal to-primary-teal opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="relative z-10 flex items-center gap-2">
                  <span>Make Appointment</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-xl text-navy-blue hover:text-primary-teal hover:bg-bg-light-blue transition-all"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <div className="w-6 h-6 flex flex-col justify-center gap-1.5 relative">
                  <span
                    className={`block w-6 h-0.5 bg-current rounded-full transition-transform duration-300 ${
                      isOpen ? "rotate-45 translate-y-2" : ""
                    }`}
                  ></span>
                  <span
                    className={`block w-6 h-0.5 bg-current rounded-full transition-opacity duration-200 ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
                  ></span>
                  <span
                    className={`block w-6 h-0.5 bg-current rounded-full transition-transform duration-300 ${
                      isOpen ? "-rotate-45 -translate-y-2" : ""
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer for sticky header */}
      <div className="h-28"></div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop overlay */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Drawer content */}
        <div
          className={`absolute top-0 right-0 max-w-xs w-full h-full bg-white shadow-2xl flex flex-col p-6 transition-transform duration-300 transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between pb-6 border-b border-gray-100">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <Image
                src="/images/happytooth-logo-1.png"
                alt="Happy Tooth Logo"
                width={160}
                height={46}
                className="w-auto h-12 object-contain"
              />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-gray-500 hover:text-primary-teal hover:bg-bg-light-blue transition"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="flex-grow flex flex-col space-y-2 py-8 overflow-y-auto">
            {navLinks.map((link) => {
              if (link.dropdown) {
                return (
                  <div key={link.name} className="space-y-1">
                    <span className="block text-xs font-extrabold text-soft-gray px-4 uppercase tracking-wider mt-2">
                      {link.name}
                    </span>
                    {link.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.path}
                        onClick={() => setIsOpen(false)}
                        className="block text-base font-semibold py-3 px-6 rounded-xl text-navy-blue hover:bg-bg-light-blue hover:text-primary-teal transition-all duration-200"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                );
              }
              const isActive =
                pathname === link.path ||
                (link.path !== "/" && pathname.startsWith(link.path));
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-semibold py-3 px-4 rounded-xl transition-all duration-200 ${
                    isActive
                      ? "bg-primary-teal/10 text-primary-teal"
                      : "text-navy-blue hover:bg-bg-light-blue hover:text-primary-teal"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="pt-6 border-t border-gray-100 space-y-6">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-primary-teal hover:bg-navy-blue text-white font-semibold py-3.5 px-6 rounded-full transition duration-300 shadow-md"
            >
              Make Appointment
            </Link>
            <div className="text-center space-y-2">
              <span className="block text-xs text-soft-gray font-medium mb-1">Call us any time</span>
              <a href="tel:+917356100602" className="block text-sm font-bold text-navy-blue hover:text-primary-teal hover:underline transition">
                Murukkumpuzha: +91 73561 00602
              </a>
              <a href="tel:+918714470808" className="block text-sm font-bold text-navy-blue hover:text-primary-teal hover:underline transition">
                Kallambalam: +91 87144 70808
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
