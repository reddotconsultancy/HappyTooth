import React from "react";
import FAQContent from "./FAQContent";

export const metadata = {
 title: "Dental FAQ & Root Canal Questions",
 description: "Get answers to common questions about dental root canal treatments, prices, aligners, braces, timings, and clinical practices at HappyTooth.",
 alternates: { canonical: "/faq" },
 openGraph: {
  title: "Dental FAQ & Root Canal Questions",
  description: "Get answers to common questions about dental root canal treatments, prices, aligners, braces, timings, and clinical practices at HappyTooth.",
  url: "/faq",
  images: [
   {
    url: "/images/FAQs.webp",
    width: 1200,
    height: 630,
    alt: "Dental FAQs — HappyTooth Dental Clinics",
   },
  ],
 },
};


const faqSchema = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 mainEntity: [
  {
   "@type": "Question",
   name: "How do I book an appointment at HappyTooth?",
   acceptedAnswer: {
    "@type": "Answer",
    text: "You can book in three ways: Call or WhatsApp the clinic (Murukkumpuzha: +91 73561 00602, Kallambalam: +91 87144 70808), fill the online appointment form on the Contact page, or walk in during clinic hours. Booking ahead ensures little to no waiting time.",
   },
  },
  {
   "@type": "Question",
   name: "Do I need an appointment or can I just walk in?",
   acceptedAnswer: {
    "@type": "Answer",
    text: "Walk-ins are welcome, but we strongly recommend booking ahead. Treatments like root canals and crowns need a dedicated time block. For dental emergencies, call first so we can prepare for your arrival.",
   },
  },
  {
   "@type": "Question",
   name: "What should I bring to my first dental visit?",
   acceptedAnswer: {
    "@type": "Answer",
    text: "Bring any previous dental records, X-rays, or prescriptions if you have them, and a list of any medicines you currently take. There is no complicated paperwork for a first visit.",
   },
  },
  {
   "@type": "Question",
   name: "I am nervous about visiting the dentist. Can you help?",
   acceptedAnswer: {
    "@type": "Answer",
    text: "Dental anxiety is very common. Our whole approach is built around making the visit calm and unhurried. We explain each step before we do it, use modern anaesthesia techniques, and never rush you. Tell us you are anxious when you arrive — we will take it gently.",
   },
  },
  {
   "@type": "Question",
   name: "Does a root canal hurt?",
   acceptedAnswer: {
    "@type": "Answer",
    text: "No, not the way people fear. A root canal is done under local anaesthesia so the tooth is fully numb during treatment. Most patients are surprised at how comfortable it is. A root canal relieves the severe pain caused by an infected tooth. Our chief dentist is an MDS Endodontist and we use modern rotary systems that make the procedure faster and gentler.",
   },
  },
  {
   "@type": "Question",
   name: "How many sittings does a root canal take?",
   acceptedAnswer: {
    "@type": "Answer",
    text: "It depends on the tooth and extent of infection. Many root canals complete in a single sitting; complex cases may need two visits. After the root canal, the tooth usually needs a crown to protect it, which is a separate appointment.",
   },
  },
  {
   "@type": "Question",
   name: "Do you offer dental treatment for children?",
   acceptedAnswer: {
    "@type": "Answer",
    text: "Yes. We offer paediatric dentistry with a gentle, child-friendly approach including check-ups, cleaning, fillings, and habit guidance. We focus on making visits positive and fear-free so children grow up comfortable with dental care.",
   },
  },
  {
   "@type": "Question",
   name: "Do you offer braces and clear aligners?",
   acceptedAnswer: {
    "@type": "Answer",
    text: "Yes, we provide orthodontic treatment for crooked, gapped, or crowded teeth. Options include traditional metal braces, ceramic braces, and clear removable aligners. We assess your teeth and explain which option suits your needs before you decide.",
   },
  },
  {
   "@type": "Question",
   name: "Can you improve the appearance of my teeth?",
   acceptedAnswer: {
    "@type": "Answer",
    text: "Yes, through cosmetic dentistry and smile design. This ranges from teeth whitening to dental veneers, reshaping, fixing chips and gaps, or a complete smile makeover. We plan every smile to look natural and balanced.",
   },
  },
  {
   "@type": "Question",
   name: "How often should I get my teeth professionally cleaned?",
   acceptedAnswer: {
    "@type": "Answer",
    text: "For most adults, professional scaling and cleaning every six months is ideal. Regular cleaning removes hardened calculus that brushing alone cannot remove. If you smoke, have gum disease, or wear braces, more frequent visits may be recommended.",
   },
  },
  {
   "@type": "Question",
   name: "What payment methods do you accept?",
   acceptedAnswer: {
    "@type": "Answer",
    text: "We accept UPI (Google Pay, PhonePe, Paytm, and all UPI apps), debit and credit cards (Visa, Mastercard, RuPay, international cards), and cash. You receive an itemised bill for every payment.",
   },
  },
  {
   "@type": "Question",
   name: "Will I know the cost before treatment starts?",
   acceptedAnswer: {
    "@type": "Answer",
    text: "Yes. After examining you, we give a clear cost estimate before anything begins. For multi-step treatments, we break down the cost stage by stage so there are no surprises.",
   },
  },
  {
   "@type": "Question",
   name: "Where are HappyTooth dental clinics located?",
   acceptedAnswer: {
    "@type": "Answer",
    text: "We have two clinics in Thiruvananthapuram: HappyTooth Smile Studio at Ground Floor, Mangalasseri Tower, Murukkumpuzha, Thiruvananthapuram 695302 (phone: +91 73561 00602), and HappyTooth Dental Care & Root Canal Centre at Alinmoodu, Kallambalam, Thiruvananthapuram 695605 (phone: +91 87144 70808).",
   },
  },
  {
   "@type": "Question",
   name: "What are HappyTooth clinic timings?",
   acceptedAnswer: {
    "@type": "Answer",
    text: "Murukkumpuzha Smile Studio: open all 7 days including Sundays, 9:30 AM to 6:30 PM. Kallambalam clinic: Monday to Saturday, 9:30 AM to 6:30 PM, closed on Sundays.",
   },
  },
  {
   "@type": "Question",
   name: "What if I have a dental emergency?",
   acceptedAnswer: {
    "@type": "Answer",
    text: "Call us immediately. We make every effort to see urgent cases the same day. Murukkumpuzha: +91 73561 00602, Kallambalam: +91 87144 70808. For a knocked-out tooth, keep it moist in milk or saline and come in immediately. A dental abscess with progressive swelling affecting breathing requires hospital emergency care.",
   },
  },
  {
   "@type": "Question",
   name: "Who is the dentist at HappyTooth?",
   acceptedAnswer: {
    "@type": "Answer",
    text: "Clinical Director Dr. Thushara Sudhakaran BDS MDS is a specialist Endodontist with a Masters in Endodontics from A B Shetty Memorial Institute, Mangalore. She previously practiced at Apollo White Dental, Hyderabad, before founding HappyTooth in 2021. She is registered with the Kerala State Dental Council.",
   },
  },
 ],
};

export default function FAQPage() {
 return (
  <>
   <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
   />
   <FAQContent />
  </>
 );
}
