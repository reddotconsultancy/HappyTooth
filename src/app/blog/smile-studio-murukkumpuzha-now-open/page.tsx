import React from "react";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbHero from "@/components/BreadcrumbHero";
import ScrollReveal from "@/components/ScrollReveal";
import BlogPostingSchema from "@/components/BlogPostingSchema";
import { recentPosts } from "@/lib/blog-posts";

export const metadata = {
 title: "Our New Smile Studio in Murukkumpuzha Is Now Open",
 description: "HappyTooth Smile Studio has opened at Thoppumukku junction, Murukkumpuzha — a full-spectrum specialist dental clinic open all seven days. Here is what to expect.",
 alternates: { canonical: "/blog/smile-studio-murukkumpuzha-now-open" },
 openGraph: {
  title: "Our New Smile Studio in Murukkumpuzha Is Now Open",
  description: "A full-spectrum specialist dental clinic at Thoppumukku junction, Murukkumpuzha. Open all seven days, with on-site parking and specialist-led care.",
  url: "/blog/smile-studio-murukkumpuzha-now-open",
  type: "article",
  images: [
   {
    url: "/images/happytooth-varkala12-1.webp",
    width: 1200,
    height: 630,
    alt: "HappyTooth Smile Studio, Murukkumpuzha — now open",
   },
  ],
 },
 twitter: {
  card: "summary_large_image",
  title: "Our New Smile Studio in Murukkumpuzha Is Now Open",
  description: "A full-spectrum specialist dental clinic at Thoppumukku junction, Murukkumpuzha. Open all seven days, with on-site parking and specialist-led care.",
  images: ["/images/happytooth-varkala12-1.webp"],
 },
};

const CURRENT_SLUG = "smile-studio-murukkumpuzha-now-open";

export default function BlogPost() {
 return (
  <div>
   <BlogPostingSchema slug={CURRENT_SLUG} />
   {/* Breadcrumb Header */}
   <BreadcrumbHero
    title="Our New Smile Studio in Murukkumpuzha Is Now Open"
    currentPage="Blog"
    bgImage="/images/happytooth-varkala12-1.webp"
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
           src="/images/happytooth-varkala12-1.webp"
           alt="HappyTooth Smile Studio, Murukkumpuzha"
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
         <span>July 12, 2026</span>
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
          HappyTooth Smile Studio is now open at Thoppumukku junction in Murukkumpuzha. It is our second clinic and our largest, and it was built to do something our Kallambalam practice could not do on its own: handle the full range of specialist dental treatment under one roof, on any day of the week.
         </p>
         <p className="mt-2">
          If you have been putting off a treatment because of where you would have to go for it, or when, this is the post that answers those two questions.
         </p>
        </div>

        <div>
         <h3 className="text-xl font-bold text-navy-blue mb-2">Where to Find Us</h3>
         <p>
          The studio is on the ground floor of Mangalasseri Tower, at Thoppumukku junction on the main road through Murukkumpuzha, Thiruvananthapuram 695302.
         </p>
         <ul className="list-disc pl-6 space-y-1 mt-2 text-sm">
          <li>Private parking on site, with room for six or more cars</li>
          <li>Ground floor — no stairs to manage</li>
          <li>Roughly 15 to 20 minutes from Attingal, Kazhakoottam and Mangalapuram</li>
          <li>Phone: +91 73561 00602</li>
         </ul>
        </div>

        <div>
         <h3 className="text-xl font-bold text-navy-blue mb-2">Open All Seven Days</h3>
         <p>
          The studio is open Monday to Sunday, 9:30 AM to 6:30 PM, including weekends and public holidays. This was a deliberate decision rather than a convenience. A toothache rarely waits for a working day, and a parent who cannot take leave should still be able to bring a child in for a check-up.
         </p>
         <p className="mt-2">
          Walk-ins are welcome, though booking ahead is better for root canals, crowns and other longer appointments. For an emergency, call ahead and we will make every effort to see you the same day.
         </p>
        </div>

        <div>
         <h3 className="text-xl font-bold text-navy-blue mb-2">What We Treat Here</h3>
         <p>
          The studio covers the full range of specialist treatment, so a case that needs several disciplines does not have to be split across clinics or referred elsewhere:
         </p>
         <ul className="list-disc pl-6 space-y-1 mt-2 text-sm">
          <li>Root canal treatment by an in-house MDS Endodontist</li>
          <li>Smile designing, veneers and professional whitening</li>
          <li>Dental implants, crowns and bridges</li>
          <li>Aligners and braces for children and adults</li>
          <li>Paediatric dentistry from the first tooth</li>
          <li>Gum care, scaling, extractions and emergency treatment</li>
         </ul>
        </div>

        <div className="bg-bg-light-blue/50 rounded-2xl p-6 border border-gray-150">
         <h3 className="text-xl font-bold text-navy-blue mb-2">What Has Not Changed</h3>
         <p>
          Our Kallambalam clinic at Alinmoodu remains open exactly as before, Monday to Saturday, with the full range of treatment available there too. The same clinical team works across both locations.
         </p>
         <p className="mt-4 font-semibold text-primary-teal">
          The approach has not changed either: honest answers, a written cost before treatment starts, and saving the tooth wherever it can be saved.
         </p>
        </div>

        <div>
         <h3 className="text-xl font-bold text-navy-blue mb-2">Come and See It</h3>
         <p>
          If you live in Murukkumpuzha, Attingal, Kazhakoottam, Pothencode, Varkala or Trivandrum city, you are welcome to book an appointment or simply call to ask whether a treatment you have been considering is suitable for you. There is no charge for asking, and you will get a straight answer either way.
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
            <span>Clinic News</span>
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
