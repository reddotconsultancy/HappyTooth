"use client";

import React, { useState } from "react";
import BreadcrumbHero from "@/components/BreadcrumbHero";
import ScrollReveal from "@/components/ScrollReveal";

interface FAQItem {
 question: string;
 answer: React.ReactNode;
 category: string;
}

export default function FAQContent() {
 const [activeCategory, setActiveCategory] = useState("all");
 const [searchQuery, setSearchQuery] = useState("");
 const [openIndex, setOpenIndex] = useState<number | null>(null);

 const categories = [
  { id: "all", name: "All Questions" },
  { id: "appointments", name: "Appointments & Visits" },
  { id: "treatments", name: "Treatments" },
  { id: "payments", name: "Payments & Insurance" },
  { id: "locations", name: "Locations & Hours" },
  { id: "about", name: "About the Clinic" },
 ];

 const faqs: FAQItem[] = [
  {
   category: "appointments",
   question: "How do I book an appointment?",
   answer: (
    <div className="space-y-2">
     <p>You can book in three ways, whichever is easiest for you:</p>
     <ul className="list-disc pl-5 space-y-1.5">
      <li>
       <strong>Call or WhatsApp:</strong> Connect with the clinic of your choice.
       <ul className="list-none pl-4 mt-1 text-xs space-y-1">
        <li>Murukkumpuzha (Smile Studio): <a href="tel:+917356100602" className="text-primary-teal hover:underline font-normal">+91 73561 00602</a></li>
        <li>Kallambalam (Dental Care & Root Canal Centre): <a href="tel:+918714470808" className="text-primary-teal hover:underline font-normal">+91 87144 70808</a></li>
       </ul>
      </li>
      <li><strong>Online Form:</strong> Fill out the appointment form on our Contact page, and we will call you back to confirm a slot.</li>
      <li><strong>Walk-In:</strong> Walk in during clinic hours, though booking ahead means little to no waiting.</li>
     </ul>
     <p className="text-xs text-soft-gray italic mt-1">{`We will confirm your appointment, the doctor's availability, and roughly how long the visit will take.`}</p>
    </div>
   ),
  },
  {
   category: "appointments",
   question: "Do I need an appointment, or can I just walk in?",
   answer: (
    <p>
     Walk-ins are welcome, but we strongly recommend booking ahead. Treatments like root canals and crowns need a dedicated time block, and an appointment ensures the doctor is ready for you without a wait. For dental emergencies, please call first so we can prepare for your arrival immediately.
    </p>
   ),
  },
  {
   category: "appointments",
   question: "What should I bring to my first visit?",
   answer: (
    <p>
     Just bring any previous dental records, X-rays, or prescriptions if you have them, and a list of any medicines you currently take. If you have had treatment elsewhere, telling us about it helps us plan better. There is no complicated paperwork for a first visit.
    </p>
   ),
  },
  {
   category: "appointments",
   question: "I'm nervous about visiting the dentist. Can you help?",
   answer: (
    <p>
     That is more common than you would think, and it is completely okay. Our whole approach is built around making the visit calm and unhurried. We explain each step before we do it, use modern anaesthesia techniques to keep procedures comfortable, and never rush you. Tell us you are anxious when you arrive, we will take it gently.
    </p>
   ),
  },
  {
   category: "treatments",
   question: "Does a root canal hurt?",
   answer: (
    <p>
     This is the question we hear most, and the honest answer is no, not the way people fear. A root canal is done under local anaesthesia, so the tooth is fully numb during treatment. Most patients are surprised at how comfortable it is. In fact, a root canal relieves the severe pain caused by an infected tooth. Our chief dentist is an endodontist (a root canal specialist), and we use modern rotary systems that make the procedure faster and gentler.
    </p>
   ),
  },
  {
   category: "treatments",
   question: "How many sittings does a root canal take?",
   answer: (
    <p>
     It depends on the tooth and the extent of infection. Many root canals can be completed in a single sitting, while more complex cases may need two visits. After the root canal, the tooth usually needs a crown (cap) to protect it, which is a separate short appointment. We will tell you exactly what your case needs after examining the tooth and X-ray.
    </p>
   ),
  },
  {
   category: "treatments",
   question: "Do you treat children?",
   answer: (
    <p>
     Yes. We offer pediatric dentistry with a gentle, child-friendly approach, checkups, cleaning, fillings, and habit guidance. We focus on making the visit positive and fear-free so children grow up comfortable with dental care rather than afraid of it. Bringing children early also helps catch small problems before they become big ones.
    </p>
   ),
  },
  {
   category: "treatments",
   question: "Do you offer braces and clear aligners?",
   answer: (
    <p>
     Yes, we provide orthodontic treatment for crooked, gapped, or crowded teeth and bite problems. Depending on your case and preference, options range from traditional braces to more discreet clear aligners. We will assess your teeth and explain which option suits your needs, lifestyle, and budget before you decide.
    </p>
   ),
  },
  {
   category: "treatments",
   question: "Can you improve the appearance of my teeth?",
   answer: (
    <p>
     Yes, through cosmetic dentistry and smile design. This can range from simple teeth whitening to reshaping, fixing chips and gaps, or a complete smile makeover. Our approach is to enhance what already suits your face rather than create an artificial look. We plan every smile to look natural and balanced.
    </p>
   ),
  },
  {
   category: "treatments",
   question: "How often should I get my teeth cleaned?",
   answer: (
    <p>
     For most people, a professional cleaning (scaling) once every six months is ideal, along with a routine checkup. Regular cleaning removes the hardened plaque (tartar) that brushing alone cannot, and helps prevent gum disease and cavities. If you smoke, have gum issues, or wear braces, we may suggest more frequent visits.
    </p>
   ),
  },
  {
   category: "payments",
   question: "What payment methods do you accept?",
   answer: (
    <div className="space-y-1">
     <p>We accept:</p>
     <ul className="list-disc pl-5 space-y-1">
      <li><strong>UPI:</strong> Google Pay, PhonePe, Paytm, and all other UPI applications.</li>
      <li><strong>Cards:</strong> Debit and credit cards (Visa, Mastercard, RuPay, etc.).</li>
      <li><strong>Cash:</strong> Cash payments are accepted at the reception desks.</li>
     </ul>
     <p className="text-xs font-semibold text-navy-blue mt-2">You will receive a proper itemized bill for every payment made.</p>
    </div>
   ),
  },
  {
   category: "payments",
   question: "Does insurance cover dental treatment?",
   answer: (
    <p>
     Most standard health insurance policies in India cover dental treatment only in specific cases, for example, treatment following an accident or certain surgical procedures, and not routine care like cleaning, crowns, or fillings.
    </p>
   ),
  },
  {
   category: "payments",
   question: "Will I know the cost before treatment starts?",
   answer: (
    <p>
     Yes. We believe in transparent pricing. After examining you, we explain the recommended treatment and give you a clear cost estimate before anything begins. For multi-step treatments, we break down the cost stage by stage so there are no surprises. Final pricing can vary with the complexity of each individual case.
    </p>
   ),
  },
  {
   category: "locations",
   question: "Where are your clinics located?",
   answer: (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
     <div className="bg-bg-light-blue/40 border border-gray-100 p-4 rounded-xl">
      <span className="block text-xs font-black text-primary-teal tracking-wide uppercase mb-1">Specialist Studio</span>
      <strong className="block text-navy-blue text-sm">Murukkumpuzha</strong>
      <p className="text-xs text-soft-gray mt-1">Ground Floor, Mangalasseri Tower, Murukkumpuzha, Thiruvananthapuram - 695302. Serve Kazhakoottam, Attingal, Pothencode & nearby.</p>
      <a href="tel:+917356100602" className="block text-xs font-normal text-navy-blue mt-2 hover:underline">Phone: +91 73561 00602</a>
     </div>
     <div className="bg-bg-light-blue/40 border border-gray-100 p-4 rounded-xl">
      <span className="block text-xs font-black text-primary-teal tracking-wide uppercase mb-1">Established Clinic</span>
      <strong className="block text-navy-blue text-sm">Kallambalam</strong>
      <p className="text-xs text-soft-gray mt-1">Mavinmoodu, Kallambalam - Varkala Road, Kallambalam. Serving families since 2021.</p>
      <a href="tel:+918714470808" className="block text-xs font-normal text-navy-blue mt-2 hover:underline">Phone: +91 87144 70808</a>
     </div>
    </div>
   ),
  },
  {
   category: "locations",
   question: "What are your timings?",
   answer: (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2 text-xs">
     <div className="border border-gray-100 p-4 rounded-xl bg-white shadow-xs">
      <strong className="block text-navy-blue mb-1">Murukkumpuzha Smile Studio</strong>
      <span className="block text-soft-gray">All 7 days</span>
      <span className="block font-bold text-primary-teal">9:30 AM - 6:30 PM</span>
      <span className="block text-green-600 font-medium mt-1">Open Daily (Inc. Sundays)</span>
     </div>
     <div className="border border-gray-100 p-4 rounded-xl bg-white shadow-xs">
      <strong className="block text-navy-blue mb-1">Kallambalam Clinic</strong>
      <span className="block text-soft-gray">Monday - Saturday</span>
      <span className="block font-bold text-primary-teal">9:30 AM - 6:30 PM</span>
      <span className="block text-red-500 font-medium mt-1">Closed on Sunday</span>
     </div>
    </div>
   ),
  },
  {
   category: "locations",
   question: "Is parking available?",
   answer: (
    <p>
     Both clinics are located on easily accessible roads with parking available nearby. If you are driving to our Murukkumpuzha Smile Studio clinic, we have ample parking space that comfortably fits 6+ cars. For either location, you can call ahead and we will guide you to the most convenient spot.
    </p>
   ),
  },
  {
   category: "locations",
   question: "What if I have a dental emergency?",
   answer: (
    <p>
     If you are in severe pain, have a knocked-out or broken tooth, swelling, or bleeding that will not stop, call us right away. We make every effort to see urgent cases the same day. Calling first lets us prepare so you are seen as quickly as possible. Contact numbers are: Murukkumpuzha <a href="tel:+917356100602" className="text-primary-teal hover:underline font-normal">+91 73561 00602</a> or Kallambalam <a href="tel:+918714470808" className="text-primary-teal hover:underline font-normal">+91 87144 70808</a>.
    </p>
   ),
  },
  {
   category: "about",
   question: "Who is the dentist, and is the clinic registered?",
   answer: (
    <p>
     Our chief dentist is <strong>Dr. Thushara Sudhakaran BDS MDS</strong>, Clinical Director & Root Canal Specialist, specialising in root canal treatment, with a focus on saving natural teeth through modern, painless techniques. She is a registered dental practitioner with the Kerala State Dental Council.
    </p>
   ),
  },
  {
   category: "about",
   question: "What hygiene and sterilization measures do you follow?",
   answer: (
    <p>
     Your safety is non-negotiable for us. We follow strict sterilization protocols, instruments are cleaned and sterilized after every patient using a validated Class B Autoclave (hospital standard), treatment surfaces are disinfected between visits, and we use disposable single-use items wherever appropriate. Our goal is a clean, controlled clinical environment for every procedure.
    </p>
   ),
  },
  {
   category: "about",
   question: "Is the new Murukkumpuzha clinic open yet?",
   answer: (
    <p>
     HappyTooth Smile Studio in Murukkumpuzha is our newest clinic, opening in <strong>July 2026</strong> as a modern, fully-equipped specialist studio. Our Kallambalam clinic continues to serve patients as it has since 2021. Follow us on Instagram and Facebook for opening updates, or call us to be among the first to book.
    </p>
   ),
  },
  {
   category: "about",
   question: "What languages do you speak at the clinic?",
   answer: (
    <p>
     Our team is comfortable in <strong>Malayalam and English</strong>, so you can explain your concerns in whichever you prefer. We can also handle basic <strong>Hindi and Tamil</strong> to ensure all patients fully understand their diagnosis and treatment options.
    </p>
   ),
  },
 ];

 const filteredFaqs = faqs.filter((faq) => {
  const categoryMatch = activeCategory === "all" || faq.category === activeCategory;
  const searchMatch =
   faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
   (typeof faq.answer === "string"
    ? faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    : false);
  return categoryMatch && searchMatch;
 });

 const toggleAccordion = (idx: number) => {
  setOpenIndex(openIndex === idx ? null : idx);
 };

 return (
  <div className="bg-transparent min-h-screen">
   {/* Breadcrumb Header */}
   <BreadcrumbHero title="Frequently Asked Questions" currentPage="FAQs" bgImage="/images/happytooth-varkala8.jpg" />

   {/* Main Content Area */}
   <section className="py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
     
     {/* Search bar Widget */}
     <ScrollReveal animation="fade-up">
      <div className="max-w-2xl mx-auto mb-12">
       <div className="relative shadow-md rounded-2xl border border-gray-100 overflow-hidden bg-white flex items-center p-1.5 focus-within:ring-2 focus-within:ring-primary-teal focus-within:ring-offset-2 transition-all duration-300">
        <span className="pl-4 text-soft-gray">
         <svg className="w-4 h-4 text-soft-gray" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
         </svg>
        </span>
        <input
         type="text"
         placeholder="Search questions or keywords..."
         value={searchQuery}
         onChange={(e) => setSearchQuery(e.target.value)}
         className="w-full text-xs sm:text-sm font-semibold py-3 px-3 outline-none text-navy-blue"
        />
        {searchQuery && (
         <button
          onClick={() => setSearchQuery("")}
          className="pr-4 text-xs font-bold text-soft-gray hover:text-navy-blue"
         >
          Clear
         </button>
        )}
       </div>
      </div>
     </ScrollReveal>

     <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Left sidebar tabs */}
      <ScrollReveal animation="fade-right" className="lg:col-span-4 space-y-2">
       <span className="block text-xs font-black text-soft-gray uppercase tracking-widest pl-4 mb-3">
        Categories
       </span>
       <div className="flex flex-row lg:flex-col overflow-x-auto whitespace-nowrap lg:whitespace-normal gap-2 pb-4 lg:pb-0 scrollbar-none">
        {categories.map((cat) => (
         <button
          key={cat.id}
          onClick={() => {
           setActiveCategory(cat.id);
           setOpenIndex(null);
          }}
          className={`text-xs md:text-sm font-bold py-3 px-5 rounded-xl transition-all duration-300 text-left border ${
           activeCategory === cat.id
            ? "bg-primary-teal text-white border-primary-teal shadow-md shadow-primary-teal/15 transform translate-x-1"
            : "bg-bg-light-blue/20 text-navy-blue hover:bg-bg-light-blue border-transparent"
          }`}
         >
          {cat.name}
         </button>
        ))}
       </div>
      </ScrollReveal>

      {/* Right accordion list */}
      <ScrollReveal animation="fade-left" className="lg:col-span-8 space-y-4">
       <span className="block text-xs font-black text-soft-gray uppercase tracking-widest pl-2 mb-3">
        Questions ({filteredFaqs.length})
       </span>

       {filteredFaqs.length > 0 ? (
        <div className="space-y-4">
         {filteredFaqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
           <div
            key={idx}
            className="bg-white rounded-3xl border border-gray-100 shadow-xs overflow-hidden transition-all duration-500 hover:border-primary-teal/20"
           >
            {/* Question trigger bar */}
            <button
             onClick={() => toggleAccordion(idx)}
             className="w-full text-left p-6 md:p-7 flex items-center justify-between gap-4 font-bold text-navy-blue hover:text-primary-teal transition-colors outline-none"
            >
             <span className="text-sm md:text-base pr-2 leading-snug">
              {faq.question}
             </span>
             <span
              className={`flex-shrink-0 w-6 h-6 rounded-full bg-bg-light-blue/50 flex items-center justify-center text-xs transition-transform duration-300 ${
               isOpen ? "rotate-180 bg-primary-teal/10 text-primary-teal" : "text-navy-blue"
              }`}
             >
              ▼
             </span>
            </button>

            {/* Answer panel (collapsible) */}
            <div
             className={`transition-all duration-500 overflow-hidden ${
              isOpen ? "max-h-[500px] opacity-100 border-t border-gray-50" : "max-h-0 opacity-0"
             }`}
            >
             <div className="p-6 md:p-7 text-xs md:text-sm text-soft-gray leading-relaxed bg-bg-light-blue/10">
              {faq.answer}
             </div>
            </div>
           </div>
          );
         })}
        </div>
       ) : (
        <div className="text-center py-12 bg-bg-light-blue/15 border border-dashed border-gray-200 rounded-3xl">
         <span className="block text-sm font-bold text-navy-blue mt-2">No matching questions found</span>
         <span className="block text-xs text-soft-gray mt-1">Try selecting another category or typing different terms.</span>
        </div>
       )}
      </ScrollReveal>
     </div>

    </div>
   </section>
  </div>
 );
}
