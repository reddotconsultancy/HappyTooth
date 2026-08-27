// Locality × service intersection pages — /services/[slug]/[locality]
//
// These target "<treatment> in <place>" searches, which neither the service
// pages (no locality) nor the clinic pages (no treatment depth) match well.
// Each entry must carry genuinely distinct copy: near-duplicate pages that
// only swap the place name read as thin content and can rank worse than none.

export interface LocalityService {
 serviceSlug: string;
 localitySlug: string;
 clinicName: string;
 clinicShort: string;
 heading: string;         // H1
 metaTitle: string;
 metaDesc: string;
 image: string;
 phone: string;
 telLink: string;
 waLink: string;
 mapUrl: string;
 hours: string;
 /** Opening paragraphs — specific to this treatment at this clinic. */
 intro: string[];
 /** How to reach this clinic, written for this locality's catchment. */
 gettingHere: string[];
 /** Why this particular clinic for this particular treatment. */
 whyHereTitle: string;
 whyHere: string[];
}

const MURUK = {
 clinicName: "HappyTooth Smile Studio, Murukkumpuzha",
 clinicShort: "Murukkumpuzha",
 phone: "+91 73561 00602",
 telLink: "tel:+917356100602",
 waLink: "https://wa.me/917356100602",
 mapUrl: "https://maps.app.goo.gl/cQFJMx9Nu4Sbyz6B6",
 hours: "Open all 7 days, 9:30 AM – 6:30 PM",
};

const KALLAM = {
 clinicName: "HappyTooth Dental Care & Root Canal Centre, Kallambalam",
 clinicShort: "Kallambalam",
 phone: "+91 87144 70808",
 telLink: "tel:+918714470808",
 waLink: "https://wa.me/918714470808",
 mapUrl: "https://maps.app.goo.gl/ve3hNRyxmV5PFGxR7",
 hours: "Monday to Saturday, 9:30 AM – 6:30 PM",
};

