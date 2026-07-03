import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Facilities", path: "/facilities" },
    { name: "Kallambalam Clinic", path: "/clinics/kallambalam" },
    { name: "Murukkumpuzha Studio", path: "/clinics/murukkumpuzha" },
    { name: "International Patients", path: "/international" },
    { name: "Blog", path: "/blog" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact Us", path: "/contact" },
  ];

  const serviceLinks = [
    { name: "Root Canal Treatment", path: "/services#ENDODONTICS" },
    { name: "Cosmetic Dentistry", path: "/services#COSMETIC" },
    { name: "Orthodontics", path: "/services#Orthodontics" },
    { name: "Preventive Dentistry", path: "/services#Preventive" },
    { name: "Restorative Dentistry", path: "/services#Restorative" },
    { name: "Pediatric Dentistry", path: "/services#Pediatric" },
  ];

  return (
    <footer className="bg-navy-blue text-white pt-16 pb-8 font-poppins border-t border-accent-teal/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand/About Section */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/images/happytooth-logo-white.png"
                alt="HappyTooth White Logo"
                width={180}
                height={50}
                className="w-auto h-12 object-contain"
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              At HappyTooth, we focus on delivering reliable, patient-friendly treatments using modern techniques, while making sure every visit feels calm, clear, and reassuring.
            </p>
            <div className="text-xs text-gray-300">
              <strong>Email:</strong>{" "}
              <a href="mailto:smile@happytoothdental.in" className="hover:text-accent-teal transition-colors">
                smile@happytoothdental.in
              </a>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/HappyToothDentalCare.21?mibextid=wwXIfr&rdid=Nw9MQinokZ0zBFrJ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F17XNV4oarF%2F%3Fmibextid%3DwwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:text-navy-blue hover:bg-accent-teal transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/happytooth_dentalcare?igsh=cThmeGZ2ZmJycHhm&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:text-navy-blue hover:bg-accent-teal transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-wider mb-6 relative pb-2 text-white after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-primary-teal">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-gray-300 hover:text-accent-teal transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <svg className="w-2.5 h-2.5 text-accent-teal/60 group-hover:text-accent-teal group-hover:translate-x-0.5 transition-all shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services Section */}
          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-wider mb-6 relative pb-2 text-white after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-primary-teal">
              Our Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-gray-300 hover:text-accent-teal transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <svg className="w-2.5 h-2.5 text-accent-teal/60 group-hover:text-accent-teal group-hover:translate-x-0.5 transition-all shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Murukkumpuzha Clinic Contact */}
          <div className="text-left">
            <h4 className="text-sm font-extrabold uppercase tracking-wider mb-6 relative pb-2 text-white after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-primary-teal">
              Murukkumpuzha Studio
            </h4>
            <ul className="space-y-4 text-sm text-gray-300 text-left">
              <li className="flex items-start gap-2.5 text-left">
                <svg className="h-4 w-4 text-accent-teal shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-left">Ground Floor, Mangalasseri Tower, Murukkumpuzha, Thiruvananthapuram - 695302</span>
              </li>
              <li className="flex items-start gap-2.5 text-left">
                <svg className="h-4 w-4 text-accent-teal shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+917356100602" className="hover:text-accent-teal font-normal transition-colors text-left">
                  +91 73561 00602
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-left">
                <svg className="h-4 w-4 text-accent-teal shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="text-left">
                  <span className="block text-gray-300 text-left">All 7 days</span>
                  <span className="block font-bold text-white text-left">9:30 AM - 6:30 PM</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Kallambalam Clinic Contact */}
          <div className="text-left">
            <h4 className="text-sm font-extrabold uppercase tracking-wider mb-6 relative pb-2 text-white after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-primary-teal">
              Kallambalam Clinic
            </h4>
            <ul className="space-y-4 text-sm text-gray-300 text-left">
              <li className="flex items-start gap-2.5 text-left">
                <svg className="h-4 w-4 text-accent-teal shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-left">Mavinmoodu, Kallambalam - Varkala Road, Kallambalam, Thiruvananthapuram - 695605</span>
              </li>
              <li className="flex items-start gap-2.5 text-left">
                <svg className="h-4 w-4 text-accent-teal shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+918714470808" className="hover:text-accent-teal font-normal transition-colors text-left">
                  +91 87144 70808
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-left">
                <svg className="h-4 w-4 text-accent-teal shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="text-left">
                  <span className="block text-gray-300 text-left">Monday - Saturday</span>
                  <span className="block font-bold text-white text-left">9:30 AM - 6:30 PM</span>
                  <span className="block text-red-400 text-xs text-left">Closed on Sunday</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>Copyright © 2026. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/faq" className="hover:text-accent-teal transition-colors">
              FAQs
            </Link>
            <Link href="/terms" className="hover:text-accent-teal transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="hover:text-accent-teal transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
