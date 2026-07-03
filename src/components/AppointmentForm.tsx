"use client";

import React, { useState } from "react";

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    location: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.location) {
      setIsDropdownOpen(true);
      return;
    }
    setStatus("submitting");
    
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        phone: "",
        email: "",
        date: "",
        location: "",
        message: "",
      });
    }, 1200);
  };

  return (
    <div className="bg-white rounded-[2rem] shadow-2xl shadow-navy-blue/5 border border-gray-150 p-8 md:p-10 relative overflow-hidden">
      {/* Click outside overlay for custom dropdown */}
      {isDropdownOpen && (
        <div 
          className="fixed inset-0 z-40 cursor-default" 
          onClick={() => setIsDropdownOpen(false)}
        />
      )}

      {/* Decorative gradient border at top */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-teal via-accent-teal to-gold"></div>

      {status === "success" && (
        <div className="absolute inset-0 bg-white/98 z-10 flex flex-col items-center justify-center text-center p-6 animate-fade-in">
          <div className="w-20 h-20 bg-primary-teal/10 rounded-full flex items-center justify-center text-primary-teal mb-6 animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-extrabold text-navy-blue mb-2">Request Submitted!</h3>
          <p className="text-sm text-soft-gray max-w-xs mb-8">
            Thank you! Our clinical desk will get back to you shortly to confirm your slot.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="bg-primary-teal hover:bg-navy-blue text-white text-xs font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-md transform hover:-translate-y-0.5"
          >
            Submit Another Request
          </button>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-2xl md:text-3xl font-black text-navy-blue">
          Book an Appointment
        </h3>
        <p className="text-sm text-soft-gray mt-1.5">
          Fill in your details and we&apos;ll get back to confirm your appointment.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Input */}
        <div className="relative">
          <label 
            htmlFor="name" 
            className={`block text-sm font-extrabold transition-colors duration-200 mb-1.5 ${
              focusedField === "name" ? "text-primary-teal" : "text-navy-blue"
            }`}
          >
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            onFocus={() => setFocusedField("name")}
            onBlur={() => setFocusedField(null)}
            placeholder=""
            className={`w-full text-base border rounded-2xl py-4 px-5 outline-none transition-all duration-300 ${
              focusedField === "name" 
                ? "border-primary-teal ring-2 ring-primary-teal/15 bg-white" 
                : "border-gray-200 bg-gray-50/50 hover:bg-gray-50 focus:bg-white"
            }`}
          />
        </div>

        {/* Phone & Email Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Phone */}
          <div className="relative">
            <label 
              htmlFor="phone" 
              className={`block text-sm font-extrabold transition-colors duration-200 mb-1.5 ${
                focusedField === "phone" ? "text-primary-teal" : "text-navy-blue"
              }`}
            >
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              onFocus={() => setFocusedField("phone")}
              onBlur={() => setFocusedField(null)}
              placeholder=""
              className={`w-full text-base border rounded-2xl py-4 px-5 outline-none transition-all duration-300 ${
                focusedField === "phone" 
                  ? "border-primary-teal ring-2 ring-primary-teal/15 bg-white" 
                  : "border-gray-200 bg-gray-50/50 hover:bg-gray-50 focus:bg-white"
              }`}
            />
          </div>

          {/* Email */}
          <div className="relative">
            <label 
              htmlFor="email" 
              className={`block text-sm font-extrabold transition-colors duration-200 mb-1.5 ${
                focusedField === "email" ? "text-primary-teal" : "text-navy-blue"
              }`}
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField(null)}
              placeholder=""
              className={`w-full text-base border rounded-2xl py-4 px-5 outline-none transition-all duration-300 ${
                focusedField === "email" 
                  ? "border-primary-teal ring-2 ring-primary-teal/15 bg-white" 
                  : "border-gray-200 bg-gray-50/50 hover:bg-gray-50 focus:bg-white"
              }`}
            />
          </div>
        </div>

        {/* Preferred Date */}
        <div className="relative">
          <label 
            htmlFor="date" 
            className={`block text-sm font-extrabold transition-colors duration-200 mb-1.5 ${
              focusedField === "date" ? "text-primary-teal" : "text-navy-blue"
            }`}
          >
            Preferred Date *
          </label>
          <input
            type="date"
            id="date"
            name="date"
            required
            value={formData.date}
            onChange={handleChange}
            onFocus={() => setFocusedField("date")}
            onBlur={() => setFocusedField(null)}
            className={`w-full text-base border rounded-2xl py-4 px-5 outline-none transition-all duration-300 ${
              focusedField === "date" 
                ? "border-primary-teal ring-2 ring-primary-teal/15 bg-white" 
                : "border-gray-200 bg-gray-50/50 hover:bg-gray-50 focus:bg-white"
            }`}
          />
        </div>

        {/* Preferred Location */}
        <div className="relative z-50">
          <label 
            htmlFor="location" 
            className={`block text-sm font-extrabold transition-colors duration-200 mb-1.5 ${
              focusedField === "location" || isDropdownOpen ? "text-primary-teal" : "text-navy-blue"
            }`}
          >
            Preferred Clinic Location *
          </label>
          <button
            type="button"
            id="location"
            onClick={() => {
              setIsDropdownOpen(!isDropdownOpen);
            }}
            className={`w-full flex items-center justify-between text-base border rounded-2xl py-4 px-5 outline-none transition-all duration-300 text-left bg-white ${
              isDropdownOpen 
                ? "border-primary-teal ring-2 ring-primary-teal/15" 
                : "border-gray-200 bg-gray-50/50 hover:bg-gray-50"
            }`}
          >
            <span className={formData.location ? "text-navy-blue font-bold" : "text-soft-gray font-normal"}>
              {formData.location || "Select Clinic Location..."}
            </span>
            <svg 
              className={`w-5 h-5 text-soft-gray shrink-0 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isDropdownOpen && (
            <div className="absolute left-0 right-0 mt-2 bg-white rounded-2xl border border-gray-150 shadow-2xl py-2 z-50 animate-fade-in">
              <button
                type="button"
                onClick={() => {
                  setFormData((prev) => ({ ...prev, location: "" }));
                  setIsDropdownOpen(false);
                }}
                className="w-full text-left text-sm font-bold py-3 px-5 hover:bg-bg-light-blue/30 text-soft-gray transition-colors"
              >
                Select Clinic Location...
              </button>
              {[
                "Kallambalam Clinic",
                "Murukkumpuzha Studio"
              ].map((loc) => (
                <button
                  key={loc}
                  type="button"
                  onClick={() => {
                    setFormData((prev) => ({ ...prev, location: loc }));
                    setIsDropdownOpen(false);
                  }}
                  className={`w-full text-left text-sm font-bold py-3 px-5 transition-colors flex items-center justify-between ${
                    formData.location === loc 
                      ? "bg-[#FAF7F2] text-accent-teal" 
                      : "hover:bg-bg-light-blue/30 text-navy-blue"
                  }`}
                >
                  <span>{loc}</span>
                  {formData.location === loc && (
                    <span className="text-accent-teal text-xs font-black">✓</span>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Message */}
        <div className="relative">
          <label 
            htmlFor="message" 
            className={`block text-sm font-extrabold transition-colors duration-200 mb-1.5 ${
              focusedField === "message" ? "text-primary-teal" : "text-navy-blue"
            }`}
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            onFocus={() => setFocusedField("message")}
            onBlur={() => setFocusedField(null)}
            placeholder="Describe your dental concern or any specific requirements..."
            className={`w-full text-base border rounded-2xl py-4 px-5 outline-none transition-all duration-300 resize-none ${
              focusedField === "message" 
                ? "border-primary-teal ring-2 ring-primary-teal/15 bg-white" 
                : "border-gray-200 bg-gray-50/50 hover:bg-gray-50 focus:bg-white"
            }`}
          ></textarea>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full relative overflow-hidden group bg-primary-teal text-white font-bold py-4 px-8 text-base rounded-2xl transition duration-300 shadow-md hover:shadow-xl hover:shadow-primary-teal/10 flex items-center justify-center gap-2 transform active:scale-98 disabled:opacity-75 disabled:pointer-events-none"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-accent-teal to-primary-teal opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          
          <span className="relative z-10 flex items-center gap-2">
            {status === "submitting" ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <span>Submitting Request...</span>
              </>
            ) : (
              <>
                <span>Send Appointment Request</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </>
            )}
          </span>
        </button>
      </form>
    </div>
  );
}
