import React from "react";
import Image from "next/image";
import BreadcrumbHero from "@/components/BreadcrumbHero";

export const metadata = {
  title: "Specialist Dental Services | Happy Tooth Dental Care",
  description: "Explore our specialised dental treatments at HappyTooth Smile Studio, including root canals, smile designing, aligners, implants, pediatric care, and emergency dental assistance.",
};

export default function Services() {
  const serviceCards = [
    { name: "Root Canal", link: "#ENDODONTICS" },
    { name: "Smile Design", link: "#COSMETIC" },
    { name: "Aligners & Braces", link: "#Orthodontics" },
    { name: "Teeth Whitening", link: "#TeethWhitening" },
    { name: "Paediatric Dentistry", link: "#Pediatric" },
    { name: "Dental Implants", link: "#DentalImplants" },
    { name: "Crowns & Bridges", link: "#Restorative" },
    { name: "Dental Veneers", link: "#DentalVeneers" },
    { name: "Gum Care", link: "#GumCare" },
    { name: "Scaling & Polishing", link: "#Preventive" },
    { name: "Extractions", link: "#ExtractionsWisdom" },
    { name: "Dentures & Rehab", link: "#DenturesRehab" },
    { name: "Diagnostics & X-Rays", link: "#XraysDiagnostics" },
    { name: "Emergency Care", link: "#EmergencyCare" },
  ];

  const servicesData = [
    {
      id: "ENDODONTICS",
      serviceNumber: "01",
      title: "Root Canal Treatment",
      subtitle: "Specialist Endodontics  ·  MDS Endodontist on site",
      desc: "Most people come in dreading a root canal — and leave wondering why they waited so long. When the pulp inside a tooth becomes infected or inflamed due to deep decay, a crack, or repeated dental procedures, a root canal is the only way to save that tooth without resorting to extraction. Left untreated, the infection spreads, causes severe pain, and eventually destroys the bone around the root. At HappyTooth Smile Studio, root canal treatment is performed by Dr. Thushara Sudhakaran, our in-house MDS Endodontist — a specialist who has dedicated her postgraduate training specifically to this field.",
      methodDetail: "The procedure uses a rotary endodontic system with nickel-titanium files that are more flexible and precise than manual instruments. Where cases warrant it, magnification is used to improve accuracy during canal preparation and cleaning. Most straightforward cases can be completed in a single appointment. Complex teeth — molars with additional canals, curved roots, calcified canals — may require a second visit. After treatment, the tooth is sealed and restored with a crown to protect it from fracture under biting forces.",
      whoNeedsTitle: "Who needs it:",
      whoNeedsItems: [
        "Severe or worsening toothache",
        "Lingering sensitivity to heat or cold",
        "Pain on biting or chewing",
        "Swelling near a tooth or gums",
        "A tooth that has gone dark after trauma"
      ],
      expectTitle: "What to expect:",
      expectDesc: "Local anaesthesia, no pain during the procedure, and mild soreness for 1–2 days post-treatment. Most patients return to normal the next day.",
      whyHere: "Having a dedicated MDS Endodontist on site — not a referral elsewhere — means complex root canals are handled with specialist-level expertise from the first appointment.",
      image: "/images/indian_rct_procedure.png"
    },
    {
      id: "COSMETIC",
      serviceNumber: "02",
      title: "Smile Designing",
      subtitle: "Cosmetic  ·  Restorative  ·  Customised Treatment Planning",
      desc: "Your smile is usually the first thing people notice, and it shapes the impression you make — consciously or not. Smile designing is not a single procedure but a carefully planned combination of treatments that work together to achieve the result you want. It might involve veneers, crowns, whitening, gum correction, orthodontic adjustments, or a mix of these — depending entirely on what your teeth and face need.",
      methodDetail: "We begin with a thorough evaluation of your teeth, their alignment, the shape and position of your gums, and how your smile interacts with your lips and facial proportions. We then create a digital smile preview so you can see the anticipated outcome before any clinical work begins. This step is non-negotiable — you approve the design, and only then do we proceed. Smile designing is not about making everyone look the same. A well-designed smile looks natural, fits your face, and enhances rather than overwhelms your features. The result should look like the best version of your own teeth — not someone else's.",
      whoNeedsTitle: "Common concerns addressed:",
      whoNeedsItems: [
        "Stained or discoloured teeth",
        "Chipped, uneven, or jagged edges",
        "Visible gaps or spacing issues",
        "Asymmetric alignment or gummy smile",
        "Worn, short, or mismatched old restorations"
      ],
      expectTitle: "Treatment timeline:",
      expectDesc: "Varies by case. Simple smile makeovers (whitening + veneers on front teeth) can be completed in 2–3 visits over 2–3 weeks. More comprehensive cases involving multiple teeth and gum correction may take 4–8 weeks.",
      whyHere: "Our first step is always a consultation and smile assessment — with no commitment required at that stage.",
      image: "/images/indian_smile_design.png"
    },
    {
      id: "Orthodontics",
      serviceNumber: "03",
      title: "Aligners & Braces",
      subtitle: "Orthodontics  ·  Children & Adults",
      desc: "Crooked, crowded, or gapped teeth are among the most common dental concerns we see — and they matter beyond aesthetics. Misaligned teeth are harder to clean, wear unevenly over time, and can contribute to jaw joint problems and bite-related headaches. Orthodontic treatment corrects these issues by moving teeth into their proper positions over a planned period of time. We offer three main orthodontic options.",
      methodDetail: "Traditional metal braces remain the most reliable and cost-effective choice for significant corrections — they work efficiently across all age groups and allow precise control for complex tooth movements. Ceramic braces function the same way but use tooth-coloured brackets, making them far less conspicuous while delivering equivalent results. Clear removable aligners are the preferred choice for adults who want to straighten their teeth without visible appliances — they are worn throughout the day, removed only for eating and cleaning, and changed every 1–2 weeks as treatment progresses. For children, early orthodontic assessment (from around age 7–8) allows us to identify developing bite problems and address them early.",
      whoNeedsTitle: "Aligners vs. braces:",
      whoNeedsItems: [
        "Aligners are suitable for mild to moderate misalignment",
        "Braces are preferred for complex corrections, rotations, and bite issues",
        "Your clinical assessment will clarify which option applies to you",
        "For adults, age is not a barrier as long as gums and bone are healthy",
        "After treatment, retainers are essential to hold results permanently"
      ],
      expectTitle: "Treatment duration:",
      expectDesc: "Mild corrections: 6–9 months. Moderate cases: 12–18 months. Complex full-arch alignment: 18–24+ months.",
      whyHere: "We design orthodontic setups tailored to your comfort and visual requirements, balancing ceramic brackets, metal rigs, or clear aligners.",
      image: "/images/indian_aligners.png"
    },
    {
      id: "TeethWhitening",
      serviceNumber: "04",
      title: "Teeth Whitening",
      subtitle: "Cosmetic  ·  In-Clinic Professional Treatment",
      desc: "Tooth colour naturally changes over time. Tea, coffee, red wine, certain spices, and decades of everyday use leave behind staining that regular brushing simply cannot remove. The result is teeth that look dull or yellow — not because of poor hygiene, but because of surface and subsurface discolouration that requires a clinical-grade whitening agent to address.",
      methodDetail: "Professional in-clinic whitening delivers noticeably brighter teeth in a single appointment — a result that over-the-counter whitening strips and trays cannot match. Before treatment, we assess your enamel condition and gum health to confirm that whitening is appropriate for your case. Sensitivity, existing restorations, and the type of staining all factor into how we approach your treatment. The whitening agent is applied carefully to the tooth surfaces with gum protection in place, and activated over a controlled period. Results are calibrated to your starting shade to ensure natural brightness.",
      whoNeedsTitle: "Best candidates:",
      whoNeedsItems: [
        "Patients with extrinsic (surface) staining from food & drink",
        "Patients with natural age-related yellowing of enamel",
        "Note: Less suitable for tetracycline staining (internal issues)",
        "Note: Internal discolouration is better addressed with veneers",
        "Note: Crowns, veneers, and composite fillings do not whiten"
      ],
      expectTitle: "How long it lasts:",
      expectDesc: "Results typically last 12–24 months with normal dietary habits. Avoiding heavy tea, coffee, and tobacco significantly extends the effect. A take-home kit can be provided for maintenance.",
      whyHere: "We calibrate whitening intensity to match your facial profile, avoiding an artificial chalky look.",
      image: "/images/teeth_whitening_smile.png"
    },
    {
      id: "Pediatric",
      serviceNumber: "05",
      title: "Paediatric Dentistry",
      subtitle: "Children's Dental Care  ·  Ages 1 and above",
      desc: "A child's first few visits to the dentist have a lasting effect on how they feel about dental care for the rest of their life. A frightening early experience can lead to avoidance that causes real harm over years. That is why we approach children's dentistry differently — with unhurried appointments, a calm environment, and a manner that helps children feel safe rather than anxious. We see children from the eruption of their first tooth.",
      methodDetail: "Early appointments are as much about familiarity as they are about clinical examination — getting the child comfortable with the chair, the lights, and the dentist before any treatment is ever needed. As they grow, we monitor tooth development, watch for crowding or bite problems, and treat cavities in milk teeth before they affect the permanent dentition underneath. Preventive treatment is a major part of what we do. Pit-and-fissure sealants are applied to grooves of back teeth, where decay almost always begins. Fluoride application strengthens enamel during critical years. For habits like thumb sucking, mouth breathing, or tongue thrusting, we provide habit-breaking appliances.",
      whoNeedsTitle: "Services for children:",
      whoNeedsItems: [
        "First dental check-ups & oral hygiene habit guidance",
        "Cavity fillings and treatment in milk teeth",
        "Pit-and-fissure sealants for cavity prevention",
        "Professional fluoride application to strengthen enamel",
        "Space maintainers and habit correction appliances"
      ],
      expectTitle: "First visit age:",
      expectDesc: "Ideally by age 1, or within 6 months of the first tooth erupting. At the latest, before age 3. We encourage parents to stay in the room to help the child stay calm.",
      whyHere: "Our specialized pediatric care is built around patience, play, and positive associations, making visits something children look forward to rather than fear.",
      image: "/images/indian_pediatric_dentist.png"
    },
    {
      id: "DentalImplants",
      serviceNumber: "06",
      title: "Dental Implants",
      subtitle: "Restorative  ·  Permanent Tooth Replacement",
      desc: "A missing tooth is more than a gap in your smile. Within months of losing a tooth, the bone underneath begins to resorb — it shrinks because there is no longer a root stimulating it. Neighbouring teeth tilt into the space. The opposing tooth over-erupts. Biting becomes uneven, and over years this creates a cascade of problems that become harder and more expensive to fix. A dental implant addresses all of this.",
      methodDetail: "A small titanium post is placed into the jawbone where the root of the missing tooth used to sit. Over 3–6 months, the bone fuses around it in a process called osseointegration. Once this is complete, a ceramic crown is attached to the implant — one that is shaped and shaded to match your surrounding teeth, and functions exactly like a natural tooth. You brush it, floss around it, and eat with it without any restriction. Every implant case at our clinic begins with a proper assessment. Digital X-rays confirm bone availability, and complex cases use CBCT scans for precise anatomical planning.",
      whoNeedsTitle: "Candidacy requirements:",
      whoNeedsItems: [
        "Adequate bone volume to support the titanium post",
        "Good general health (most adults are ideal candidates)",
        "Uncontrolled diabetes must be managed before placement",
        "Active gum disease must be treated prior to surgery",
        "Smoking habits should be reduced to ensure implant survival"
      ],
      expectTitle: "Treatment timeline:",
      expectDesc: "3–4 months healing after placement (longer if bone grafting is needed), followed by crown fitting. Total duration is typically 4–6 months from placement to final restoration.",
      whyHere: "Implants, when properly placed and maintained with regular cleaning and check-ups, routinely last 15–25+ years. Many last a lifetime.",
      image: "/images/dental_implant_model.png"
    },
    {
      id: "Restorative",
      serviceNumber: "07",
      title: "Crowns & Bridges",
      subtitle: "Restorative  ·  Fixed Prosthetics",
      desc: "A dental crown is a full-coverage restoration that fits over a damaged or weakened tooth, restoring its original shape, size, strength, and appearance. It is the appropriate treatment when a tooth has too little natural structure remaining for a filling to be reliable — after a root canal, a large fracture, or severe wear. A crown protects the remaining tooth structure and allows the tooth to function normally under biting forces.",
      methodDetail: "A bridge fills the gap left by a missing tooth without implants. It consists of a false tooth (called a pontic) anchored on both sides by crowns placed over the adjacent teeth. The result is a fixed, non-removable restoration that looks and functions like natural teeth. We work primarily with zirconia and tooth-coloured ceramic materials. Zirconia is exceptionally strong — suitable for back teeth that bear high biting forces — and is also highly aesthetic. Full-ceramic crowns on front teeth offer the most natural-looking result, mimicking natural enamel light transmission.",
      whoNeedsTitle: "Crown procedure & facts:",
      whoNeedsItems: [
        "Takes two appointments in most clinical cases",
        "First visit: tooth preparation and precision impression",
        "Second visit (10-14 days later): crown fitting and cementation",
        "A temporary crown is worn during the interim period",
        "Bridges require preparing the adjacent supporting teeth"
      ],
      expectTitle: "Bridge vs. Implant:",
      expectDesc: "A bridge is faster and lower in cost but involves preparing adjacent teeth. An implant preserves neighbouring teeth completely and is a more independent solution. We discuss both options before proceeding.",
      whyHere: "We use hospital-grade prosthetics and zirconia overlays that resist discoloration and last 10–15+ years under heavy chewing pressure.",
      image: "/images/before-after.webp"
    },
    {
      id: "DentalVeneers",
      serviceNumber: "08",
      title: "Dental Veneers",
      subtitle: "Cosmetic  ·  Porcelain & Composite",
      desc: "Veneers are ultra-thin ceramic or composite shells, custom-fabricated and permanently bonded to the front surfaces of the teeth. They are one of the most versatile cosmetic procedures in dentistry — capable of addressing chipped or worn edges, uneven tooth shapes, persistent staining that does not respond to whitening, small gaps, and minor misalignment that would otherwise require orthodontic treatment.",
      methodDetail: "Porcelain veneers are crafted in a dental laboratory from pressed or layered ceramic. They are colour-stable, highly resistant to staining, and possess a translucency that closely mimics natural enamel. When bonded properly, they are remarkably durable. Composite veneers are applied directly in the clinic using tooth-coloured resin — they can be completed in a single appointment and are more economical, but are less stain-resistant and may need replacement or refinishing after 5–7 years. Enamel preparation is minimal but permanent.",
      whoNeedsTitle: "Veneers are best for:",
      whoNeedsItems: [
        "Front teeth with persistent, deep tetracycline stains",
        "Minor chips, cracks, or worn edges on front teeth",
        "Closing small, visible gaps without braces",
        "Correcting minor tooth size discrepancies",
        "Veneers are typically placed on the upper front 6–10 teeth"
      ],
      expectTitle: "Longevity expectations:",
      expectDesc: "Porcelain veneers: 10–20 years with proper oral hygiene. Composite veneers: 5–8 years. Both require avoiding excessive biting force (like ice or hard candy) on bonded surfaces.",
      whyHere: "We prepare detailed wax-ups and digital previews so you can inspect the size, shape, and shade before any permanent tooth structure is altered.",
      image: "/images/indian_veneers_smile.png"
    },
    {
      id: "GumCare",
      serviceNumber: "09",
      title: "Gum Care & Periodontics",
      subtitle: "Periodontics  ·  Gum Disease Treatment",
      desc: "Gum disease is the leading cause of tooth loss in adults, and it is almost entirely silent in its early stages. Most patients do not notice it until it is already causing significant damage. The warning signs — bleeding during brushing, gums that look swollen or darker than usual, a persistent unpleasant taste, or teeth that appear longer because the gums have receded — are often dismissed as minor issues. They are not.",
      methodDetail: "In its early stage (gingivitis), gum disease is fully reversible with professional cleaning and improved oral hygiene. Once it progresses to periodontitis, the supporting bone around the teeth is lost — and bone does not regenerate on its own. The aim at this stage shifts from reversal to arrest and management. Our gum treatment services range from thorough scaling and root planing (deep cleaning below the gum line, usually under local anaesthesia) to periodontal flap surgery for advanced cases where surgical access is needed to debride deep pockets.",
      whoNeedsTitle: "Common signs of gum disease:",
      whoNeedsItems: [
        "Bleeding during routine brushing or flossing",
        "Red, puffy, or tender gum margins",
        "Persistent bad breath that remains after cleaning",
        "Gums pulling away from teeth (recession)",
        "Teeth feeling loose or food packing between teeth"
      ],
      expectTitle: "Systemic health connection:",
      expectDesc: "Untreated periodontitis is associated with poorer blood sugar control in diabetic patients, increased cardiovascular risks, and complications in pregnancy. Gum care is a medical priority, not just cosmetic.",
      whyHere: "We implement lifelong structured maintenance programmes (scaling/polishing every 3–6 months) to arrest periodontitis and protect your jawbone.",
      image: "/images/indian_gum_care.png"
    },
    {
      id: "Preventive",
      serviceNumber: "10",
      title: "Scaling & Polishing",
      subtitle: "Preventive  ·  Routine Oral Health Maintenance",
      desc: "A professional clean every six months is the most cost-effective thing you can do for your oral health — and yet it is routinely postponed or skipped entirely by most people. The reasoning is understandable: if nothing hurts, why bother? The answer is that by the time something hurts, the problem is usually much larger than it needed to be.",
      methodDetail: "Scaling removes calculus — the hardened mineralised deposits that form when plaque is not fully removed by brushing. Calculus cannot be removed at home, regardless of technique or toothbrush type. Once it forms, it creates a rough surface that attracts more bacteria, triggers gum inflammation, and accelerates bone loss around the teeth. Polishing follows scaling and removes surface staining from tea, coffee, and tobacco while smoothing the enamel surface to make plaque adhesion harder. Early cavities, beginning gum pockets, and cracked enamel are all inspected during this session.",
      whoNeedsTitle: "Recommended frequency:",
      whoNeedsItems: [
        "Every 6 months for most healthy adults",
        "Every 3–4 months for patients with active gum disease",
        "Every 3–4 months for diabetic patients or heavy smokers",
        "Annual professional cleans for children starting school",
        "Session duration: 45–60 minutes, including complete charting"
      ],
      expectTitle: "Post-appointment sensation:",
      expectDesc: "Some patients experience mild sensitivity to cold or hot liquids for 24–48 hours, particularly where the gums were inflamed before scaling. This is temporary and resolves as gums heal.",
      whyHere: "Detecting a cavity at 6 months means a small, simple filling. Waiting 2 years can mean a root canal and a crown. We focus on interception.",
      image: "/images/happytooth-varkala12-1.jpg"
    },
    {
      id: "ExtractionsWisdom",
      serviceNumber: "11",
      title: "Extractions & Wisdom Teeth",
      subtitle: "Oral Surgery  ·  Simple & Surgical Extractions",
      desc: "When a tooth is too damaged to save — by decay, fracture, failed previous treatment, or severe infection — extraction is the right decision. Attempting to preserve a tooth beyond its clinical viability leads to ongoing pain, spreading infection, and bone loss that ultimately makes future tooth replacement more difficult. A well-timed extraction, followed by an appropriate replacement plan, is the better outcome. Wisdom teeth are a separate and very common problem.",
      methodDetail: "Most adults do not have enough space in their jaws for all four third molars to erupt fully and correctly. The result is an impacted tooth — one that is partially or fully trapped beneath the gum line, often growing at an angle that pushes against the adjacent molar. Impacted wisdom teeth cause episodic pain, infection in the surrounding gum (pericoronitis), and can gradually damage the roots of the neighbouring tooth if left in place. Before extraction, we take a periapical or OPG radiograph to assess root anatomy and nerve proximity.",
      whoNeedsTitle: "Recovery guidelines:",
      whoNeedsItems: [
        "Simple extractions: mild discomfort for 2–3 days, normal eating in a week",
        "Surgical wisdom tooth removal: swelling and discomfort for 4–7 days",
        "Bite on sterile gauze for 30 minutes post-extraction",
        "Avoid hot food, carbonated drinks, and tobacco for 24 hours",
        "Do NOT rinse or spit forcefully on the first day to protect the clot"
      ],
      expectTitle: "Surgical safety:",
      expectDesc: "Surgical extractions, where bone removal or tooth sectioning is required, are performed under local anaesthesia with high precision, mapping the dental nerve carefully.",
      whyHere: "We provide detailed written instructions and a direct follow-up call after every extraction, ensuring smooth healing.",
      image: "/images/indian_wisdom_xray.png"
    },
    {
      id: "DenturesRehab",
      serviceNumber: "12",
      title: "Dentures & Full Mouth Rehabilitation",
      subtitle: "Prosthodontics  ·  Complete & Partial Tooth Replacement",
      desc: "Significant tooth loss — whether from decay, gum disease, trauma, or a combination of these — affects far more than appearance. Chewing becomes restricted, which affects nutrition and digestion. Speech changes. The jaw muscles and joints adapt to the new bite in ways that cause pain over time. Self-confidence diminishes in ways that people often don't openly discuss but universally feel.",
      methodDetail: "Complete dentures replace all teeth in an arch, resting on the gum ridges. Partial dentures replace some teeth, using remaining teeth for support via metal clasps or precision attachments. For patients who want the stability and permanence of fixed teeth, implant-supported dentures offer the most significant upgrade in quality of life. Two to four implants placed in the jaw support a fixed prosthesis that does not move, does not require adhesive, and allows normal biting force. Full mouth rehabilitation combines implants, crowns, bridges, and orthodontic treatment to restore a severely compromised bite.",
      whoNeedsTitle: "Treatment duration details:",
      whoNeedsItems: [
        "Conventional dentures: 4–6 appointments over 4–6 weeks",
        "Implant-supported prosthetics: 4–9 months from placement to delivery",
        "Full mouth rehabilitation: Typically 3–9 months depending on complexity",
        "Requires bone structure assessment and detailed bite registration",
        "Removable dentures must be removed and cleaned nightly"
      ],
      expectTitle: "Fixed vs. Removable:",
      expectDesc: "Implant-supported fixed restorations are maintained just like natural teeth (brushing, flossing, check-ups) and eliminate the slip and soreness associated with traditional plates.",
      whyHere: "We custom-design denture bases to match the natural shade of your gum tissue, ensuring the boundary is invisible to others.",
      image: "/images/indian_dentist_team.png"
    },
    {
      id: "XraysDiagnostics",
      serviceNumber: "13",
      title: "Digital X-Rays & Diagnostics",
      subtitle: "Diagnostics  ·  Radiation-Reduced Digital Imaging",
      desc: "Every treatment decision we make is only as good as the diagnosis behind it. Accurate, high-quality imaging is not optional — it is the foundation of safe dental care. We use digital radiography as our standard system for intraoral and panoramic X-rays.",
      methodDetail: "Digital X-rays produce sharper, higher-resolution images than conventional film, are available on screen within seconds, and deliver significantly lower radiation exposure — typically 80–90% less than conventional film X-rays. Images can be enhanced, zoomed, and compared across appointments to track bone loss or cavity progression. For complex cases (implants, impacted teeth, jaw joint issues), cone beam computed tomography (CBCT) scanning provides a three-dimensional volumetric image of the jaws, allowing us to assess bone density and nerve locations.",
      whoNeedsTitle: "Diagnostics available:",
      whoNeedsItems: [
        "Intraoral digital X-rays (for individual teeth & cavities)",
        "Orthopantomogram (OPG full-mouth panoramic overview X-ray)",
        "Cone beam computed tomography (CBCT) 3D imaging for implants",
        "Intraoral camera live feeds (so you can view your teeth on screen)",
        "Digital impressions using advanced intraoral scanning wands"
      ],
      expectTitle: "Radiation reduction:",
      expectDesc: "Our portable digital X-ray units are heavily shielded, exposing patients to a minute fraction of background radiation, with instant digital processing.",
      whyHere: "We show patients their X-rays on a high-definition chairside monitor and explain the findings, so you know exactly why a treatment is recommended.",
      image: "/images/happytooth-varkala3.jpg"
    },
    {
      id: "EmergencyCare",
      serviceNumber: "14",
      title: "Emergency Dental Care",
      subtitle: "Emergency  ·  Same-Day Appointments for Acute Cases",
      desc: "Dental emergencies do not wait for convenient appointment slots. A toothache that builds through the night, a tooth knocked out during a fall, a crown that comes off before an important event, a dental abscess that is causing facial swelling — these are situations where waiting is the wrong choice. Delayed treatment makes most dental emergencies significantly worse.",
      methodDetail: "We keep appointment capacity for emergency cases every day. If you are in acute pain or have sustained dental trauma, call us and explain what has happened. We will assess the urgency, advise you on any immediate steps to take, and get you in as quickly as possible — the same day in most cases. Common emergency situations we handle include severe toothache and abscesses, fractured teeth, avulsed (knocked out) teeth, lost crowns/fillings, and soft tissue injuries to the gums or lips.",
      whoNeedsTitle: "Emergency action steps:",
      whoNeedsItems: [
        "Call us immediately at +91 87144 70808 (K) or +91 73561 00602 (M)",
        "For a knocked-out tooth: Keep it moist in milk or saline, do not touch the root!",
        "Do NOT place aspirin directly on the gum (causes chemical burns)",
        "Apply cold compression externally to reduce facial swelling",
        "Abscess with progressive swelling affecting swallowing is a medical emergency"
      ],
      expectTitle: "After-Hours emergencies:",
      expectDesc: "For after-hours emergencies, our contact details and emergency guidance are available. For life-threatening jaw trauma or airway compromise, proceed to the nearest hospital ER.",
      whyHere: "We make every effort to offer same-day relief, focusing first on stopping pain and controlling infection before planning long-term restoration.",
      image: "/images/indian_emergency_dentist.png"
    }
  ];

  return (
    <div>
      {/* Breadcrumb Header */}
      <BreadcrumbHero
        title="Our Services"
        currentPage="Services"
        bgImage="/images/happytooth-varkala5.jpg"
      />

      {/* Sticky Top Sub-navigation */}
      <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-md py-4 border-b border-gray-100 shadow-sm overflow-x-auto scrollbar-thin">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center lg:justify-center gap-2 whitespace-nowrap min-w-max pb-2 lg:pb-0">
            {serviceCards.map((card, idx) => (
              <a
                key={idx}
                href={card.link}
                className="bg-bg-light-blue/60 hover:bg-primary-teal hover:text-white text-navy-blue font-bold text-[10px] md:text-xs py-2 px-3.5 rounded-full border border-gray-200/50 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                {card.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Summary Banner */}
      <section className="py-12 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-primary-teal font-extrabold text-xs tracking-wider uppercase bg-primary-teal/10 py-1.5 px-4 rounded-full inline-block mb-4">
            Comprehensive Treatments
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-blue leading-tight mb-4">
            Specialised Dental Treatments
          </h2>
          <p className="text-xs md:text-sm text-soft-gray leading-relaxed">
            A complete guide to the dental treatments available at HappyTooth Smile Studio. Each service listed here is delivered by our specialist team, led by Dr. Thushara Sudhakaran (BDS, MDS, Endodontist), with a focus on precision, patient comfort, and outcomes that last.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-xs text-navy-blue font-extrabold">
            <span className="bg-bg-light-blue py-1.5 px-3 rounded-lg border border-gray-100">✓ 5-chair facility</span>
            <span className="bg-bg-light-blue py-1.5 px-3 rounded-lg border border-gray-100">✓ Digital diagnostics</span>
            <span className="bg-bg-light-blue py-1.5 px-3 rounded-lg border border-gray-100">✓ Specialist endodontist on site</span>
          </div>
        </div>
      </section>

      {/* DETAILED SERVICES SECTIONS */}
      <div className="divide-y divide-gray-100 border-t border-gray-100 bg-white">
        {servicesData.map((svc, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <section
              key={svc.id}
              id={svc.id}
              className={`py-20 scroll-mt-36 relative ${isEven ? "bg-white" : "bg-bg-light-blue/15"}`}
            >
              {/* Blur accent halos */}
              <div className={`absolute top-1/4 w-80 h-80 rounded-full blur-3xl opacity-30 ${isEven ? "right-0 bg-primary-teal/10" : "left-0 bg-accent-teal/10"}`}></div>

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  
                  {/* Left Column: Image (Alternates position on desktop) */}
                  <div className={`lg:col-span-5 relative ${isEven ? "" : "lg:order-2"}`}>
                    <div className="rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 bg-white p-3">
                      <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden bg-gray-50">
                        <Image
                          src={svc.image}
                          alt={`${svc.title} treatment procedure`}
                          fill
                          className="object-cover transform hover:scale-[1.01] transition-transform duration-500"
                        />
                      </div>
                    </div>

                  </div>

                  {/* Right Column: Copy details */}
                  <div className={`lg:col-span-7 space-y-6 ${isEven ? "" : "lg:order-1"}`}>
                    <div className="space-y-2">
                      <span className="text-primary-teal font-extrabold text-[10px] md:text-xs tracking-wider uppercase bg-primary-teal/10 py-1 px-3.5 rounded-full inline-block">
                        {svc.subtitle.split("·")[0].trim()}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-extrabold text-navy-blue leading-tight">
                        {svc.title}
                      </h2>
                      <span className="block text-xs font-bold text-soft-gray">
                        {svc.subtitle}
                      </span>
                    </div>

                    <div className="space-y-4 text-xs md:text-sm text-soft-gray leading-relaxed">
                      <p>{svc.desc}</p>
                      <p>{svc.methodDetail}</p>
                    </div>

                    {/* Checkmarks / Detail Blocks row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-gray-100">
                      <div>
                        <h4 className="font-extrabold text-navy-blue mb-3 text-xs uppercase tracking-wider">
                          {svc.whoNeedsTitle}
                        </h4>
                        <ul className="space-y-2.5 text-xs text-soft-gray font-medium">
                          {svc.whoNeedsItems.map((item, keyIdx) => (
                            <li key={keyIdx} className="flex items-start gap-2">
                              <span className="flex-shrink-0 w-4 h-4 rounded-full bg-primary-teal/15 flex items-center justify-center text-primary-teal text-[10px] mt-0.5">✓</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Expectation highlight box */}
                      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
                        <div className="space-y-2">
                          <h4 className="font-extrabold text-navy-blue text-xs uppercase tracking-wider">
                            {svc.expectTitle}
                          </h4>
                          <p className="text-xs text-soft-gray leading-relaxed">
                            {svc.expectDesc}
                          </p>
                        </div>
                        <div className="mt-4 pt-3 border-t border-gray-50 text-[10px] font-bold text-primary-teal leading-snug">
                          <span className="inline-flex items-center gap-1.5">
                            <span className="uppercase text-[9px] font-black tracking-wider px-2 py-0.5 bg-primary-teal/15 text-primary-teal rounded-full shrink-0">
                              Clinical Insight
                            </span>
                            <span>{svc.whyHere}</span>
                          </span>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
