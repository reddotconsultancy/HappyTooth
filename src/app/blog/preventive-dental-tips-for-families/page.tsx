import React from "react";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbHero from "@/components/BreadcrumbHero";
import ScrollReveal from "@/components/ScrollReveal";
import { recentPosts } from "@/lib/blog-posts";

export const metadata = {
 title: "Preventive Dental Tips for Families | Daily Care Guide",
 description: "Practical daily dental care for the whole family — brushing, flossing, diet, and when children should first be seen. Advice from HappyTooth, Thiruvananthapuram.",
 alternates: { canonical: "/blog/preventive-dental-tips-for-families" },
 openGraph: {
  title: "Preventive Dental Tips for Families: Daily Actions for Strong Teeth",
  description: "Brushing, flossing, diet and check-up intervals — the daily habits that prevent most dental problems, for adults and children alike.",
  url: "/blog/preventive-dental-tips-for-families",
  type: "article",
  images: [
   {
    url: "/images/indian_family_smile.webp",
    width: 1200,
    height: 630,
    alt: "Preventive dental care tips for families at HappyTooth",
   },
  ],
 },
 twitter: {
  card: "summary_large_image",
  title: "Preventive Dental Tips for Families: Daily Actions for Strong Teeth",
  description: "Brushing, flossing, diet and check-up intervals — the daily habits that prevent most dental problems, for adults and children alike.",
  images: ["/images/indian_family_smile.webp"],
 },
};

const CURRENT_SLUG = "preventive-dental-tips-for-families";

