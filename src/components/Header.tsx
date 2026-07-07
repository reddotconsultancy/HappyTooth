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
    className={`fixed top-0 left-0 right-0 z-[9999] h-20 lg:h-32 transition-all duration-500 ease-out ${
     isScrolled
      ? "bg-white/95 backdrop-blur-lg shadow-[0_4px_30px_rgba(16,30,46,0.06)] border-b border-primary-teal/10"
      : "bg-white/90 backdrop-blur-md border-b border-gray-100/50"
    }`}
   >
    {/* Top Info Bar displaying phone numbers of both centers */}
    <div
     className="hidden lg:flex bg-navy-blue text-white text-[10px] sm:text-xs font-bold px-4 sm:px-6 lg:px-8 border-b border-white/5 h-8 items-center"
    >
     <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
      {/* Left: Email */}
      <div className="flex items-center gap-2 text-gray-300">
       <span>Email:</span>
       <a href="mailto:smile@happytoothdental.in" className="hover:text-accent-teal transition-colors text-white font-semibold">
        smile@happytoothdental.in
       </a>
      </div>
      
      {/* Right: Phone Numbers for both clinics */}
      <div className="flex items-center justify-end gap-6">
       <div className="flex items-center gap-1.5">
        <span className="text-accent-teal uppercase tracking-wider text-[10px]">Murukkumpuzha:</span>
        <a href="tel:+917356100602" className="hover:text-accent-teal transition-colors font-normal text-white">+91 73561 00602</a>
        <a href="https://wa.me/917356100602" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors" title="Chat on WhatsApp">
         <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
         </svg>
        </a>
       </div>
       <div className="h-3 w-[1px] bg-white/20"></div>
       <div className="flex items-center gap-1.5">
        <span className="text-accent-teal uppercase tracking-wider text-[10px]">Kallambalam:</span>
        <a href="tel:+918714470808" className="hover:text-accent-teal transition-colors font-normal text-white">+91 87144 70808</a>
        <a href="https://wa.me/918714470808" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors" title="Chat on WhatsApp">
         <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
         </svg>
        </a>
       </div>
      </div>
     </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
     <div className="flex items-center justify-between h-16 lg:h-20">
      {/* Logo & Tagline */}
      <div className="flex-shrink-0 flex items-center gap-4">
       <Link href="/" className="group flex items-center gap-2">
        <div className="relative overflow-hidden transition-transform duration-500 ease-out group-hover:scale-[1.03]">
         <Image
          src="/images/happytooth-logo-1.png"
          alt="HappyTooth Logo"
          width={280}
          height={80}
          className="w-auto h-12 lg:h-16 xl:h-18 object-contain"
          priority
         />
        </div>
       </Link>
       {/* Tagline */}
       <div className="hidden xl:flex flex-col pl-4 border-l border-primary-teal/20 leading-tight py-1">
        <span className="text-[10px] font-black text-navy-blue tracking-widest uppercase">Saving Teeth.</span>
        <span className="text-[10px] font-black text-primary-teal tracking-widest uppercase">Designing Smiles</span>
       </div>
      </div>

      {/* Right Group: Desktop Navigation & CTA Button */}
      <div className="hidden lg:flex items-center gap-8">
       {/* Desktop Navigation */}
       <nav className="flex space-x-4 xl:space-x-5 items-center">
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
            <div className="absolute left-0 mt-2 w-52 glass-panel rounded-2xl shadow-2xl py-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
             {link.dropdown.map((sub) => (
              <Link
               key={sub.name}
               href={sub.path}
               className="block px-4 py-2.5 text-xs font-bold text-navy-blue hover:bg-primary-teal hover:text-white transition-colors rounded-xl mx-2"
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
       <div>
        <Link
         href="/contact"
         className="bg-navy-blue hover:bg-accent-teal text-white font-bold text-sm py-3.5 px-7 rounded-full transition-all duration-400 ease-out shadow-sm hover:shadow-lg hover:shadow-accent-teal/20 flex items-center gap-2 transform hover:-translate-y-1 active:scale-95"
        >
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
        </Link>
       </div>
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
   <div className="header-spacer h-20 lg:h-32"></div>

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
     className={`absolute top-0 right-0 max-w-xs w-full h-full glass-panel shadow-2xl flex flex-col p-6 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] transform ${
      isOpen ? "translate-x-0" : "translate-x-full"
     }`}
    >
     <div className="flex items-center justify-between pb-6 border-b border-gray-100">
      <Link href="/" onClick={() => setIsOpen(false)}>
       <Image
        src="/images/happytooth-logo-1.png"
        alt="HappyTooth Logo"
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
       className="block w-full text-center bg-navy-blue hover:bg-accent-teal text-white font-bold py-3.5 px-6 rounded-full transition-all duration-300 shadow-sm hover:shadow-md active:scale-95"
      >
       Make Appointment
      </Link>
       <div className="space-y-4">
        <span className="block text-[10px] font-black text-soft-gray uppercase tracking-widest text-center">
         Contact Our Clinics
        </span>

        {/* Murukkumpuzha Branch */}
        <div className="bg-bg-light-blue/40 border border-gray-100 rounded-2xl p-4 space-y-3">
         <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-navy-blue">Murukkumpuzha Studio</span>
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
         </div>
         <div className="flex gap-2">
          <a
           href="tel:+917356100602"
           className="flex-grow bg-navy-blue hover:bg-primary-teal text-white font-bold py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 text-xs transition active:scale-95 duration-200"
          >
           <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
           </svg>
           <span>Call</span>
          </a>
          <a
           href="https://wa.me/917356100602"
           target="_blank"
           rel="noopener noreferrer"
           className="bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 text-xs transition active:scale-95 duration-200"
          >
           <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
           </svg>
           <span>WhatsApp</span>
          </a>
         </div>
        </div>

        {/* Kallambalam Branch */}
        <div className="bg-bg-light-blue/40 border border-gray-100 rounded-2xl p-4 space-y-3">
         <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-navy-blue">Kallambalam Clinic</span>
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
         </div>
         <div className="flex gap-2">
          <a
           href="tel:+918714470808"
           className="flex-grow bg-primary-teal hover:bg-navy-blue text-white font-bold py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 text-xs transition active:scale-95 duration-200"
          >
           <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
           </svg>
           <span>Call</span>
          </a>
          <a
           href="https://wa.me/918714470808"
           target="_blank"
           rel="noopener noreferrer"
           className="bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 text-xs transition active:scale-95 duration-200"
          >
           <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
           </svg>
           <span>WhatsApp</span>
          </a>
         </div>
        </div>
       </div>
     </div>
    </div>
   </div>
  </>
 );
}
