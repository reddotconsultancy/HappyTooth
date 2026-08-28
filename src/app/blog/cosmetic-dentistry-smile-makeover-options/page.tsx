import React from "react";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbHero from "@/components/BreadcrumbHero";
import ScrollReveal from "@/components/ScrollReveal";
import BlogPostingSchema from "@/components/BlogPostingSchema";
import { recentPosts } from "@/lib/blog-posts";

export const metadata = {
 title: "Cosmetic Dentistry: Smile Makeover Options Explained",
 description: "Veneers, whitening, crowns and aligners — how a smile makeover is planned at HappyTooth, what each option treats, how long it takes, and how long the result lasts.",
 alternates: { canonical: "/blog/cosmetic-dentistry-smile-makeover-options" },
 openGraph: {
  title: "Cosmetic Dentistry: Smile Makeover Options That Change Lives",
  description: "Veneers, whitening, crowns and aligners explained — what each treats, how long treatment takes, and what results actually last.",
  url: "/blog/cosmetic-dentistry-smile-makeover-options",
  type: "article",
  images: [
   {
    url: "/images/indian_dental_health.webp",
    width: 1200,
    height: 630,
    alt: "Cosmetic dentistry smile makeover options at HappyTooth",
   },
  ],
 },
 twitter: {
  card: "summary_large_image",
  title: "Cosmetic Dentistry: Smile Makeover Options That Change Lives",
  description: "Veneers, whitening, crowns and aligners explained — what each treats, how long treatment takes, and what results actually last.",
  images: ["/images/indian_dental_health.webp"],
 },
};

const CURRENT_SLUG = "cosmetic-dentistry-smile-makeover-options";