export default function BlogPost() {
 return (
  <div>
   {/* Breadcrumb Header */}
   <BreadcrumbHero
    title="Preventive Dental Tips for Families: Daily Actions for Strong Teeth"
    currentPage="Blog"
    bgImage="/images/indian_family_smile.webp"
   />

   {/* Main post layout */}
   <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      {/* Post Content (Left Column) */}
      <div className="lg:col-span-8 space-y-8">
       {/* Featured Image */}
       <ScrollReveal animation="fade-up">
        <div className="relative h-72 sm:h-96 w-full rounded-[2rem] overflow-hidden shadow-xl border border-gray-150 p-2 bg-white hover-lift">
         <div className="relative w-full h-full rounded-2xl overflow-hidden img-zoom">
          <Image
           src="/images/indian_family_smile.webp"
           alt="Family preventive dental care and daily oral hygiene"
           fill
           sizes="(max-width: 1024px) 100vw, 760px"
           className="object-cover transition-transform duration-700 ease-out"
          />
         </div>
        </div>
       </ScrollReveal>

       {/* Author & Date metadata bar */}
       <div className="flex flex-wrap items-center gap-6 text-xs text-soft-gray font-semibold pb-4 border-b border-gray-100">
        <span className="flex items-center gap-1.5">
         <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
         </svg>
         <span>By Dr. Thushara Sudhakaran, BDS, MDS</span>
        </span>
        <span className="flex items-center gap-1.5">
         <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
         </svg>
         <span>April 25, 2026</span>
        </span>
        <span className="flex items-center gap-1.5">
         <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
         </svg>
         <span>No comments</span>
        </span>
       </div>

       {/* Text Area */}
       <div className="prose max-w-none text-soft-gray leading-relaxed text-sm md:text-base space-y-6">
        <div>
         <h3 className="text-xl font-bold text-navy-blue mb-2">Introduction</h3>
         <p>
          Keeping teeth clean is not just about visiting the clinic twice a year — it starts at home. Almost every problem we treat at HappyTooth could have been made smaller, or avoided entirely, by a few consistent habits.
         </p>
         <p className="mt-2">
          None of what follows is complicated or expensive. It is simply the set of daily actions that reliably keep a family out of the dental chair for anything more than a routine clean.
         </p>
        </div>

        <div>
         <h3 className="text-xl font-bold text-navy-blue mb-2">1. Brush Properly, Not Harder</h3>
         <p>
          Two minutes, twice a day, with a fluoride toothpaste. The common mistake is scrubbing hard and fast, which wears the enamel at the gum line and causes sensitivity without cleaning any better. Use a soft-bristled brush at a gentle angle against the gum, and let the bristles do the work.
         </p>
         <p className="mt-2">
          Replace the brush every three months, or sooner once the bristles splay. A worn brush cleans noticeably less well.
         </p>
        </div>

        <div>
         <h3 className="text-xl font-bold text-navy-blue mb-2">2. Clean Between the Teeth</h3>
         <p>
          A toothbrush reaches about three of the five surfaces of each tooth. The two surfaces it misses are exactly where cavities between teeth and early gum disease begin. Flossing or using interdental brushes once a day covers them.
         </p>
         <p className="mt-2">
          If flossing feels awkward, interdental brushes are easier to use consistently, and consistency matters far more than the method you choose.
         </p>
        </div>

        <div>
         <h3 className="text-xl font-bold text-navy-blue mb-2">3. Watch Frequency, Not Just Quantity</h3>
         <p>
          It is how often sugar reaches the teeth that causes damage, more than how much. Each exposure starts an acid attack lasting roughly 20 to 30 minutes. A sweet eaten alongside a meal is far less harmful than the same sweet spread across an afternoon of grazing.
         </p>
         <ul className="list-disc pl-6 space-y-1 mt-2 text-sm">
          <li>Keep sugary food and drink to mealtimes</li>
          <li>Water between meals rather than juice or soft drinks</li>
          <li>Be careful with sticky items that cling to the grooves of the back teeth</li>
          <li>Rinse with water after anything acidic, and wait before brushing</li>
         </ul>
        </div>

        <div>
         <h3 className="text-xl font-bold text-navy-blue mb-2">4. Start Children Early</h3>
         <p>
          A child should be seen by the time they are one year old, or within six months of the first tooth appearing. The purpose of that first visit is not treatment — it is to check development and to make the clinic an ordinary, unthreatening place before anything ever hurts.
         </p>
         <p className="mt-2">
          Children who first attend during a painful emergency are the ones who grow into anxious adults. Sealants on the back teeth and regular fluoride application prevent the majority of childhood cavities.
         </p>
        </div>

        <div>
         <h3 className="text-xl font-bold text-navy-blue mb-2">5. Take Bleeding Gums Seriously</h3>
         <p>
          Gums that bleed when brushing are inflamed. It is common, but it is not normal, and it is the earliest and most reversible stage of gum disease. Left alone for years it becomes bone loss, and bone does not grow back.
         </p>
         <p className="mt-2">
          Persistent bad breath, receding gums or teeth that feel slightly loose all warrant an appointment rather than a wait-and-see.
         </p>
        </div>

        <div className="bg-bg-light-blue/50 rounded-2xl p-6 border border-gray-150">
         <h3 className="text-xl font-bold text-navy-blue mb-2">How Often Should the Family Be Seen?</h3>
         <p>Check-up and cleaning intervals depend on risk, not age:</p>
         <ul className="list-disc pl-6 space-y-1 mt-2 text-sm">
          <li>Every 6 months for most adults and children</li>
          <li>Every 3 to 4 months with a history of gum disease</li>
          <li>Every 3 to 4 months for patients with diabetes or heavy calculus buildup</li>
          <li>Any time there is pain, swelling, bleeding or a broken tooth</li>
         </ul>
         <p className="mt-4 font-semibold text-primary-teal">
          A scaling appointment removes hardened calculus that no amount of home brushing can shift. It is the one thing you genuinely cannot do yourself.
         </p>
        </div>

        <div>
         <h3 className="text-xl font-bold text-navy-blue mb-2">Habits Worth Correcting</h3>
         <p>
          Thumb-sucking and mouth breathing past the early years affect how the jaws develop and are far easier to address at seven or eight than at fifteen. Chewing tobacco, using teeth to open packaging, and grinding at night all cause damage that is preventable rather than treatable.
         </p>
        </div>

        <div>
         <h3 className="text-xl font-bold text-navy-blue mb-2">Conclusion</h3>
         <p>
          Preventive dentistry is unglamorous and it works. Two minutes of brushing twice a day, cleaning between the teeth once a day, sensible timing of sugar, and a check-up every six months will spare most families nearly every expensive treatment we offer. If it has been more than a year since anyone in your household was seen, that is the appointment worth making.
         </p>
        </div>
       </div>
      </div>

      {/* Sidebar Column */}
      <aside className="lg:col-span-4 space-y-8">
       {/* Back to Blog */}
       <ScrollReveal animation="fade-left">
        <div className="bg-bg-light-blue/40 border border-gray-150 rounded-2xl p-6">
         <Link
          href="/blog"
          className="text-sm font-bold text-primary-teal hover:text-navy-blue flex items-center gap-2"
         >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Blog
         </Link>
        </div>
       </ScrollReveal>

       {/* Recent posts */}
       <ScrollReveal animation="fade-left" delay={1}>
        <div className="bg-bg-light-blue/40 border border-gray-150 rounded-2xl p-6">
         <h3 className="text-lg font-bold text-navy-blue mb-4">Recent Posts</h3>
         <ul className="space-y-3">
          {recentPosts(CURRENT_SLUG).map((post) => (
           <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="group block">
             <span className="text-xs text-soft-gray block">{post.date} {post.year}</span>
             <span className="text-sm font-semibold text-navy-blue group-hover:text-primary-teal transition-colors block leading-snug">
              {post.title}
             </span>
            </Link>
           </li>
          ))}
         </ul>
        </div>
       </ScrollReveal>

       {/* Categories */}
       <ScrollReveal animation="fade-left" delay={2}>
        <div className="bg-bg-light-blue/40 border border-gray-150 rounded-2xl p-6">
         <h3 className="text-lg font-bold text-navy-blue mb-4">Categories</h3>
         <ul className="space-y-2">
          <li>
           <Link
            href="/blog"
            className="text-sm text-navy-blue hover:text-primary-teal font-medium flex justify-between"
           >
            <span>Preventive Dentistry</span>
            <span className="text-soft-gray">(1)</span>
           </Link>
          </li>
         </ul>
        </div>
       </ScrollReveal>
      </aside>
     </div>
    </div>
   </section>
  </div>
 );
}
