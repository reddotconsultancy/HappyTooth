import React from "react";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbHero from "@/components/BreadcrumbHero";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
 title: "5 Signs You Need a Root Canal | Dentist Advice & Warning Symptoms",
 description: "Learn the 5 critical symptoms that indicate you need root canal treatment (RCT). Understand why delaying clinical treatment leads to tooth loss and severe dental pain.",
};

export default function BlogPost() {
 return (
  <div>
   {/* Breadcrumb Header */}
   <BreadcrumbHero
    title="5 Signs You Might Need a Root Canal (And Why You Shouldn’t Ignore Them)"
    currentPage="Blog"
    bgImage="/images/indian_toothache_blog.png"
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
           src="/images/indian_toothache_blog.png"
           alt="Root Canal treatment diagnosis illustration"
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
         <span>By Admin</span>
        </span>
        <span className="flex items-center gap-1.5">
         <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
         </svg>
         <span>November 21, 2025</span>
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
          Tooth pain is something most people try to ignore — hoping it will go away on its own. But sometimes, your tooth is trying to tell you something more serious.
         </p>
         <p className="mt-2">
          A root canal is often misunderstood and feared, but in reality, it is a safe and effective way to save your natural tooth and relieve pain. Here are five common signs that you might need a root canal treatment.
         </p>
        </div>

        <div>
         <h3 className="text-xl font-bold text-navy-blue mb-2">1. Persistent Tooth Pain</h3>
         <p>
          If you have a toothache that doesn’t go away or keeps coming back, it could be a sign of infection inside the tooth. The pain may feel sharp, dull, or constant — and it may worsen while eating or applying pressure. Ignoring this can lead to further damage.
         </p>
        </div>

        <div>
         <h3 className="text-xl font-bold text-navy-blue mb-2">2. Sensitivity to Hot and Cold</h3>
         <p>
          Do you feel a sharp pain when drinking hot tea or cold water that lingers even after you stop? This could indicate that the inner pulp of the tooth is inflamed or infected. Temporary sensitivity is normal — but lingering pain is not.
         </p>
        </div>

        <div>
         <h3 className="text-xl font-bold text-navy-blue mb-2">3. Swollen or Tender Gums</h3>
         <p>
          Swelling around a specific tooth is often a sign of infection. You may notice:
         </p>
         <ul className="list-disc pl-6 space-y-1 mt-2 text-sm">
          <li>Tender gums</li>
          <li>A small bump near the tooth</li>
          <li>Pain when touching the area</li>
         </ul>
         <p className="mt-2">
          This usually means the infection is spreading and needs immediate attention.
         </p>
        </div>

        <div>
         <h3 className="text-xl font-bold text-navy-blue mb-2">4. Tooth Discoloration</h3>
         <p>
          If one tooth starts to look darker than the others, it could mean the inner tissue is damaged. This is often caused by trauma or infection inside the tooth and should not be ignored.
         </p>
        </div>

        <div>
         <h3 className="text-xl font-bold text-navy-blue mb-2">5. Pain While Chewing</h3>
         <p>
          If you feel discomfort or pain when biting or chewing, it could indicate damage or infection within the tooth. This is a clear sign that the tooth needs professional evaluation.
         </p>
        </div>

        <div className="bg-bg-light-blue/50 rounded-2xl p-6 border border-gray-150">
         <h3 className="text-xl font-bold text-navy-blue mb-2">Why You Shouldn’t Delay Treatment</h3>
         <p>Delaying a root canal can lead to:</p>
         <ul className="list-disc pl-6 space-y-1 mt-2 text-sm">
          <li>Severe pain</li>
          <li>Spread of infection</li>
          <li>Tooth loss</li>
          <li>More complex and expensive treatments later</li>
         </ul>
         <p className="mt-4 font-semibold text-primary-teal">
          A root canal helps remove the infection and saves your natural tooth, which is always better than extraction.
         </p>
        </div>

        <div>
         <h3 className="text-xl font-bold text-navy-blue mb-2">Is Root Canal Painful?</h3>
         <p>
          This is the biggest myth. With modern dental techniques and anesthesia, root canal treatments are virtually painless — often no more uncomfortable than getting a filling.
         </p>
        </div>

        <div>
         <h3 className="text-xl font-bold text-navy-blue mb-2">When Should You Visit a Dentist?</h3>
         <p>
          If you notice any of the symptoms mentioned above, it’s best to consult a dentist as early as possible. Early diagnosis can make the treatment quicker, easier, and more effective.
         </p>
        </div>

        <div>
         <h3 className="text-xl font-bold text-navy-blue mb-2">Conclusion</h3>
         <p>
          Your teeth don’t heal on their own when there’s an infection inside. The sooner you act, the easier it is to treat. At HappyTooth Dental Care, we specialize in pain-free root canal treatments using modern techniques to ensure comfort and long-lasting results.
         </p>
        </div>

        {/* Scraped Elementor block content placeholder */}
        <div className="italic text-xs border-t border-gray-100 pt-6 text-gray-400">
         But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
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
          <li>
           <span className="text-xs text-soft-gray block">12 Apr 2026</span>
           <span className="text-sm font-semibold text-navy-blue block leading-snug">
            5 Signs You Might Need a Root Canal (And Why You Shouldn’t Ignore Them)
           </span>
          </li>
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
            <span>Uncategorized</span>
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
