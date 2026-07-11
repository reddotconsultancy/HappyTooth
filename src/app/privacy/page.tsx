import React from "react";
import BreadcrumbHero from "@/components/BreadcrumbHero";

export const metadata = {
 title: "Privacy Policy",
 description: "Privacy and data protection policy for HappyTooth Smile Studio patients and website visitors, in compliance with DPDPA 2023.",
 alternates: { canonical: "/privacy" },
};

export default function Privacy() {
 const retentionPeriods = [
  { type: "Clinical records, adult patients", period: "Minimum 5 years from last treatment date" },
  { type: "Clinical records, minor patients", period: "Until patient turns 25, or 5 years from last visit, whichever is later" },
  { type: "Billing and financial records", period: "7 years (Income Tax Act / GST compliance)" },
  { type: "Website enquiry / contact forms", period: "12 months from date of submission" },
  { type: "Appointment and recall records", period: "2 years from last appointment" },
 ];

 return (
  <div>
   {/* Breadcrumb Header */}
   <BreadcrumbHero title="Privacy Policy" currentPage="Privacy Policy" />

   {/* Content Section */}
   <section className="py-20 bg-white">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
     
     {/* Header Card */}
     <div className="bg-bg-light-blue/40 border border-gray-100 p-8 rounded-3xl space-y-4">
      <h2 className="text-xl md:text-2xl font-bold text-navy-blue">HappyTooth Smile Studio</h2>
      <span className="block text-xs font-bold text-soft-gray uppercase tracking-widest">
       Effective: July 2026 · Version 1.0 · Murukkumpuzha, Thiruvananthapuram, Kerala
      </span>
      <p className="text-xs md:text-sm text-soft-gray leading-relaxed">
       This policy explains what personal and health information HappyTooth Smile Studio collects, why we collect it, how we protect it, and what your rights are. We handle all patient data with the care and discretion that medical information requires, and in compliance with the Digital Personal Data Protection Act, 2023 (DPDPA) and the IT (Reasonable Security Practices) Rules, 2011.
      </p>
     </div>

     {/* Section details */}
     <div className="space-y-10 text-xs md:text-sm text-soft-gray leading-relaxed">
      
      {/* Section 1 */}
      <div className="space-y-3">
       <h3 className="text-base md:text-lg font-bold text-navy-blue flex items-center gap-2">
        <span className="w-1.5 h-5 bg-primary-teal rounded-full"></span>
        1. Who We Are
       </h3>
       <p>
        HappyTooth Smile Studio is a specialist dental clinic at Murukkumpuzha, Thiruvananthapuram, Kerala. The clinic is led by Dr. Thushara Sudhakaran BDS MDS, Clinical Director & Root Canal Specialist. We are the data controller for all patient and visitor information collected through the clinic and our website, <strong>happytoothdental.in</strong>.
       </p>
      </div>

      {/* Section 2 */}
      <div className="space-y-3">
       <h3 className="text-base md:text-lg font-bold text-navy-blue flex items-center gap-2">
        <span className="w-1.5 h-5 bg-primary-teal rounded-full"></span>
        2. What We Collect
       </h3>
       <p>We collect and process the following categories of information:</p>
       <ul className="list-disc pl-5 space-y-2">
        <li><strong>Personal details:</strong> Name, date of birth, address, phone number, and email address.</li>
        <li><strong>Health and clinical data:</strong> Medical history, dental examination findings, diagnosis, treatment records, X-rays, and intraoral photographs.</li>
        <li><strong>Financial records:</strong> Treatment fees paid, billing history, and mode of payment.</li>
        <li><strong>Appointment history:</strong> Visit dates, recall records, and communication logs.</li>
        <li><strong>Website enquiry data:</strong> Name, phone, or email submitted through contact or booking forms on our website.</li>
       </ul>
       <div className="bg-red-50 text-red-700 p-4 rounded-2xl border border-red-100 font-bold text-xs">
        <strong>Note:</strong> Health data is classified as Sensitive Personal Data or Information (SPDI) under Indian law. We apply the highest standards of physical and electronic protection to this category.
       </div>
      </div>

      {/* Section 3 */}
      <div className="space-y-3">
       <h3 className="text-base md:text-lg font-bold text-navy-blue flex items-center gap-2">
        <span className="w-1.5 h-5 bg-primary-teal rounded-full"></span>
        3. Why We Collect It
       </h3>
       <p>All information is collected strictly for clinical, administrative, and legal purposes, including:</p>
       <ul className="list-disc pl-5 space-y-1.5">
        <li>To provide dental examination, diagnosis, and clinical treatment.</li>
        <li>To maintain medical and dental charts as required by professional codes and state law.</li>
        <li>To process appointments, send dental recall alerts, and coordinate billing.</li>
        <li>To respond to patient queries, feedback, or complaints.</li>
        <li>To comply with legal tax records, GST verification, and other statutory regulations.</li>
       </ul>
       <p className="font-bold text-navy-blue">
        We do not sell your data or use your details for commercial advertising, third-party marketing, or any purpose unrelated to your clinical care.
       </p>
      </div>

      {/* Section 4 */}
      <div className="space-y-3">
       <h3 className="text-base md:text-lg font-bold text-navy-blue flex items-center gap-2">
        <span className="w-1.5 h-5 bg-primary-teal rounded-full"></span>
        4. How We Store and Protect Your Data
       </h3>
       <p>
        Patient records, including clinical charts, notes, digital X-rays, treatment plans, and billing summaries, are securely managed through <strong>Dentobees</strong>, a cloud-based dental practice management software. Dentobees stores data on encrypted, high-security servers and provides role-based access logs that restrict information visibility only to authorized dental and clinical staff.
       </p>
       <p>
        Paper files, written consent forms, and physical medical questionnaires are stored in locked, fire-resistant cabinets inside the clinic premises. Physical access is restricted strictly to authorized staff, all of whom are contractually bound to maintain strict patient confidentiality.
       </p>
      </div>

      {/* Section 5 */}
      <div className="space-y-3">
       <h3 className="text-base md:text-lg font-bold text-navy-blue flex items-center gap-2">
        <span className="w-1.5 h-5 bg-primary-teal rounded-full"></span>
        5. Who We Share Your Information With
       </h3>
       <p>We share information with external entities only when necessary for your clinical treatment or required by law:</p>
       <ul className="list-disc pl-5 space-y-2">
        <li><strong>Treating Clinicians:</strong> Other specialists within the HappyTooth team directly handling your care.</li>
        <li><strong>Dental Laboratories:</strong> For custom fabrication of crowns, bridges, aligners, or veneers. Only the technical prescription and a patient ID reference are shared; no personal contact details are provided.</li>
        <li><strong>Referring Specialists or Hospitals:</strong> Shared with your consent when referring you for advanced surgical or medical care.</li>
        <li><strong>Dentobees Software:</strong> As our practice management platform processing records securely on our behalf.</li>
        <li><strong>Legal Authorities:</strong> Only when required to comply with a valid court order, state healthcare regulation, or law enforcement warrant.</li>
       </ul>
       <p className="italic font-bold text-navy-blue">
        We do not sell, rent, or share patient information with marketing brokers, insurance aggregators, or commercial advertisers.
       </p>
      </div>

      {/* Section 6 - Table */}
      <div className="space-y-4">
       <h3 className="text-base md:text-lg font-bold text-navy-blue flex items-center gap-2">
        <span className="w-1.5 h-5 bg-primary-teal rounded-full"></span>
        6. How Long We Keep Your Records
       </h3>
       <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
        <table className="min-w-full divide-y divide-gray-150 text-left">
         <thead className="bg-bg-light-blue/50 text-navy-blue text-xs font-bold uppercase">
          <tr>
           <th className="px-6 py-4">Record Type</th>
           <th className="px-6 py-4">Retention Period</th>
          </tr>
         </thead>
         <tbody className="bg-white divide-y divide-gray-100 text-xs text-soft-gray font-medium">
          {retentionPeriods.map((row, idx) => (
           <tr key={idx} className="hover:bg-bg-light-blue/15 transition-colors">
            <td className="px-6 py-4 font-bold text-navy-blue">{row.type}</td>
            <td className="px-6 py-4">{row.period}</td>
           </tr>
          ))}
         </tbody>
        </table>
       </div>
      </div>

      {/* Section 7 */}
      <div className="space-y-3">
       <h3 className="text-base md:text-lg font-bold text-navy-blue flex items-center gap-2">
        <span className="w-1.5 h-5 bg-primary-teal rounded-full"></span>
        7. Your Rights
       </h3>
       <p>Under the Digital Personal Data Protection Act, 2023, you hold the following rights regarding your information:</p>
       <ul className="list-disc pl-5 space-y-2">
        <li><strong>Access:</strong> You can request a summary copy of your personal and clinical records at any time.</li>
        <li><strong>Correction:</strong> You can request updates to outdated or inaccurate contact details. (Note: Medical records are updated with addendums, preserving the original entry for diagnostic integrity).</li>
        <li><strong>Erasure:</strong> You can request deletion of non-clinical records. (Note: Mandatory medical and tax records within the legal retention periods cannot be erased).</li>
        <li><strong>Withdraw Consent:</strong> You may withdraw your consent for future data processing. This will not affect treatments already completed.</li>
        <li><strong>Grievance:</strong> If you feel we have not addressed your privacy concern, you may appeal to the Data Protection Board of India.</li>
       </ul>
       <p className="italic">
        To exercise these rights, please submit a request in writing. We respond to all verified written requests within 7 working days.
       </p>
      </div>

      {/* Section 8 */}
      <div className="space-y-3">
       <h3 className="text-base md:text-lg font-bold text-navy-blue flex items-center gap-2">
        <span className="w-1.5 h-5 bg-primary-teal rounded-full"></span>
        8. Minor Patients
       </h3>
       <p>
        For patients under the age of 18, clinical consent and medical intake information must be completed by an accompanying parent or legal guardian. Parents/guardians maintain access rights to the clinical record of the minor. Upon turning 18, control of these records transfers directly to the patient. Minor records are retained until the patient turns 25, or 5 years from their last visit, whichever is later.
       </p>
      </div>

      {/* Section 9 */}
      <div className="space-y-4">
       <h3 className="text-base md:text-lg font-bold text-navy-blue flex items-center gap-2">
        <span className="w-1.5 h-5 bg-primary-teal rounded-full"></span>
        9. Contact Us
       </h3>
       <div className="bg-bg-light-blue/20 p-6 rounded-2xl border border-gray-50 flex flex-col sm:flex-row justify-between gap-4">
        <div className="space-y-1.5">
         <strong className="block text-navy-blue text-sm">HappyTooth Smile Studio</strong>
         <span className="block text-xs">Ground Floor, Mangalasseri Tower</span>
         <span className="block text-xs">Murukkumpuzha, Thiruvananthapuram, Kerala</span>
        </div>
        <div className="space-y-1.5 text-xs sm:text-right">
         <span className="block"><strong>Email:</strong> smile@happytoothdental.in</span>
         <span className="block"><strong>Murukkumpuzha:</strong> +91 73561 00602</span>
         <span className="block"><strong>Kallambalam:</strong> +91 87144 70808</span>
        </div>
       </div>
       <div className="text-center text-xs font-bold text-primary-teal pt-2">
        “Saving Teeth. Designing Smiles.”
       </div>
      </div>

     </div>

    </div>
   </section>
  </div>
 );
}