export const localityServices: LocalityService[] = [
 {
  ...MURUK,
  serviceSlug: "root-canal",
  localitySlug: "murukkumpuzha",
  heading: "Root Canal Treatment in Murukkumpuzha",
  metaTitle: "Root Canal Treatment in Murukkumpuzha | MDS Endodontist On Site",
  metaDesc:
   "Specialist root canal treatment at Thoppumukku junction, Murukkumpuzha. Performed by an in-house MDS Endodontist. Single-sitting RCT available. Open all 7 days.",
  image: "/images/indian_rct_procedure.webp",
  intro: [
   "If you are searching for root canal treatment in Murukkumpuzha, the most important thing to establish is who will actually be doing it. At HappyTooth Smile Studio, root canals are performed by Dr. Thushara Sudhakaran, BDS, MDS in Endodontics — the specialisation devoted entirely to root canal treatment, dental pulp disease and saving badly damaged teeth. She has completed more than 1,000 root canal treatments.",
   "That matters because a root canal is not one procedure. A single-rooted front tooth and a lower molar with four curved, calcified canals are entirely different pieces of work. General practice handles the first comfortably. The second is where cases get missed, canals get left uncleaned, and treatment fails a year later and has to be redone.",
  ],
  gettingHere: [
   "The studio is on the ground floor of Mangalasseri Tower at Thoppumukku junction, on the main road through Murukkumpuzha. There is private parking on site with room for six or more cars, so you can pull in directly rather than circling the junction.",
   "Patients travel to us from Attingal, Kazhakoottam, Mangalapuram, Pothencode and Menamkulam, most within a fifteen to twenty minute drive. Being on the ground floor means no stairs, which matters more than people expect when you arrive with a swollen face and an abscess.",
  ],
  whyHereTitle: "Why have a root canal done here",
  whyHere: [
   "Treatment uses a rotary endodontic system with nickel-titanium files, which are more flexible and more precise than manual instruments, with magnification where the case warrants it. Most straightforward cases finish in a single appointment. Molars with additional canals, curved roots or calcified canals may need a second visit — we will tell you which yours is before we start, not halfway through.",
   "You are anaesthetised properly, so there is no pain during the procedure. Expect mild soreness for a day or two afterwards; most patients are back to normal the next day. The crown that protects the tooth afterwards is planned and priced as part of the same treatment, not introduced as a surprise cost later.",
   "Because the studio is open all seven days including Sundays and public holidays, an infected tooth that flares up on a weekend does not have to wait until Monday.",
  ],
 },
 {
  ...KALLAM,
  serviceSlug: "root-canal",
  localitySlug: "kallambalam",
  heading: "Root Canal Treatment in Kallambalam",
  metaTitle: "Root Canal Treatment in Kallambalam | Specialist Endodontist Since 2021",
  metaDesc:
   "Specialist root canal treatment at Alinmoodu, Kallambalam. MDS Endodontist, 1,000+ root canals completed. Serving Varkala, Nedumangad and Attingal. Mon–Sat.",
  image: "/images/indian_rct_procedure.webp",
  intro: [
   "HappyTooth Dental Care & Root Canal Centre at Alinmoodu is, as the name suggests, built around this one treatment. It opened in 2021 and it is where our reputation in this part of Thiruvananthapuram was made — largely on root canals that other clinics had recommended extracting instead.",
   "Dr. Thushara Sudhakaran holds an MDS in Endodontics and has completed over 1,000 root canal treatments. If you have been told a tooth cannot be saved, it is worth a second opinion before agreeing to lose it. Almost every tooth a patient arrives expecting to have extracted, we would rather try to save first.",
  ],
  gettingHere: [
   "The clinic is at Alinmoodu on the Kallambalam–Varkala Road, Thiruvananthapuram 695605, with street parking available near the front.",
   "We see patients from Kallambalam, Varkala, Nedumangad, Attingal and across the southern part of the district. The clinic is open Monday to Saturday. If you need a Sunday appointment, our Smile Studio at Murukkumpuzha is open all seven days and the same clinical team works across both locations.",
  ],
  whyHereTitle: "Why have a root canal done here",
  whyHere: [
   "This is a clinic that does root canals every working day rather than occasionally. Treatment uses rotary nickel-titanium files with magnification where needed. Many cases complete in a single sitting; molars, curved canals and retreatments may take two visits.",
   "Retreatment is worth mentioning specifically. A root canal that was done elsewhere and has failed — persistent pain, recurring swelling, an abscess that keeps returning — can often be reopened, properly cleaned and re-sealed rather than the tooth being extracted. That is specialist work and it is routine here.",
   "You will get a written cost estimate covering both the root canal and the crown before anything begins. If a tooth genuinely cannot be saved we will say so plainly and explain the replacement options, rather than attempting treatment that will not hold.",
  ],
 },
 {
  ...MURUK,
  serviceSlug: "dental-implants",
  localitySlug: "murukkumpuzha",
  heading: "Dental Implants in Murukkumpuzha",
  metaTitle: "Dental Implants in Murukkumpuzha | Digital Planning & Assessment",
  metaDesc:
   "Dental implants at HappyTooth Smile Studio, Thoppumukku, Murukkumpuzha. Digital X-ray and OPG assessment, CBCT referral for complex cases. Open all 7 days.",
  image: "/images/dental_implant_model.webp",
  intro: [
   "A dental implant replaces a missing tooth from the root upward. A titanium post is placed into the jawbone where the original root sat, the bone fuses around it over three to six months, and a ceramic crown is then attached. The result functions like a natural tooth — you brush it, floss around it and eat normally, with no dietary restriction.",
   "Implants are the treatment where assessment matters most, and where corners are most often cut. Placing one without properly establishing bone volume, sinus position and the path of the inferior alveolar nerve is how implants fail, and a failed implant is considerably harder to deal with than the gap it replaced.",
  ],
  gettingHere: [
   "The Smile Studio sits on the ground floor of Mangalasseri Tower at Thoppumukku junction, Murukkumpuzha, with parking on site for six or more cars. Implant treatment involves several appointments across a number of months, so an easy journey and somewhere to park genuinely matters.",
   "Patients come to us from Attingal, Kazhakoottam, Mangalapuram, Pothencode, Varkala and Trivandrum city. Because we are open all seven days, review appointments can be scheduled at weekends rather than requiring time off work.",
  ],
  whyHereTitle: "How implant cases are handled here",
  whyHere: [
   "Every case begins with assessment rather than a quote. Digital X-rays and OPG panoramic imaging establish bone availability, and complex anatomy is referred for CBCT scanning, which gives a three-dimensional view of bone density and nerve position before anything is placed.",
   "Not everyone is a candidate, and we would rather tell you that at the assessment. Active gum disease, uncontrolled diabetes and smoking all need addressing first, because they materially affect whether the bone will fuse to the implant. Where bone volume is insufficient, that is a separate conversation about grafting rather than something to discover mid-procedure.",
   "Expect three to six months of healing after placement before the crown is fitted, so four to six months in total. With proper maintenance an implant lasts fifteen to twenty-five years or more. You will have the full staged cost in writing before the first appointment.",
  ],
 },
 {
  ...MURUK,
  serviceSlug: "smile-designing",
  localitySlug: "murukkumpuzha",
  heading: "Smile Designing in Murukkumpuzha",
  metaTitle: "Smile Designing in Murukkumpuzha | Digital Preview Before Treatment",
  metaDesc:
   "Smile design at HappyTooth Smile Studio, Thoppumukku, Murukkumpuzha. Veneers, crowns, whitening and alignment planned as one case, with a digital preview first.",
  image: "/images/indian_smile_design.webp",
  intro: [
   "Smile designing is a plan rather than a procedure. It combines whichever treatments your teeth actually need — veneers, crowns, whitening, gum correction, orthodontic adjustment — sequenced in the right order so that the result looks natural and the bite continues to work properly.",
   "The Smile Studio at Murukkumpuzha was built specifically for this kind of work. It is the reason the clinic exists as a separate, larger facility rather than a second general practice: comprehensive cosmetic cases need the equipment, the chair time and the specialist range that a smaller clinic cannot give them.",
  ],
  gettingHere: [
   "You will find us on the ground floor of Mangalasseri Tower at Thoppumukku junction, Murukkumpuzha, with private parking for six or more cars.",
   "Smile design runs across several appointments — a simple combination of whitening and veneers takes two to three visits over two to three weeks, while a comprehensive case involving orthodontics or implants runs four to eight weeks or longer. We are open all seven days, which makes scheduling that sequence around work considerably easier. Patients travel to us from Attingal, Kazhakoottam, Varkala, Kovalam and Trivandrum city.",
  ],
  whyHereTitle: "How a smile design case works",
  whyHere: [
   "Nothing begins until we have assessed gum health, your bite and any existing restorations, and treated active decay or gum disease. Cosmetic work placed over an untreated problem simply fails sooner, and doing it in that order is not us being cautious — it is the difference between a result that lasts and one that does not.",
   "You see a digital smile preview before any clinical work starts, so you are agreeing to a specific outcome rather than a description of one. Shape and shade are matched to your face rather than to a template — the objective is a smile nobody can identify as dental work.",
   "Where teeth are crowded, spaced or rotated, we will often recommend moving them with aligners or braces rather than covering them with veneers. It takes longer and it touches less of your natural tooth, and over twenty years that is almost always the better decision. You will get the full plan and its cost in writing before starting.",
  ],
 },
 {
  ...KALLAM,
  serviceSlug: "smile-designing",
  localitySlug: "kallambalam",
  heading: "Smile Designing in Kallambalam",
  metaTitle: "Smile Designing in Kallambalam | Veneers, Crowns & Whitening",
  metaDesc:
   "Smile design at HappyTooth, Alinmoodu, Kallambalam. Veneers, crowns, whitening and gum correction planned as one case with a digital preview. Mon–Sat.",
  image: "/images/indian_smile_design.webp",
  intro: [
   "Smile designing is a plan rather than a single procedure. It combines whichever treatments your teeth actually need — veneers, crowns, whitening, gum correction, orthodontic adjustment — sequenced in the right order so the result looks natural and your bite keeps working properly.",
   "The full treatment is carried out here at our Alinmoodu clinic in Kallambalam. Assessment, digital preview, the clinical appointments and your follow-up reviews all happen locally, so there is no travelling for the parts that matter. This is the clinic that has served Kallambalam since 2021, and it is led by Dr. Thushara Sudhakaran, BDS, MDS.",
  ],
  gettingHere: [
   "The clinic is at Alinmoodu on the Kallambalam–Varkala Road, Thiruvananthapuram 695605, with street parking available near the front. It is open Monday to Saturday, 9:30 AM to 6:30 PM.",
   "Patients come to us from Kallambalam, Varkala, Nedumangad, Attingal and across the southern part of the district. Smile design runs across several appointments — a simple combination of whitening and veneers takes two to three visits over two to three weeks, while a comprehensive case runs four to eight weeks or longer — so a clinic close to home makes the sequence considerably easier to keep to.",
  ],
  whyHereTitle: "How a smile design case works here",
  whyHere: [
   "Nothing cosmetic begins until we have assessed gum health, your bite and any existing restorations, and treated active decay or gum disease first. Cosmetic work placed over an untreated problem simply fails sooner. Doing it in that order is not caution, it is the difference between a result that lasts and one that does not.",
   "You see a digital smile preview before any irreversible work starts, so you are approving a specific outcome rather than a description of one. Shape and shade are matched to your face rather than to a template — the objective is a smile nobody can identify as dental work. Porcelain veneers last ten to twenty years; composite veneers are done in a single appointment and last five to eight.",
   "Where teeth are crowded, spaced or rotated, we will often recommend moving them with aligners or braces rather than covering them with veneers. It takes longer and it touches far less of the natural tooth, and over twenty years that is almost always the better decision. You will have the full plan, its sequence and its staged cost in writing before anything starts.",
  ],
 },
];

export function getLocalityService(serviceSlug: string, localitySlug: string) {
 return localityServices.find(
  (l) => l.serviceSlug === serviceSlug && l.localitySlug === localitySlug,
 );
}

/** All valid service/locality pairs, for generateStaticParams and internal links. */
export function getAllLocalityParams() {
 return localityServices.map((l) => ({
  slug: l.serviceSlug,
  locality: l.localitySlug,
 }));
}

/** Intersection pages that exist for a given service — used to link from the service page. */
export function getLocalitiesForService(serviceSlug: string) {
 return localityServices.filter((l) => l.serviceSlug === serviceSlug);
}