export default function BlogPost() {
 return (
  <div>
   <BlogPostingSchema slug={CURRENT_SLUG} />
   {/* Breadcrumb Header */}
   <BreadcrumbHero
    title="Cosmetic Dentistry: Smile Makeover Options That Change Lives"
    currentPage="Blog"
    bgImage="/images/indian_dental_health.webp"
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
           src="/images/indian_dental_health.webp"
           alt="Cosmetic dentistry consultation and smile design planning"
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
         <span>April 18, 2026</span>
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
          If you have ever felt self-conscious about gaps, discoloration, or chipped edges, cosmetic dentistry is designed around your unique features. It is not about giving everyone the same set of bright white teeth.
         </p>
         <p className="mt-2">
          A smile makeover is a plan, not a single procedure. It combines whichever treatments your teeth actually need, sequenced in the right order, so that the result looks natural and the bite keeps working properly. Here is what each option does, and who it suits.
         </p>
        </div>

        <div>
         <h3 className="text-xl font-bold text-navy-blue mb-2">1. Teeth Whitening</h3>
         <p>
          Professional in-clinic whitening is the simplest starting point and usually takes a single appointment. It works well on staining from tea, coffee, tobacco and general age-related yellowing. The shade is calibrated to your starting colour so the result stays natural rather than artificially bright.
         </p>
         <p className="mt-2">
          Results typically hold for 12 to 24 months with normal habits, and a take-home maintenance kit extends that. Whitening does not change the colour of existing crowns or fillings, which is why it is almost always done before any other cosmetic work rather than after.
         </p>
        </div>

        <div>
         <h3 className="text-xl font-bold text-navy-blue mb-2">2. Dental Veneers</h3>
         <p>
          Veneers are ultra-thin shells bonded to the front surface of a tooth. They are the most versatile cosmetic option because a single treatment can correct several problems at once:
         </p>
         <ul className="list-disc pl-6 space-y-1 mt-2 text-sm">
          <li>Chips and worn edges</li>
          <li>Deep staining that whitening cannot lift</li>
          <li>Gaps between the front teeth</li>
          <li>Minor misalignment and uneven shape</li>
         </ul>
         <p className="mt-2">
          Porcelain veneers are made in a laboratory, resist staining well, and last 10 to 20 years. Composite veneers are built up directly in a single appointment and are more economical, lasting around 5 to 8 years.
         </p>
        </div>

        <div>
         <h3 className="text-xl font-bold text-navy-blue mb-2">3. Crowns and Bridges</h3>
         <p>
          Where a tooth is heavily broken down or has had root canal treatment, a crown restores both its strength and its appearance. Zirconia is used where biting force is highest, at the back of the mouth. Full-ceramic crowns are used at the front, where matching the translucency of a natural tooth matters most.
         </p>
         <p className="mt-2">
          A crown normally takes two appointments — one to prepare and scan the tooth, one to fit it. A bridge replaces a missing tooth using the neighbouring teeth as anchors, and is fixed rather than removable.
         </p>
        </div>

        <div>
         <h3 className="text-xl font-bold text-navy-blue mb-2">4. Aligners and Braces</h3>
         <p>
          Some cosmetic problems are really position problems. Crowding, spacing and rotation are better corrected by moving the teeth than by covering them. Clear removable aligners suit mild to moderate correction in adults. More complex bite issues are handled with braces, in metal or tooth-coloured ceramic.
         </p>
         <p className="mt-2">
          Mild corrections take 6 to 9 months and moderate cases 12 to 18 months. Choosing orthodontics over veneers often means less of the natural tooth is touched, which is usually the better long-term decision.
         </p>
        </div>

        <div>
         <h3 className="text-xl font-bold text-navy-blue mb-2">5. Gum Correction</h3>
         <p>
          A smile is framed by the gums, not just the teeth. An uneven gum line or a gummy smile can make otherwise well-shaped teeth look short or asymmetric. Reshaping the gum line is a small procedure that often makes a larger visible difference than any work on the teeth themselves.
         </p>
        </div>

        <div className="bg-bg-light-blue/50 rounded-2xl p-6 border border-gray-150">
         <h3 className="text-xl font-bold text-navy-blue mb-2">How a Smile Makeover Is Planned</h3>
         <p>Every case at HappyTooth follows the same sequence:</p>
         <ul className="list-disc pl-6 space-y-1 mt-2 text-sm">
          <li>Assessment of gum health, bite and existing restorations</li>
          <li>A digital smile preview before any clinical work begins</li>
          <li>A written treatment plan, with the cost agreed up front</li>
          <li>Treatment in the correct order — health first, then alignment, then appearance</li>
         </ul>
         <p className="mt-4 font-semibold text-primary-teal">
          Nothing cosmetic starts until active decay and gum disease have been treated. Cosmetic work placed over an untreated problem simply fails sooner.
         </p>
        </div>

        <div>
         <h3 className="text-xl font-bold text-navy-blue mb-2">How Long Does It Take?</h3>
         <p>
          A simple combination of whitening and a few veneers is usually complete in 2 to 3 visits over 2 to 3 weeks. A comprehensive makeover involving orthodontics, crowns or implants runs 4 to 8 weeks or longer, depending on how much tooth movement and healing time is required.
         </p>
        </div>

        <div>
         <h3 className="text-xl font-bold text-navy-blue mb-2">Is Cosmetic Dentistry Right for You?</h3>
         <p>
          It is worth an assessment if you routinely hide your teeth in photographs, avoid smiling openly, or have one or two specific features you have never liked. It is not the right answer if the underlying problem is pain, looseness or bleeding gums — those need treating first, and the appearance often improves as a result.
         </p>
        </div>

        <div>
         <h3 className="text-xl font-bold text-navy-blue mb-2">Conclusion</h3>
         <p>
          A good smile makeover is one nobody can identify as dental work. That comes from planning the case properly, choosing the least invasive option that will achieve the result, and matching shape and shade to the face rather than to a template. If you would like to know which options apply to your teeth, book an assessment at either clinic and you will leave with a written plan and a price.
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
            <span>Cosmetic Dentistry</span>
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
